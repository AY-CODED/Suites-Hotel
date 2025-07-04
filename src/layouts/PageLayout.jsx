import { Outlet } from "react-router";
import Navbar from "../Navbar";
import Footer from "../Footer";
const PageLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default PageLayout;
