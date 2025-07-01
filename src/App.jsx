import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./sections/Home";
import Events from "./sections/Services";
import About from "./sections/About";
import Contact from "./sections/Contact";
import PageLayout from "./layouts/PageLayout";
// import About from "./sections/About";`

function App() {
    return (
        <BrowserRouter>
            {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route path="" element={<Home />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/sections/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
 