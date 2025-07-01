function LandingPageEvents() {
    return (
        <>
            <div className="relative h-screen bg-[url('/hero_Eve.jpg')] bg-cover bg-center bg-no-repeat text-white">
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40 z-0" />

                {/* Navbar and content on top */}
                <div className="relative z-10">
                    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
                        <h1 className="text-6xl font-bold">Blog & Events</h1>
                        <p className="text-lg mt-4">Enjoy with us</p>
                    </div>
                </div>
            </div>

            <br />

            <div className="p-[5px]">
                <p className="text-gray-600 text-[20px]">You Can Visit</p>
                <br />
                <div className="flex gap-2">
                    <div className="w-[24.5%]">
                        <img src="/Foodimg_1.jpg" alt="" />
                        <h3 className="text-[20px] hover:text-blue-500 hover:cursor-pointer">
                            Food & Wines
                        </h3>
                    </div>
                    <div className="w-[24.5%]">
                        <img src="/Foodimg_2.jpg" alt="" />
                        <h3 className="text-[20px] hover:text-blue-500 hover:cursor-pointer">
                            Resort & Spa
                        </h3>
                    </div>
                    <div className="w-[24.5%]">
                        <img src="/Foodimg_4.jpg" alt="" />
                        <h3 className="text-[20px] hover:text-blue-500 hover:cursor-pointer">
                            Hotel Rooms
                        </h3>
                    </div>
                    <div className="w-[24.5%]">
                        <img src="/Foodimg_5.jpg" alt="" />
                        <h3 className="text-[20px] hover:text-blue-500 hover:cursor-pointer">
                            Yacht Club
                        </h3>
                    </div>
                </div>
            </div>

            <br />

            <div className="text-center p-6">
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
            </div>
            <br />
            <div className="m-auto text-center">
                <h1 className="text-7xl w-[45rem] m-auto">Recent Blog Post</h1>
                <p className="text-gray-600 text-[15px] w-[50rem] m-auto mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                    dolor, iusto doloremque quo odio repudiandae sunt eveniet?
                    Enim facilis laborum voluptate id porro, culpa maiores quis,
                    blanditiis laboriosam alias. Sed.
                </p>

                <div className="flex flex-wrap justify-center gap-6 mt-8">
                    {/* Card 1 */}
                    <div className="p-2 bg-white shadow-xl max-w-xs">
                        <img src="/Blogimg_1.jpg" className="w-full " alt="" />
                        <div className="mt-4">
                            <h1 className="text-sm text-gray-500">
                                February 26, 2018
                            </h1>
                            <p className="text-lg font-semibold mt-1">
                                Five Reasons to Stay at Villa Resort
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="p-2 bg-white shadow-xl max-w-xs">
                        <img src="/Blogimg_2.jpg" className="w-full" alt="" />
                        <div className="mt-4">
                            <h1 className="text-sm text-gray-500">
                                February 26, 2018
                            </h1>
                            <p className="text-lg font-semibold mt-1">
                                Five Reasons to Stay at Villa Resort
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="p-2 bg-white shadow-xl max-w-xs">
                        <img src="/Blogimg_3.jpg" className="w-full" alt="" />
                        <div className="mt-4">
                            <h1 className="text-sm text-gray-500">
                                February 26, 2018
                            </h1>
                            <p className="text-lg font-semibold mt-1">
                                Five Reasons to Stay at Villa Resort
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPageEvents;
