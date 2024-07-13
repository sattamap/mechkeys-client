import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import useClearCartOnNavigation from "@/hooks/useClearCartOnNavigation";

const MainLayout = () => {
    useClearCartOnNavigation();
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;