import { motion } from "framer-motion";

const Events = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="relative h-screen bg-[url('/serviceHero.webp')] bg-cover bg-center bg-no-repeat text-white">
                <div className="absolute inset-0 bg-black/40 z-0" />
                <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-6xl font-bold"
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-base md:text-lg mt-4 w-full md:w-[600px]"
                    >
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </motion.p>
                </div>
                <div className="absolute inset-0 bg-black/40 z-0" />
            </div>

            <br />

            {/* Services Section */}
            <div className="px-4">
                <motion.h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="font-extralight text-xl md:text-2xl text-center"
                >
                    OUR SERVICES
                </motion.h1>

                <br />
                <div className="flex flex-col md:flex-row md:justify-evenly items-center gap-8">
                    {[
                        { title: 'Trekking', image: '/trekking.png' },
                        { title: 'Map', image: '/map.png' },
                        { title: 'Suitcases', image: '/suitcases.png' },
                    ].map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="w-full md:w-[25%] text-center md:text-left"
                        >
                            <img src={service.image} className="w-[80px] md:w-[100px] mx-auto md:mx-0" alt={service.title} />
                            <h3 className="font-bold text-xl md:text-2xl">{service.title}</h3>
                            <p className="text-sm md:text-base">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit repellendus cumque doloremque animi, dicta totam dolore minus, magnam culpa, officia dolores. Est sint, ea ipsa neque exercitationem magni numquam!
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <br />

            {/* Why Us Section */}
            <div className="px-4 py-8 md:p-[5rem] bg-gray-100">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row gap-8 items-center"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-[35rem]"
                    >
                        <img src="/whyus.webp" alt="Why Us" className="w-full rounded-lg" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-[30rem] m-auto text-center lg:text-left"
                    >
                        <h1 className="text-xl md:text-2xl font-bold">Why Us</h1>
                        <p className="text-sm md:text-base">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                            <br /><br />
                            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
};

export default Events;
