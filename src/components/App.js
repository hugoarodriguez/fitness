import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Exercises from "../pages/Exercises";
import ExerciseNew from "../pages/ExerciseNew";
import NotFound from "../pages/NotFound";

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<NotFound/>} />
            <Route path="/" element={<Exercises/>} />
            <Route exact path="/exercise" element={<Exercises/>} />
            <Route exact path="/exercise/new" element={<ExerciseNew/>} />
        </Routes>
    </BrowserRouter>
);

export default App;