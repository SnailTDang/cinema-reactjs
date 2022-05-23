import { Route, Redirect } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { USER_LOGIN } from "../../ulti/constants/Settings";
import Header from "../HomeTemplates/Layout/Header/Header";




const LoginTemplate = (props) => {
    // if (localStorage.getItem(USER_LOGIN)) {
    //     return <Redirect to='/' />
    // }
    const { Component, ...restProps } = props;
    return <Route {...restProps} render={(propsRoute) => {
        return <>
            <Header />
            <Component {...propsRoute} />
            <Footer />
        </>
    }} />
}

export default LoginTemplate