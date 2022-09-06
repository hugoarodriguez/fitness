import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ExercisesContainer from "../pages/ExercisesContainer";
import ExercisesNewContainer from "../pages/ExercisesNewContainer";
import NotFound from "../pages/NotFound";
import LoginContainer from "../pages/LoginContainer";
import Orders from "../pages/Orders";
import Navbarmenu from "./Navbar";
import Footer from "./Footer";

const App = () => (
    <BrowserRouter>
    <div>
        <Navbarmenu/>
        <Routes>
            <Route path="*" element={<NotFound/>} />
            <Route path="/" element={<LoginContainer/>} />
            <Route path="/login" element={<LoginContainer/>} />
            <Route exact path="/exercise" element={<ExercisesContainer/>} />
            <Route exact path="/exercise/new" element={<ExercisesNewContainer/>} />
            <Route exact path="/kanban" element={<Orders/>} />
        </Routes>
        <Footer/>
    </div>
    </BrowserRouter>
);

export default App;