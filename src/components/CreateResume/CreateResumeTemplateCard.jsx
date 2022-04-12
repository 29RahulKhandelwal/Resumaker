import React from "react";
import "./CreateResumeTemplateCard.css";
import ResumeTemplate1 from "../../assets/resumeTemplate1.png";
import ResumeTemplate2 from "../../assets/resumeTemplate2.png";
import ResumeTemplate3 from "../../assets/resumeTemplate3.png";
import ResumeTemplate4 from "../../assets/resumeTemplate4.png";
import ResumeTemplate5 from "../../assets/resumeTemplate5.png";

export default function CreateResumeTemplateCard(props) {
    return (
        <div class="container">
            <div class="row">
                <div className="col col-lg-6 col-md-12 card-col">
                    <div className="card" style={{width: '16.5rem'}}>
                        <img src={ResumeTemplate1} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                            <button className="btn btn-outline-primary btn-md create-button para-text template-button">Template 1</button>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-6 col-md-12 card-col">
                    <div className="card" style={{width: '16.5rem'}}>
                        <img src={ResumeTemplate2} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                            <button className="btn btn-outline-primary btn-md create-button para-text template-button">Template 2</button>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-6 col-md-12 card-col">
                    <div className="card" style={{width: '16.5rem'}}>
                        <img src={ResumeTemplate3} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                            <button className="btn btn-outline-primary btn-md create-button para-text template-button">Template 3</button>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-6 col-md-12 card-col">
                    <div className="card" style={{width: '16.5rem'}}>
                        <img src={ResumeTemplate4} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                            <button className="btn btn-outline-primary btn-md create-button para-text template-button">Template 4</button>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-6 col-md-12 card-col">
                    <div className="card" style={{width: '16.5rem'}}>
                        <img src={ResumeTemplate5} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                            <button className="btn btn-outline-primary btn-md create-button para-text template-button">Template 5</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}