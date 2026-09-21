"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type NavLink = { href: string; label: string };

export function HamburgerMenu({ navLinks }: { navLinks: NavLink[] }) {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!open) return;

        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false);
        }
        function handleClickOutside(e: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <div ref={containerRef} className="hamburger-container md:hidden relative">
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className="hamburger rounded-md p-2.5 outline-none transition
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700
                [@media(hover:hover)]:hover:bg-zinc-100
                active:bg-zinc-100 [-webkit-tap-highlight-color:transparent]"
            >
                {open ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                    </svg>
                )}
            </button>

            {open && (
                <nav
                    id="mobile-menu"
                    aria-label="Mobile"
                    className="absolute right-0 top-full mt-3 w-56 rounded-lg border border-zinc-200
                    bg-background p-2 shadow-lg z-20 flex flex-col"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="rounded-md px-3 py-2.5 text-[15px] hover:bg-zinc-100 hover:no-underline"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        className="btn-primary mt-2 justify-center"
                        rel="noopener noreferrer"
                        aria-label="Download résumé (opens in a new tab)"
                        target="_blank"
                        href="/resume.pdf"
                        onClick={() => setOpen(false)}
                    >
                        Resume
                    </a>
                </nav>
            )}
        </div>
    );
}
