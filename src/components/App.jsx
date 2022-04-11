import React, { Fragment } from "react";
import Header from "./HeaderFooter/Header";
// import Home from "./HomeSection/Home";
// import TemplatePage from "./TemplateSection/TemplatePage";
// import Footer from "./HeaderFooter/Footer";
import CreateResume from "./CreateResume/CreateResume";

export default function App() {
    return (
        <Fragment>
            <Header />        
            {/* <Home />
            <TemplatePage />
            <Footer /> */}
            <CreateResume />
        </Fragment>
    )
}