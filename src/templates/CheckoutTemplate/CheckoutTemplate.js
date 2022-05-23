import { Route, Redirect, Prompt } from "react-router-dom";
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
            <Prompt
                message={(location, action) => {
                    if (action === 'POP') {
                        console.log("Backing up...")
                    }

                    return location.pathname.startsWith("/app")
                        ? true
                        : `Are you sure you want to go to ${location.pathname}?`
                }}
            />
            <Header />
            <Component {...propsRoute} />
            <Footer />
        </>
    }} />
}

export default CheckoutTemplate