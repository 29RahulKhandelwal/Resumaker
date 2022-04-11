import React from "react";
import Image from "../UI/Image";
import resumeTemplate1 from "../../assets/resumeTemplate1.png";
import resumeTemplate2 from "../../assets/resumeTemplate2.png";
import resumeTemplate3 from "../../assets/resumeTemplate3.png";
import resumeTemplate4 from "../../assets/resumeTemplate4.png";
import resumeTemplate5 from "../../assets/resumeTemplate5.png";

export default function TemplateSection(){
    return (
        <div class="col-lg-8 template-img">
            <Image className="first-template " src={resumeTemplate2} alt="resume-pic" />
            <Image className="second-template" src={resumeTemplate1} alt="resume-pic" />
            <Image className="third-template" src={resumeTemplate3} alt="resume-pic" />
            <Image className="four-template" src={resumeTemplate4} alt="resume-pic" />
            <Image className="five-template " src={resumeTemplate5} alt="resume-pic" />
        </div>
    )
}