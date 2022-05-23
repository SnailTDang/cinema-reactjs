import { Route } from "react-router-dom";
import Contact from "../../pages/Contact/Contact";
import Header from "../HomeTemplates/Layout/Header/Header";

// import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";

export const ContactTemplate = (props) => {
    const { Component, ...restProps } = props;
    return <Route {...restProps} render={(propsRoute) => {
        return <>
            <Header {...propsRoute} />
            <Component {...propsRoute} />
            <footer className="bg-black h-10 text-white">
                Đây là footer
            </footer>
        </>
    }} />
}
