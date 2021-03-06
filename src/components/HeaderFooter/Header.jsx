import React from "react";
import "./Header.css";
import image from "../../assets/resume.png";

export default function Header(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <img className="navbar-brand img" src={image} alt="logo-pic" />
                <a className="navbar-brand" href="/">Resumaker</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li ="nav-item">
                            <a ="nav-link active" aria-current="page" href="/">Login</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}