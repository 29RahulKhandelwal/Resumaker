import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./ResumeFooter.css";
import { LinksAction } from "../../actions";
import { ProgressAction } from "../../actions";
import { PreviewAction } from "../../actions";
const paths=["templates","profile","education","work","skills","projects"];

export default function ResumeFooter(){
    const dispatch=useDispatch();
    const [progressValue,setProgressValue]=useState(20);
    const navigate=useNavigate()
    const [path,setPath]=useState(0);
    const changePath=(numb,progress)=>{
        const currentLocation=window.location.pathname.split("/").pop()
        const index=paths.findIndex((item)=>item===currentLocation)
        if(index>=0){
            setPath(paths[index+parseInt(numb)])
            dispatch(LinksAction(paths[index+parseInt(numb)]));
            setProgressValue(progressValue+progress)
            dispatch(ProgressAction(progressValue+progress));
            navigate(`/resume-generator/${paths[index+parseInt(numb)]}`);
        }
    }
    const linkData=useSelector((state)=>state.linkReducer.linkData);
    const progressData=useSelector((state)=>state.progressReducer.progressData);
    console.log(progressData)
    const prevPath=()=>{
        changePath(-1,-20)
    }
    const nextPath=()=>{
        changePath(1,20)
    }
    
    useEffect(()=>{
        const index=paths.findIndex((item)=>item===linkData)
        if(index>=0){
            setProgressValue(index*20)
        }
        console.log(index)
        console.log(linkData)
    },[linkData,progressData])

    useEffect(()=>setPath(window.location.pathname.split("/").pop()),[])

    function handlePreviewClick(){
        dispatch(PreviewAction(true))
    }

    return (
        <Fragment>
            <div className="resume-footer">
                <button type="button" class="btn btn-outline-info btn-sm prev-btn create-button" style={{}} onClick={prevPath} disabled={path==="templates"} >Prev</button>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={progressValue} aria-valuemin="0" aria-valuemax="100" style={{width: `${progressValue}%`}}></div>
                </div>
                <button type="button" class="btn btn-outline-info btn-sm preview-btn create-button" onClick={handlePreviewClick}>Preview</button>
                <button type="button" class="btn btn-outline-info btn-sm next-btn create-button" onClick={nextPath} disabled={path==="projects"} >Next</button>
            </div>
        </Fragment>
        
    )
}