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
import { useSelector } from "react-redux";

export default function App() {
    const {previewData}=useSelector((state)=>state.previewReducer);
    console.log(previewData);
    return (
        <Fragment>
            <Header />
            {window.location.pathname === "/" ? <HomePage /> : (
            <div className="main">
                <div className="row">
                    <div className="col col-lg-1 col-border col-display side-nav">
                        <SideLinks />
                    </div>
                    <div className="col col-lg-5 col-md-12 col-border col-display scroll-bar">
                    <Routes>
                        <Route exact path="/resume-generator/templates" element={<Template />} />
                        <Route exact path="/resume-generator/profile" element={<Profile/>} />
                        <Route exact path="/resume-generator/education" element={<Education/>} />
                        <Route exact path="/resume-generator/work" element={<Work/>} />
                        <Route exact path="/resume-generator/skills" element={<Skills/>} />
                        <Route exact path="/resume-generator/projects" element={<Project/>} />
                    </Routes>
                    </div>
                    <div className="col col-lg-6 col-border col-display scroll-bar">
                        <Preview />
                    </div>
                    {/* {previewData ? <div className="col col-12 position-fixed top-0 left-0 scroll-bar bg-light" style={{zIndex:"10000",maxWidth:"100%",transform:"scale(0.9)"}}>
                        <Preview />
                    </div>} */}
                    {previewData===false && <div className="col col-lg-5 col-md-12 col-border scroll-bar previewDisplay">
                    <Routes>
                        <Route exact path="/resume-generator/templates" element={<Template />} />
                        <Route exact path="/resume-generator/profile" element={<Profile/>} />
                        <Route exact path="/resume-generator/education" element={<Education/>} />
                        <Route exact path="/resume-generator/work" element={<Work/>} />
                        <Route exact path="/resume-generator/skills" element={<Skills/>} />
                        <Route exact path="/resume-generator/projects" element={<Project/>} />
                    </Routes>
                    </div>}
                    {previewData===true && <div className="col col-lg-6 col-border scroll-bar previewDisplay">
                        <Preview />
                    </div>}
                    <ResumeFooter />
                </div>
            </div>)}
        </Fragment>
    )
}