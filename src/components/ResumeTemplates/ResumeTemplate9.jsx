import React, { forwardRef } from 'react'
import "./ResumeTemplate9.css";

const ResumeTemplate9 = (props, ref) => {
    var profileData=props.profileData;
    var educationData=props.educationData;
    var workData=props.workData;
    var skillData=props.skillData;
    var projectData=props.projectData;
    return (
        <>
            {
                profileData.map((profileElem, profileIndex) => {
                    return (
                        <div class="overcover" key={profileIndex} ref={ref}>
                            <div class="container profile-box">
                                <div class="row">
                                    <div class="col-lg-4 col-md-5 leftgh">
                                    {profileElem?.data?.imageUrl && <div class="image-box">
                                            <img src={profileElem.data.imageUrl} alt="Resume_img" />
                                        </div>}
                                        <div class="name-info">
                                            <h1>{profileElem.data.fullName}</h1>

                                            <div class="row no-margin">
                                                <div class="col-4">
                                                    Telephone
                                                </div>
                                                <div class="col-8">
                                                {profileElem.data.phn}
                                                </div>
                                            </div>
                                            <div class="row no-margin">
                                                <div class="col-4">
                                                    Email
                                                </div>
                                                <div class="col-8">
                                                {profileElem.data.email}
                                                </div>
                                            </div>
                                            <div class="row no-margin">
                                                <div class="col-4">
                                                    Website
                                                </div>
                                                <div class="col-8">
                                                {profileElem.data.link}
                                                </div>
                                            </div>
                                            <div class="row no-margin">
                                                <div class="col-4">
                                                    Address
                                                </div>
                                                <div class="col-8">
                                                {profileElem.data.location}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="profile">
                                            <h2>Profile</h2>
                                            <p>{profileElem.data.about}</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-8 col-md-7 no-padding">
                                    {educationData.map((educationElem, educationIndex) => {
                                        return (
                                            <div class="rit-data" key={educationIndex}>
                                                <h2>Education</h2>
                                                {educationElem?.data[0] && <ul>
                                                    <li><b>{educationElem?.data[0]?.schoolName}, {educationElem?.data[0]?.schoolLocation} <span>{educationElem?.data[0]?.educationStartDate} - {educationElem?.data[0]?.educationEndDate}</span></b>
                                                        <p>{educationElem?.data[0]?.major}, CGPA: {educationElem?.data[0]?.cgpa} Percentage: {educationElem?.data[0]?.percentage}</p>
                                                    </li>
                                                </ul>}
                                                {educationElem?.data[1] && <ul>
                                                    <li><b>{educationElem?.data[1]?.schoolName}, {educationElem?.data[1]?.schoolLocation} <span>{educationElem?.data[1]?.educationStartDate} - {educationElem?.data[1]?.educationEndDate}</span></b>
                                                        <p>{educationElem?.data[1]?.major}, CGPA: {educationElem?.data[1]?.cgpa} Percentage: {educationElem?.data[1]?.percentage}</p>
                                                    </li>
                                                </ul>}
                                                {educationElem?.data[2] && <ul>
                                                    <li><b>{educationElem?.data[2]?.schoolName}, {educationElem?.data[2]?.schoolLocation} <span>{educationElem?.data[2]?.educationStartDate} - {educationElem?.data[2]?.educationEndDate}</span></b>
                                                        <p>{educationElem?.data[2]?.major}, CGPA: {educationElem?.data[2]?.cgpa} Percentage: {educationElem?.data[2]?.percentage}</p>
                                                    </li>
                                                </ul>}
                                                {educationElem?.data[3] && <ul>
                                                    <li><b>{educationElem?.data[3]?.schoolName}, {educationElem?.data[3]?.schoolLocation} <span>{educationElem?.data[3]?.educationStartDate} - {educationElem?.data[3]?.educationEndDate}</span></b>
                                                        <p>{educationElem?.data[3]?.major}, CGPA: {educationElem?.data[3]?.cgpa} Percentage: {educationElem?.data[3]?.percentage}</p>
                                                    </li>
                                                </ul>}
                                                {educationElem?.data[4] && <ul>
                                                    <li><b>{educationElem?.data[4]?.schoolName}, {educationElem?.data[4]?.schoolLocation} <span>{educationElem?.data[4]?.educationStartDate} - {educationElem?.data[4]?.educationEndDate}</span></b>
                                                        <p>{educationElem?.data[4]?.major}, CGPA: {educationElem?.data[0]?.cgpa} Percentage: {educationElem?.data[4]?.percentage}</p>
                                                    </li>
                                                </ul>}
                                            </div>
                                        )})}
                                        {workData.map((workElem, workIndex) => {
                                            return (
                                                <div class="rit-data" key={workIndex}>
                                                    <h2>Experience</h2>
                                                    {workElem?.data[0] && <ul>
                                                        <li><b>{workElem.data[0].companyName}, {workElem.data[0].jobLocation} <span>{workElem.data[0].startDate} - {workElem.data[0].endDate}</span></b>
                                                            <p>{workElem.data[0].jobTitle}</p>
                                                            <p>{workElem.data[0].jobResponsibility1}</p>
                                                            <p>{workElem.data[0].jobResponsibility2}</p>
                                                            <p>{workElem.data[0].jobResponsibility3}</p>
                                                            <p>{workElem.data[0].jobResponsibility4}</p>
                                                            <p>{workElem.data[0].jobResponsibility5}</p>
                                                        </li>
                                                    </ul>}
                                                    {workElem?.data[1] && <ul>
                                                        <li><b>{workElem.data[1].companyName}, {workElem.data[1].jobLocation} <span>{workElem.data[1].startDate} - {workElem.data[1].endDate}</span></b>
                                                            <p>{workElem.data[1].jobTitle}</p>
                                                            <p>{workElem.data[1].jobResponsibility1}</p>
                                                            <p>{workElem.data[1].jobResponsibility2}</p>
                                                            <p>{workElem.data[1].jobResponsibility3}</p>
                                                            <p>{workElem.data[1].jobResponsibility4}</p>
                                                            <p>{workElem.data[1].jobResponsibility5}</p>
                                                        </li>
                                                    </ul>}
                                                    {workElem?.data[2] && <ul>
                                                        <li><b>{workElem.data[2].companyName}, {workElem.data[2].jobLocation} <span>{workElem.data[2].startDate} - {workElem.data[2].endDate}</span></b>
                                                            <p>{workElem.data[2].jobTitle}</p>
                                                            <p>{workElem.data[2].jobResponsibility1}</p>
                                                            <p>{workElem.data[2].jobResponsibility2}</p>
                                                            <p>{workElem.data[2].jobResponsibility3}</p>
                                                            <p>{workElem.data[2].jobResponsibility4}</p>
                                                            <p>{workElem.data[2].jobResponsibility5}</p>
                                                        </li>
                                                    </ul>}
                                                    {workElem?.data[3] && <ul>
                                                        <li><b>{workElem.data[3].companyName}, {workElem.data[3].jobLocation} <span>{workElem.data[3].startDate} - {workElem.data[3].endDate}</span></b>
                                                            <p>{workElem.data[3].jobTitle}</p>
                                                            <p>{workElem.data[3].jobResponsibility1}</p>
                                                            <p>{workElem.data[3].jobResponsibility2}</p>
                                                            <p>{workElem.data[3].jobResponsibility3}</p>
                                                            <p>{workElem.data[3].jobResponsibility4}</p>
                                                            <p>{workElem.data[3].jobResponsibility5}</p>
                                                        </li>
                                                    </ul>}
                                                    {workElem?.data[4] && <ul>
                                                        <li><b>{workElem.data[4].companyName}, {workElem.data[4].jobLocation} <span>{workElem.data[4].startDate} - {workElem.data[4].endDate}</span></b>
                                                            <p>{workElem.data[4].jobTitle}</p>
                                                            <p>{workElem.data[4].jobResponsibility1}</p>
                                                            <p>{workElem.data[4].jobResponsibility2}</p>
                                                            <p>{workElem.data[4].jobResponsibility3}</p>
                                                            <p>{workElem.data[4].jobResponsibility4}</p>
                                                            <p>{workElem.data[4].jobResponsibility5}</p>
                                                        </li>
                                                    </ul>}
                                                </div>
                                            )})}
                                        {projectData.map((projectElem, projectIndex) => {
                                            return (
                                                <div class="rit-data" key={projectIndex}>
                                                    <h2>Projects</h2>
                                                    {projectElem?.data[0] && <ul>
                                                        <li><b><a href={projectElem.data[0].projectLink} className='project-anchor'>
                                                        {projectElem.data[0].projectName}
                                                        </a><span>{projectElem.data[0].startDate} - {projectElem.data[0].endDate}</span></b>
                                                        {projectElem.data[0].projectLanguage1 && <p>Technology: {projectElem.data[0].projectLanguage1} {projectElem.data[0].projectLanguage2} {projectElem.data[0].projectLanguage3} {projectElem.data[0].projectLanguage4} {projectElem.data[0].projectLanguage5} {projectElem.data[0].projectLanguage6} {projectElem.data[0].projectLanguage7} {projectElem.data[0].projectLanguage8}</p>}
                                                        <p>{projectElem.data[0].projectDescription}</p>
                                                        </li>
                                                    </ul>}
                                                    {projectElem?.data[1] && <ul>
                                                        <li><b><a href={projectElem.data[1].projectLink} className='project-anchor'>
                                                        {projectElem.data[1].projectName}
                                                        </a><span>{projectElem.data[1].startDate} - {projectElem.data[1].endDate}</span></b>
                                                        {projectElem.data[1].projectLanguage1 && <p>Technology: {projectElem.data[1].projectLanguage1} {projectElem.data[1].projectLanguage2} {projectElem.data[1].projectLanguage3} {projectElem.data[1].projectLanguage4} {projectElem.data[1].projectLanguage5} {projectElem.data[1].projectLanguage6} {projectElem.data[1].projectLanguage7} {projectElem.data[1].projectLanguage8}</p>}
                                                        <p>{projectElem.data[1].projectDescription}</p>
                                                        </li>
                                                    </ul>}
                                                    {projectElem?.data[2] && <ul>
                                                        <li><b><a href={projectElem.data[2].projectLink} className='project-anchor'>
                                                        {projectElem.data[2].projectName}
                                                        </a><span>{projectElem.data[2].startDate} - {projectElem.data[2].endDate}</span></b>
                                                        {projectElem.data[2].projectLanguage1 && <p>Technology: {projectElem.data[2].projectLanguage1} {projectElem.data[2].projectLanguage2} {projectElem.data[2].projectLanguage3} {projectElem.data[2].projectLanguage4} {projectElem.data[0].projectLanguage5} {projectElem.data[2].projectLanguage6} {projectElem.data[2].projectLanguage7} {projectElem.data[2].projectLanguage8}</p>}
                                                        <p>{projectElem.data[2].projectDescription}</p>
                                                        </li>
                                                    </ul>}
                                                    {projectElem?.data[3] && <ul>
                                                        <li><b><a href={projectElem.data[3].projectLink} className='project-anchor'>
                                                        {projectElem.data[3].projectName}
                                                        </a><span>{projectElem.data[3].startDate} - {projectElem.data[3].endDate}</span></b>
                                                        {projectElem.data[3].projectLanguage1 && <p>Technology: {projectElem.data[3].projectLanguage1} {projectElem.data[3].projectLanguage2} {projectElem.data[3].projectLanguage3} {projectElem.data[3].projectLanguage4} {projectElem.data[3].projectLanguage5} {projectElem.data[3].projectLanguage6} {projectElem.data[3].projectLanguage7} {projectElem.data[3].projectLanguage8}</p>}
                                                        <p>{projectElem.data[3].projectDescription}</p>
                                                        </li>
                                                    </ul>}
                                                    {projectElem?.data[4] && <ul>
                                                        <li><b><a href={projectElem.data[4].projectLink} className='project-anchor'>
                                                        {projectElem.data[4].projectName}
                                                        </a><span>{projectElem.data[4].startDate} - {projectElem.data[4].endDate}</span></b>
                                                        {projectElem.data[4].projectLanguage1 && <p>Technology: {projectElem.data[4].projectLanguage1} {projectElem.data[4].projectLanguage2} {projectElem.data[4].projectLanguage3} {projectElem.data[4].projectLanguage4} {projectElem.data[4].projectLanguage5} {projectElem.data[4].projectLanguage6} {projectElem.data[4].projectLanguage7} {projectElem.data[4].projectLanguage8}</p>}
                                                        <p>{projectElem.data[4].projectDescription}</p>
                                                        </li>
                                                    </ul>}
                                                </div>
                                            )})}
                                        {skillData.map((skillElem, skillIndex) => {
                                            return (
                                                <div class="rit-data" key={skillIndex}>
                                                    <h2>Skills</h2>
                                                    <ul>
                                                        <li>
                                                        {skillElem?.data[0] && <p class="skills-list">{skillElem.data[0].skillName}</p> }   
                                                        {skillElem?.data[1] && <p class="skills-list">{skillElem.data[1].skillName}</p> }   
                                                        {skillElem?.data[2] && <p class="skills-list">{skillElem.data[2].skillName}</p> }   
                                                        {skillElem?.data[3] && <p class="skills-list">{skillElem.data[3].skillName}</p> }   
                                                        {skillElem?.data[4] && <p class="skills-list">{skillElem.data[4].skillName}</p> }   
                                                        {skillElem?.data[5] && <p class="skills-list">{skillElem.data[5].skillName}</p> }   
                                                        {skillElem?.data[6] && <p class="skills-list">{skillElem.data[6].skillName}</p> }   
                                                        {skillElem?.data[7] && <p class="skills-list">{skillElem.data[7].skillName}</p> }   
                                                        {skillElem?.data[8] && <p class="skills-list">{skillElem.data[8].skillName}</p> }   
                                                        {skillElem?.data[9] && <p class="skills-list">{skillElem.data[9].skillName}</p> }   
                                                        </li>
                                                    </ul>
                                                </div>
                                            )})}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )})}
        </>
    )
}

export default forwardRef(ResumeTemplate9)