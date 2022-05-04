import React from "react";
import checkmark from "../../assets/check-mark.png";
import arrow from "../../assets/arrow.png";
import Button from "../UI/Button";

export default function HeadingSection(){
    return (
        <div className="col-lg-4 col-md-12 first-row">
            <div class="mt-4 p-5 text-black main-heading">
                <h1 className="homeheading">FREE RESUME MAKER FOR YOUR JOB!</h1>
                <p className="points"><img className="check-mark" src={checkmark} alt="check-mark" /> NOW, NO MORE TENSION WHEN RESUMAKER IS THERE!</p>
                <p className="points"><img className="check-mark" src={checkmark} alt="check-mark" /> JUST ENTER YOUR DETAILS AND YOUR RESUME IS READY</p>
                <p className="points"><img className="check-mark" src={checkmark} alt="check-mark" /> IN REAL TIME YOUR RESUME WILL BE CREATED ON THE RIGHT SIDE</p>
                <p className="points"><img className="check-mark" src={checkmark} alt="check-mark" /> CREATE YOUR RESUME IN 3 EASY STEPS:</p>
                <p className="points steps">Select Template <img src={arrow} alt="arrow" /> Enter Your Details <img src={arrow} alt="arrow" /> Download Your Resume</p>
                <a href="/resume-generator/templates">
                    <Button type="button" class="btn btn-center btn-outline-primary btn-lg" text="CREATE MY RESUME" />
                </a>
            </div>
        </div>
    )
}