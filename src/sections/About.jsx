function About() {
    return (
        <>
            <div className="relative h-screen bg-[url('/aboutpage_hero.jpg.webp')] bg-cover bg-center bg-no-repeat text-white">
                {/* Navbar and content on top */}
                <div className="relative z-10">
                    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
                        <h1 className="text-6xl font-bold">About Us</h1>
                    </div>
                </div>
            </div>

            <br />
            <div className="flex justify-evenly p-[4rem]">
                <div className="w-[40rem]">
                    <img src="/customar1.png.webp" alt="" />
                </div>
                <div className="w-[30rem] m-auto">
                    <h3 className="font-semibold">About our company</h3>
                    <h3 className="font-semibold text-2xl">
                        Make the customer the hero of your story
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisic- ing
                        elit, sed do eiusmod tempor inc. Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud.
                    </p>
                </div>
            </div>

            <br />
            <div className="p-[2rem]">
                <h1 className="font-light text-3xl text-orange-300">Who are we</h1>
                <div className="p-[4rem] gap-6 flex justify-evenly">
                    <div className="bg-gray-100 p-[2rem] rounded-2xl">
                        <div>
                            <img
                                src="/person_1.jpg.webp"
                                className="rounded-[50%] w-[120px]"
                                alt=""
                            />
                        </div>
                        <h1 className="font-bold">James Scott</h1>
                        <h3 className="font-semibold">CEO, Co-Founder</h3>
                       <p>
                         Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                       </p>
                    </div>
                    <div className="bg-gray-100 p-[2rem] rounded-2xl">
                        <div>
                            <img
                                src="/person_2.jpg.webp"
                                className="rounded-[50%] w-[120px]"
                                alt=""
                            />
                        </div>
                        <h1 className="font-bold">Hannah White</h1>
                        <h3 className="font-semibold">CEO, Co-Founder</h3>
                       <p>
                         Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                       </p>
                    </div>
                    <div className="bg-gray-100 p-[2rem] rounded-2xl">
                        <div>
                            <img
                                src="/person_3.jpg.webp"
                                className="rounded-[50%] w-[120px]"
                                alt=""
                            />
                        </div>
                        <h1 className="font-bold">Amy Perez</h1>
                        <h3 className="font-semibold">CEO, Co-Founder</h3>
                       <p>
                         Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                       </p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default About;
