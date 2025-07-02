import { motion } from "framer-motion";

function LandingPageEvents() {
    return (
        <>
            {/* Hero Section */}
            <div className="relative h-screen bg-[url('/hero_Eve.jpg')] bg-cover bg-center bg-no-repeat text-white">
                <div className="absolute inset-0 bg-black/40 z-0" />
                <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-6xl font-bold"
                    >
                        Blog & Events
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-lg mt-4"
                    >
                        Enjoy with us
                    </motion.p>
                </div>
            </div>

            <br />

            {/* Visit Section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-[5px]"
            >
                <p className="text-gray-600 text-[20px]">You Can Visit</p>
                <br />
                <div className="flex gap-2 flex-wrap justify-center">
                    {[
                        { title: "Food & Wines", image: "/Foodimg_1.jpg" },
                        { title: "Resort & Spa", image: "/Foodimg_2.jpg" },
                        { title: "Hotel Rooms", image: "/Foodimg_4.jpg" },
                        { title: "Yacht Club", image: "/Foodimg_5.jpg" },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="w-[24%] min-w-[220px]"
                        >
                            <img src={item.image} alt={item.title} />
                            <h3 className="text-[20px] hover:text-blue-500 hover:cursor-pointer mt-2">
                                {item.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <br />

            {/* Main Description */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center p-6"
            >
                <h1 className="text-7xl w-[45rem] m-auto">
                    A gorgeous place to enjoy your life.
                </h1>
                <p className="text-gray-600 text-[15px] w-[50rem] m-auto mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore deserunt dolor corrupti dolorem odio minima voluptas,
                    deleniti velit tempore aspernatur necessitatibus cupiditate
                    earum! Perferendis eaque recusandae reprehenderit ut quidem
                    alias? Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Molestias reprehenderit voluptates dolor omnis!
                    Quisquam incidunt voluptatum rerum eius? Exercitationem
                    quibusdam nihil dicta quia. Saepe, vel fuga quam magnam
                    dolores illum.
                </p>
            </motion.div>

            <br />

            {/* Blog Section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="m-auto text-center"
            >
                <h1 className="text-7xl w-[45rem] m-auto">Recent Blog Post</h1>
                <p className="text-gray-600 text-[15px] w-[50rem] m-auto mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                    dolor, iusto doloremque quo odio repudiandae sunt eveniet?
                    Enim facilis laborum voluptate id porro, culpa maiores quis,
                    blanditiis laboriosam alias. Sed.
                </p>

                <div className="flex flex-wrap justify-center gap-6 mt-8">
                    {["Blogimg_1.jpg", "Blogimg_2.jpg", "Blogimg_3.jpg"].map(
                        (img, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                viewport={{ once: true }}
                                className="p-2 bg-white shadow-xl max-w-xs"
                            >
                                <img src={`/${img}`} className="w-full" alt="" />
                                <div className="mt-4">
                                    <h1 className="text-sm text-gray-500">
                                        February 26, 2018
                                    </h1>
                                    <p className="text-lg font-semibold mt-1">
                                        Five Reasons to Stay at Villa Resort
                                    </p>
                                </div>
                            </motion.div>
                        )
                    )}
                </div>
            </motion.div>
        </>
    );
}

export default LandingPageEvents;
