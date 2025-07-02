import { motion } from "framer-motion";

function Contact() {
    return (
        <>
            {/* Header Section */}
            <div className="relative h-screen bg-[url('/contact.jpg.webp')] bg-cover bg-center bg-no-repeat text-white">
                <div className="relative z-10 flex items-center justify-center h-full px-4 text-center bg-opacity-60">
                    <motion.h1
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-6xl font-bold"
                    >
                        Contact Us
                    </motion.h1>
                </div>
            </div>

            {/* Book a Room + Contact Info Section */}
            <section className="bg-white py-16 px-4 md:px-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Booking Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Book a Room</h2>
                        <p className="text-gray-600 mb-8">
                            Fill out the form below and we’ll get back to you as soon as possible.
                        </p>
                        <form className="grid grid-cols-1 gap-6 text-left">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
                                />
                            </div>
                            <div className="flex gap-4">
                                <div className="w-1/2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-In Date</label>
                                    <input
                                        type="date"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-Out Date</label>
                                    <input
                                        type="date"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message / Special Requests</label>
                                <textarea
                                    rows="4"
                                    placeholder="Write your message..."
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-blue-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                                >
                                    Book Now
                                </button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gray-100 p-8 rounded-2xl shadow-lg"
                    >
                        <h3 className="text-2xl font-bold text-blue-900 mb-6">Contact Information</h3>
                        <div className="mb-6">
                            <p className="text-sm font-medium text-gray-600 mb-1">Address:</p>
                            <p className="text-lg text-gray-800">98 West 21th Street, Suite 721<br />New York NY 10016</p>
                        </div>
                        <div className="mb-6">
                            <p className="text-sm font-medium text-gray-600 mb-1">Phone:</p>
                            <p className="text-lg text-gray-800">(+1) 435 3533</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600 mb-1">Email:</p>
                            <p className="text-lg text-gray-800">info@yourdomain.com</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

export default Contact;
