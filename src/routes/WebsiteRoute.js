import { Route,Routes } from "react-router-dom"
import { WebsiteLayout } from "../layout/WebsiteLayout"
import HomePage from "../Screen/website/HomePage"
import LandingPage from "../Screen/website/LandingPage"
import HowItWork from "../Screen/website/HowItWork"
import NoMatch from "../Screen/NoMatch"
export const WebsiteRoute = ( ) => {
    return(
        <>
        <Routes>
            <Route  element={<WebsiteLayout/>}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/how-it-work" element={<HowItWork/>}/>
                <Route/>
            </Route>
        </Routes>
        </>
    )
}