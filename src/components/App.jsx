import React, { Fragment } from "react";
import Header from "./HeaderFooter/Header";
import Home from "../components/HomePage/Home";

export default function App() {
    return (
        <Fragment>
            <Header />        
            <Home />
        </Fragment>
    )
}