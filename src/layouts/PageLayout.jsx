import { Outlet } from "react-router";
import Navbar from "../Navbar";
const PageLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default PageLayout;
