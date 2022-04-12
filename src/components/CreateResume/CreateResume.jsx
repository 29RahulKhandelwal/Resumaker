import React, { Fragment } from "react";
import Button from "../UI/Button";
import "./CreateResume.css";
import Education from "./Education";
import Profile from "./Profile";
import SideLinks from "./SideLinks";
import Template from "./Template";

export default function CreateResume() {
    return (
        <Fragment>
            <div class="row">
                <div class="col col-lg-1 col-border col-display">
                    <SideLinks />
                    <Button type="button" class="btn btn-center btn-outline-primary btn-md" text="MAKE" />
                </div>
                <div class="col col-lg-5 col-md-12 col-border scroll-bar">
                    {/* <Template /> */}
                    {/* <Profile /> */}
                    <Education />

                </div>
                <div class="col col-lg-6 col-border col-display">
                    Column
                </div>
            </div>
            <div className="footer">
                <button type="button" class="btn btn-center btn-outline-info btn-sm prev-btn" >Prev</button>
                <hr className="process-line" />
                <button type="button" class="btn btn-center btn-outline-info btn-sm next-btn" >Next</button>
            </div>
        </Fragment>
    )
}