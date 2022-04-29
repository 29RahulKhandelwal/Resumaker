import React, { Fragment, useEffect, useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { EducationAction } from "../../actions";
import { useDispatch } from "react-redux";

const getEducationDataFromLocalStorage=()=>{
    let data=localStorage.getItem("education_data");
    if(data){
        return JSON.parse(data)
    }else{
        return[{
            schoolName:"",
            schoolLocation:"",
            percentage:"",
            major:"",
            cgpa:"",
            educationStartDate:"",
            educationEndDate:""
        }]
    }
}

export default function EducationForm(){
    const dispatch=useDispatch();
    const [educationData,setEducationData]=useState(getEducationDataFromLocalStorage);
    function handleChange(event,index){
        const {name,value}=event.target;
        const data=[...educationData];
        data[index][name]=value;
        setEducationData(data);
    }

    function handleAddMoreEducation(){
        setEducationData([...educationData,{
            schoolName:"",
            schoolLocation:"",
            percentage:"",
            major:"",
            cgpa:"",
            educationStartDate:"",
            educationEndDate:""
        }])
    }
    function handleDeleteMoreEducation(index){
        const data=[...educationData];
        data.splice(index,1);
        setEducationData(data);
    }

    useEffect(()=>{
        dispatch(EducationAction(educationData))
        localStorage.setItem("education_data",JSON.stringify(educationData))
    },[educationData,dispatch])


    return (
        <Fragment>
            {educationData.map((data,index)=>{
                return (
                    <div key={index}>
                        <Input label="SchoolName" id="SchoolName" text="School Name" type="text" name="schoolName" value={data.schoolName} onChange={event=>handleChange(event,index)} placeholder="Stanford University" />
                        <Input label="SchoolLocation" id="SchoolLocation" text="School Location" type="text" name="schoolLocation" value={data.schoolLocation} onChange={event=>handleChange(event,index)} placeholder="Stanford, CA" />
                        <Input label="Percentage" id="Percentage" text="Percentage" type="number" name="percentage" value={data.percentage} onChange={event=>handleChange(event,index)} placeholder="85" />
                        <Input label="Major" id="Major" text="Major" type="text" name="major" value={data.major} onChange={event=>handleChange(event,index)} placeholder="Computer Science" />
                        <Input label="CGPA" id="CGPA" text="CGPA" type="number" name="cgpa" value={data.cgpa} onChange={event=>handleChange(event,index)} placeholder="8.1" />
                        <Input label="educationStartDate" id="educationStartDate" text="Start Date" type="text" name="educationStartDate" value={data.educationStartDate} onChange={event=>handleChange(event,index)} placeholder="Sep 2018" />
                        <Input label="educationEndDate" id="educationEndDate" text="EndDate" type="text" name="educationEndDate" value={data.educationEndDate} onChange={event=>handleChange(event,index)} placeholder="Jun 2022" />
                        <div className="addremove">
                            {educationData.length -1 === index && educationData.length < 5 && <Button type="button" class="btn btn-outline-primary btn-md btn-school" text="Add School" onClick={handleAddMoreEducation} />}
                            {educationData.length !== 1 && <Button type="button" class="btn btn-outline-primary btn-md btn-school" text="Remove School" onClick={()=>handleDeleteMoreEducation(index)} />}
                        </div>
                    </div>
                )
            })}
        </Fragment>
    )
}