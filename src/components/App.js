import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ExercisesContainer from "../pages/ExercisesContainer";
import ExercisesNewContainer from "../pages/ExercisesNewContainer";
import NotFound from "../pages/NotFound";

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<NotFound/>} />
            <Route path="/" element={<ExercisesContainer/>} />
            <Route exact path="/exercise" element={<ExercisesContainer/>} />
            <Route exact path="/exercise/new" element={<ExercisesNewContainer/>} />
        </Routes>
    </BrowserRouter>
);

export default App;