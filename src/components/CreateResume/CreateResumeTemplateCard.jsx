import React, { useState } from "react";
import "./CreateResumeTemplateCard.css";
import resumeTemplate1 from "../../assets/resumeTemplate1.png";
import resumeTemplate2 from "../../assets/resumeTemplate2.png";
import resumeTemplate3 from "../../assets/resumeTemplate3.png";
import resumeTemplate4 from "../../assets/resumeTemplate4.png";
import resumeTemplate5 from "../../assets/resumeTemplate5.png";
import resumeTemplate6 from "../../assets/resumeTemplate6.png";
import resumeTemplate7 from "../../assets/resumeTemplate7.png";
import resumeTemplate8 from "../../assets/resumeTemplate8.png";
import resumeTemplate9 from "../../assets/resumeTemplate9.png";
import resumeTemplate10 from "../../assets/resumeTemplate10.png";
import resumeTemplate11 from "../../assets/resumeTemplate11.png";
import resumeTemplate12 from "../../assets/resumeTemplate12.png";
import resumeTemplate13 from "../../assets/resumeTemplate13.png";
import resumeTemplate14 from "../../assets/resumeTemplate14.png";
import resumeTemplate15 from "../../assets/resumeTemplate15.png";
import resumeTemplate16 from "../../assets/resumeTemplate16.png";
import resumeTemplate17 from "../../assets/resumeTemplate17.png";
import { Link } from "react-router-dom";

export default function CreateResumeTemplateCard(props) {
    const [clicked,setClicked]=useState(localStorage.getItem("Template"));
    function handleClick(name){
        localStorage.setItem("Template",name);
        setClicked(name);
    }
    console.log(clicked)
    return (
        <div class="container">
            <div class="row">
                <div className="col col-lg-6 col-md-12 card-col">
                    <div className="card">
                        <img src={resumeTemplate1} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                            <Link to="/resume-generator/profile">
                                <button className="btn btn-outline-primary btn-md create-button para-text template-button" onClick={()=>handleClick("Template1")}>Template 1</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-6 col-md-12 card-col">
                    <div className="card">
                        <img src={resumeTemplate2} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                        <Link to="/resume-generator/profile">
                                <button className="btn btn-outline-primary btn-md create-button para-text template-button" onClick={()=>handleClick("Template2")}>Template 2</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-6 col-md-12 card-col">
                    <div className="card">
                        <img src={resumeTemplate3} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                            <Link to="/resume-generator/profile">
                                <button className="btn btn-outline-primary btn-md create-button para-text template-button" onClick={()=>handleClick("Template3")}>Template 3</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-6 col-md-12 card-col">
                    <div className="card">
                        <img src={resumeTemplate4} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                            <Link to="/resume-generator/profile">
                                <button className="btn btn-outline-primary btn-md create-button para-text template-button"  onClick={()=>handleClick("Template4")}>Template 4</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-6 col-md-12 card-col">
                    <div className="card">
                        <img src={resumeTemplate5} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                            <Link to="/resume-generator/profile">
                                <button className="btn btn-outline-primary btn-md create-button para-text template-button" onClick={()=>handleClick("Template5")}>Template 5</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-6 col-md-12 card-col">
                    <div className="card">
                        <img src={resumeTemplate6} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                            <Link to="/resume-generator/profile">
                                <button className="btn btn-outline-primary btn-md create-button para-text template-button" onClick={()=>handleClick("Template6")}>Template 6</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-6 col-md-12 card-col">
                    <div className="card">
                        <img src={resumeTemplate7} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                            <Link to="/resume-generator/profile">
                                <button className="btn btn-outline-primary btn-md create-button para-text template-button" onClick={()=>handleClick("Template7")}>Template 7</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-6 col-md-12 card-col">
                    <div className="card">
                        <img src={resumeTemplate8} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                            <Link to="/resume-generator/profile">
                                <button className="btn btn-outline-primary btn-md create-button para-text template-button" onClick={()=>handleClick("Template8")}>Template 8</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-6 col-md-12 card-col">
                    <div className="card">
                        <img src={resumeTemplate9} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                            <Link to="/resume-generator/profile">
                                <button className="btn btn-outline-primary btn-md create-button para-text template-button" onClick={()=>handleClick("Template9")}>Template 9</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-6 col-md-12 card-col">
                    <div className="card">
                        <img src={resumeTemplate10} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                            <Link to="/resume-generator/profile">
                                <button className="btn btn-outline-primary btn-md create-button para-text template-button" onClick={()=>handleClick("Template10")}>Template 10</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-6 col-md-12 card-col">
                    <div className="card">
                        <img src={resumeTemplate11} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                            <Link to="/resume-generator/profile">
                                <button className="btn btn-outline-primary btn-md create-button para-text template-button" onClick={()=>handleClick("Template11")}>Template 11</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-6 col-md-12 card-col">
                    <div className="card">
                        <img src={resumeTemplate12} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                            <Link to="/resume-generator/profile">
                                <button className="btn btn-outline-primary btn-md create-button para-text template-button" onClick={()=>handleClick("Template12")}>Template 12</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-6 col-md-12 card-col">
                    <div className="card" style={{width: '16.5rem'}}>
                        <img src={resumeTemplate13} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                            <Link to="/resume-generator/profile">
                                <button className="btn btn-outline-primary btn-md create-button para-text template-button" onClick={()=>handleClick("Template13")}>Template 13</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-6 col-md-12 card-col">
                    <div className="card" style={{width: '16.5rem'}}>
                        <img src={resumeTemplate14} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                            <Link to="/resume-generator/profile">
                                <button className="btn btn-outline-primary btn-md create-button para-text template-button" onClick={()=>handleClick("Template14")}>Template 14</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-6 col-md-12 card-col">
                    <div className="card" style={{width: '16.5rem'}}>
                        <img src={resumeTemplate15} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                            <Link to="/resume-generator/profile">
                                <button className="btn btn-outline-primary btn-md create-button para-text template-button" onClick={()=>handleClick("Template15")}>Template 15</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-6 col-md-12 card-col">
                    <div className="card" style={{width: '16.5rem'}}>
                        <img src={resumeTemplate16} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                            <Link to="/resume-generator/profile">
                                <button className="btn btn-outline-primary btn-md create-button para-text template-button" onClick={()=>handleClick("Template16")}>Template 16</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-6 col-md-12 card-col">
                    <div className="card" style={{width: '16.5rem'}}>
                        <img src={resumeTemplate17} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                            <Link to="/resume-generator/profile">
                                <button className="btn btn-outline-primary btn-md create-button para-text template-button" onClick={()=>handleClick("Template17")}>Template 17</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}