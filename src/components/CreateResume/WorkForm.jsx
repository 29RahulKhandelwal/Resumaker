import React, { Fragment, useState } from "react";
import Button from "../UI/Button";
import CircleButton from "../UI/CircleButton";
import Input from "../UI/Input";
import ShortInput from "../UI/ShortInput";


export default function WorkForm(){
    const [workData,setWorkData]=useState([{
        companyName:"",
        jobTitle:"",
        jobLocation:"",
        startDate:"",
        endDate:"",
        jobResponsibility:""
    }]);
    function handleChange(event,index){
        const {name,value}=event.target;
        const data=[...workData];
        data[index][name]=value;
        setWorkData(data);
    }
    function addWorkData(){
        setWorkData([...workData,{
            companyName:"",
            jobTitle:"",
            jobLocation:"",
            startDate:"",
            endDate:"",
            jobResponsibility:""
        }])
    }
    function removeWorkData(index){
        const data=[...workData];
        data.splice(index,1);
        setWorkData(data);
    }

    const [jobResponseData,setjobResponseData]=useState([{jobResponsibility:""}]);
    function handleJobResponseChange(e,index){
        const {name,value}=e.target;
        const jobResponseList=[...jobResponseData];
        jobResponseList[index][name]=value;
        setjobResponseData(jobResponseList);
    }
    function addJobResponse(){
        setjobResponseData([...jobResponseData,{jobResponsibility:""}])
    }
    function deleteJobResponse(index){
        const jobResponseList=[...jobResponseData];
        jobResponseList.splice(index,1);
        setjobResponseData(jobResponseList);
    }

    // console.log(workData);
    console.log(jobResponseData);

    return (
        <Fragment>
            {workData.map((data,index)=>{
                return (
                    <div key={index}>
                        <Input label="CompanyName" id="CompanyName" text="Company Name" type="text" name="companyName" value={data.companyName} onChange={event=>handleChange(event,index)} placeholder="MICROSOFT" />
                        <Input label="JobTitle" id="JobTitle" text="JobTitle" type="text" name="jobTitle" value={data.jobTitle} onChange={event=>handleChange(event,index)} placeholder="Software Engineer" />
                        <Input label="JobLocation" id="JobLocation" text="Job Location" type="text" name="jobLocation" value={data.jobLocation} onChange={event=>handleChange(event,index)} placeholder="Stanford, CA" />
                        <Input label="StartDate" id="StartDate" text="Start Date" type="text" name="startDate" value={data.startDate} onChange={event=>handleChange(event,index)} placeholder="Sep 2018" />
                        <Input label="EndDate" id="End Date" text="EndDate" type="text" name="endDate" value={data.endDate} onChange={event=>handleChange(event,index)} placeholder="Jun 2022" />
                        {jobResponseData.map((data,index)=>(
                            <div key={index}>
                                <ShortInput label="JobResponsibilty" id="JobResponsibilty" text="Job Responsibilty" type="text" name="jobResponsibility"  placeholder="Did cool stuff at company" value={data.jobResponsibility} onChange={(e)=>handleJobResponseChange(e,index)} />
                                <div className="circle">
                                    {jobResponseData.length -1 === index && jobResponseData.length < 5 && <CircleButton type="button" class="btn btn-outline-primary btn-md btn-circle" text="+" onClick={addJobResponse}  />}
                                    {jobResponseData.length > 1 && <CircleButton type="button" class="btn btn-outline-primary btn-md btn-circle" text="-" onClick={deleteJobResponse}  />}
                                </div>
                            </div>
                        ))}
                        <div className="addremove">
                            {workData.length -1 === index && <Button type="button" class="btn btn-outline-primary btn-md btn-school" text="Add Job" onClick={addWorkData} />}
                            {workData.length !== 1 &&  <Button type="button" class="btn btn-outline-primary btn-md btn-school" text="Remove Job" onClick={removeWorkData} />}
                        </div>
                    </div>
                )
            })}
        </Fragment>
    )
}