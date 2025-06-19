import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-16">
            <div className="max-w-screen-xl mx-auto px-6 py-10">
                <div className="flex flex-wrap justify-between">
                    {/* Column 1 */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-4">Hotel Luxora</h2>
                        <p className="text-gray-400">
                            Experience luxury like never before. Enjoy premium amenities,
                            comfort, and hospitality all in one place.
                        </p>
                    </div>

                    {/* Column 2 - Nav Links */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                        <ul className="text-gray-400 space-y-2">
                            <li>
                                <NavLink to="/" className="hover:underline hover:text-orange-400">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/events" className="hover:underline hover:text-orange-400">
                                    Events
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/sections/about" className="hover:underline hover:text-orange-400">
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="hover:underline hover:text-orange-400">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 - Contact Info */}
                    <div className="w-full md:w-1/3">
                        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                        <p className="text-gray-400">123 Luxury Street, Lagos, Nigeria</p>
                        <p className="text-gray-400">Email: info@luxorahotel.com</p>
                        <p className="text-gray-400">Phone: +234 800 000 0000</p>
                    </div>
                </div>

                <div className="mt-10 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Hotel Luxora. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
