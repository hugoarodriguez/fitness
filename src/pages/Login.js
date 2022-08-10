import React from "react";

import Navbarmenu from "../components/Navbar";
import Footer from "../components/Footer";
import "../components/styles/Login.css";

const Login = () => (
    <React.Fragment>
        <div id="container">
            <Navbarmenu/>
            <Footer/>
        </div>
    </React.Fragment>
);

export default Login;