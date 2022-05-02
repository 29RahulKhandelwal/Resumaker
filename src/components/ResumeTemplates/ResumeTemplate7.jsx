import React, { forwardRef } from 'react';
import "./ResumeTemplate7.css";

const ResumeTemplate7 = (props, ref) => {
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
                        <div class="resume7-container-fluid overcover" key={profileIndex} ref={ref}>
                            <div class="container profile-box">
                                <div class="row">
                                    <div class="col-md-4 left-co">
                                        <div class="left-side">
                                            <div class="profile-info">
                                                <img src={profileElem.data.imageUrl} alt="Resume_Image" />
                                                    <h3 className='user-name'>{profileElem.data.fullName}</h3>
                                                    <span>{profileElem.data.jobRole}</span>
                                            </div>
                                            <h4 class="ltitle">Contact</h4>
                                            <div class="contact-box pb0">
                                                <div class="icon">
                                                    <i class="fas fa-phone"></i>
                                                </div>
                                                <div class="detail">
                                                {profileElem.data.phn}
                                                </div>
                                            </div>
                                            <div class="contact-box pb0">
                                                <div class="icon">
                                                    <i class="fas fa-globe-americas"></i>
                                                </div>
                                                <div class="detail">
                                                {profileElem.data.link}
                                                </div>
                                            </div>
                                            <div class="contact-box">
                                                <div class="icon">
                                                    <i class="fa-solid fa-envelope"></i>
                                                </div>
                                                <div class="detail">
                                                {profileElem.data.email}
                                                </div>
                                            </div>
                                            <div class="contact-box">
                                                <div class="icon">
                                                    <i class="fas fa-map-marker-alt"></i>
                                                </div>
                                                <div class="detail">
                                                {profileElem.data.location}
                                                </div>
                                            </div>
                                            <h4 class="ltitle">Skills</h4>
                                            {skillData.map((skillElem, skillIndex) => {
                                                return (
                                                    <div class="user-skills" key={skillIndex}>
                                                        <ul class="skills-list">
                                                        {skillElem?.data[0] && <li className='resume7_skills_list'>{skillElem.data[0].skillName}</li>}
                                                        {skillElem?.data[1] && <li className='resume7_skills_list'>{skillElem.data[1].skillName}</li>}
                                                        {skillElem?.data[2] && <li className='resume7_skills_list'>{skillElem.data[2].skillName}</li>}
                                                        {skillElem?.data[3] && <li className='resume7_skills_list'>{skillElem.data[3].skillName}</li>}
                                                        {skillElem?.data[4] && <li className='resume7_skills_list'>{skillElem.data[4].skillName}</li>}
                                                        {skillElem?.data[5] && <li className='resume7_skills_list'>{skillElem.data[5].skillName}</li>}
                                                        {skillElem?.data[6] && <li className='resume7_skills_list'>{skillElem.data[6].skillName}</li>}
                                                        {skillElem?.data[7] && <li className='resume7_skills_list'>{skillElem.data[7].skillName}</li>}
                                                        {skillElem?.data[8] && <li className='resume7_skills_list'>{skillElem.data[8].skillName}</li>}
                                                        {skillElem?.data[9] && <li className='resume7_skills_list'>{skillElem.data[9].skillName}</li>}
                                                        </ul>
                                                    </div>
                                                )})}
                                        </div>
                                    </div>
                                    <div class="col-md-8 rt-div">
                                        <div class="rit-cover">
                                            <div class="hotkey">
                                                <h1 class="">{profileElem.data.fullName}</h1>
                                                <small>{profileElem.data.jobRole}</small>
                                            </div>
                                            <h2 class="rit-titl"><i class="far fa-user"></i> Profile</h2>
                                            <div class="about">
                                                <p className='about-color'>{profileElem.data.about}</p>
                                            </div>

                                            <h2 class="rit-titl"><i class="fas fa-briefcase"></i> Work Experiance</h2>
                                            {workData.map((workElem, workIndex) => {
                                                return (
                                                    <>
                                                        {workElem?.data[0] && <div class="work-exp">
                                                            <h6>{workElem.data[0].jobTitle} <span>{workElem.data[0].startDate} - {workElem.data[0].endDate}</span></h6>
                                                            <i>{workElem.data[0].companyName}, {workElem.data[0].jobLocation}</i>
                                                            <ul>
                                                                <li><i class="far fa-hand-point-right"></i> {workElem.data[0].jobResponsibility1} </li>
                                                                <li><i class="far fa-hand-point-right"></i> {workElem.data[0].jobResponsibility2} </li>
                                                                <li><i class="far fa-hand-point-right"></i> {workElem.data[0].jobResponsibility3} </li>
                                                                <li><i class="far fa-hand-point-right"></i> {workElem.data[0].jobResponsibility4} </li>
                                                                <li><i class="far fa-hand-point-right"></i> {workElem.data[0].jobResponsibility5} </li>
                                                            </ul>
                                                        </div>}
                                                        {workElem?.data[1] && <div class="work-exp">
                                                            <h6>{workElem.data[1].jobTitle} <span>{workElem.data[1].startDate} - {workElem.data[1].endDate}</span></h6>
                                                            <i>{workElem.data[1].companyName}, {workElem.data[1].jobLocation}</i>
                                                            <ul>
                                                                <li><i class="far fa-hand-point-right"></i> {workElem.data[1].jobResponsibility1} </li>
                                                                <li><i class="far fa-hand-point-right"></i> {workElem.data[1].jobResponsibility2} </li>
                                                                <li><i class="far fa-hand-point-right"></i> {workElem.data[1].jobResponsibility3} </li>
                                                                <li><i class="far fa-hand-point-right"></i> {workElem.data[1].jobResponsibility4} </li>
                                                                <li><i class="far fa-hand-point-right"></i> {workElem.data[1].jobResponsibility5} </li>
                                                            </ul>
                                                        </div>}
                                                        {workElem?.data[2] && <div class="work-exp">
                                                            <h6>{workElem.data[2].jobTitle} <span>{workElem.data[2].startDate} - {workElem.data[2].endDate}</span></h6>
                                                            <i>{workElem.data[2].companyName}, {workElem.data[2].jobLocation}</i>
                                                            <ul>
                                                                <li><i class="far fa-hand-point-right"></i> {workElem.data[2].jobResponsibility1} </li>
                                                                <li><i class="far fa-hand-point-right"></i> {workElem.data[2].jobResponsibility2} </li>
                                                                <li><i class="far fa-hand-point-right"></i> {workElem.data[2].jobResponsibility3} </li>
                                                                <li><i class="far fa-hand-point-right"></i> {workElem.data[2].jobResponsibility4} </li>
                                                                <li><i class="far fa-hand-point-right"></i> {workElem.data[2].jobResponsibility5} </li>
                                                            </ul>
                                                        </div>}
                                                        {workElem?.data[3] && <div class="work-exp">
                                                            <h6>{workElem.data[3].jobTitle} <span>{workElem.data[3].startDate} - {workElem.data[3].endDate}</span></h6>
                                                            <i>{workElem.data[3].companyName}, {workElem.data[3].jobLocation}</i>
                                                            <ul>
                                                                <li><i class="far fa-hand-point-right"></i> {workElem.data[3].jobResponsibility1} </li>
                                                                <li><i class="far fa-hand-point-right"></i> {workElem.data[3].jobResponsibility2} </li>
                                                                <li><i class="far fa-hand-point-right"></i> {workElem.data[3].jobResponsibility3} </li>
                                                                <li><i class="far fa-hand-point-right"></i> {workElem.data[3].jobResponsibility4} </li>
                                                                <li><i class="far fa-hand-point-right"></i> {workElem.data[3].jobResponsibility5} </li>
                                                            </ul>
                                                        </div>}
                                                        {workElem?.data[4] && <div class="work-exp">
                                                            <h6>{workElem.data[4].jobTitle} <span>{workElem.data[4].startDate} - {workElem.data[4].endDate}</span></h6>
                                                            <i>{workElem.data[4].companyName}, {workElem.data[4].jobLocation}</i>
                                                            <ul>
                                                                <li><i class="far fa-hand-point-right"></i> {workElem.data[4].jobResponsibility1} </li>
                                                                <li><i class="far fa-hand-point-right"></i> {workElem.data[4].jobResponsibility2} </li>
                                                                <li><i class="far fa-hand-point-right"></i> {workElem.data[4].jobResponsibility3} </li>
                                                                <li><i class="far fa-hand-point-right"></i> {workElem.data[4].jobResponsibility4} </li>
                                                                <li><i class="far fa-hand-point-right"></i> {workElem.data[4].jobResponsibility5} </li>
                                                            </ul>
                                                        </div>}
                                                    </>
                                                )})}
                                            <h2 class="rit-titl"><i class="fas fa-briefcase"></i> Projects</h2>
                                            {projectData.map((projectElem, projectIndex) => {
                                                return (
                                                    <>
                                                        {projectElem?.data[0] && <div class="work-exp" key={projectIndex}>
                                                            <h6>{projectElem.data[0].projectName} <span>{projectElem.data[0].startDate} - {projectElem.data[0].endDate}</span></h6>
                                                            {projectElem.data[0].projectLink && <a href={projectElem.data[0].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}
                                                            {projectElem.data[0].projectLanguage1 &&<i>{projectElem.data[0].projectLanguage1} {projectElem.data[0].projectLanguage2} {projectElem.data[0].projectLanguage3} {projectElem.data[0].projectLanguage4} {projectElem.data[0].projectLanguage5} {projectElem.data[0].projectLanguage6} {projectElem.data[0].projectLanguage7} {projectElem.data[0].projectLanguage8}</i>}
                                                            <ul>
                                                                <li><i class="far fa-hand-point-right"></i>{projectElem.data[0].projectDescription}</li>
                                                            </ul>
                                                        </div>}
                                                        {projectElem?.data[1] && <div class="work-exp" key={projectIndex}>
                                                            <h6>{projectElem.data[1].projectName} <span>{projectElem.data[1].startDate} - {projectElem.data[1].endDate}</span></h6>
                                                            {projectElem.data[1].projectLink && <a href={projectElem.data[1].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}
                                                            {projectElem.data[1].projectLanguage1 &&<i>{projectElem.data[1].projectLanguage1} {projectElem.data[1].projectLanguage2} {projectElem.data[1].projectLanguage3} {projectElem.data[1].projectLanguage4} {projectElem.data[1].projectLanguage5} {projectElem.data[1].projectLanguage6} {projectElem.data[1].projectLanguage7} {projectElem.data[1].projectLanguage8}</i>}
                                                            <ul>
                                                                <li><i class="far fa-hand-point-right"></i>{projectElem.data[1].projectDescription}</li>
                                                            </ul>
                                                        </div>}
                                                        {projectElem?.data[2] && <div class="work-exp" key={projectIndex}>
                                                            <h6>{projectElem.data[2].projectName} <span>{projectElem.data[2].startDate} - {projectElem.data[2].endDate}</span></h6>
                                                            {projectElem.data[2].projectLink && <a href={projectElem.data[2].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}
                                                            {projectElem.data[2].projectLanguage1 &&<i>{projectElem.data[2].projectLanguage1} {projectElem.data[2].projectLanguage2} {projectElem.data[2].projectLanguage3} {projectElem.data[2].projectLanguage4} {projectElem.data[2].projectLanguage5} {projectElem.data[2].projectLanguage6} {projectElem.data[2].projectLanguage7} {projectElem.data[2].projectLanguage8}</i>}
                                                            <ul>
                                                                <li><i class="far fa-hand-point-right"></i>{projectElem.data[2].projectDescription}</li>
                                                            </ul>
                                                        </div>}
                                                        {projectElem?.data[3] && <div class="work-exp" key={projectIndex}>
                                                            <h6>{projectElem.data[3].projectName} <span>{projectElem.data[3].startDate} - {projectElem.data[3].endDate}</span></h6>
                                                            {projectElem.data[3].projectLink && <a href={projectElem.data[3].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}
                                                            {projectElem.data[3].projectLanguage1 &&<i>{projectElem.data[3].projectLanguage1} {projectElem.data[3].projectLanguage2} {projectElem.data[3].projectLanguage3} {projectElem.data[3].projectLanguage4} {projectElem.data[3].projectLanguage5} {projectElem.data[3].projectLanguage6} {projectElem.data[3].projectLanguage7} {projectElem.data[3].projectLanguage8}</i>}
                                                            <ul>
                                                                <li><i class="far fa-hand-point-right"></i>{projectElem.data[3].projectDescription}</li>
                                                            </ul>
                                                        </div>}
                                                        {projectElem?.data[4] && <div class="work-exp" key={projectIndex}>
                                                            <h6>{projectElem.data[4].projectName} <span>{projectElem.data[4].startDate} - {projectElem.data[4].endDate}</span></h6>
                                                            {projectElem.data[4].projectLink && <a href={projectElem.data[4].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}
                                                            {projectElem.data[4].projectLanguage1 &&<i>{projectElem.data[4].projectLanguage1} {projectElem.data[4].projectLanguage2} {projectElem.data[4].projectLanguage3} {projectElem.data[4].projectLanguage4} {projectElem.data[4].projectLanguage5} {projectElem.data[4].projectLanguage6} {projectElem.data[4].projectLanguage7} {projectElem.data[4].projectLanguage8}</i>}
                                                            <ul>
                                                                <li><i class="far fa-hand-point-right"></i>{projectElem.data[4].projectDescription}</li>
                                                            </ul>
                                                        </div>}
                                                    </>
                                                )})}
                                            <h2 class="rit-titl"><i class="fas fa-graduation-cap"></i> Education</h2>
                                            {educationData.map((educationElem, educationIndex) => {
                                                return (
                                                    <div class="education" key={educationIndex}>
                                                    <ul class="row no-margin">
                                                        <>
                                                        {educationElem?.data[0] && <li class="col-md-6"><span>{educationElem?.data[0]?.educationStartDate} - {educationElem?.data[0]?.educationEndDate}</span> <br></br>
                                                            {educationElem?.data[0]?.major} - {educationElem?.data[0]?.schoolName}, {educationElem?.data[0]?.schoolLocation} <br></br>
                                                            CGPA: {educationElem?.data[0]?.cgpa} Percentage: {educationElem?.data[0]?.percentage} </li>}
                                                        {educationElem?.data[1] && <li class="col-md-6"><span>{educationElem?.data[1]?.educationStartDate} - {educationElem?.data[1]?.educationEndDate}</span> <br></br>
                                                            {educationElem?.data[1]?.major} - {educationElem?.data[1]?.schoolName}, {educationElem?.data[1]?.schoolLocation} <br></br>
                                                            CGPA: {educationElem?.data[1]?.cgpa} Percentage: {educationElem?.data[1]?.percentage} </li>}
                                                        {educationElem?.data[2] && <li class="col-md-6"><span>{educationElem?.data[2]?.educationStartDate} - {educationElem?.data[2]?.educationEndDate}</span> <br></br>
                                                            {educationElem?.data[2]?.major} - {educationElem?.data[2]?.schoolName}, {educationElem?.data[2]?.schoolLocation} <br></br>
                                                            CGPA: {educationElem?.data[2]?.cgpa} Percentage: {educationElem?.data[2]?.percentage} </li>}
                                                        {educationElem?.data[3] && <li class="col-md-6"><span>{educationElem?.data[3]?.educationStartDate} - {educationElem?.data[3]?.educationEndDate}</span> <br></br>
                                                            {educationElem?.data[3]?.major} - {educationElem?.data[3]?.schoolName}, {educationElem?.data[3]?.schoolLocation} <br></br>
                                                            CGPA: {educationElem?.data[3]?.cgpa} Percentage: {educationElem?.data[3]?.percentage} </li>}
                                                        {educationElem?.data[4] && <li class="col-md-6"><span>{educationElem?.data[4]?.educationStartDate} - {educationElem?.data[4]?.educationEndDate}</span> <br></br>
                                                            {educationElem?.data[4]?.major} - {educationElem?.data[4]?.schoolName}, {educationElem?.data[4]?.schoolLocation} <br></br>
                                                            CGPA: {educationElem?.data[4]?.cgpa} Percentage: {educationElem?.data[4]?.percentage} </li>}
                                                        </>
                                                        </ul>
                                                    </div>
                                                )})}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    )})}
        </>
    )
}

export default forwardRef(ResumeTemplate7);