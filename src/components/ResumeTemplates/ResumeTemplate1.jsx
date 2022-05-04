import React, { forwardRef } from "react";
import "./ResumeTemplate1.css";

function ResumeTemplate1(props,ref) {
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
                        <div class="resume_wrapper" key={profileIndex} ref={ref}>
                            <div class="resume_left">
                                {profileElem?.data?.imageUrl && <div class="resume_image">
                                    <img src={profileElem.data.imageUrl} alt="Resume_image" />
                                </div>}
                                <div class="resume_bottom">
                                    <div class="resume_item resume_namerole">
                                        <div class="name resume_template1_name">{profileElem.data.fullName}</div>
                                        <div class="role">{profileElem.data.jobRole}</div>
                                    </div>
                                    <div class="resume_item resume_profile">
                                        <div class="resume_title">Profile</div>
                                        <div class="resume_info">{profileElem.data.about}</div>
                                    </div>
                                    <div class="resume_item resume_address">
                                        <div class="resume_title">Address</div>
                                        <div class="resume_info">
                                            {profileElem.data.location}
                                        </div>
                                    </div>
                                    <div class="resume_item resume_contact">
                                        <div class="resume_title">Contact</div>
                                        <div class="resume_info">
                                            <div class="resume_subtitle">Phone</div>
                                            <div class="resume_subinfo">{profileElem.data.phn}</div>
                                        </div>
                                        <div class="resume_info">
                                            <div class="resume_subtitle">Email</div>
                                            <div class="resume_subinfo">{profileElem.data.email}</div>
                                        </div>
                                        <div class="resume_info">
                                            <div class="resume_subtitle">Website</div>
                                            <div class="resume_subinfo">{profileElem.data.link}</div>
                                        </div>
                                    </div>
                                    {skillData.map((skillElem, skillIndex) => {
                                        return (
                                            <div class="resume_item resume_skills" key={skillIndex}>
                                                <div class="resume_title">Skills</div>
                                                <div class="resume_info">
                                                    {skillElem?.data[0] && <div class="skills_list">
                                                        <div class="skills_left">{skillElem.data[0].skillName}</div>
                                                    </div>}
                                                    {skillElem?.data[1] && <div class="skills_list">
                                                        <div class="skills_left">{skillElem.data[1].skillName}</div>
                                                    </div>}
                                                    {skillElem?.data[2] && <div class="skills_list">
                                                        <div class="skills_left">{skillElem.data[2].skillName}</div>
                                                    </div>}
                                                    {skillElem?.data[3] && <div class="skills_list">
                                                        <div class="skills_left">{skillElem.data[3].skillName}</div>
                                                    </div>}
                                                    {skillElem?.data[4] && <div class="skills_list">
                                                        <div class="skills_left">{skillElem.data[4].skillName}</div>
                                                    </div>}
                                                    {skillElem?.data[5] && <div class="skills_list">
                                                        <div class="skills_left">{skillElem.data[5].skillName}</div>
                                                    </div>}
                                                    {skillElem?.data[6] && <div class="skills_list">
                                                        <div class="skills_left">{skillElem.data[6].skillName}</div>
                                                    </div>}
                                                    {skillElem?.data[7] && <div class="skills_list">
                                                        <div class="skills_left">{skillElem.data[7].skillName}</div>
                                                    </div>}
                                                    {skillElem?.data[8] && <div class="skills_list">
                                                        <div class="skills_left">{skillElem.data[8].skillName}</div>
                                                    </div>}
                                                    {skillElem?.data[9] && <div class="skills_list">
                                                        <div class="skills_left">{skillElem.data[9].skillName}</div>
                                                    </div>}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div class="resume_right">
                                <div class="resume_item resume_namerole">
                                    <div class="name">{profileElem.data.fullName}</div>
                                    <div class="role">{profileElem.data.jobRole}</div>
                                </div>
                                {educationData.map((educationElem, educationIndex) => {
                                    return (
                                        <div class="resume_item resume_education" key={educationIndex}>
                                            <div class="resume_title">Education</div>
                                            <div class="resume_info">
                                                {educationElem?.data[0] && <div class="resume_data">
                                                    <div class="year">{educationElem?.data[0]?.educationStartDate} - {educationElem?.data[0]?.educationEndDate}</div>
                                                    <div class="content">
                                                        <p>{educationElem?.data[0]?.schoolName}, {educationElem?.data[0]?.schoolLocation}</p>
                                                        <p>{educationElem?.data[0]?.major} CGPA: {educationElem?.data[0]?.cgpa} Percentage: {educationElem?.data[0]?.percentage}</p>
                                                    </div>
                                                </div>}
                                                {educationElem?.data[1] && <div class="resume_data">
                                                    <div class="year">{educationElem?.data[1]?.educationStartDate} - {educationElem?.data[1]?.educationEndDate}</div>
                                                    <div class="content">
                                                        <p>{educationElem?.data[1]?.schoolName}, {educationElem?.data[1]?.schoolLocation}</p>
                                                        <p>{educationElem?.data[1]?.major} CGPA: {educationElem?.data[1]?.cgpa} Percentage: {educationElem?.data[1]?.percentage}</p>
                                                    </div>
                                                </div>}
                                                {educationElem?.data[2] && <div class="resume_data">
                                                    <div class="year">{educationElem?.data[2]?.educationStartDate} - {educationElem?.data[2]?.educationEndDate}</div>
                                                    <div class="content">
                                                        <p>{educationElem?.data[2]?.schoolName}, {educationElem?.data[2]?.schoolLocation}</p>
                                                        <p>{educationElem?.data[2]?.major} CGPA: {educationElem?.data[2]?.cgpa} Percentage: {educationElem?.data[2]?.percentage}</p>
                                                    </div>
                                                </div>}
                                                {educationElem?.data[3] && <div class="resume_data">
                                                    <div class="year">{educationElem?.data[3]?.educationStartDate} - {educationElem?.data[3]?.educationEndDate}</div>
                                                    <div class="content">
                                                        <p>{educationElem?.data[3]?.schoolName}, {educationElem?.data[3]?.schoolLocation}</p>
                                                        <p>{educationElem?.data[3]?.major} CGPA: {educationElem?.data[3]?.cgpa} Percentage: {educationElem?.data[3]?.percentage}</p>
                                                    </div>
                                                </div>}
                                                {educationElem?.data[4] && <div class="resume_data">
                                                    <div class="year">{educationElem?.data[4]?.educationStartDate} - {educationElem?.data[4]?.educationEndDate}</div>
                                                    <div class="content">
                                                        <p>{educationElem?.data[4]?.schoolName}, {educationElem?.data[4]?.schoolLocation}</p>
                                                        <p>{educationElem?.data[4]?.major} CGPA: {educationElem?.data[4]?.cgpa} Percentage: {educationElem?.data[4]?.percentage}</p>
                                                    </div>
                                                </div>}
                                            </div>
                                        </div>
                                    )
                                })}
                                {workData.map((workElem, workIndex) => {
                                    return (
                                        <div class="resume_item resume_experience" key={workIndex}>
                                            <div class="resume_title">Experience</div>
                                            <div class="resume_info">
                                                {workElem?.data[0] && <div class="resume_data">
                                                    <div class="year">{workElem.data[0].startDate} - {workElem.data[0].endDate}</div>
                                                    <div class="content">
                                                        <p>{workElem.data[0].companyName}, {workElem.data[0].jobLocation}</p>
                                                        <p>{workElem.data[0].jobTitle}</p>
                                                        <p>{workElem.data[0].jobResponsibility1}</p>
                                                        <p>{workElem.data[0].jobResponsibility2}</p>
                                                        <p>{workElem.data[0].jobResponsibility3}</p>
                                                        <p>{workElem.data[0].jobResponsibility4}</p>
                                                        <p>{workElem.data[0].jobResponsibility5}</p>
                                                    </div>
                                                </div>}
                                                {workElem?.data[1] && <div class="resume_data">
                                                    <div class="year">{workElem.data[1].startDate} - {workElem.data[1].endDate}</div>
                                                    <div class="content">
                                                        <p>{workElem.data[1].companyName}, {workElem.data[1].jobLocation}</p>
                                                        <p>{workElem.data[1].jobTitle}</p>
                                                        <p>{workElem.data[1].jobResponsibility1}</p>
                                                        <p>{workElem.data[1].jobResponsibility2}</p>
                                                        <p>{workElem.data[1].jobResponsibility3}</p>
                                                        <p>{workElem.data[1].jobResponsibility4}</p>
                                                        <p>{workElem.data[1].jobResponsibility5}</p>
                                                    </div>
                                                </div>}
                                                {workElem?.data[2] && <div class="resume_data">
                                                    <div class="year">{workElem.data[2].startDate} - {workElem.data[2].endDate}</div>
                                                    <div class="content">
                                                        <p>{workElem.data[2].companyName}, {workElem.data[0].jobLocation}</p>
                                                        <p>{workElem.data[2].jobTitle}</p>
                                                        <p>{workElem.data[2].jobResponsibility1}</p>
                                                        <p>{workElem.data[2].jobResponsibility2}</p>
                                                        <p>{workElem.data[2].jobResponsibility3}</p>
                                                        <p>{workElem.data[2].jobResponsibility4}</p>
                                                        <p>{workElem.data[2].jobResponsibility5}</p>
                                                    </div>
                                                </div>}
                                                {workElem?.data[3] && <div class="resume_data">
                                                    <div class="year">{workElem.data[3].startDate} - {workElem.data[3].endDate}</div>
                                                    <div class="content">
                                                        <p>{workElem.data[3].companyName}, {workElem.data[0].jobLocation}</p>
                                                        <p>{workElem.data[3].jobTitle}</p>
                                                        <p>{workElem.data[3].jobResponsibility1}</p>
                                                        <p>{workElem.data[3].jobResponsibility2}</p>
                                                        <p>{workElem.data[3].jobResponsibility3}</p>
                                                        <p>{workElem.data[3].jobResponsibility4}</p>
                                                        <p>{workElem.data[3].jobResponsibility5}</p>
                                                    </div>
                                                </div>}
                                                {workElem?.data[4] && <div class="resume_data">
                                                    <div class="year">{workElem.data[4].startDate} - {workElem.data[4].endDate}</div>
                                                    <div class="content">
                                                        <p>{workElem.data[4].companyName}, {workElem.data[0].jobLocation}</p>
                                                        <p>{workElem.data[4].jobTitle}</p>
                                                        <p>{workElem.data[4].jobResponsibility1}</p>
                                                        <p>{workElem.data[4].jobResponsibility2}</p>
                                                        <p>{workElem.data[4].jobResponsibility3}</p>
                                                        <p>{workElem.data[4].jobResponsibility4}</p>
                                                        <p>{workElem.data[4].jobResponsibility5}</p>
                                                    </div>
                                                </div>}
                                            </div>
                                        </div>

                                    )
                                })}
                                {projectData.map((projectElem, projectIndex) => {
                                    return (
                                        <div class="resume_item resume_experience" key={projectIndex}>
                                            <div class="resume_title">Project</div>
                                            <div class="resume_info">
                                                {projectElem?.data[0] && <div class="resume_data">
                                                    <div class="year">{projectElem.data[0].startDate} - {projectElem.data[0].endDate}</div>
                                                    <div class="content">
                                                        <p>{projectElem.data[0].projectName}</p>
                                                        {projectElem.data[0].projectLink && <a href={projectElem.data[0].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}
                                                        {projectElem.data[0].projectLanguage1 && <p>Technology: {projectElem.data[0].projectLanguage1} {projectElem.data[0].projectLanguage2} {projectElem.data[0].projectLanguage3} {projectElem.data[0].projectLanguage4} {projectElem.data[0].projectLanguage5} {projectElem.data[0].projectLanguage6} {projectElem.data[0].projectLanguage7} {projectElem.data[0].projectLanguage8}</p>}
                                                        <p>{projectElem.data[0].projectDescription}</p>
                                                    </div>
                                                </div>}
                                                {projectElem?.data[1] && <div class="resume_data">
                                                    <div class="year">{projectElem.data[1].startDate} - {projectElem.data[1].endDate}</div>
                                                    <div class="content">
                                                        <p>{projectElem.data[1].projectName}</p>
                                                        {projectElem.data[1].projectLink && <a href={projectElem.data[1].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}
                                                        {projectElem.data[1].projectLanguage1 && <p>Technology: {projectElem.data[1].projectLanguage1} {projectElem.data[1].projectLanguage2} {projectElem.data[1].projectLanguage3} {projectElem.data[1].projectLanguage4} {projectElem.data[1].projectLanguage5} {projectElem.data[1].projectLanguage6} {projectElem.data[1].projectLanguage7} {projectElem.data[1].projectLanguage8}</p>}
                                                        <p>{projectElem.data[1].projectDescription}</p>
                                                    </div>
                                                </div>}
                                                {projectElem?.data[2] && <div class="resume_data">
                                                    <div class="year">{projectElem.data[2].startDate} - {projectElem.data[2].endDate}</div>
                                                    <div class="content">
                                                        <p>{projectElem.data[2].projectName}</p>
                                                        {projectElem.data[2].projectLink && <a href={projectElem.data[2].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}
                                                        {projectElem.data[2].projectLanguage1 && <p>Technology: {projectElem.data[2].projectLanguage1} {projectElem.data[2].projectLanguage2} {projectElem.data[2].projectLanguage3} {projectElem.data[2].projectLanguage4} {projectElem.data[2].projectLanguage5} {projectElem.data[2].projectLanguage6} {projectElem.data[2].projectLanguage7} {projectElem.data[2].projectLanguage8}</p>}
                                                        <p>{projectElem.data[2].projectDescription}</p>
                                                    </div>
                                                </div>}
                                                {projectElem?.data[3] && <div class="resume_data">
                                                    <div class="year">{projectElem.data[3].startDate} - {projectElem.data[3].endDate}</div>
                                                    <div class="content">
                                                        <p>{projectElem.data[3].projectName}</p>
                                                        {projectElem.data[3].projectLink && <a href={projectElem.data[3].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}
                                                        {projectElem.data[3].projectLanguage1 && <p>Technology: {projectElem.data[3].projectLanguage1} {projectElem.data[3].projectLanguage2} {projectElem.data[3].projectLanguage3} {projectElem.data[3].projectLanguage4} {projectElem.data[3].projectLanguage5} {projectElem.data[3].projectLanguage6} {projectElem.data[3].projectLanguage7} {projectElem.data[3].projectLanguage8}</p>}
                                                        <p>{projectElem.data[3].projectDescription}</p>
                                                    </div>
                                                </div>}
                                                {projectElem?.data[4] && <div class="resume_data">
                                                    <div class="year">{projectElem.data[4].startDate} - {projectElem.data[4].endDate}</div>
                                                    <div class="content">
                                                        <p>{projectElem.data[4].projectName}</p>
                                                        {projectElem.data[4].projectLink && <a href={projectElem.data[4].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}
                                                        {projectElem.data[4].projectLanguage1 && <p>Technology: {projectElem.data[4].projectLanguage1} {projectElem.data[4].projectLanguage2} {projectElem.data[4].projectLanguage3} {projectElem.data[4].projectLanguage4} {projectElem.data[4].projectLanguage5} {projectElem.data[4].projectLanguage6} {projectElem.data[4].projectLanguage7} {projectElem.data[4].projectLanguage8}</p>}
                                                        <p>{projectElem.data[4].projectDescription}</p>
                                                    </div>
                                                </div>}

                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default forwardRef(ResumeTemplate1);