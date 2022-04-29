import React, { useState } from "react";
import "./CreateResumeTemplateCard.css";
import resumeTemplate1 from "../../assets/resumeTemplate1.png";
import resumeTemplate2 from "../../assets/resumeTemplate2.png";
import resumeTemplate3 from "../../assets/resumeTemplate3.png";
import resumeTemplate4 from "../../assets/resumeTemplate4.png";
import resumeTemplate5 from "../../assets/resumeTemplate5.png";
import { Link } from "react-router-dom";

export default function CreateResumeTemplateCard(props) {
    const [clicked,setClicked]=useState(localStorage.getItem("Template"));
    function handleClick(name){
        localStorage.setItem("Template",name);
        setClicked(name);
    }
    return (
        <div class="container">
            <div class="row">
                <div className="col col-lg-6 col-md-12 card-col">
                    <div className="card" style={{width: '16.5rem'}}>
                        <img src={resumeTemplate1} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                            <Link to="/resume-generator/profile">
                                <button className="btn btn-outline-primary btn-md create-button para-text template-button" onClick={()=>handleClick("Template1")}>Template 1</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-6 col-md-12 card-col">
                    <div className="card" style={{width: '16.5rem'}}>
                        <img src={resumeTemplate2} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                        <Link to="/resume-generator/profile">
                                <button className="btn btn-outline-primary btn-md create-button para-text template-button" onClick={()=>handleClick("Template2")}>Template 2</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-6 col-md-12 card-col">
                    <div className="card" style={{width: '16.5rem'}}>
                        <img src={resumeTemplate3} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                            <Link to="/resume-generator/profile">
                                <button className="btn btn-outline-primary btn-md create-button para-text template-button" onClick={()=>handleClick("Template3")}>Template 3</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-6 col-md-12 card-col">
                    <div className="card" style={{width: '16.5rem'}}>
                        <img src={resumeTemplate4} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                            <Link to="/resume-generator/profile">
                                <button className="btn btn-outline-primary btn-md create-button para-text template-button"  onClick={()=>handleClick("Template4")}>Template 4</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-6 col-md-12 card-col">
                    <div className="card" style={{width: '16.5rem'}}>
                        <img src={resumeTemplate5} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                            <Link to="/resume-generator/profile">
                                <button className="btn btn-outline-primary btn-md create-button para-text template-button" onClick={()=>handleClick("Template5")}>Template 5</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}