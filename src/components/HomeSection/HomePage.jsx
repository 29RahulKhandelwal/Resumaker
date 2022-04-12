import React, { Fragment } from "react";
import Footer from "../HeaderFooter/Footer";
import TemplatePage from "../TemplateSection/TemplatePage";
import Home from "./Home";

export default function HomePage(){
    return (
        <Fragment>
            <Home />
            <TemplatePage />
            <Footer />
        </Fragment>
    )
}