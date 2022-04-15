import React, { Fragment, useState } from "react";
import Input from "../UI/Input";

export default function ProfileForm(){
    const [profileData,setProfileData]=useState({
        fullName:"",
        email:"",
        phn:"",
        location:"",
        link:""
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
    console.log(profileData);
    return (
        <Fragment>
            <Input label="FullName" id="FullName" text="Full Name" type="text" name="fullName" value={profileData.fullName} onChange={handleChange} placeholder="STEPHEN COLBERT" />
            <Input label="Email" id="Email" text="Email" type="email" name="email" value={profileData.email} onChange={handleChange} placeholder="stephen@gmail.com" />
            <Input label="PhoneNumber" id="PhoneNumber" text="Phone Number" type="number" name="phn" value={profileData.phn} onChange={handleChange} placeholder="+324 4445678" />
            <Input label="Location" id="Location" text="Location" type="text" name="location" value={profileData.location} onChange={handleChange} placeholder="21 Street, Texas USA" />
            <Input label="Link" id="Link" text="Link" type="url" name="link" value={profileData.link} onChange={handleChange} placeholder="www.stephen.com" />
        </Fragment>
    )
}