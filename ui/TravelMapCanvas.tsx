"use client";

import { useEffect, useRef, useState } from "react";

export type ProjectedPlace = {
    name: string;
    x: number;
    y: number;
};

type View = { k: number; x: number; y: number };

const MIN_ZOOM = 1;
const MAX_ZOOM = 8;
const ZOOM_STEP = 1.6;
const INITIAL_VIEW: View = { k: 1, x: 0, y: 0 };

export function TravelMapCanvas({
    height,
    land,
    places,
    width,
}: {
    height: number;
    land: string;
    places: ProjectedPlace[];
    width: number;
}) {
    const svgRef = useRef<SVGSVGElement>(null);
    const dragRef = useRef<{ pointerX: number; pointerY: number; view: View } | null>(null);
    const [view, setView] = useState<View>(INITIAL_VIEW);
    const [dragging, setDragging] = useState(false);

    // Keeps the map edges from being dragged inside the frame
    const clamp = ({ k, x, y }: View): View => ({
        k,
        x: Math.min(0, Math.max(width * (1 - k), x)),
        y: Math.min(0, Math.max(height * (1 - k), y)),
    });

    // Zooms while keeping the map point under (cx, cy) fixed in place
    const zoomAt = (current: View, factor: number, cx: number, cy: number) => {
        const k = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, current.k * factor));
        const ratio = k / current.k;
        return clamp({ k, x: cx - (cx - current.x) * ratio, y: cy - (cy - current.y) * ratio });
    };

    // Converts screen pixels to viewBox units
    const toMapPoint = (clientX: number, clientY: number) => {
        const rect = svgRef.current!.getBoundingClientRect();
        return {
            x: ((clientX - rect.left) / rect.width) * width,
            y: ((clientY - rect.top) / rect.height) * height,
        };
    };

    // Pinch on a trackpad (or ctrl + scroll) zooms; a plain scroll still scrolls the page
    useEffect(() => {
        const svg = svgRef.current;
        if (!svg) return;
        const onWheel = (event: WheelEvent) => {
            if (!event.ctrlKey && !event.metaKey) return;
            event.preventDefault();
            const rect = svg.getBoundingClientRect();
            const cx = ((event.clientX - rect.left) / rect.width) * width;
            const cy = ((event.clientY - rect.top) / rect.height) * height;
            setView((current) => zoomAt(current, Math.exp(-event.deltaY * 0.01), cx, cy));
        };
        svg.addEventListener("wheel", onWheel, { passive: false });
        return () => svg.removeEventListener("wheel", onWheel);
    });

    const onPointerDown = (event: React.PointerEvent<SVGSVGElement>) => {
        if (view.k === 1) return;
        event.currentTarget.setPointerCapture(event.pointerId);
        const point = toMapPoint(event.clientX, event.clientY);
        dragRef.current = { pointerX: point.x, pointerY: point.y, view };
        setDragging(true);
    };

    const onPointerMove = (event: React.PointerEvent<SVGSVGElement>) => {
        const drag = dragRef.current;
        if (!drag) return;
        const point = toMapPoint(event.clientX, event.clientY);
        setView(clamp({
            k: drag.view.k,
            x: drag.view.x + point.x - drag.pointerX,
            y: drag.view.y + point.y - drag.pointerY,
        }));
    };

    const endDrag = () => {
        dragRef.current = null;
        setDragging(false);
    };

    const onDoubleClick = (event: React.MouseEvent<SVGSVGElement>) => {
        const point = toMapPoint(event.clientX, event.clientY);
        setView((current) => zoomAt(current, ZOOM_STEP, point.x, point.y));
    };

    const zoomFromCenter = (factor: number) =>
        setView((current) => zoomAt(current, factor, width / 2, height / 2));

    const buttonClass =
        "flex h-8 w-8 items-center justify-center text-zinc-700 transition-colors hover:bg-zinc-100 disabled:cursor-not-allowed disabled:text-zinc-300 disabled:hover:bg-transparent";

    return (
        <div className="relative">
            <svg
                aria-label={`Map of places I've been: ${places.map((place) => place.name).join(", ")}`}
                className={`h-auto w-full select-none ${
                    view.k > 1 ? (dragging ? "cursor-grabbing touch-none" : "cursor-grab touch-none") : ""
                }`}
                onDoubleClick={onDoubleClick}
                onPointerCancel={endDrag}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endDrag}
                ref={svgRef}
                role="img"
                viewBox={`0 0 ${width} ${height}`}
            >
                <path
                    className="fill-zinc-200 stroke-white"
                    d={land}
                    strokeWidth={0.5}
                    transform={`translate(${view.x} ${view.y}) scale(${view.k})`}
                    vectorEffect="non-scaling-stroke"
                />
                {/* Markers sit outside the scaled layer so they stay the same size at every zoom */}
                {places.map((place) => (
                    <g
                        className="group"
                        key={place.name}
                        transform={`translate(${place.x * view.k + view.x} ${place.y * view.k + view.y})`}
                    >
                        <title>{place.name}</title>
                        <circle r={12} className="fill-green-500/20" />
                        <circle r={6} className="fill-green-500 stroke-white" strokeWidth={1.5} />
                        <text
                            className="pointer-events-none fill-zinc-700 text-[16px] font-medium opacity-0 transition-opacity group-hover:opacity-100"
                            textAnchor="middle"
                            y={-18}
                        >
                            {place.name}
                        </text>
                    </g>
                ))}
            </svg>

            <div className="absolute top-2 right-2 flex flex-col divide-y divide-zinc-200 overflow-hidden rounded-md border border-zinc-200 bg-white shadow-sm">
                <button
                    aria-label="Zoom in"
                    className={buttonClass}
                    disabled={view.k >= MAX_ZOOM}
                    onClick={() => zoomFromCenter(ZOOM_STEP)}
                    type="button"
                >
                    <svg aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={2} viewBox="0 0 16 16">
                        <path d="M8 3v10M3 8h10" />
                    </svg>
                </button>
                <button
                    aria-label="Zoom out"
                    className={buttonClass}
                    disabled={view.k <= MIN_ZOOM}
                    onClick={() => zoomFromCenter(1 / ZOOM_STEP)}
                    type="button"
                >
                    <svg aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={2} viewBox="0 0 16 16">
                        <path d="M3 8h10" />
                    </svg>
                </button>
                <button
                    aria-label="Reset zoom"
                    className={buttonClass}
                    disabled={view.k === 1}
                    onClick={() => setView(INITIAL_VIEW)}
                    type="button"
                >
                    <svg aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} viewBox="0 0 16 16">
                        <path d="M2.5 8a5.5 5.5 0 1 0 1.6-3.9M2.5 2.5v2.5H5" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
