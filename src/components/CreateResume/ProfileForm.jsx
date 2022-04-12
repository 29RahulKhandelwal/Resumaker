import React, { Fragment, useState } from "react";
import Input from "../UI/Input";


export default function ProfileForm(){
    return (
        <Fragment>
            <Input label="FullName" id="FullName" text="Full Name" type="text" placeholder="STEPHEN COLBERT" />
            <Input label="Email" id="Email" text="Email" type="email" placeholder="stephen@gmail.com" />
            <Input label="PhoneNumber" id="PhoneNumber" text="Phone Number" type="number" placeholder="+324 4445678" />
            <Input label="Location" id="Location" text="Location" type="text" placeholder="21 Street, Texas USA" />
            <Input label="Link" id="Link" text="Link" type="url" placeholder="www.stephen.com" />
        </Fragment>
    )
}