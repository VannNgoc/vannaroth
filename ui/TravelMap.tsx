import { geoEqualEarth, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { FeatureCollection } from "geojson";
import type { GeometryCollection, Topology } from "topojson-specification";
import countriesTopology from "world-atlas/countries-110m.json";
import { TravelMapCanvas, type ProjectedPlace } from "@/ui/TravelMapCanvas";

export type Place = {
    name: string;
    coordinates: [longitude: number, latitude: number];
};

const WIDTH = 960;
const HEIGHT = 470;

const topology = countriesTopology as unknown as Topology<{ countries: GeometryCollection }>;
const world = feature(topology, topology.objects.countries) as FeatureCollection;
// Antarctica takes up a lot of space without adding anything here
world.features = world.features.filter((country) => country.id !== "010");

const projection = geoEqualEarth().fitSize([WIDTH, HEIGHT], world);
const path = geoPath(projection);
const land = world.features.map((country) => path(country)).join("");

// Projection happens on the server so the world data never ships to the browser
export function TravelMap({ places }: { places: Place[] }) {
    const projected = places.flatMap((place): ProjectedPlace[] => {
        const point = projection(place.coordinates);
        return point ? [{ name: place.name, x: point[0], y: point[1] }] : [];
    });
    return <TravelMapCanvas height={HEIGHT} land={land} places={projected} width={WIDTH} />;
}
