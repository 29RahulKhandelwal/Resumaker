import React, { Fragment } from "react";
import Heading from "../UI/Heading";
import HonorAwardsForm from "./HonorAwardsForm";

export default function HonorAwards(){
    return (
        <Fragment>
            <Heading text="HONORS & AWARDS" />
            <HonorAwardsForm />
        </Fragment>
    )
}