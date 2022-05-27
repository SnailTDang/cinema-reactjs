import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import LoadingMini from "../../components/Loadingmini/LoadingMini";
import { GetTicketsUserAction } from "../../redux/actions/UserLoginAction";
import { TOKEN_CYBER } from "../../ulti/constants/Settings";
import Header from "../HomeTemplates/Layout/Header/Header";

const HistoryBookingTemplate = (props) => {
    const { Component, ...restProps } = props;
    return <Route {...restProps} render={(propsRoute) => {
        return <>
            <LoadingMini />
            <Header />
            <Component {...propsRoute} />
            <Footer />
        </>
    }} />
}

export default HistoryBookingTemplate