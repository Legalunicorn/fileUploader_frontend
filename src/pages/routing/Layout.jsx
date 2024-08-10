//layout for bult of the routes like header etc

import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"

export default function Layout(){
    return (
        <div id="main">
            <Header/>
            <div id="content">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}