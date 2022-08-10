import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ExercisesContainer from "../pages/ExercisesContainer";
import ExercisesNewContainer from "../pages/ExercisesNewContainer";
import NotFound from "../pages/NotFound";
import LoginContainer from "../pages/LoginContainer";

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<NotFound/>} />
            <Route path="/" element={<LoginContainer/>} />
            <Route path="/login" element={<LoginContainer/>} />
            <Route exact path="/exercise" element={<ExercisesContainer/>} />
            <Route exact path="/exercise/new" element={<ExercisesNewContainer/>} />
        </Routes>
    </BrowserRouter>
);

export default App;