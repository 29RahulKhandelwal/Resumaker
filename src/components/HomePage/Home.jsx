import React from "react";
import "./Home.css";
import HeadingSection from "./HeadingSection";
import TemplateSection from "./TemplateSection";

export default function Home() {
    return (
        <div className="container">
            <div class="row">
                <HeadingSection />
                <TemplateSection />
            </div>
        </div>
    )
}