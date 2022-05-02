import React, { forwardRef } from 'react';
import "./ResumeTemplate11.css";

const ResumeTemplate11 = (props, ref) => {
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
                        <div class="containers" key={profileIndex} ref={ref}>
                            <div class="headers">
                                <div class="full-name">
                                    <span class="first-name">{profileElem.data.fullName}</span>
                                </div>
                                <div class="contact-info">
                                    <span class="email">Email: </span>
                                    <span class="email-val">{profileElem.data.email}</span>
                                    <span class="separator"></span>
                                    <span class="phone">Phone: </span>
                                    <span class="phone-val">{profileElem.data.phn}</span>
                                    <span class="separator"></span>
                                    <span class="phone">Website: </span>
                                    <span class="phone-val">{profileElem.data.link}</span>
                                    <span class="separator"></span>
                                    <span class="phone">Address: </span>
                                    <span class="phone-val">{profileElem.data.location}</span>
                                </div>

                                <div class="about-section">
                                    <span class="position">{profileElem.data.jobRole} </span>
                                    <span class="desc">
                                    {profileElem.data.about}
                                    </span>
                                </div>
                            </div>
                            {educationData.map((educationElem, educationIndex) => {
                                return (
                                    <div class="details" key={educationIndex}>
                                        <div class="section">
                                            <div class="section__title">Education</div>
                                            <div class="section__list">
                                                {educationElem?.data[0] && <div class="section__list-item">
                                                    <div class="lefts">
                                                        <div class="name">{educationElem?.data[0]?.schoolName}</div>
                                                        <div class="addr">{educationElem?.data[0]?.schoolLocation}</div>
                                                        <div class="duration">{educationElem?.data[0]?.educationStartDate} - {educationElem?.data[0]?.educationEndDate}</div>
                                                    </div>
                                                    <div class="rights">
                                                        <div class="name">{educationElem?.data[0]?.major} CGPA: {educationElem?.data[0]?.cgpa} Percentage: {educationElem?.data[0]?.percentage}</div>
                                                    </div>
                                                </div>}
                                                {educationElem?.data[1] && <div class="section__list-item">
                                                    <div class="lefts">
                                                        <div class="name">{educationElem?.data[1]?.schoolName}</div>
                                                        <div class="addr">{educationElem?.data[1]?.schoolLocation}</div>
                                                        <div class="duration">{educationElem?.data[1]?.educationStartDate} - {educationElem?.data[1]?.educationEndDate}</div>
                                                    </div>
                                                    <div class="rights">
                                                        <div class="name">{educationElem?.data[1]?.major} CGPA: {educationElem?.data[1]?.cgpa} Percentage: {educationElem?.data[1]?.percentage}</div>
                                                    </div>
                                                </div>}
                                                {educationElem?.data[2] && <div class="section__list-item">
                                                    <div class="lefts">
                                                        <div class="name">{educationElem?.data[2]?.schoolName}</div>
                                                        <div class="addr">{educationElem?.data[2]?.schoolLocation}</div>
                                                        <div class="duration">{educationElem?.data[2]?.educationStartDate} - {educationElem?.data[2]?.educationEndDate}</div>
                                                    </div>
                                                    <div class="rights">
                                                        <div class="name">{educationElem?.data[2]?.major} CGPA: {educationElem?.data[2]?.cgpa} Percentage: {educationElem?.data[2]?.percentage}</div>
                                                    </div>
                                                </div>}
                                                {educationElem?.data[3] && <div class="section__list-item">
                                                    <div class="lefts">
                                                        <div class="name">{educationElem?.data[3]?.schoolName}</div>
                                                        <div class="addr">{educationElem?.data[3]?.schoolLocation}</div>
                                                        <div class="duration">{educationElem?.data[3]?.educationStartDate} - {educationElem?.data[3]?.educationEndDate}</div>
                                                    </div>
                                                    <div class="rights">
                                                        <div class="name">{educationElem?.data[3]?.major} CGPA: {educationElem?.data[3]?.cgpa} Percentage: {educationElem?.data[3]?.percentage}</div>
                                                    </div>
                                                </div>}
                                                {educationElem?.data[4] && <div class="section__list-item">
                                                    <div class="lefts">
                                                        <div class="name">{educationElem?.data[4]?.schoolName}</div>
                                                        <div class="addr">{educationElem?.data[4]?.schoolLocation}</div>
                                                        <div class="duration">{educationElem?.data[4]?.educationStartDate} - {educationElem?.data[4]?.educationEndDate}</div>
                                                    </div>
                                                    <div class="rights">
                                                        <div class="name">{educationElem?.data[4]?.major} CGPA: {educationElem?.data[4]?.cgpa} Percentage: {educationElem?.data[4]?.percentage}</div>
                                                    </div>
                                                </div>}
                                            </div>
                                        </div>
                                    </div>
                                )})}
                            {workData.map((workElem, workIndex) => {
                                return (
                                    <div class="details" key={workIndex}>
                                        <div class="section">
                                            <div class="section__title">Experience</div>
                                            <div class="section__list">
                                                {workElem?.data[0] && <div class="section__list-item">
                                                    <div class="lefts">
                                                        <div class="name">{workElem.data[0].companyName}, {workElem.data[0].jobLocation}</div>
                                                        <div class="duration">{workElem.data[0].startDate} - {workElem.data[0].endDate}</div>
                                                    </div>
                                                    <div class="rights">
                                                        <div class="name">{workElem.data[0].jobTitle}</div>
                                                        <div class="desc">{workElem.data[0].jobResponsibility1}</div>
                                                        <div class="desc">{workElem.data[0].jobResponsibility2}</div>
                                                        <div class="desc">{workElem.data[0].jobResponsibility3}</div>
                                                        <div class="desc">{workElem.data[0].jobResponsibility4}</div>
                                                        <div class="desc">{workElem.data[0].jobResponsibility5}</div>
                                                    </div>
                                                </div>}
                                                {workElem?.data[1] && <div class="section__list-item">
                                                    <div class="lefts">
                                                        <div class="name">{workElem.data[1].companyName}, {workElem.data[1].jobLocation}</div>
                                                        <div class="duration">{workElem.data[1].startDate} - {workElem.data[1].endDate}</div>
                                                    </div>
                                                    <div class="rights">
                                                        <div class="name">{workElem.data[1].jobTitle}</div>
                                                        <div class="desc">{workElem.data[1].jobResponsibility1}</div>
                                                        <div class="desc">{workElem.data[1].jobResponsibility2}</div>
                                                        <div class="desc">{workElem.data[1].jobResponsibility3}</div>
                                                        <div class="desc">{workElem.data[1].jobResponsibility4}</div>
                                                        <div class="desc">{workElem.data[1].jobResponsibility5}</div>
                                                    </div>
                                                </div>}
                                                {workElem?.data[2] && <div class="section__list-item">
                                                    <div class="lefts">
                                                        <div class="name">{workElem.data[2].companyName}, {workElem.data[2].jobLocation}</div>
                                                        <div class="duration">{workElem.data[2].startDate} - {workElem.data[2].endDate}</div>
                                                    </div>
                                                    <div class="rights">
                                                        <div class="name">{workElem.data[2].jobTitle}</div>
                                                        <div class="desc">{workElem.data[2].jobResponsibility1}</div>
                                                        <div class="desc">{workElem.data[2].jobResponsibility2}</div>
                                                        <div class="desc">{workElem.data[2].jobResponsibility3}</div>
                                                        <div class="desc">{workElem.data[2].jobResponsibility4}</div>
                                                        <div class="desc">{workElem.data[2].jobResponsibility5}</div>
                                                    </div>
                                                </div>}
                                                {workElem?.data[3] && <div class="section__list-item">
                                                    <div class="lefts">
                                                        <div class="name">{workElem.data[3].companyName}, {workElem.data[3].jobLocation}</div>
                                                        <div class="duration">{workElem.data[3].startDate} - {workElem.data[3].endDate}</div>
                                                    </div>
                                                    <div class="rights">
                                                        <div class="name">{workElem.data[3].jobTitle}</div>
                                                        <div class="desc">{workElem.data[3].jobResponsibility1}</div>
                                                        <div class="desc">{workElem.data[3].jobResponsibility2}</div>
                                                        <div class="desc">{workElem.data[3].jobResponsibility3}</div>
                                                        <div class="desc">{workElem.data[3].jobResponsibility4}</div>
                                                        <div class="desc">{workElem.data[3].jobResponsibility5}</div>
                                                    </div>
                                                </div>}
                                                {workElem?.data[4] && <div class="section__list-item">
                                                    <div class="lefts">
                                                        <div class="name">{workElem.data[4].companyName}, {workElem.data[4].jobLocation}</div>
                                                        <div class="duration">{workElem.data[4].startDate} - {workElem.data[4].endDate}</div>
                                                    </div>
                                                    <div class="rights">
                                                        <div class="name">{workElem.data[4].jobTitle}</div>
                                                        <div class="desc">{workElem.data[4].jobResponsibility1}</div>
                                                        <div class="desc">{workElem.data[4].jobResponsibility2}</div>
                                                        <div class="desc">{workElem.data[4].jobResponsibility3}</div>
                                                        <div class="desc">{workElem.data[4].jobResponsibility4}</div>
                                                        <div class="desc">{workElem.data[4].jobResponsibility5}</div>
                                                    </div>
                                                </div>}
                                            </div>
                                        </div>
                                    </div>
                                )})}
                            {projectData.map((projectElem, projectIndex) => {
                                return (
                                    <div class="details">
                                        <div class="section">
                                            <div class="section__title">Projects</div>
                                            <div class="section__list">
                                                {projectElem?.data[0] && <div class="section__list-item">
                                                    <div class="lefts">
                                                        <div class="name">{projectElem.data[0].projectName}</div>
                                                        <div class="addr">{projectElem.data[0].projectLink && <a href={projectElem.data[0].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}</div>
                                                        <div class="duration">{projectElem.data[0].startDate} - {projectElem.data[0].endDate}</div>
                                                    </div>
                                                    <div class="rights">
                                                    {projectElem.data[0].projectLanguage1 && <div class="name">Technology: {projectElem.data[0].projectLanguage1} {projectElem.data[0].projectLanguage2} {projectElem.data[0].projectLanguage3} {projectElem.data[0].projectLanguage4} {projectElem.data[0].projectLanguage5} {projectElem.data[0].projectLanguage6} {projectElem.data[0].projectLanguage7} {projectElem.data[0].projectLanguage8}</div>}
                                                        <div class="desc">{projectElem.data[0].projectDescription}</div>
                                                    </div>
                                                </div>}
                                            </div>
                                        </div>
                                    </div>
                                )})}
                            {skillData.map((skillElem, skillIndex) => {
                                return (
                                    <div class="details">
                                        <div class="section">
                                            <div class="section__title">Skills</div>
                                            <div class="skills">
                                                <div class="skills__item">
                                                    {skillElem?.data[0] && <div class="skill-name">
                                                        {skillElem.data[0].skillName}
                                                    </div>}
                                                    {skillElem?.data[1] && <div class="skill-name">
                                                        {skillElem.data[1].skillName}
                                                    </div>}
                                                    {skillElem?.data[2] && <div class="skill-name">
                                                        {skillElem.data[2].skillName}
                                                    </div>}
                                                    {skillElem?.data[3] && <div class="skill-name">
                                                        {skillElem.data[3].skillName}
                                                    </div>}
                                                    {skillElem?.data[4] && <div class="skill-name">
                                                        {skillElem.data[4].skillName}
                                                    </div>}
                                                    {skillElem?.data[5] && <div class="skill-name">
                                                        {skillElem.data[5].skillName}
                                                    </div>}
                                                    {skillElem?.data[6] && <div class="skill-name">
                                                        {skillElem.data[6].skillName}
                                                    </div>}
                                                    {skillElem?.data[7] && <div class="skill-name">
                                                        {skillElem.data[7].skillName}
                                                    </div>}
                                                    {skillElem?.data[8] && <div class="skill-name">
                                                        {skillElem.data[8].skillName}
                                                    </div>}
                                                    {skillElem?.data[9] && <div class="skill-name">
                                                        {skillElem.data[9].skillName}
                                                    </div>}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )})}
                        </div>
                    )})}
        </>
    )
}

export default forwardRef(ResumeTemplate11);