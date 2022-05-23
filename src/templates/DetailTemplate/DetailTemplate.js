import { Route } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Contact from "../../pages/Contact/Contact";
// import DeitailMovies from "../../pages/Detail/DeitailMovies";
import Header from "../HomeTemplates/Layout/Header/Header";

// import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";

export const DetailTemplate = (props) => {
    const { Component, ...restProps } = props;
    return <Route {...restProps} render={(propsRoute) => {
        return <>
            <Header {...propsRoute} />
            <Component {...propsRoute} />
            <Footer />
            <footer className="bg-black h-10 text-white">
                Đây là footer
            </footer>
        </>
    }} />
}