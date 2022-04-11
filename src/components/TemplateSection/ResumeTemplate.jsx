import React, { Fragment } from "react";
import Button from "../UI/Button";
import ResumeTemplateCard from "./ResumeTemplateCard";

export default function ResumeTemplate() {
    return (
        <Fragment>
            <ResumeTemplateCard />
            <Button type="button" class="btn btn-center btn-outline-primary btn-lg" text="CREATE MY RESUME" />
        </Fragment>
    )
}