import React, { Fragment } from "react";
import Heading from "../UI/Heading";
import CreateResumeTemplateCard from "./CreateResumeTemplateCard";

export default function Template(){
    return(
        <Fragment>
            <Heading text="CHOOSE A TEMPLATE" />
            <CreateResumeTemplateCard />
        </Fragment>
        
    )
}