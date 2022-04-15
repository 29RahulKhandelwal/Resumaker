import React from "react";
import "./ResumeTemplateCard.css";
import Img1 from "../../assets/Img1.png";
import Img2 from "../../assets/Img2.png";
import Img3 from "../../assets/Img3.png";
import Img4 from "../../assets/Img4.png";
import Img5 from "../../assets/Img5.png";

export default function ResumeTemplateCard(props) {
    return (
        <div class="container">
            <div class="row">
                <div className="col col-lg-3 col-md-6 col-sm-12 card-col">
                    <div className="card" style={{width: '18rem'}}>
                        <img src={Img1} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                            <p className="card-text para-text">Template 1</p>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-3 col-md-6 col-sm-12 card-col">
                    <div className="card" style={{width: '18rem'}}>
                        <img src={Img2} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                            <p className="card-text para-text">Template 2</p>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-3 col-md-6 col-sm-12 card-col">
                    <div className="card" style={{width: '18rem'}}>
                        <img src={Img3} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                            <p className="card-text para-text">Template 3</p>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-3 col-md-6 col-sm-12 card-col">
                    <div className="card" style={{width: '18rem'}}>
                        <img src={Img4} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                            <p className="card-text para-text">Template 4</p>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-3 col-md-6 col-sm-12 card-col">
                    <div className="card" style={{width: '18rem'}}>
                        <img src={Img5} className="card-img-top resume-img" alt="..." />
                        <div className="card-body">
                            <p className="card-text para-text">Template 5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}