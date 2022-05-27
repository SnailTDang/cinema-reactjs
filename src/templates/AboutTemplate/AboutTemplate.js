import { Route } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../HomeTemplates/Layout/Header/Header";

export const AboutTemplate = (props) => {
    const { Component, ...restProps } = props;
    return <Route {...restProps} render={(propsRoute) => {
        return <>
            <Header {...propsRoute} />
            <Component {...propsRoute} />
            <Footer />
        </>
    }} />
}
