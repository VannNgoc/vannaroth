import {HamburgerMenu} from "./HamburgerMenu";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
    // { href: "/", label: "Home" },
    // { href: "/about-me", label: "About Me" },
    // { href: "/projects", label: "Projects" },
    // { href: "/contact", label: "Contact Me" },
];

export default function NavigationBar(){
    return(
        <div className="navbar-container m-4 border-b border-zinc-200 pb-4">
            <nav className="flex gap-4 justify-between items-center relative">
                <div>
                    <Link href="/" className="flex items-center gap-2 text-xl logo">
                        <Image src="/logo-mark.png" alt="" width={28} height={28} priority />
                        Vannaroth Ngoc
                    </Link>
                </div>
                <HamburgerMenu navLinks={navLinks} />
                <div className="hidden md:flex md:items-center">
                    {navLinks.map((link) => (
                        <Link key={link.href} className="hover:underline mx-2" href={link.href}>
                            {link.label}
                        </Link>
                    ))}
                    {/*<Link className="btn-primary ml-2" rel="noopener noreferrer" aria-label="Download résumé (opens in a new tab)" target="_blank" href="/resume.pdf">Resume</Link>*/}
                </div>
            </nav>
        </div>
    )
}
