import React from "react";
import App from "./App";
import ProjetoDetalhe from "./scripts/ProjetoDetalhe.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function RoutesConfig() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/ProjetoDetalhe/:projeto" element={<ProjetoDetalhe />} />
            </Routes>
        </BrowserRouter>
    )

}