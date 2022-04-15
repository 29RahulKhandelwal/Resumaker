import React from "react";
import Image from "../UI/Image";
import Img1 from "../../assets/Img1.png";
import Img2 from "../../assets/Img2.png";
import Img3 from "../../assets/Img3.png";
import Img4 from "../../assets/Img4.png";
import Img5 from "../../assets/Img5.png";

export default function TemplateSection(){
    return (
        <div class="col-lg-8 template-img">
            <Image className="first-template " src={Img2} alt="resume-pic" />
            <Image className="second-template" src={Img1} alt="resume-pic" />
            <Image className="third-template" src={Img3} alt="resume-pic" />
            <Image className="four-template" src={Img4} alt="resume-pic" />
            <Image className="five-template " src={Img5} alt="resume-pic" />
        </div>
    )
}