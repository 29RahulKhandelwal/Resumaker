import React, { Fragment } from "react";
import Header from "./HeaderFooter/Header";
import Home from "../components/HomePage/Home";
import TemplatePage from "./TemplatePage/TemplatePage";

export default function App() {
    return (
        <Fragment>
            <Header />        
            <Home />
            <TemplatePage />
        </Fragment>
    )
}