import React, { Fragment } from "react";
import "./App.css"
import Header from "./HeaderFooter/Header";
import HomePage from "./HomeSection/HomePage";
import { Routes, Route } from "react-router-dom";
import SideLinks from "./CreateResume/SideLinks";
import Profile from "./CreateResume/Profile";
import Education from "./CreateResume/Education";
import Template from "./CreateResume/Template";
import ResumeFooter from "./HeaderFooter/ResumeFooter";
import Work from "./CreateResume/Work";
import Skills from "./CreateResume/Skills";
import Project from "./CreateResume/Project";
import Preview from "./CreateResume/Preview";

export default function App() {
    return (
        <Fragment>
            <Header />
            {window.location.pathname === "/" ? <HomePage /> : (
            <div className="main">
                <div className="row">
                    <div className="col col-lg-1 col-border col-display side-nav">
                        <SideLinks />
                    </div>
                    <div className="col col-lg-5 col-md-12 col-border scroll-bar">
                    <Routes>
                        <Route exact path="/resume-generator/templates" element={<Template />} />
                        <Route exact path="/resume-generator/profile" element={<Profile/>} />
                        <Route exact path="/resume-generator/education" element={<Education/>} />
                        <Route exact path="/resume-generator/work" element={<Work/>} />
                        <Route exact path="/resume-generator/skills" element={<Skills/>} />
                        <Route exact path="/resume-generator/projects" element={<Project/>} />
                        {/* <Route exact path="/resume-generator/awards" element={<HonorAwards/>} /> */}
                    </Routes>
                    </div>
                    <div className="col col-lg-6 col-border col-display scroll-bar">
                        <Preview />
                    </div>
                    <ResumeFooter />
                </div>
            </div>)}
        </Fragment>
    )
}