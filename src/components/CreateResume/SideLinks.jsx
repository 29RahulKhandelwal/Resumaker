import React, { Fragment } from "react";
import AnchorTag from "../UI/AnchorTag";
import { Link } from "react-router-dom";
import { LinksAction } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
export default function SideLinks(){
    const dispatch=useDispatch();
    function handleClick(name){
        localStorage.setItem("SideLink",name);
        dispatch(LinksAction(name));
    }
    const linkData=useSelector((state)=>state.linkReducer.linkData);
    return (
        <Fragment>
            <Link to="/resume-generator/templates">
                <AnchorTag class={`side-links ${linkData === "templates" ? "sidelinkshover" : "link-info"}`} text="Templates" onClick={()=>handleClick("templates")} />
            </Link>
            <Link to="/resume-generator/profile">
            <AnchorTag class={`side-links ${linkData === "profile" ? "sidelinkshover" : "link-info"}`} text="Profile" onClick={()=>handleClick("profile")} />
            </Link>
            <Link to="/resume-generator/education">
            <AnchorTag class={`side-links ${linkData === "education" ? "sidelinkshover" : "link-info"}`} text="Education" onClick={()=>handleClick("education")} />
            </Link>
            <Link to="/resume-generator/work">
            <AnchorTag class={`side-links ${linkData === "work" ? "sidelinkshover" : "link-info"}`} text="Work" onClick={()=>handleClick("work")} />
            </Link>
            <Link to="/resume-generator/skills">
            <AnchorTag class={`side-links ${linkData === "skills" ? "sidelinkshover" : "link-info"}`} text="Skills" onClick={()=>handleClick("skills")} />
            </Link>
            <Link to="/resume-generator/projects">
            <AnchorTag class={`side-links ${linkData === "projects" ? "sidelinkshover" : "link-info"}`} text="Projects" onClick={()=>handleClick("projects")} />
            </Link>
            {/* <Link to="/resume-generator/awards">
            <AnchorTag class="link-info side-links" text="Awards" />
            </Link> */}
            {/* <Button type="button" class="btn btn-outline-primary btn-md create-button" text="MAKE" /> */}
        </Fragment>
    )
}