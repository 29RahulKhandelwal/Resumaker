import React, { Fragment } from "react";
import Heading from "../UI/Heading";
import ProfileForm from "./ProfileForm";

export default function Profile(){
    return (
        <Fragment>
            <Heading text="YOUR PERSONAL INFO" />
            <ProfileForm />
        </Fragment>
    )
}