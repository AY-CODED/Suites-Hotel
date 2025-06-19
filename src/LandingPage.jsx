function LandingPage() {
    return (
        <div className="relative h-screen bg-[url('/hero_2.jpg')] bg-cover bg-center bg-no-repeat text-white">
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* Navbar and content on top */}
            <div className="relative z-10">
                <div className="flex flex-col items-center justify-center h-screen text-center px-4">
                    <h1 className="text-6xl font-bold">Unique Experience</h1>
                    <p className="text-lg mt-4">Enjoy with us</p>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
