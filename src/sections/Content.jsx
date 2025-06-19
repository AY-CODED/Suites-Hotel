function Content() {
    return (
        <div>
            <div className="flex p-6">
                <div className="w-[50%] p-6">
                    <div className="w-[400px] text-center m-auto">
                        <p className="text-lg text-gray-600">
                            Stay with our luxury rooms
                        </p>
                        <br />
                        <h1 className="text-5xl">Stay and Enjoy</h1>
                        <br />
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Accusantium rem at adipisci neque inventore
                            mollitia incidunt, laboriosam quidem praesentium
                            debitis iusto consectetur aspernatur iure magnam
                            veniam ducimus! Necessitatibus, ex debitis.
                        </p>
                        <br />
                        <button className="p-3 text-white bg-amber-900 hover:bg-amber-800 hover:cursor-pointer">
                            MORE ABOUT US
                        </button>
                    </div>
                </div>
                <div className="w-[50%]">
                    <img src="/hero.jpg" alt="" />
                </div>
            </div>

            <br />
            <div className="p-4">
                <h1 className="text-5xl text-center">Hotel Features</h1>

                <div className="p-5">
                    <div className="flex justify-evenly text-center p-3">
                        <div>
                            <img
                                src="/building.png"
                                alt="Swimming"
                                className="mx-auto w-12 h-12 mb-2"
                            />
                            <div className="text-xl text-gray-600">
                                Swimming
                            </div>
                        </div>
                        <div className="text-xl text-gray-600">
                            <img
                                src="/receptionist.png"
                                alt="receptionist"
                                className="mx-auto w-12 h-12 mb-2"
                            />
                            Hotel Teller
                        </div>
                        <div className="text-xl text-gray-600">
                            <img
                                src="/exit.png"
                                alt="exit"
                                className="mx-auto w-12 h-12 mb-2"
                            />
                            Fire Exit
                        </div>
                        <div className="text-xl text-gray-600">
                            <img
                                src="/car-parking.png"
                                alt="car-parking"
                                className="mx-auto w-12 h-12 mb-2"
                            />
                            Car Parking
                        </div>
                    </div>

                    <br />

                    <div className="flex justify-evenly text-center p-3">
                        <div className="text-xl text-gray-600">
                            <img
                                src="/hairdryer.png"
                                alt="hairdryer"
                                className="mx-auto w-12 h-12 mb-2"
                            />
                            Hair Dryer
                        </div>
                        <div className="text-xl text-gray-600">
                            <img
                                src="/bar-counter.png"
                                alt="cheers"
                                className="mx-auto w-12 h-12 mb-2"
                            />
                            Mini Bar
                        </div>
                        <div className="text-xl text-gray-600">
                            <img
                                src="/cheers.png"
                                alt="Swimming"
                                className="mx-auto w-12 h-12 mb-2"
                            />
                            Drinks
                        </div>
                        <div className="text-xl text-gray-600">
                            <img
                                src="/airport.png"
                                alt="airport"
                                className="mx-auto w-12 h-12 mb-2"
                            />
                            Car Airport
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <div className="flex">
                        <img
                            src="/gallery_1.jpg.webp"
                            className="w-[25%]"
                            alt=""
                        />
                        <img
                            src="/gallery_2.jpg.webp"
                            className="w-[25%]"
                            alt=""
                        />
                        <img
                            src="/gallery_3.jpg.webp"
                            className="w-[25%]"
                            alt=""
                        />
                        <img
                            src="/gallery_4.jpg.webp"
                            className="w-[25%]"
                            alt=""
                        />
                    </div>

                    <div className="flex p-8 mt-7">
                        <div className="w-[50%]">
                            <h1 className="text-4xl font-bold">
                                The Suites / 10 years of excellence
                            </h1>
                            <p className="w-[450px] text-gray-600">
                                For over a decade, The Suites has redefined
                                luxury hospitality by offering world-class
                                comfort, exceptional service, and unforgettable
                                experiences. Our elegant rooms, personalized
                                amenities, and attention to detail have made us
                                a preferred destination for travelers seeking
                                both relaxation and sophistication. Whether
                                you're here for business or leisure, we promise
                                a stay that feels like home—only better.
                            </p>
                        </div>
                        <div className="w-[50%]">
                            <div className="flex gap-3 justify-center mt-15">
                                <img src="about_1.png.webp" alt="" />
                                <img src="about_2.png.webp" alt="" />
                                <img src="about_3.png.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <h1 className="text-center text-4xl font-bold">Featured Rooms</h1>
            <br />
            <div className="flex p-5 gap-6">
                <div className="w-[25rem] bg-gray-100 p-6 shadow-lg hover:bg-black hover:text-white transition duration-300 hover:cursor-pointer">
                    <div className="block text-center">
                        <h1 className="text-center text-4xl">Suite Room</h1>
                        <br />
                        <p className="w-[17rem] m-auto">
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts.
                        </p>
                        <br />
                        <div className="flex gap-3 justify-center items-center">
                            $450 / night
                            <button className="p-2 text-gray-600 border-gray-800 border-1 hover:cursor-pointer">
                                BOOK NOW
                            </button>
                        </div>
                    </div>
                    <br />
                    <div>
                        <img src="/bed1.jpg" alt="" className="w-[100%]" />
                    </div>
                </div>
                <div className="w-[25rem] bg-gray-100 p-6 shadow-lg hover:bg-black hover:text-white transition duration-300 hover:cursor-pointer">
                    <div className="block text-center">
                        <div>
                            <img src="/bed2.jpg" alt="" className="w-[100%]" />
                        </div>
                        <br />
                        <h1 className="text-center text-4xl">Family Room</h1>
                        <br />
                        <p className="w-[17rem] m-auto">
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts.
                        </p>
                        <br />
                        <div className="flex gap-3 justify-center items-center">
                            $450 / night
                            <button className="p-2 text-gray-600 border-gray-800 border-1 hover:cursor-pointer">
                                BOOK NOW
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-[25rem] bg-gray-100 p-6 shadow-lg hover:bg-black hover:text-white transition duration-300 hover:cursor-pointer">
                    <div className="block text-center">
                        <div>
                            <h1 className="text-center text-4xl">
                                Deluxe Room
                            </h1>
                            <br />
                            <p className="w-[17rem] m-auto">
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts.
                            </p>
                            <br />
                            <div className="flex gap-3 justify-center items-center">
                                $450 / night
                                <button className="p-2 text-gray-600 border-gray-800 border-1 hover:cursor-pointer">
                                    BOOK NOW
                                </button>
                            </div>
                        </div>
                        <br />
                        <div>
                            <img src="/bed3.jpg" alt="" className="w-[100%]" />
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div>
                <h1 className="text-6xl text-center">Testimonials</h1>
                <br />
                <div className="flex p-5 gap-6">
                    <div className="w-[25rem] bg-gray-100 p-6 shadow-lg hover:bg-black hover:text-white transition duration-300 hover:cursor-pointer">
                        <div className="block text-center">
                            <img
                                src="/testimonial1.webp"
                                alt=""
                                className="w-[100px] h-[100px] rounded-full m-auto"
                            />
                            <h1 className="text-center text-2xl mt-4">
                                John Doe
                            </h1>
                            <p className="text-gray-600">
                                "Amazing experience! The rooms were clean and
                                the staff was very friendly."
                            </p>
                        </div>
                    </div>
                    <div className="w-[25rem] bg-gray-100 p-6 shadow-lg hover:bg-black hover:text-white transition duration-300 hover:cursor-pointer">
                        <div className="block text-center">
                            <img
                                src="/testimonial2.webp"
                                alt=""
                                className="w-[100px] h-[100px] rounded-full m-auto"
                            />
                            <h1 className="text-center text-2xl mt-4">
                                Jane Smith
                            </h1>
                            <p className="text-gray-600">
                                "Loved the amenities! The pool was fantastic and
                                the food was delicious."
                            </p>
                        </div>
                    </div>
                    <div className="w-[25rem] bg-gray-100 p-6 shadow-lg hover:bg-black hover:text-white transition duration-300 hover:cursor-pointer">
                        <div className="block text-center">
                            <img
                                src="testimonial2.webp"
                                alt=""
                                className="w-[100px] h-[100px] rounded-full m-auto"
                            />
                            <h1 className="text-center text-2xl mt-4">
                                Jane Smith
                            </h1>
                            <p className="text-gray-600">
                                "Loved the amenities! The pool was fantastic and
                                the food was delicious."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
