function Content() {
    return (
        <div className="text-gray-800">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row p-6 gap-6 md:gap-0 items-center">
                <div className="w-full md:w-1/2 p-6">
                    <div className="max-w-md text-center mx-auto">
                        <p className="text-lg text-gray-600">
                            Stay with our luxury rooms
                        </p>
                        <h1 className="text-3xl md:text-5xl font-bold mt-3">Stay and Enjoy</h1>
                        <p className="text-gray-600 mt-4">
                            Discover comfort and elegance in our luxurious hotel rooms, designed to make your stay unforgettable.
                        </p>
                        <button className="mt-6 p-3 text-white bg-amber-900 hover:bg-amber-800">
                            MORE ABOUT US
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <img src="/hero.jpg" alt="Hero" className="w-full h-auto rounded-lg" />
                </div>
            </div>

            {/* Features */}
            <div className="p-6 md:p-10">
                <h1 className="text-3xl md:text-5xl text-center font-bold mb-8">Hotel Features</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {[
                        { icon: "building.png", label: "Swimming" },
                        { icon: "receptionist.png", label: "Hotel Teller" },
                        { icon: "exit.png", label: "Fire Exit" },
                        { icon: "car-parking.png", label: "Car Parking" },
                        { icon: "hairdryer.png", label: "Hair Dryer" },
                        { icon: "bar-counter.png", label: "Mini Bar" },
                        { icon: "cheers.png", label: "Drinks" },
                        { icon: "airport.png", label: "Car Airport" }
                    ].map((item, index) => (
                        <div key={index}>
                            <img src={`/${item.icon}`} alt={item.label} className="mx-auto w-12 h-12 mb-2" />
                            <div className="text-lg text-gray-600">{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Gallery Section */}
            <div className="flex flex-wrap">
                {["gallery_1.jpg.webp", "gallery_2.jpg.webp", "gallery_3.jpg.webp", "gallery_4.jpg.webp"].map((img, i) => (
                    <img key={i} src={`/${img}`} className="w-1/2 md:w-1/4 h-auto" alt={`gallery-${i + 1}`} />
                ))}
            </div>

            {/* About Section */}
            <div className="flex flex-col md:flex-row p-6 md:p-12 gap-6">
                <div className="w-full md:w-1/2">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4">
                        The Suites – 10 Years of Excellence
                    </h1>
                    <p className="text-gray-600">
                        For over a decade, The Suites has redefined luxury hospitality by offering world-class comfort, exceptional service, and unforgettable experiences.
                    </p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center gap-3">
                    {["about_1.png.webp", "about_2.png.webp", "about_3.png.webp"].map((img, i) => (
                        <img key={i} src={`/${img}`} alt={`about-${i + 1}`} className="w-[30%] rounded-lg" />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Content;
