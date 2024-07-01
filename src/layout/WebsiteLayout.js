import Navbar from "../Screen/website/WebsiteComponent/Navbar";
import Footer from "../Screen/website/WebsiteComponent/Footer";
import { Outlet } from "react-router-dom";
export const WebsiteLayout = () => {
return(
    <>
    {/* <Navbar/> */}
    <Outlet/>
    <Footer/>
    </>
)
}