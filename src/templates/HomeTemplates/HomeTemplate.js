import { Route } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "./Layout/Header/Header";
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";


const HomeTemplate = (props) => {
    const { Component, ...restProps } = props;
    return <Route {...restProps} render={(propsRoute) => {
        return <>
            <Header {...propsRoute} />
            <HomeCarousel {...propsRoute} />
            <Component {...propsRoute} />
            <Footer />
        </>
    }} />   
}

export default HomeTemplate