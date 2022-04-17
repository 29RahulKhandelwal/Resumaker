import React from "react";
import "./ResumeTemplate1.css";

export default function ResumeTemplate1(props) {
    const {
        fullname,
        email,
        phn,
        location,
        link,
        image,
        role,
        overview
    }=props.profile;

    const {
        schoolName,
        schoolLocation,
        percentage,
        major,
        cgpa,
        educationStartDate,
        educationEndDate
    }=props.education;

    const{
        companyName,
        jobTitle,
        jobLocation,
        startDate,
        endDate,
        jobResponsibility
    }=props.work;

    const {
        skillName,
    }=props.skills;

    const{
        projectName,
        projectDescription,
        projectLink,
        projectLanguages
    }=props.projects;

    return (
        <div class="resume_wrapper">
            <div class="resume_left">
                <div class="resume_image">
                    <img src={image} alt="Resume_image" />
                </div>
                <div class="resume_bottom">
                    <div class="resume_item resume_namerole">
                        <div class="name">{fullname}</div>
                        <div class="role">{role}</div>
                    </div>
                    <div class="resume_item resume_profile">
                        <div class="resume_title">Profile</div>
                        <div class="resume_info">{overview}</div>
                    </div>
                    <div class="resume_item resume_address">
                        <div class="resume_title">Address</div>
                        <div class="resume_info">
                            {location}
                        </div>
                    </div>
                    <div class="resume_item resume_contact">
                        <div class="resume_title">Contact</div>
                        <div class="resume_info">
                            <div class="resume_subtitle">Phone</div>
                            <div class="resume_subinfo">{phn}</div>
                        </div>
                        <div class="resume_info">
                            <div class="resume_subtitle">Email</div>
                            <div class="resume_subinfo">{email}</div>
                        </div>
                        <div class="resume_info">
                            <div class="resume_subtitle">Website</div>
                            <div class="resume_subinfo">{link}</div>
                        </div>
                    </div>
                    <div class="resume_item resume_skills">
                        <div class="resume_title">Skills</div>
                        <div class="resume_info">
                            <div class="skills_list">
                                <div class="skills_left">{skillName}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="resume_right">
                <div class="resume_item resume_namerole">
                    <div class="name">{fullname}</div>
                    <div class="role">{role}</div>
                </div>
                <div class="resume_item resume_education">
                    <div class="resume_title">Education</div>
                    <div class="resume_info">
                        <div class="resume_data">
                            <div class="year">{educationStartDate} - {educationEndDate}</div>
                            <div class="content">
                                <p>{schoolName}, {schoolLocation}</p>
                                <p>{major} CGPA: {cgpa} Percentage: {percentage}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="resume_item resume_experience">
                    <div class="resume_title">Experience</div>
                    <div class="resume_info">
                        <div class="resume_data">
                            <div class="year">{startDate} - {endDate}</div>
                            <div class="content">
                                <p>{companyName}, {jobLocation}</p>
                                <p>{jobTitle}</p>
                                <ul>
							        <li><i class="fa-solid fa-circle"></i> {jobResponsibility}</li>
							<li><span>•</span> cloud</li>
						</ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="resume_item resume_experience">
                    <div class="resume_title">Project</div>
                    <div class="resume_info">
                        <div class="resume_data">
                            <div class="year">2013 - 2015</div>
                            <div class="content">
                                <p>{projectName} &nbsp;&nbsp;<a href={projectLink}>ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a></p>
                                <p>Technology: {projectLanguages}</p>
                                <ul>
							        <li><i class="fa-solid fa-circle"></i> {projectDescription}</li>
							<li><span>•</span> cloud</li>
						</ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}