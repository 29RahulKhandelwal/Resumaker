import React from "react";
import "./ResumeFooter.css";

export default function ResumeFooter(){
    return (
        <div className="resume-footer">
            <button type="button" class="btn btn-outline-info btn-sm prev-btn create-button" >Prev</button>
            <hr className="process-line" />
            <button type="button" class="btn btn-outline-info btn-sm next-btn create-button" >Next</button>
        </div>
    )
}