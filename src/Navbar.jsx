import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-white text-gray-600 shadow-md"
                    : "bg-transparent text-white"
            }`}
        >
            <div className="flex justify-between items-center p-5">
                {/* Logo */}
                <NavLink
                    to="/"
                    onClick={() => setMenuOpen(false)}
                    className="font-bold text-xl hover:text-orange-500"
                >
                    Suites
                </NavLink>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-10 font-bold">
                    <li>
                        <NavLink to="/" className="hover:text-orange-500">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/events" className="hover:text-orange-500">
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/sections/about" className="hover:text-orange-500">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="hover:text-orange-500">
                            Contact
                        </NavLink>
                    </li>
                </ul>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-5 pb-4 bg-black/90 text-white">
                    <ul className="flex flex-col gap-4 font-bold">
                        <li>
                            <NavLink to="/" onClick={() => setMenuOpen(false)} className="hover:text-orange-500">
                                Home
                            </NavLink>
                        </li>
                        <li className="relative">
                            <details className="group">
                                <summary className="hover:text-orange-500 cursor-pointer">Rooms</summary>
                                <ul className="pl-4 mt-2 text-sm space-y-1">
                                    <li className="hover:text-orange-500">Standard Room</li>
                                    <li className="hover:text-orange-500">Family Room</li>
                                    <li className="hover:text-orange-500">Single Room</li>
                                    <details className="group">
                                        <summary className="hover:text-orange-500">Regions</summary>
                                        <ul className="pl-4 mt-1 space-y-1 text-sm">
                                            <li className="hover:text-orange-500">America</li>
                                            <li className="hover:text-orange-500">Europe</li>
                                            <li className="hover:text-orange-500">Asia</li>
                                            <li className="hover:text-orange-500">Africa</li>
                                        </ul>
                                    </details>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <NavLink to="/events" onClick={() => setMenuOpen(false)} className="hover:text-orange-500">
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/sections/about" onClick={() => setMenuOpen(false)} className="hover:text-orange-500">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-orange-500">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navbar;
