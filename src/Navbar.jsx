import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Make sure lucide-react is installed

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const baseClasses =
        "fixed top-0 left-0 w-full z-50 transition-all duration-300";

    let navbarStyle = "";
    if (isHome) {
        navbarStyle = scrolled
            ? "bg-white text-gray-600 shadow-md"
            : "bg-transparent text-white";
    } else {
        navbarStyle = "bg-black text-white shadow-md";
    }

    return (
        <div className={`${baseClasses} ${navbarStyle}`}>
            <div className="flex justify-between items-center px-5 py-4">
                <h1 className="font-bold text-xl">Suites</h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-10 font-bold">
                    <li>
                        <NavLink to="/" className="hover:text-orange-500">
                            Home
                        </NavLink>
                    </li>
                    <li className="relative group">
                        <span className="hover:text-orange-500 cursor-pointer">Rooms</span>
                        <ul className="absolute left-0 top-full hidden group-hover:block bg-black text-white shadow-md p-2 space-y-1 z-10 w-[12rem] rounded-2xl">
                            <li className="hover:text-orange-600 px-4 py-1">Standard Room</li>
                            <li className="hover:text-orange-600 px-4 py-1">Family Room</li>
                            <li className="hover:text-orange-600 px-4 py-1">Single Room</li>
                            <li className="relative">
                                <div className="group/region hover:text-orange-600 px-4 py-1">
                                    Regions
                                    <ul className="absolute left-full top-0 hidden group-hover/region:block bg-black text-white shadow-md p-2 space-y-1 z-20 w-[8rem] rounded-2xl">
                                        <li className="hover:text-orange-600 px-4 py-1">America</li>
                                        <li className="hover:text-orange-600 px-4 py-1">Europe</li>
                                        <li className="hover:text-orange-600 px-4 py-1">Asia</li>
                                        <li className="hover:text-orange-600 px-4 py-1">Africa</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/events" className="hover:text-orange-500">
                            Events
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

                {/* Hamburger Icon - Mobile Only */}
                <div
                    className={`md:hidden z-50 cursor-pointer ${
                        isHome
                            ? scrolled
                                ? "text-black"
                                : "text-white"
                            : "text-white"
                    }`}
                    onClick={toggleMenu}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-black text-white shadow-md px-5 py-6 space-y-4">
                    <NavLink to="/" onClick={toggleMenu} className="block hover:text-orange-500">
                        Home
                    </NavLink>
                    <div>
                        <p className="font-bold mb-1">Rooms</p>
                        <div className="ml-4 space-y-1 text-sm">
                            <p className="hover:text-orange-500">Standard Room</p>
                            <p className="hover:text-orange-500">Family Room</p>
                            <p className="hover:text-orange-500">Single Room</p>
                            <p className="hover:text-orange-500">Regions</p>
                            <ul className="ml-4 text-gray-400 text-sm space-y-1">
                                <li className="hover:text-orange-500">America</li>
                                <li className="hover:text-orange-500">Europe</li>
                                <li className="hover:text-orange-500">Asia</li>
                                <li className="hover:text-orange-500">Africa</li>
                            </ul>
                        </div>
                    </div>
                    <NavLink to="/events" onClick={toggleMenu} className="block hover:text-orange-500">
                        Events
                    </NavLink>
                    <NavLink to="/sections/about" onClick={toggleMenu} className="block hover:text-orange-500">
                        About
                    </NavLink>
                    <NavLink to="/contact" onClick={toggleMenu} className="block hover:text-orange-500">
                        Contact
                    </NavLink>
                </div>
            )}
        </div>
    );
}

export default Navbar;
