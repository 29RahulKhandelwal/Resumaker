import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResumeFooter.css";
const paths=["templates","profile","education","work","skills","projects"];

export default function ResumeFooter(){
    const [progressValue,setProgressValue]=useState(0);
    const navigate=useNavigate()
    const [path,setPath]=useState(0);
    const changePath=(numb,progress)=>{
        const currentLocation=window.location.pathname.split("/").pop()
        const index=paths.findIndex((item)=>item===currentLocation)
        if(index>=0){
            setPath(paths[index+parseInt(numb)])
            setProgressValue(progressValue+progress)
            navigate(`/resume-generator/${paths[index+parseInt(numb)]}`);
        }
    }
    const prevPath=()=>{
        changePath(-1,-20)
    }
    const nextPath=()=>{
        changePath(1,20)
    }

    useEffect(()=>setPath(window.location.pathname.split("/").pop()),[])

    return (
        <Fragment>
            <div className="resume-footer">
                <button type="button" class="btn btn-outline-info btn-sm prev-btn create-button" style={{}} onClick={prevPath} disabled={path==="templates"} >Prev</button>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={progressValue} aria-valuemin="0" aria-valuemax="100" style={{width: `${progressValue}%`}}></div>
                </div>
                <button type="button" class="btn btn-outline-info btn-sm next-btn create-button" onClick={nextPath} disabled={path==="awards"} >Next</button>
            </div>
        </Fragment>
        
    )
}