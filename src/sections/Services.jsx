const Events = () => {
    return (
        <>
            <div className="relative h-screen bg-[url('/serviceHero.webp')] bg-cover bg-center bg-no-repeat text-white">
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40 z-0" />
                {/* Navbar and content on top */}
                <div className="relative z-10">
                    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
                        <h1 className="text-6xl font-bold">Our Services</h1>
                        <p className="text-lg mt-4 w-[600px]">
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts.
                        </p>
                    </div>
                </div>{" "}
                <div className="absolute inset-0 bg-black/40 z-0" />
            </div>
            <br />
            <div>
                <h1 className="font-extralight text-2xl">OUR SERVICES</h1>
                <br />
                <div className="flex justify-evenly">
                    <div className="w-[25%]">
                        <img src="/trekking.png" className="w-[100px]" alt="" />
                        <h3 className="font-bold text-2xl">Trekking</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat fugit repellendus cumque doloremque
                            animi, dicta totam dolore minus, magnam culpa,
                            officia dolores. Est sint, ea ipsa neque
                            exercitationem magni numquam!
                        </p>
                    </div>
                    <div className="w-[25%]">
                        <img src="/map.png" className="w-[100px]" alt="" />
                        <h3 className="font-bold text-2xl">Map</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat fugit repellendus cumque doloremque
                            animi, dicta totam dolore minus, magnam culpa,
                            officia dolores. Est sint, ea ipsa neque
                            exercitationem magni numquam!
                        </p>
                    </div>
                    <div className="w-[25%]">
                        <img
                            src="/suitcases.png"
                            className="w-[100px]"
                            alt=""
                        />
                        <h3 className="font-bold text-2xl">Suitcases</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat fugit repellendus cumque doloremque
                            animi, dicta totam dolore minus, magnam culpa,
                            officia dolores. Est sint, ea ipsa neque
                            exercitationem magni numquam!
                        </p>
                    </div>
                </div>
            </div>

            <br />

            <div className="p-[5rem] bg-gray-100">
                <div className="flex justify-between">
                    <div className="w-[35rem]">
                        <img src="/whyus.webp" alt="" />
                    </div>
                    <div className="w-[30rem] m-auto justify-center">
                        <h1 className="text-2xl font-bold">Why Us</h1>
                        <p>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts. Separated they live in
                            Bookmarksgrove right at the coast of the Semantics,
                            a large language ocean.
                            <br />
                            <br />A small river named Duden flows by their place
                            and supplies it with the necessary regelialia. It is
                            a paradisematic country, in which roasted parts of
                            sentences fly into your mouth.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Events;
