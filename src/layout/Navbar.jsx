import {Button} from "@/components/Button"
import { Menu } from "lucide-react";
const navLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#experience", label: "Experience"},
    {href: "#testimonial", label: "Testimonial"},
];

export const Navbar = () => {
    return <header className=" fixed top-0 left-0  right-0 bg-transparent py-5 ">
        <nav className="container mx-auto px-6 flex items-center justify-between ">
            <a href="/" className="text-xl font-bold  tracking-tight hover:text-primary">
                Abu <span className=" text-primary" >Ridwan</span>
            </a>

            {/* Desktop Nav */}
            <div className=" hidden md:flex items-center gap-1">
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                  {navLinks.map(link =>
                   (
                   <a key={link.href} href={link.href} className="px-4 py-2 text-sm text-primary hover:text-foreground rounded-full hover:bg-surface "> {link.label} </a>
                ))}
                </div>
            </div>

            {/**button **/}

            <div className="hidden md:block">
                <Button size="sm"> Contact Me</Button>
            </div>


            {/** hamburger */}
            <button className=" flex md:hidden p-2 text-primary">
                    <Menu size={24} />
            </button>
        </nav>


        {/** mobile menu */}
        <div className="md:hidden glass-strong">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                  {navLinks.map(link =>
                   (
                   <a key={link.href} href={link.href} className="text-lg text-muted-foreground hover:text-foreground "> {link.label} </a>
                ))}
                
            </div>
        </div>
    </header>;
}