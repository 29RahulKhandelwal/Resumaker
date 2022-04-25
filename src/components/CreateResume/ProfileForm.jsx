import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../UI/Input";
import { ProfileAction } from "../../actions";

export default function ProfileForm(){
    const dispatch=useDispatch();
    const [profileData,setProfileData]=useState({
        fullName:"",
        email:"",
        phn:"",
        location:"",
        link:"",
        jobRole:"",
        imageUrl:"",
        about:""
    });
    function handleChange(event){
        const {name,value}=event.target;
        setProfileData(prevData=>{
            return {
                ...prevData,
                [name]:value
            }
        })
    }
    useEffect(()=>{
        dispatch(ProfileAction(profileData))
    },[profileData,dispatch]);

    return (
        <Fragment>
            <Input label="FullName" id="FullName" text="Full Name" type="text" name="fullName" value={profileData.fullName} onChange={handleChange} placeholder="STEPHEN COLBERT" />
            <Input label="JobRole" id="JobRole" text="Job Role" type="text" name="jobRole" value={profileData.jobRole} onChange={handleChange} placeholder="Software Engineer" />
            <Input label="image" id="image" text="Image URL" type="text" name="imageUrl" value={profileData.imageUrl} onChange={handleChange} placeholder="https://images.profilepic.com" />
            <Input label="About" id="About" text="About" type="text" name="about" value={profileData.about} onChange={handleChange} placeholder="Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success." />
            <Input label="Email" id="Email" text="Email" type="email" name="email" value={profileData.email} onChange={handleChange} placeholder="stephen@gmail.com" />
            <Input label="PhoneNumber" id="PhoneNumber" text="Phone Number" type="number" name="phn" value={profileData.phn} onChange={handleChange} placeholder="+324 4445678" />
            <Input label="Location" id="Location" text="Location" type="text" name="location" value={profileData.location} onChange={handleChange} placeholder="21 Street, Texas USA" />
            <Input label="Link" id="Link" text="Link" type="url" name="link" value={profileData.link} onChange={handleChange} placeholder="www.stephen.com" />
        </Fragment>
    )
}