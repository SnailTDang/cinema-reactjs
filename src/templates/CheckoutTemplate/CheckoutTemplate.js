import { Route, Redirect } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../HomeTemplates/Layout/Header/Header";
import { USER_LOGIN } from "../../ulti/constants/Settings";




const CheckoutTemplate = (props) => {
    if (!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to='/cinema-reactjs/login' />
    }
    const { Component, ...restProps } = props;
    return <Route {...restProps} render={(propsRoute) => {
        return <>
            <Header />
            <Component {...propsRoute} />
            <Footer />
        </>
    }} />
}

export default CheckoutTemplate