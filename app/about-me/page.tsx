import type { Metadata } from "next";
import { TravelMap, type Place } from "@/ui/TravelMap";

export const metadata: Metadata = {
    title: "About Me",
};

const interests = ['Photography', 'Curating playlists', 'Writing', 'Reading', 'Traveling','Coffee'];

const tops = [
    {
        category: 'Songs',
        items: ['Honest - San Holo', 'How to Do Nothing - Lido', 'Let Go - Kory Miller'],
    },
    {
        category: 'Movies',
        items: ['Everything Everywhere All at Once', 'A Silent Voice', "Howl's Moving Castle"],
    },
    {
        category: 'Books',
        items: ['A Short Stay in Hell by Steven L. Peck', 'Confessions by Saint Augustine', 'The Little Prince by Antoine de Saint-Exupéry']
    },
];

const places: Place[] = [
    { name: 'Columbus, Ohio', coordinates: [-82.9988, 39.9612] },
    { name: 'Seattle, Washington', coordinates: [-122.3321, 47.6062] },
    { name: 'Tacoma, Washington', coordinates: [-122.4443, 47.2529] },
    { name: 'Olympic National Park', coordinates: [-123.6044, 47.8021] },
    { name: 'Los Angeles, California', coordinates: [-118.2437, 34.0522] },
    { name: 'San Diego, California', coordinates: [-117.1611, 32.7157] },
    { name: 'Zion National Park', coordinates: [-113.0263, 37.2982] },
    { name: 'Yellowstone National Park', coordinates: [-110.5885, 44.428] },
    { name: 'Denver, Colorado', coordinates: [-104.9903, 39.7392] },
    { name: 'Dallas, Texas', coordinates: [-96.797, 32.7767] },
    { name: 'Houston, Texas', coordinates: [-95.3698, 29.7604] },
    { name: 'Austin, Texas', coordinates: [-97.7431, 30.2672] },
    { name: 'San Antonio, Texas', coordinates: [-98.4936, 29.4241] },
    { name: 'Marfa, Texas', coordinates: [-104.0205, 30.3095] },
    { name: 'Big Bend National Park', coordinates: [-103.2502, 29.25] },
    { name: 'Chicago, Illinois', coordinates: [-87.6298, 41.8781] },
    { name: 'Tampa, Florida', coordinates: [-82.4572, 27.9506] },
    { name: 'Atlanta, Georgia', coordinates: [-84.388, 33.749] },
    { name: 'Charlotte, North Carolina', coordinates: [-80.8431, 35.2271] },
    { name: 'New York City, New York', coordinates: [-74.006, 40.7128] },
    { name: 'Boston, Massachusetts', coordinates: [-71.0589, 42.3601] },
    { name: 'Pittsburgh, Pennsylvania', coordinates: [-79.9959, 40.4406] },
    { name: 'Berkeley Springs, West Virginia', coordinates: [-78.2286, 39.6265] },
    { name: "O'ahu, Hawaii", coordinates: [-158.0001, 21.4389] },
    { name: 'Vancouver, Canada', coordinates: [-123.1207, 49.2827] },
    { name: 'Golden, Canada', coordinates: [-116.9631, 51.2985] },
    { name: 'Banff National Park', coordinates: [-115.9281, 51.4968] },
    { name: 'Toronto, Canada', coordinates: [-79.3832, 43.6532] },
    { name: 'Ontario, Canada', coordinates: [-85.3232, 51.2538] },
    { name: 'Cozumel, Mexico', coordinates: [-86.9223, 20.423] },
    { name: 'Phnom Penh, Cambodia', coordinates: [104.9282, 11.5564] },
    { name: 'Siem Reap, Cambodia', coordinates: [103.8564, 13.3671] },
    { name: 'Battambang, Cambodia', coordinates: [103.1982, 13.0957] },
    { name: 'Sihanoukville, Cambodia', coordinates: [103.5296, 10.6253] },
    { name: 'Koh Rong, Cambodia', coordinates: [103.2167, 10.7167] },
    { name: 'Tokyo, Japan', coordinates: [139.6917, 35.6895] },
    { name: 'Kamakura, Japan', coordinates: [139.5467, 35.3192] },
    { name: 'Fukuoka, Japan', coordinates: [130.4017, 33.5904] },
    { name: 'Porto, Portugal', coordinates: [-8.6291, 41.1579] },
    { name: 'Lisbon, Portugal', coordinates: [-9.1393, 38.7223] },
    { name: 'Sintra, Portugal', coordinates: [-9.3817, 38.8029] },
    { name: 'Cascais, Portugal', coordinates: [-9.4215, 38.6979] },
    { name: 'Funchal, Portugal', coordinates: [-16.9241, 32.6669] },
    { name: 'Geneva, Switzerland', coordinates: [6.1432, 46.2044] },
    { name: 'Lucerne, Switzerland', coordinates: [8.3093, 47.0502] },
    { name: 'Grindelwald, Switzerland', coordinates: [8.0414, 46.6242] },
    { name: 'Berlin, Germany', coordinates: [13.405, 52.52] },
    { name: 'Munich, Germany', coordinates: [11.582, 48.1351] },
    { name: 'Dusseldorf, Germany', coordinates: [6.7735, 51.2277] },
    { name: 'Cologne, Germany', coordinates: [6.9603, 50.9375] },
];

export default function AboutMe(){
    return (
        <main className="mx-auto w-full max-w-5xl px-4 py-16 md:py-20">
            <h2 className="text-base text-green-800">Get to know me</h2>
            <h1 className="leading-none">About Me</h1>

            <section className="mt-12">
                <h2 className="inline-block border-l-4 border-green-500 pl-3 font-semibold">
                    Hey there!
                </h2>
                <div className="mt-6 max-w-[65ch] space-y-4 text-zinc-700">
                    <p>
                        My full name is Vannaroth, but I go by <span className="font-semibold text-zinc-900">Vann</span>.
                        I value integrity, genuineness and curiosity, both in myself and in the people I surround myself with.
                    </p>
                    <p>
                        You can often find me with my camera, capturing transient moments, or at a cafe with a book in hand,
                        listening to a playlist I curated the night before.
                    </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                    {interests.map((interest) => (
                        <span
                            className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-800"
                            key={interest}
                        >
                            {interest}
                        </span>
                    ))}
                </div>
            </section>

            <section className="mt-16">
                <h2 className="inline-block border-l-4 border-green-500 pl-3 font-semibold">
                    My Tops
                </h2>
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                    {tops.map((top) => (
                        <div className="rounded-lg border border-zinc-200 bg-white p-5" key={top.category}>
                            <h3 className="font-semibold">{top.category}</h3>
                            <ol className="mt-4 space-y-3">
                                {top.items.map((item, i) => (
                                    <li className="flex gap-3 text-zinc-700" key={item}>
                                        <span className="font-display font-semibold text-green-600">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-16">
                <h2 className="inline-block border-l-4 border-green-500 pl-3 font-semibold">
                    Places I&apos;ve Been
                </h2>
                <div className="mt-8">
                    <TravelMap places={places} />
                </div>
            </section>
        </main>
    )
}
