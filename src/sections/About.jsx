function About() {
    return (
        <>
            {/* Hero Section */}
            <div className="relative h-screen bg-[url('/aboutpage_hero.jpg.webp')] bg-cover bg-center bg-no-repeat text-white">
                <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold">About Us</h1>
                </div>
            </div>

            {/* Company Info Section */}
            <div className="flex flex-col lg:flex-row justify-evenly items-center px-6 md:px-12 py-12 gap-10">
                <div className="w-full max-w-xl">
                    <img src="/customar1.png.webp" alt="About Us" className="w-full rounded-xl" />
                </div>
                <div className="w-full max-w-lg text-center lg:text-left">
                    <h3 className="font-semibold text-lg mb-2">About our company</h3>
                    <h3 className="font-semibold text-2xl mb-4">
                        Make the customer the hero of your story
                    </h3>
                    <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco.
                    </p>
                </div>
            </div>

            {/* Who Are We Section */}
            <div className="px-6 md:px-12 pb-12">
                <h1 className="text-2xl md:text-3xl font-light text-orange-400 mb-8 text-center">
                    Who are we
                </h1>
                <div className="flex flex-col md:flex-row justify-center gap-8 flex-wrap">
                    {[
                        {
                            name: "James Scott",
                            title: "CEO, Co-Founder",
                            img: "/person_1.jpg.webp",
                        },
                        {
                            name: "Hannah White",
                            title: "CEO, Co-Founder",
                            img: "/person_2.jpg.webp",
                        },
                        {
                            name: "Amy Perez",
                            title: "CEO, Co-Founder",
                            img: "/person_3.jpg.webp",
                        },
                    ].map((person, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-100 p-6 rounded-2xl w-full max-w-sm text-center shadow-md"
                        >
                            <img
                                src={person.img}
                                alt={person.name}
                                className="rounded-full w-28 h-28 mx-auto mb-4 object-cover"
                            />
                            <h1 className="font-bold text-xl">{person.name}</h1>
                            <h3 className="font-semibold text-sm text-gray-600">{person.title}</h3>
                            <p className="text-sm mt-3 text-gray-700">
                                Far far away, behind the word mountains, far from the
                                countries Vokalia and Consonantia, there live the blind
                                texts.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default About;
