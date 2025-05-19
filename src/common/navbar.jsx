import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const scrollToSection = (id) => {
        setMenuOpen(false);
        setTimeout(() => {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };
    return (
        <>

            <nav className="bg-[#b7d8d2]/80 backdrop-blur-lg w-full sticky top-0 z-20 shadow-sm">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-4 h-16">
                    <div className="flex items-center">
                        <img className="h-12" src="/assets/images/modern-nobg.png" alt="Company Logo" />
                    </div>

                    <div className="hidden md:flex gap-6 md:gap-10">
                        <Link to="/home" className="font-inter font-medium text-teal-900 hover:scale-110 transition-transform" onClick={() => scrollToSection("home")}>Home</Link>
                        <Link to="/home" className="font-inter font-medium text-teal-900 hover:scale-110 transition-transform" onClick={() => scrollToSection("products")}>Products</Link>
                        <Link to="/home" className="font-inter font-medium text-teal-900 hover:scale-110 transition-transform" onClick={() => scrollToSection("about")}>About</Link>
                        <Link to="/about" className="font-inter font-medium text-teal-900 hover:scale-110 transition-transform">Contact</Link>
                    </div>

                    <button className="md:hidden focus:outline-none" onClick={() => setMenuOpen(true)} aria-label="Open Menu" >
                        <Menu className="w-6 h-6 text-teal-900" />
                    </button>
                </div>
            </nav>

            <div className={`fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-30 transition-opacity duration-300 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setMenuOpen(false)} ></div>

            <div className={`fixed top-0 right-0 h-full w-64 bg-[#b7d8d2] shadow-lg z-40 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-end p-4">
                    <button onClick={() => setMenuOpen(false)} className="text-teal-900 focus:outline-none" aria-label="Close Menu" >
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <div className="flex flex-col items-start gap-6 px-6 mt-8">
                    <Link onClick={() => scrollToSection("home")} to="/home" className="text-teal-900 font-inter text-lg">Home</Link>
                    <Link onClick={() => scrollToSection("products")} to="/home" className="text-teal-900 font-inter text-lg">Products</Link>
                    <Link onClick={() => scrollToSection("about")} to="/home" className="text-teal-900 font-inter text-lg">About</Link>
                    <Link onClick={() => setMenuOpen(false)} to="/about" className="text-teal-900 font-inter text-lg">Contact</Link>
                </div>
            </div>
        </>
    );
}