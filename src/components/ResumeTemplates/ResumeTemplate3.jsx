import React, {forwardRef} from "react";
import "./ResumeTemplate3.css"

function ResumeTemplate3(props,ref) {
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
                        <div class="wrapper" key={profileIndex} ref={ref}>
                            <div class="resume_template3">
                                <div class="left">
                                    {profileElem?.data?.imageUrl && <div class="img_holder">
                                        <img src={profileElem.data.imageUrl} alt="resume_image" />
                                    </div>}
                                    <div class="contact_wrap pb">
                                        <div class="resume_template3_title">
                                            Contact
                                        </div>
                                        <div class="contact">
                                            <ul className="resume_template3_ul">
                                                <li>
                                                    <div class="li_wrap">
                                                        <div class="icon"><i class="fas fa-mobile-alt" aria-hidden="true"></i></div>
                                                        <div class="text">{profileElem.data.phn}</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="li_wrap">
                                                        <div class="icon"><i class="fas fa-envelope" aria-hidden="true"></i></div>
                                                        <div class="text">{profileElem.data.email}</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="li_wrap">
                                                        <div class="icon"><i class="fab fa-weebly" aria-hidden="true"></i></div>
                                                        <div class="text">{profileElem.data.link}</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="li_wrap">
                                                        <div class="icon"><i class="fas fa-map-signs" aria-hidden="true"></i></div>
                                                        <div class="text">{profileElem.data.location}</div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {skillData.map((skillElem, skillIndex) => {
                                        return (
                                            <div class="skills_wrap pb" key={skillIndex}>
                                                <div class="resume_template3_title">
                                                    Skills
                                                </div>
                                                <div class="skills">
                                                    <ul className="resume_template3_ul">
                                                        {skillElem?.data[0] && <li>
                                                            <div class="li_wrap">
                                                                <div class="text">{skillElem.data[0].skillName}</div>
                                                            </div>
                                                        </li>}
                                                        {skillElem?.data[1] && <li>
                                                            <div class="li_wrap">
                                                                <div class="text">{skillElem.data[1].skillName}</div>
                                                            </div>
                                                        </li>}
                                                        {skillElem?.data[2] && <li>
                                                            <div class="li_wrap">
                                                                <div class="text">{skillElem.data[2].skillName}</div>
                                                            </div>
                                                        </li>}
                                                        {skillElem?.data[3] && <li>
                                                            <div class="li_wrap">
                                                                <div class="text">{skillElem.data[3].skillName}</div>
                                                            </div>
                                                        </li>}
                                                        {skillElem?.data[4] && <li>
                                                            <div class="li_wrap">
                                                                <div class="text">{skillElem.data[4].skillName}</div>
                                                            </div>
                                                        </li>}
                                                        {skillElem?.data[5] && <li>
                                                            <div class="li_wrap">
                                                                <div class="text">{skillElem.data[5].skillName}</div>
                                                            </div>
                                                        </li>}
                                                        {skillElem?.data[6] && <li>
                                                            <div class="li_wrap">
                                                                <div class="text">{skillElem.data[6].skillName}</div>
                                                            </div>
                                                        </li>}
                                                        {skillElem?.data[7] && <li>
                                                            <div class="li_wrap">
                                                                <div class="text">{skillElem.data[7].skillName}</div>
                                                            </div>
                                                        </li>}
                                                        {skillElem?.data[8] && <li>
                                                            <div class="li_wrap">
                                                                <div class="text">{skillElem.data[8].skillName}</div>
                                                            </div>
                                                        </li>}
                                                        {skillElem?.data[9] && <li>
                                                            <div class="li_wrap">
                                                                <div class="text">{skillElem.data[9].skillName}</div>
                                                            </div>
                                                        </li>}
                                                    </ul>
                                                </div>
                                            </div>
                                        )})}
                                </div>
                                <div class="resume3_right">
                                    <div class="resume3_header">
                                        <div class="name_role">
                                            <div class="name">
                                            {profileElem.data.fullName}
                                            </div>
                                            <div class="role">
                                            {profileElem.data.jobRole}
                                            </div>
                                        </div>
                                        <div class="resume3_about">
                                        {profileElem.data.about}
                                        </div>
                                    </div>
                                    <div class="right_inner">
                                    {workData.map((workElem, workIndex) => {
                                        return (
                                            <div class="exp" key={workIndex}>
                                                <div class="resume_template3_title">
                                                    experience
                                                </div>
                                                <div class="exp_wrap">
                                                    <ul>
                                                        {workElem?.data[0] && <li>
                                                            <div class="li_wrap">
                                                                <div class="date">
                                                                {workElem.data[0].startDate} - {workElem.data[0].endDate}
                                                                </div>
                                                                <div class="info">
                                                                    <p class="info_title">
                                                                    {workElem.data[0].jobTitle}
                                                                    </p>
                                                                    <p class="info_com">
                                                                    {workElem.data[0].companyName}, {workElem.data[0].jobLocation}
                                                                    </p>
                                                                    <p class="info_cont">
                                                                    {workElem.data[0].jobResponsibility1}
                                                                    </p>
                                                                    <p class="info_cont">
                                                                    {workElem.data[0].jobResponsibility2}
                                                                    </p>
                                                                    <p class="info_cont">
                                                                    {workElem.data[0].jobResponsibility3}
                                                                    </p>
                                                                    <p class="info_cont">
                                                                    {workElem.data[0].jobResponsibility4}
                                                                    </p>
                                                                    <p class="info_cont">
                                                                    {workElem.data[0].jobResponsibility5}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>}
                                                        {workElem?.data[1] && <li>
                                                            <div class="li_wrap">
                                                                <div class="date">
                                                                {workElem.data[1].startDate} - {workElem.data[1].endDate}
                                                                </div>
                                                                <div class="info">
                                                                    <p class="info_title">
                                                                    {workElem.data[1].jobTitle}
                                                                    </p>
                                                                    <p class="info_com">
                                                                    {workElem.data[1].companyName}, {workElem.data[1].jobLocation}
                                                                    </p>
                                                                    <p class="info_cont">
                                                                    {workElem.data[1].jobResponsibility1}
                                                                    </p>
                                                                    <p class="info_cont">
                                                                    {workElem.data[1].jobResponsibility2}
                                                                    </p>
                                                                    <p class="info_cont">
                                                                    {workElem.data[1].jobResponsibility3}
                                                                    </p>
                                                                    <p class="info_cont">
                                                                    {workElem.data[1].jobResponsibility4}
                                                                    </p>
                                                                    <p class="info_cont">
                                                                    {workElem.data[1].jobResponsibility5}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>}
                                                        {workElem?.data[2] && <li>
                                                            <div class="li_wrap">
                                                                <div class="date">
                                                                {workElem.data[2].startDate} - {workElem.data[2].endDate}
                                                                </div>
                                                                <div class="info">
                                                                    <p class="info_title">
                                                                    {workElem.data[2].jobTitle}
                                                                    </p>
                                                                    <p class="info_com">
                                                                    {workElem.data[2].companyName}, {workElem.data[2].jobLocation}
                                                                    </p>
                                                                    <p class="info_cont">
                                                                    {workElem.data[2].jobResponsibility1}
                                                                    </p>
                                                                    <p class="info_cont">
                                                                    {workElem.data[2].jobResponsibility2}
                                                                    </p>
                                                                    <p class="info_cont">
                                                                    {workElem.data[2].jobResponsibility3}
                                                                    </p>
                                                                    <p class="info_cont">
                                                                    {workElem.data[2].jobResponsibility4}
                                                                    </p>
                                                                    <p class="info_cont">
                                                                    {workElem.data[2].jobResponsibility5}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>}
                                                        {workElem?.data[3] && <li>
                                                            <div class="li_wrap">
                                                                <div class="date">
                                                                {workElem.data[3].startDate} - {workElem.data[3].endDate}
                                                                </div>
                                                                <div class="info">
                                                                    <p class="info_title">
                                                                    {workElem.data[3].jobTitle}
                                                                    </p>
                                                                    <p class="info_com">
                                                                    {workElem.data[3].companyName}, {workElem.data[3].jobLocation}
                                                                    </p>
                                                                    <p class="info_cont">
                                                                    {workElem.data[3].jobResponsibility1}
                                                                    </p>
                                                                    <p class="info_cont">
                                                                    {workElem.data[3].jobResponsibility2}
                                                                    </p>
                                                                    <p class="info_cont">
                                                                    {workElem.data[3].jobResponsibility3}
                                                                    </p>
                                                                    <p class="info_cont">
                                                                    {workElem.data[3].jobResponsibility4}
                                                                    </p>
                                                                    <p class="info_cont">
                                                                    {workElem.data[3].jobResponsibility5}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>}
                                                        {workElem?.data[4] && <li>
                                                            <div class="li_wrap">
                                                                <div class="date">
                                                                {workElem.data[4].startDate} - {workElem.data[4].endDate}
                                                                </div>
                                                                <div class="info">
                                                                    <p class="info_title">
                                                                    {workElem.data[4].jobTitle}
                                                                    </p>
                                                                    <p class="info_com">
                                                                    {workElem.data[4].companyName}, {workElem.data[4].jobLocation}
                                                                    </p>
                                                                    <p class="info_cont">
                                                                    {workElem.data[4].jobResponsibility1}
                                                                    </p>
                                                                    <p class="info_cont">
                                                                    {workElem.data[4].jobResponsibility2}
                                                                    </p>
                                                                    <p class="info_cont">
                                                                    {workElem.data[4].jobResponsibility3}
                                                                    </p>
                                                                    <p class="info_cont">
                                                                    {workElem.data[4].jobResponsibility4}
                                                                    </p>
                                                                    <p class="info_cont">
                                                                    {workElem.data[4].jobResponsibility5}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>}
                                                    </ul>
                                                </div>
                                            </div>
                                        )})}
                                        {educationData.map((educationElem, educationIndex) => {
                                            return (
                                                <div class="education" key={educationIndex}>
                                                    <div class="resume_template3_title">
                                                        Education
                                                    </div>
                                                    <div class="education_wrap">
                                                        <ul>
                                                            {educationElem?.data[0] && <li>
                                                                <div class="li_wrap">
                                                                    <div class="date">
                                                                        {educationElem?.data[0]?.educationStartDate} - {educationElem?.data[0]?.educationEndDate}
                                                                    </div>
                                                                    <div class="info">
                                                                        <p class="info_title">
                                                                        {educationElem?.data[0]?.schoolName}
                                                                        </p>
                                                                        <p class="info_com">
                                                                        {educationElem?.data[0]?.schoolLocation}
                                                                        </p>
                                                                        <p class="info_cont">
                                                                        {educationElem?.data[0]?.major} CGPA: {educationElem?.data[0]?.cgpa} Percentage: {educationElem?.data[0]?.percentage}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </li>}
                                                            {educationElem?.data[1] && <li>
                                                                <div class="li_wrap">
                                                                    <div class="date">
                                                                        {educationElem?.data[1]?.educationStartDate} - {educationElem?.data[1]?.educationEndDate}
                                                                    </div>
                                                                    <div class="info">
                                                                        <p class="info_title">
                                                                        {educationElem?.data[1]?.schoolName}
                                                                        </p>
                                                                        <p class="info_com">
                                                                        {educationElem?.data[1]?.schoolLocation}
                                                                        </p>
                                                                        <p class="info_cont">
                                                                        {educationElem?.data[1]?.major} CGPA: {educationElem?.data[1]?.cgpa} Percentage: {educationElem?.data[1]?.percentage}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </li>}
                                                            {educationElem?.data[2] && <li>
                                                                <div class="li_wrap">
                                                                    <div class="date">
                                                                        {educationElem?.data[2]?.educationStartDate} - {educationElem?.data[2]?.educationEndDate}
                                                                    </div>
                                                                    <div class="info">
                                                                        <p class="info_title">
                                                                        {educationElem?.data[2]?.schoolName}
                                                                        </p>
                                                                        <p class="info_com">
                                                                        {educationElem?.data[2]?.schoolLocation}
                                                                        </p>
                                                                        <p class="info_cont">
                                                                        {educationElem?.data[2]?.major} CGPA: {educationElem?.data[2]?.cgpa} Percentage: {educationElem?.data[2]?.percentage}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </li>}
                                                            {educationElem?.data[3] && <li>
                                                                <div class="li_wrap">
                                                                    <div class="date">
                                                                        {educationElem?.data[3]?.educationStartDate} - {educationElem?.data[3]?.educationEndDate}
                                                                    </div>
                                                                    <div class="info">
                                                                        <p class="info_title">
                                                                        {educationElem?.data[3]?.schoolName}
                                                                        </p>
                                                                        <p class="info_com">
                                                                        {educationElem?.data[3]?.schoolLocation}
                                                                        </p>
                                                                        <p class="info_cont">
                                                                        {educationElem?.data[3]?.major} CGPA: {educationElem?.data[3]?.cgpa} Percentage: {educationElem?.data[3]?.percentage}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </li>}
                                                            {educationElem?.data[4] && <li>
                                                                <div class="li_wrap">
                                                                    <div class="date">
                                                                        {educationElem?.data[4]?.educationStartDate} - {educationElem?.data[4]?.educationEndDate}
                                                                    </div>
                                                                    <div class="info">
                                                                        <p class="info_title">
                                                                        {educationElem?.data[4]?.schoolName}
                                                                        </p>
                                                                        <p class="info_com">
                                                                        {educationElem?.data[4]?.schoolLocation}
                                                                        </p>
                                                                        <p class="info_cont">
                                                                        {educationElem?.data[4]?.major} CGPA: {educationElem?.data[4]?.cgpa} Percentage: {educationElem?.data[4]?.percentage}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </li>}
                                                        </ul>
                                                    </div>
                                                </div>
                                            )})}
                                        {projectData.map((projectElem, projectIndex) => {
                                            return (
                                                <div class="education" key={projectIndex}>
                                                    <div class="resume_template3_title">
                                                        Project
                                                    </div>
                                                    <div class="education_wrap">
                                                        <ul resume_template3_ul>
                                                            {projectElem?.data[0] && <li>
                                                                <div class="li_wrap">
                                                                    <div class="date">
                                                                    {projectElem.data[0].startDate} - {projectElem.data[0].endDate}
                                                                    </div>
                                                                    <div class="info">
                                                                        <p class="info_title">
                                                                        {projectElem.data[0].projectName}
                                                                        </p>
                                                                        <p class="info_com">
                                                                        {projectElem.data[0].projectLink && <a href={projectElem.data[0].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}
                                                                        </p>
                                                                        {projectElem.data[0].projectLanguage1 && <p class="info_com">
                                                                            Technology: {projectElem.data[0].projectLanguage1} {projectElem.data[0].projectLanguage2} {projectElem.data[0].projectLanguage3} {projectElem.data[0].projectLanguage4} {projectElem.data[0].projectLanguage5} {projectElem.data[0].projectLanguage6} {projectElem.data[0].projectLanguage7} {projectElem.data[0].projectLanguage8}
                                                                        </p>}
                                                                        <p class="info_cont">
                                                                        {projectElem.data[0].projectDescription}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </li>}
                                                        </ul>
                                                    </div>
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

export default forwardRef(ResumeTemplate3);