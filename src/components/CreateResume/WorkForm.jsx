import React, { Fragment, useEffect, useState } from "react";
import Button from "../UI/Button";
import CircleButton from "../UI/CircleButton";
import Input from "../UI/Input";
import ShortInput from "../UI/ShortInput";
import { WorkAction } from "../../actions";
import { useDispatch } from "react-redux";


export default function WorkForm(){
    const dispatch=useDispatch();
    const [data,setData]=useState({});
    const [jobResponseData,setJobResponseData]=useState("");
    const [jobResponse,setJobResponse]=useState([]);
    const [workData,setWorkData]=useState([{
        companyName:"",
        jobTitle:"",
        jobLocation:"",
        startDate:"",
        endDate:"",
        jobResponsibility:""
    }]);
    function handleChange(event){
        const {name,value}=event.target;
        setWorkData({...workData,[name]:value});
    }
    function handleAddInput(){
        setData(data.length > 0 ? [...data,{...workData,jobResponse:jobResponse}] : [{...workData,jobResponse:jobResponse}])
        setWorkData({
        companyName:"",
        jobTitle:"",
        jobLocation:"",
        startDate:"",
        endDate:"",
        jobResponsibility:""});
        setJobResponse([]);
    }
    // function handleDeleteInput(index){
    //     const temp=[...data];
    //     temp.splice(index,1);
    //     setData(temp);
    // }
    function handleJobResponseChange(e,index){
        const {value}=e.target;
        setJobResponseData(value);
    }
    function handleJobResponseAdd(){
        if(jobResponseData){
            setJobResponse(jobResponse.length > 0 ? [...jobResponse,jobResponseData] : [jobResponseData])
            setJobResponseData("")
        } 
    }

    useEffect(()=>{
        dispatch(WorkAction(data))
    },[data,dispatch])

    console.log(data);

    return (
        <Fragment>
            <Input label="CompanyName" id="CompanyName" text="Company Name" type="text" name="companyName" placeholder="MICROSOFT" value={workData.companyName} onChange={event=>handleChange(event)} />
            <Input label="JobTitle" id="JobTitle" text="JobTitle" type="text" name="jobTitle" placeholder="Software Engineer" value={workData.jobTitle} onChange={event=>handleChange(event)} />
            <Input label="JobLocation" id="JobLocation" text="Job Location" type="text" name="jobLocation" placeholder="Stanford, CA" value={workData.jobLocation} onChange={event=>handleChange(event)} />
            <Input label="StartDate" id="StartDate" text="Start Date" type="text" name="startDate" placeholder="Sep 2018" value={workData.startDate} onChange={event=>handleChange(event)} />
            <Input label="EndDate" id="End Date" text="EndDate" type="text" name="endDate" placeholder="Jun 2022" value={workData.endDate} onChange={event=>handleChange(event)} />
            <ShortInput label="JobResponsibilty" id="JobResponsibilty" text="Job Responsibilty" type="text" name="jobResponsibility" placeholder="Did cool stuff at company" value={jobResponseData} onChange={event=>handleJobResponseChange(event)} />
            <div className="circle">
                <CircleButton type="button" class="btn btn-outline-primary btn-md btn-circle" text="+" onClick={handleJobResponseAdd} />
            </div>
            <div className="addremove">
                <Button type="button" class="btn btn-outline-primary btn-md btn-school" text="Add Work" onClick={handleAddInput} />
                <Button type="button" class="btn btn-outline-primary btn-md btn-school" text="Remove Work" />
            </div>
        </Fragment>
    )
}