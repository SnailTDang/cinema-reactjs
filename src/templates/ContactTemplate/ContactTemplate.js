import { Route } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../HomeTemplates/Layout/Header/Header";

// import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";

export const ContactTemplate = (props) => {
    const { Component, ...restProps } = props;
    return <Route {...restProps} render={(propsRoute) => {
        return <>
            <Header {...propsRoute} />
            <Component {...propsRoute} />
            <Footer />
        </>
    }} />
}
