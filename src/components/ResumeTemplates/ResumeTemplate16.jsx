import React, { forwardRef } from 'react';
import "./ResumeTemplate16.css";

const ResumeTemplate16 = (props, ref) => {
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
                        <div id="page-wrap" key={profileIndex} ref={ref}>

                            {profileElem?.data?.imageUrl && <img src={profileElem.data.imageUrl} alt="Pic" id="pic" />}

                            <div id="contact-info" class="vcard">


                                <h1 class="fn">{profileElem.data.fullName}</h1>

                                <p>
                                    {profileElem.data.jobRole}<br />
                                    Cell: <span class="tel">{profileElem.data.phn}</span><br />
                                    Address: <span class="tel">{profileElem.data.location}</span><br />
                                    Website: <span class="tel">{profileElem.data.link}</span><br />
                                    Email: <a class="email" href="mailto:greatoldone@lovecraft.com">{profileElem.data.email}</a>
                                </p>
                            </div>

                            <div id="objective">
                                <p>
                                {profileElem.data.about}
                                </p>
                            </div>

                            <div class="clear"></div>

                            <dl>
                                <dd class="clear"></dd>
                                <dt>Education</dt>
                                {educationData.map((educationElem, educationIndex) => {
                                    return (
                                        <>
                                            {educationElem?.data[0] && <dd key={educationIndex}>
                                                <h2>{educationElem?.data[0]?.schoolName} <span> {educationElem?.data[0]?.schoolLocation} - {educationElem?.data[0]?.educationStartDate} - {educationElem?.data[0]?.educationEndDate}</span></h2>
                                                <p>{educationElem?.data[0]?.major}, CGPA: {educationElem?.data[0]?.cgpa} Percentage: {educationElem?.data[0]?.percentage}</p>
                                            </dd>}
                                            {educationElem?.data[1] && <dd key={educationIndex}>
                                                <h2>{educationElem?.data[1]?.schoolName} <span> {educationElem?.data[1]?.schoolLocation} - {educationElem?.data[1]?.educationStartDate} - {educationElem?.data[1]?.educationEndDate}</span></h2>
                                                <p>{educationElem?.data[1]?.major}, CGPA: {educationElem?.data[1]?.cgpa} Percentage: {educationElem?.data[1]?.percentage}</p>
                                            </dd>}
                                            {educationElem?.data[2] && <dd key={educationIndex}>
                                                <h2>{educationElem?.data[2]?.schoolName} <span> {educationElem?.data[2]?.schoolLocation} - {educationElem?.data[2]?.educationStartDate} - {educationElem?.data[2]?.educationEndDate}</span></h2>
                                                <p>{educationElem?.data[2]?.major}, CGPA: {educationElem?.data[2]?.cgpa} Percentage: {educationElem?.data[2]?.percentage}</p>
                                            </dd>}
                                            {educationElem?.data[3] && <dd key={educationIndex}>
                                                <h2>{educationElem?.data[3]?.schoolName} <span> {educationElem?.data[3]?.schoolLocation} - {educationElem?.data[3]?.educationStartDate} - {educationElem?.data[3]?.educationEndDate}</span></h2>
                                                <p>{educationElem?.data[3]?.major}, CGPA: {educationElem?.data[3]?.cgpa} Percentage: {educationElem?.data[3]?.percentage}</p>
                                            </dd>}
                                            {educationElem?.data[4] && <dd key={educationIndex}>
                                                <h2>{educationElem?.data[4]?.schoolName} <span> {educationElem?.data[4]?.schoolLocation} - {educationElem?.data[4]?.educationStartDate} - {educationElem?.data[4]?.educationEndDate}</span></h2>
                                                <p>{educationElem?.data[4]?.major}, CGPA: {educationElem?.data[4]?.cgpa} Percentage: {educationElem?.data[4]?.percentage}</p>
                                            </dd>}
                                        </>
                                    )})}

                                <dd class="clear"></dd>

                                <dt>Skills</dt>
                                {skillData.map((skillElem, skillIndex) => {
                                    return (
                                        <>
                                            <dd key={skillIndex}>
                                                {skillElem?.data[0] && <p class="skills-para">{skillElem.data[0].skillName}</p>}
                                                {skillElem?.data[1] && <p class="skills-para">{skillElem.data[1].skillName}</p>}
                                                {skillElem?.data[2] && <p class="skills-para">{skillElem.data[2].skillName}</p>}
                                                {skillElem?.data[3] && <p class="skills-para">{skillElem.data[3].skillName}</p>}
                                                {skillElem?.data[4] && <p class="skills-para">{skillElem.data[4].skillName}</p>}
                                                {skillElem?.data[5] && <p class="skills-para">{skillElem.data[5].skillName}</p>}
                                                {skillElem?.data[6] && <p class="skills-para">{skillElem.data[6].skillName}</p>}
                                                {skillElem?.data[7] && <p class="skills-para">{skillElem.data[7].skillName}</p>}
                                                {skillElem?.data[8] && <p class="skills-para">{skillElem.data[8].skillName}</p>}
                                                {skillElem?.data[9] && <p class="skills-para">{skillElem.data[9].skillName}</p>}
                                            </dd>
                                        </>
                                    )})}

                                <dd class="clear"></dd>

                                <dt>Experience</dt>
                                {workData.map((workElem, workIndex) => {
                                    return (
                                        <dd key={workIndex}>
                                            {workElem?.data[0] && <>
                                                <h2>{workElem.data[0].companyName} <span>{workElem.data[0].jobTitle} - {workElem.data[0].jobLocation} - {workElem.data[0].startDate} - {workElem.data[0].endDate}</span></h2>
                                                <ul>
                                                    <li>{workElem.data[0].jobResponsibility1}</li>
                                                    <li>{workElem.data[0].jobResponsibility2}</li>
                                                    <li>{workElem.data[0].jobResponsibility3}</li>
                                                    <li>{workElem.data[0].jobResponsibility4}</li>
                                                    <li>{workElem.data[0].jobResponsibility5}</li>
                                                </ul>

                                            </>}
                                            {workElem?.data[1] && <>
                                                <h2>{workElem.data[1].companyName} <span>{workElem.data[1].jobTitle} - {workElem.data[1].jobLocation} - {workElem.data[1].startDate} - {workElem.data[1].endDate}</span></h2>
                                                <ul>
                                                    <li>{workElem.data[1].jobResponsibility1}</li>
                                                    <li>{workElem.data[1].jobResponsibility2}</li>
                                                    <li>{workElem.data[1].jobResponsibility3}</li>
                                                    <li>{workElem.data[1].jobResponsibility4}</li>
                                                    <li>{workElem.data[1].jobResponsibility5}</li>
                                                </ul>

                                            </>}
                                            {workElem?.data[2] && <>
                                                <h2>{workElem.data[2].companyName} <span>{workElem.data[2].jobTitle} - {workElem.data[2].jobLocation} - {workElem.data[2].startDate} - {workElem.data[2].endDate}</span></h2>
                                                <ul>
                                                    <li>{workElem.data[2].jobResponsibility1}</li>
                                                    <li>{workElem.data[2].jobResponsibility2}</li>
                                                    <li>{workElem.data[2].jobResponsibility3}</li>
                                                    <li>{workElem.data[2].jobResponsibility4}</li>
                                                    <li>{workElem.data[2].jobResponsibility5}</li>
                                                </ul>

                                            </>}
                                            {workElem?.data[3] && <>
                                                <h2>{workElem.data[3].companyName} <span>{workElem.data[3].jobTitle} - {workElem.data[3].jobLocation} - {workElem.data[3].startDate} - {workElem.data[3].endDate}</span></h2>
                                                <ul>
                                                    <li>{workElem.data[3].jobResponsibility1}</li>
                                                    <li>{workElem.data[3].jobResponsibility2}</li>
                                                    <li>{workElem.data[3].jobResponsibility3}</li>
                                                    <li>{workElem.data[3].jobResponsibility4}</li>
                                                    <li>{workElem.data[3].jobResponsibility5}</li>
                                                </ul>

                                            </>}
                                            {workElem?.data[4] && <>
                                                <h2>{workElem.data[4].companyName} <span>{workElem.data[4].jobTitle} - {workElem.data[4].jobLocation} - {workElem.data[4].startDate} - {workElem.data[4].endDate}</span></h2>
                                                <ul>
                                                    <li>{workElem.data[4].jobResponsibility1}</li>
                                                    <li>{workElem.data[4].jobResponsibility2}</li>
                                                    <li>{workElem.data[4].jobResponsibility3}</li>
                                                    <li>{workElem.data[4].jobResponsibility4}</li>
                                                    <li>{workElem.data[4].jobResponsibility5}</li>
                                                </ul>

                                            </>}
                                        </dd>
                                    )})}
                                <dd class="clear"></dd>
                                <dt>Projects</dt>
                                {projectData.map((projectElem, projectIndex) => {
                                    return (
                                        <dd key={projectIndex}>
                                            {projectElem?.data[0] && <>
                                                <h2><a class="anchor-class" href={projectElem.data[0].projectLink}>{projectElem.data[0].projectName}</a><span>{projectElem.data[0].projectLanguage1} {projectElem.data[0].projectLanguage2} {projectElem.data[0].projectLanguage3} {projectElem.data[0].projectLanguage4} {projectElem.data[0].projectLanguage5} {projectElem.data[0].projectLanguage6} {projectElem.data[0].projectLanguage7} {projectElem.data[0].projectLanguage8} - {projectElem.data[0].startDate} - {projectElem.data[0].endDate}</span></h2>
                                                <ul>
                                                    <li>{projectElem.data[0].projectDescription}</li>
                                                </ul>
                                            </>}
                                            {projectElem?.data[1] && <>
                                                <h2><a class="anchor-class" href={projectElem.data[1].projectLink}>{projectElem.data[1].projectName}</a><span>{projectElem.data[1].projectLanguage1} {projectElem.data[1].projectLanguage2} {projectElem.data[1].projectLanguage3} {projectElem.data[1].projectLanguage4} {projectElem.data[1].projectLanguage5} {projectElem.data[1].projectLanguage6} {projectElem.data[1].projectLanguage7} {projectElem.data[1].projectLanguage8} - {projectElem.data[1].startDate} - {projectElem.data[1].endDate}</span></h2>
                                                <ul>
                                                    <li>{projectElem.data[1].projectDescription}</li>
                                                </ul>
                                            </>}
                                            {projectElem?.data[2] && <>
                                                <h2><a class="anchor-class" href={projectElem.data[2].projectLink}>{projectElem.data[2].projectName}</a><span>{projectElem.data[2].projectLanguage1} {projectElem.data[2].projectLanguage2} {projectElem.data[2].projectLanguage3} {projectElem.data[2].projectLanguage4} {projectElem.data[2].projectLanguage5} {projectElem.data[2].projectLanguage6} {projectElem.data[2].projectLanguage7} {projectElem.data[2].projectLanguage8} - {projectElem.data[2].startDate} - {projectElem.data[2].endDate}</span></h2>
                                                <ul>
                                                    <li>{projectElem.data[2].projectDescription}</li>
                                                </ul>
                                            </>}
                                            {projectElem?.data[3] && <>
                                                <h2><a class="anchor-class" href={projectElem.data[3].projectLink}>{projectElem.data[3].projectName}</a><span>{projectElem.data[3].projectLanguage1} {projectElem.data[3].projectLanguage2} {projectElem.data[3].projectLanguage3} {projectElem.data[3].projectLanguage4} {projectElem.data[3].projectLanguage5} {projectElem.data[3].projectLanguage6} {projectElem.data[3].projectLanguage7} {projectElem.data[3].projectLanguage8} - {projectElem.data[3].startDate} - {projectElem.data[3].endDate}</span></h2>
                                                <ul>
                                                    <li>{projectElem.data[3].projectDescription}</li>
                                                </ul>
                                            </>}
                                            {projectElem?.data[4] && <>
                                                <h2><a class="anchor-class" href={projectElem.data[4].projectLink}>{projectElem.data[4].projectName}</a><span>{projectElem.data[4].projectLanguage1} {projectElem.data[4].projectLanguage2} {projectElem.data[4].projectLanguage3} {projectElem.data[4].projectLanguage4} {projectElem.data[4].projectLanguage5} {projectElem.data[0].projectLanguage6} {projectElem.data[4].projectLanguage7} {projectElem.data[4].projectLanguage8} - {projectElem.data[4].startDate} - {projectElem.data[4].endDate}</span></h2>
                                                <ul>
                                                    <li>{projectElem.data[4].projectDescription}</li>
                                                </ul>
                                            </>}
                                        </dd>
                                    )})}
                            </dl>
                        </div>
                    )})}
        </>
    )
}

export default forwardRef(ResumeTemplate16);