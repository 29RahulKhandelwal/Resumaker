import React, { forwardRef } from "react";
import "./ResumeTemplate2.css";

function ResumeTemplate2(props,ref) {
    var profileData = props.profileData;
    var educationData = props.educationData;
    var workData = props.workData;
    var skillData = props.skillData;
    var projectData = props.projectData;
    return (
        <>
            {
                profileData.map((profileElem, profileIndex) => {
                    return (
                        <div class="resume" key={profileIndex} ref={ref}>
                            <div class="resume_left">
                                {profileElem?.data?.imageUrl && <div class="resume_profile">
                                    <img src= {profileElem.data.imageUrl}alt="profile_pic" />
                                </div>}
                                <div class="resume_content">
                                    <div class="resume_item resume_info">
                                        <div class="title">
                                            <p class="bold parabottom">{profileElem.data.fullName}</p>
                                            <p class="regular parabottom">{profileElem.data.jobRole}</p>
                                        </div>
                                        <div class="resume_item resume_about">
                                            <div class="title">
                                                <p class="bold parabottom">About</p>
                                                <p class="about parabottom">{profileElem.data.about}</p>
                                            </div>
                                        </div>
                                        <ul className="unorderedList">
                                            <li>
                                                <div class="icon">
                                                    <i class="fas fa-map-signs"></i>
                                                </div>
                                                <div class="data">
                                                {profileElem.data.location}
                                                </div>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <i class="fas fa-mobile-alt"></i>
                                                </div>
                                                <div class="data">
                                                {profileElem.data.phn}
                                                </div>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <i class="fas fa-envelope"></i>
                                                </div>
                                                <div class="data">
                                                {profileElem.data.email}
                                                </div>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <i class="fab fa-weebly"></i>
                                                </div>
                                                <div class="data">
                                                {profileElem.data.link}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {skillData.map((skillElem, skillIndex) => {
                                        return (
                                            <div class="resume_item resume_skills" key={skillIndex}>
                                                <div class="title">
                                                    <p class="bold">skill's</p>
                                                </div>
                                                <ul className="unorderedList">
                                                    {skillElem?.data[0] && <li>
                                                        <div class="skill_name">
                                                            {skillElem.data[0].skillName}
                                                        </div>
                                                    </li>}
                                                    {skillElem?.data[1] && <li>
                                                        <div class="skill_name">
                                                            {skillElem.data[1].skillName}
                                                        </div>
                                                    </li>}
                                                    {skillElem?.data[2] && <li>
                                                        <div class="skill_name">
                                                            {skillElem.data[2].skillName}
                                                        </div>
                                                    </li>}
                                                    {skillElem?.data[3] && <li>
                                                        <div class="skill_name">
                                                            {skillElem.data[3].skillName}
                                                        </div>
                                                    </li>}
                                                    {skillElem?.data[4] && <li>
                                                        <div class="skill_name">
                                                            {skillElem.data[4].skillName}
                                                        </div>
                                                    </li>}
                                                    {skillElem?.data[5] && <li>
                                                        <div class="skill_name">
                                                            {skillElem.data[5].skillName}
                                                        </div>
                                                    </li>}
                                                    {skillElem?.data[6] && <li>
                                                        <div class="skill_name">
                                                            {skillElem.data[6].skillName}
                                                        </div>
                                                    </li>}
                                                    {skillElem?.data[7] && <li>
                                                        <div class="skill_name">
                                                            {skillElem.data[7].skillName}
                                                        </div>
                                                    </li>}
                                                    {skillElem?.data[8] && <li>
                                                        <div class="skill_name">
                                                            {skillElem.data[8].skillName}
                                                        </div>
                                                    </li>}
                                                    {skillElem?.data[9] && <li>
                                                        <div class="skill_name">
                                                            {skillElem.data[9].skillName}
                                                        </div>
                                                    </li>}
                                                </ul>
                                            </div>
                                        )})}
                                </div>
                            </div>
                            <div class="resume_right">
                            {workData.map((workElem, workIndex) => {
                                return (
                                    <div class="resume_item resume_work" key={workIndex}>
                                        <div class="title">
                                            <p class="bold">Work Experience</p>
                                        </div>
                                        <ul>
                                            {workElem?.data[0] && <li>
                                                <div class="date">{workElem.data[0].startDate} - {workElem.data[0].endDate}</div>
                                                <div class="info">
                                                    <p class="semi-bold">{workElem.data[0].companyName}, {workElem.data[0].jobLocation}</p>
                                                    <p class="semi-bold">{workElem.data[0].jobTitle}</p>
                                                    <p>{workElem.data[0].jobResponsibility1}</p>
                                                    <p>{workElem.data[0].jobResponsibility2}</p>
                                                    <p>{workElem.data[0].jobResponsibility3}</p>
                                                    <p>{workElem.data[0].jobResponsibility4}</p>
                                                    <p>{workElem.data[0].jobResponsibility5}</p>
                                                </div>
                                            </li>}
                                            {workElem?.data[1] && <li>
                                                <div class="date">{workElem.data[1].startDate} - {workElem.data[1].endDate}</div>
                                                <div class="info">
                                                    <p class="semi-bold">{workElem.data[1].companyName}, {workElem.data[1].jobLocation}</p>
                                                    <p class="semi-bold">{workElem.data[1].jobTitle}</p>
                                                    <p>{workElem.data[1].jobResponsibility1}</p>
                                                    <p>{workElem.data[1].jobResponsibility2}</p>
                                                    <p>{workElem.data[1].jobResponsibility3}</p>
                                                    <p>{workElem.data[1].jobResponsibility4}</p>
                                                    <p>{workElem.data[1].jobResponsibility5}</p>
                                                </div>
                                            </li>}
                                            {workElem?.data[2] && <li>
                                                <div class="date">{workElem.data[2].startDate} - {workElem.data[2].endDate}</div>
                                                <div class="info">
                                                    <p class="semi-bold">{workElem.data[2].companyName}, {workElem.data[2].jobLocation}</p>
                                                    <p class="semi-bold">{workElem.data[2].jobTitle}</p>
                                                    <p>{workElem.data[2].jobResponsibility1}</p>
                                                    <p>{workElem.data[2].jobResponsibility2}</p>
                                                    <p>{workElem.data[2].jobResponsibility3}</p>
                                                    <p>{workElem.data[2].jobResponsibility4}</p>
                                                    <p>{workElem.data[2].jobResponsibility5}</p>
                                                </div>
                                            </li>}
                                            {workElem?.data[3] && <li>
                                                <div class="date">{workElem.data[3].startDate} - {workElem.data[3].endDate}</div>
                                                <div class="info">
                                                    <p class="semi-bold">{workElem.data[3].companyName}, {workElem.data[3].jobLocation}</p>
                                                    <p class="semi-bold">{workElem.data[3].jobTitle}</p>
                                                    <p>{workElem.data[3].jobResponsibility1}</p>
                                                    <p>{workElem.data[3].jobResponsibility2}</p>
                                                    <p>{workElem.data[3].jobResponsibility3}</p>
                                                    <p>{workElem.data[3].jobResponsibility4}</p>
                                                    <p>{workElem.data[3].jobResponsibility5}</p>
                                                </div>
                                            </li>}
                                            {workElem?.data[4] && <li>
                                                <div class="date">{workElem.data[4].startDate} - {workElem.data[4].endDate}</div>
                                                <div class="info">
                                                    <p class="semi-bold">{workElem.data[4].companyName}, {workElem.data[4].jobLocation}</p>
                                                    <p class="semi-bold">{workElem.data[4].jobTitle}</p>
                                                    <p>{workElem.data[4].jobResponsibility1}</p>
                                                    <p>{workElem.data[4].jobResponsibility2}</p>
                                                    <p>{workElem.data[4].jobResponsibility3}</p>
                                                    <p>{workElem.data[4].jobResponsibility4}</p>
                                                    <p>{workElem.data[4].jobResponsibility5}</p>
                                                </div>
                                            </li>}
                                        </ul>
                                    </div>
                                )})}
                                {educationData.map((educationElem, educationIndex) => {
                                    return (
                                        <div class="resume_item resume_education" key={educationIndex}>
                                            <div class="title">
                                                <p class="bold">Education</p>
                                            </div>
                                            <ul>
                                                {educationElem?.data[0] && <li>
                                                    <div class="date">{educationElem?.data[0]?.educationStartDate} - {educationElem?.data[0]?.educationEndDate}</div>
                                                    <div class="info">
                                                        <p class="semi-bold">{educationElem?.data[0]?.major} ({educationElem?.data[0]?.schoolName}, {educationElem?.data[0]?.schoolLocation})</p>
                                                        <p>CGPA: {educationElem?.data[0]?.cgpa} Percentage: {educationElem?.data[0]?.percentage}</p>
                                                    </div>
                                                </li>}
                                                {educationElem?.data[1] && <li>
                                                    <div class="date">{educationElem?.data[1]?.educationStartDate} - {educationElem?.data[1]?.educationEndDate}</div>
                                                    <div class="info">
                                                        <p class="semi-bold">{educationElem?.data[1]?.major} ({educationElem?.data[1]?.schoolName}, {educationElem?.data[1]?.schoolLocation})</p>
                                                        <p>CGPA: {educationElem?.data[1]?.cgpa} Percentage: {educationElem?.data[1]?.percentage}</p>
                                                    </div>
                                                </li>}
                                                {educationElem?.data[2] && <li>
                                                    <div class="date">{educationElem?.data[2]?.educationStartDate} - {educationElem?.data[2]?.educationEndDate}</div>
                                                    <div class="info">
                                                        <p class="semi-bold">{educationElem?.data[0]?.major} ({educationElem?.data[2]?.schoolName}, {educationElem?.data[2]?.schoolLocation})</p>
                                                        <p>CGPA: {educationElem?.data[2]?.cgpa} Percentage: {educationElem?.data[2]?.percentage}</p>
                                                    </div>
                                                </li>}
                                                {educationElem?.data[3] && <li>
                                                    <div class="date">{educationElem?.data[3]?.educationStartDate} - {educationElem?.data[3]?.educationEndDate}</div>
                                                    <div class="info">
                                                        <p class="semi-bold">{educationElem?.data[0]?.major} ({educationElem?.data[3]?.schoolName}, {educationElem?.data[3]?.schoolLocation})</p>
                                                        <p>CGPA: {educationElem?.data[3]?.cgpa} Percentage: {educationElem?.data[3]?.percentage}</p>
                                                    </div>
                                                </li>}
                                                {educationElem?.data[4] && <li>
                                                    <div class="date">{educationElem?.data[4]?.educationStartDate} - {educationElem?.data[4]?.educationEndDate}</div>
                                                    <div class="info">
                                                        <p class="semi-bold">{educationElem?.data[0]?.major} ({educationElem?.data[4]?.schoolName}, {educationElem?.data[4]?.schoolLocation})</p>
                                                        <p>CGPA: {educationElem?.data[4]?.cgpa} Percentage: {educationElem?.data[4]?.percentage}</p>
                                                    </div>
                                                </li>}
                                            </ul>
                                        </div>
                                    )})}
                                {projectData.map((projectElem, projectIndex) => {
                                    return (
                                        <div class="resume_item resume_education" key={projectIndex}>
                                            <div class="title">
                                                <p class="bold">Projects</p>
                                            </div>
                                            <ul>
                                                {projectElem?.data[0] && <li>
                                                    <div class="date">{projectElem.data[0].startDate} - {projectElem.data[0].endDate}</div>
                                                    <div class="info">
                                                        <p class="semi-bold">{projectElem.data[0].projectName}</p>
                                                        {projectElem.data[0].projectLink && <a href={projectElem.data[0].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}
                                                        {projectElem.data[0].projectLanguage1 && <p class="semi-bold">Technology: {projectElem.data[0].projectLanguage1} {projectElem.data[0].projectLanguage2} {projectElem.data[0].projectLanguage3} {projectElem.data[0].projectLanguage4} {projectElem.data[0].projectLanguage5} {projectElem.data[0].projectLanguage6} {projectElem.data[0].projectLanguage7} {projectElem.data[0].projectLanguage8} </p>}
                                                        <p>{projectElem.data[0].projectDescription}</p>
                                                    </div>
                                                </li>}
                                                {projectElem?.data[1] && <li>
                                                    <div class="date">{projectElem.data[1].startDate} - {projectElem.data[1].endDate}</div>
                                                    <div class="info">
                                                        <p class="semi-bold">{projectElem.data[1].projectName}</p>
                                                        {projectElem.data[1].projectLink && <a href={projectElem.data[1].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}
                                                        {projectElem.data[1].projectLanguage1 && <p class="semi-bold">Technology: {projectElem.data[1].projectLanguage1} {projectElem.data[1].projectLanguage2} {projectElem.data[1].projectLanguage3} {projectElem.data[1].projectLanguage4} {projectElem.data[1].projectLanguage5} {projectElem.data[1].projectLanguage6} {projectElem.data[1].projectLanguage7} {projectElem.data[1].projectLanguage8} </p>}
                                                        <p>{projectElem.data[1].projectDescription}</p>
                                                    </div>
                                                </li>}
                                                {projectElem?.data[2] && <li>
                                                    <div class="date">{projectElem.data[2].startDate} - {projectElem.data[2].endDate}</div>
                                                    <div class="info">
                                                        <p class="semi-bold">{projectElem.data[2].projectName}</p>
                                                        {projectElem.data[2].projectLink && <a href={projectElem.data[2].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}
                                                        {projectElem.data[2].projectLanguage1 && <p class="semi-bold">Technology: {projectElem.data[2].projectLanguage1} {projectElem.data[2].projectLanguage2} {projectElem.data[2].projectLanguage3} {projectElem.data[2].projectLanguage4} {projectElem.data[2].projectLanguage5} {projectElem.data[2].projectLanguage6} {projectElem.data[2].projectLanguage7} {projectElem.data[2].projectLanguage8} </p>}
                                                        <p>{projectElem.data[2].projectDescription}</p>
                                                    </div>
                                                </li>}
                                                {projectElem?.data[3] && <li>
                                                    <div class="date">{projectElem.data[3].startDate} - {projectElem.data[3].endDate}</div>
                                                    <div class="info">
                                                        <p class="semi-bold">{projectElem.data[3].projectName}</p>
                                                        {projectElem.data[3].projectLink && <a href={projectElem.data[3].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}
                                                        {projectElem.data[3].projectLanguage1 && <p class="semi-bold">Technology: {projectElem.data[3].projectLanguage1} {projectElem.data[3].projectLanguage2} {projectElem.data[3].projectLanguage3} {projectElem.data[3].projectLanguage4} {projectElem.data[3].projectLanguage5} {projectElem.data[3].projectLanguage6} {projectElem.data[3].projectLanguage7} {projectElem.data[3].projectLanguage8} </p>}
                                                        <p>{projectElem.data[3].projectDescription}</p>
                                                    </div>
                                                </li>}
                                                {projectElem?.data[4] && <li>
                                                    <div class="date">{projectElem.data[4].startDate} - {projectElem.data[4].endDate}</div>
                                                    <div class="info">
                                                        <p class="semi-bold">{projectElem.data[4].projectName}</p>
                                                        {projectElem.data[4].projectLink && <a href={projectElem.data[4].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}
                                                        {projectElem.data[4].projectLanguage1 && <p class="semi-bold">Technology: {projectElem.data[4].projectLanguage1} {projectElem.data[4].projectLanguage2} {projectElem.data[4].projectLanguage3} {projectElem.data[4].projectLanguage4} {projectElem.data[4].projectLanguage5} {projectElem.data[4].projectLanguage6} {projectElem.data[4].projectLanguage7} {projectElem.data[4].projectLanguage8} </p>}
                                                        <p>{projectElem.data[4].projectDescription}</p>
                                                    </div>
                                                </li>}
                                            </ul>
                                        </div>
                                    )})}

                            </div>
                        </div>

                    )
                })
            }
        </>
    )
}

export default forwardRef(ResumeTemplate2);