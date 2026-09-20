import {HamburgerMenu} from "./HamburgerMenu";
import Link from "next/link";

export default function NavigationBar(){
    return(
        <div className="navbar-container m-4">
            <nav className="flex gap-4 justify-between items-start">
                <div>
                    <Link href={"./"} className={`text-xl logo`}>Vannaroth Ngoc</Link>
                </div>
                <HamburgerMenu/>
                <div className="flex flex-col md:flex-row hidden  md:block">
                        <Link className="hover:underline mx-2" href="./">Home</Link>
                        <Link className="hover:underline mx-2" href="/about-me">About Me</Link>
                        <Link className="hover:underline mx-2" href="/projects">Projects</Link>
                        <Link className="hover:underline mx-2" href="/contact">Contact Me</Link>
                        <a className={'btn-primary ml-2'} rel="noopener noreferrer" aria-label="Download résumé (opens in a new tab)" target={"_blank"} href={"/resume.pdf"}>Resume</a>
                </div>
            </nav>
        </div>
    )
}