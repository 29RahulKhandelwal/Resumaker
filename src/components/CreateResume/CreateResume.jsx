import React from "react";
import Button from "../UI/Button";
import "./CreateResume.css";
import SideLinks from "./SideLinks";
import Template from "./Template";

export default function CreateResume() {
    return (
        <div class="row">
            <div class="col col-lg-1 col-border">
                <SideLinks />
                <Button type="button" class="btn btn-center btn-outline-primary btn-md" text="MAKE" />
            </div>
            <div class="col col-lg-5 col-border">
                <Template />
            </div>
            <div class="col col-lg-6 col-border">
                Column
            </div>
        </div>
    )
}