import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

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
                <div>
                    <h1 className="font-bold text-xl">Suites</h1>
                </div>
                <div>
                    <ul className="flex gap-10 font-bold">
                        <li>
                            <NavLink to="/" className="hover:text-orange-500">
                                Home
                            </NavLink>
                        </li>
                        <li className="relative group">
                            <span className="hover:text-orange-500">Rooms</span>
                            <ul className="absolute left-0 top-full hidden group-hover:block bg-black text-white shadow-md p-2 space-y-1 z-10 w-[12rem] rounded-2xl">
                                <li className="hover:text-orange-600 px-4 py-1">
                                    Standard Room
                                </li>
                                <li className="hover:text-orange-600 px-4 py-1">
                                    Family Room
                                </li>
                                <li className="hover:text-orange-600 px-4 py-1">
                                    Single Room
                                </li>
                                <li className="relative">
                                    <div className="group/region hover:text-orange-600 px-4 py-1">
                                        Regions
                                        <ul className="absolute left-full top-0 hidden group-hover/region:block bg-black text-white shadow-md p-2 space-y-1 z-20 w-[8rem] rounded-2xl">
                                            <li className="hover:text-orange-600 px-4 py-1">
                                                America
                                            </li>
                                            <li className="hover:text-orange-600 px-4 py-1">
                                                Europe
                                            </li>
                                            <li className="hover:text-orange-600 px-4 py-1">
                                                Asia
                                            </li>
                                            <li className="hover:text-orange-600 px-4 py-1">
                                                Africa
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink
                                to="/events"
                                className="hover:text-orange-500"
                            >
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/sections/about"
                                className="hover:text-orange-500"
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className="hover:text-orange-500"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
