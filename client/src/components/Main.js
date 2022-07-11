import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import PHome from "../pages/PHome";
import PLogin from "../pages/PLogin";
import PRegistro from "../pages/PRegistro";


class Main extends Component {


    render() {
        return (
        <div>
            <Routes>
                <Route path="/" element={<PHome />} />
                <Route path="/login" element={<PLogin />} />
                <Route path="/registro" element={<PRegistro />} />

            </Routes>
        </div>
        );
    }
}
export default Main;

