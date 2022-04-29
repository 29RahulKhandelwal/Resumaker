import React, {forwardRef} from "react";
import "./ResumeTemplate4.css"

function ResumeTemplate4(props,ref) {
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
                        <main class="main-content" key={profileIndex} ref={ref}>
                            {profileElem?.data?.imageUrl && <section class="left-section">
                                <div class="left-content">
                                    <div class="profile">
                                        <div class="image">
                                            <img src={profileElem.data.imageUrl} alt="Resume_image" />
                                        </div>
                                        <h2 class="name">{profileElem.data.fullName}</h2>
                                        <p class="career">{profileElem.data.jobRole}</p>
                                    </div>
                                    <div class="contact-info">
                                        <h3 class="main-title">Contact Info</h3>
                                        <ul>
                                            <li class="contact-info">
                                                <i class="fa fa-phone"></i>
                                                {profileElem.data.phn}
                                            </li>
                                            <li class="contact-info">
                                                <i class="fa fa-fax"></i>
                                                {profileElem.data.email}
                                            </li>
                                            <li class="contact-info">
                                                <i class="fa fa-globe"></i>
                                                {profileElem.data.link}
                                            </li>
                                            <li class="contact-info">
                                                <i class="fa fa-map-marker"></i>
                                                {profileElem.data.location}
                                            </li>
                                        </ul>
                                    </div>
                                    {skillData.map((skillElem, skillIndex) => {
                                        return (
                                            <div class="skills-section" key={skillIndex}>
                                                <h3 class="main-title">Skills</h3>
                                                <ul>
                                                    {skillElem?.data[0] && <li>
                                                        <p class="skill-title">{skillElem.data[0].skillName}</p>
                                                    </li>}
                                                    {skillElem?.data[1] && <li>
                                                        <p class="skill-title">{skillElem.data[1].skillName}</p>
                                                    </li>}
                                                    {skillElem?.data[2] && <li>
                                                        <p class="skill-title">{skillElem.data[2].skillName}</p>
                                                    </li>}
                                                    {skillElem?.data[3] && <li>
                                                        <p class="skill-title">{skillElem.data[3].skillName}</p>
                                                    </li>}
                                                    {skillElem?.data[4] && <li>
                                                        <p class="skill-title">{skillElem.data[4].skillName}</p>
                                                    </li>}
                                                    {skillElem?.data[5] && <li>
                                                        <p class="skill-title">{skillElem.data[5].skillName}</p>
                                                    </li>}
                                                    {skillElem?.data[6] && <li>
                                                        <p class="skill-title">{skillElem.data[6].skillName}</p>
                                                    </li>}
                                                    {skillElem?.data[7] && <li>
                                                        <p class="skill-title">{skillElem.data[7].skillName}</p>
                                                    </li>}
                                                    {skillElem?.data[8] && <li>
                                                        <p class="skill-title">{skillElem.data[8].skillName}</p>
                                                    </li>}
                                                    {skillElem?.data[9] && <li>
                                                        <p class="skill-title">{skillElem.data[9].skillName}</p>
                                                    </li>}
                                                </ul>
                                            </div>
                                        )})}
                                </div>
                            </section>}
                            <section class="right-section">
                                <div class="right-main-content">
                                    <section class="about sect">
                                        <h2 class="right-title">About Me</h2>
                                        <p class="para">
                                        {profileElem.data.about}
                                        </p>
                                    </section>
                                    {workData.map((workElem, workIndex) => {
                                    return (
                                        <section class="experince sect" key={workIndex}>
                                            <h2 class="right-title">Experience</h2>
                                            {workElem?.data[0] && <div class="timeline">
                                                <div class="left-tl-content">
                                                    <h5 class="tl-title">{workElem.data[0].companyName}, {workElem.data[0].jobLocation}</h5>
                                                    <p class="para">{workElem.data[0].startDate} - {workElem.data[0].endDate}</p>
                                                </div>
                                                <div class="right-tl-content">
                                                    <div class="tl-content">
                                                        <h5 class="tl-title-2">{workElem.data[0].jobTitle}</h5>
                                                        <p class="para">
                                                        {workElem.data[0].jobResponsibility1}
                                                        {workElem.data[0].jobResponsibility2}
                                                        {workElem.data[0].jobResponsibility3}
                                                        {workElem.data[0].jobResponsibility4}
                                                        {workElem.data[0].jobResponsibility5}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>}
                                            {workElem?.data[1] && <div class="timeline">
                                                <div class="left-tl-content">
                                                    <h5 class="tl-title">{workElem.data[1].companyName}, {workElem.data[1].jobLocation}</h5>
                                                    <p class="para">{workElem.data[1].startDate} - {workElem.data[1].endDate}</p>
                                                </div>
                                                <div class="right-tl-content">
                                                    <div class="tl-content">
                                                        <h5 class="tl-title-2">{workElem.data[1].jobTitle}</h5>
                                                        <p class="para">
                                                        {workElem.data[1].jobResponsibility1}
                                                        {workElem.data[1].jobResponsibility2}
                                                        {workElem.data[1].jobResponsibility3}
                                                        {workElem.data[1].jobResponsibility4}
                                                        {workElem.data[1].jobResponsibility5}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>}
                                            {workElem?.data[2] && <div class="timeline">
                                                <div class="left-tl-content">
                                                    <h5 class="tl-title">{workElem.data[2].companyName}, {workElem.data[2].jobLocation}</h5>
                                                    <p class="para">{workElem.data[2].startDate} - {workElem.data[2].endDate}</p>
                                                </div>
                                                <div class="right-tl-content">
                                                    <div class="tl-content">
                                                        <h5 class="tl-title-2">{workElem.data[2].jobTitle}</h5>
                                                        <p class="para">
                                                        {workElem.data[2].jobResponsibility1}
                                                        {workElem.data[2].jobResponsibility2}
                                                        {workElem.data[2].jobResponsibility3}
                                                        {workElem.data[2].jobResponsibility4}
                                                        {workElem.data[2].jobResponsibility5}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>}
                                            {workElem?.data[3] && <div class="timeline">
                                                <div class="left-tl-content">
                                                    <h5 class="tl-title">{workElem.data[3].companyName}, {workElem.data[3].jobLocation}</h5>
                                                    <p class="para">{workElem.data[3].startDate} - {workElem.data[3].endDate}</p>
                                                </div>
                                                <div class="right-tl-content">
                                                    <div class="tl-content">
                                                        <h5 class="tl-title-2">{workElem.data[3].jobTitle}</h5>
                                                        <p class="para">
                                                        {workElem.data[3].jobResponsibility1}
                                                        {workElem.data[3].jobResponsibility2}
                                                        {workElem.data[3].jobResponsibility3}
                                                        {workElem.data[3].jobResponsibility4}
                                                        {workElem.data[3].jobResponsibility5}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>}
                                            {workElem?.data[4] && <div class="timeline">
                                                <div class="left-tl-content">
                                                    <h5 class="tl-title">{workElem.data[4].companyName}, {workElem.data[4].jobLocation}</h5>
                                                    <p class="para">{workElem.data[4].startDate} - {workElem.data[4].endDate}</p>
                                                </div>
                                                <div class="right-tl-content">
                                                    <div class="tl-content">
                                                        <h5 class="tl-title-2">{workElem.data[4].jobTitle}</h5>
                                                        <p class="para">
                                                        {workElem.data[4].jobResponsibility1}
                                                        {workElem.data[4].jobResponsibility2}
                                                        {workElem.data[4].jobResponsibility3}
                                                        {workElem.data[4].jobResponsibility4}
                                                        {workElem.data[4].jobResponsibility5}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>}
                                        </section>
                                    )})}
                                    {educationData.map((educationElem, educationIndex) => {
                                    return (
                                        <section class="education sect" key={educationIndex}>
                                            <h2 class="right-title">education</h2>
                                            {educationElem?.data[0] && <div class="timeline">
                                                <div class="left-tl-content">
                                                    <h5 class="tl-title">{educationElem?.data[0]?.schoolName}, {educationElem?.data[0]?.schoolLocation}</h5>
                                                    <p class="para">{educationElem?.data[0]?.educationStartDate} - {educationElem?.data[0]?.educationEndDate}</p>
                                                </div>
                                                <div class="right-tl-content">
                                                    <div class="tl-content">
                                                        <h5 class="tl-title-2">{educationElem?.data[0]?.major} CGPA: {educationElem?.data[0]?.cgpa} Percentage: {educationElem?.data[0]?.percentage}</h5>
                                                    </div>
                                                </div>
                                            </div>}
                                            {educationElem?.data[1] && <div class="timeline">
                                                <div class="left-tl-content">
                                                    <h5 class="tl-title">{educationElem?.data[1]?.schoolName}, {educationElem?.data[1]?.schoolLocation}</h5>
                                                    <p class="para">{educationElem?.data[1]?.educationStartDate} - {educationElem?.data[1]?.educationEndDate}</p>
                                                </div>
                                                <div class="right-tl-content">
                                                    <div class="tl-content">
                                                        <h5 class="tl-title-2">{educationElem?.data[1]?.major} CGPA: {educationElem?.data[1]?.cgpa} Percentage: {educationElem?.data[1]?.percentage}</h5>
                                                    </div>
                                                </div>
                                            </div>}
                                            {educationElem?.data[2] && <div class="timeline">
                                                <div class="left-tl-content">
                                                    <h5 class="tl-title">{educationElem?.data[2]?.schoolName}, {educationElem?.data[2]?.schoolLocation}</h5>
                                                    <p class="para">{educationElem?.data[2]?.educationStartDate} - {educationElem?.data[2]?.educationEndDate}</p>
                                                </div>
                                                <div class="right-tl-content">
                                                    <div class="tl-content">
                                                        <h5 class="tl-title-2">{educationElem?.data[2]?.major} CGPA: {educationElem?.data[2]?.cgpa} Percentage: {educationElem?.data[2]?.percentage}</h5>
                                                    </div>
                                                </div>
                                            </div>}
                                            {educationElem?.data[3] && <div class="timeline">
                                                <div class="left-tl-content">
                                                    <h5 class="tl-title">{educationElem?.data[3]?.schoolName}, {educationElem?.data[3]?.schoolLocation}</h5>
                                                    <p class="para">{educationElem?.data[3]?.educationStartDate} - {educationElem?.data[3]?.educationEndDate}</p>
                                                </div>
                                                <div class="right-tl-content">
                                                    <div class="tl-content">
                                                        <h5 class="tl-title-2">{educationElem?.data[3]?.major} CGPA: {educationElem?.data[3]?.cgpa} Percentage: {educationElem?.data[3]?.percentage}</h5>
                                                    </div>
                                                </div>
                                            </div>}
                                            {educationElem?.data[4] && <div class="timeline">
                                                <div class="left-tl-content">
                                                    <h5 class="tl-title">{educationElem?.data[4]?.schoolName}, {educationElem?.data[4]?.schoolLocation}</h5>
                                                    <p class="para">{educationElem?.data[4]?.educationStartDate} - {educationElem?.data[4]?.educationEndDate}</p>
                                                </div>
                                                <div class="right-tl-content">
                                                    <div class="tl-content">
                                                        <h5 class="tl-title-2">{educationElem?.data[4]?.major} CGPA: {educationElem?.data[4]?.cgpa} Percentage: {educationElem?.data[4]?.percentage}</h5>
                                                    </div>
                                                </div>
                                            </div>}
                                        </section>
                                    )})}
                                    {projectData.map((projectElem, projectIndex) => {
                                    return (
                                        <section class="education sect" key={projectIndex}>
                                            <h2 class="right-title">Project</h2>
                                            {projectElem?.data[0] && <div class="timeline">
                                                <div class="left-tl-content">
                                                    <h5 class="tl-title">{projectElem.data[0].projectName}</h5>
                                                    {projectElem.data[0].projectLink && <p class="para"><a href={projectElem.data[0].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a></p>}
                                                    <p class="para">{projectElem.data[0].startDate} - {projectElem.data[0].endDate}</p>
                                                </div>
                                                <div class="right-tl-content">
                                                    <div class="tl-content">
                                                        {projectElem.data[0].projectLanguage1 &&<h5 class="tl-title-2">Technology: {projectElem.data[0].projectLanguage1} {projectElem.data[0].projectLanguage2} {projectElem.data[0].projectLanguage3} {projectElem.data[0].projectLanguage4} {projectElem.data[0].projectLanguage5} {projectElem.data[0].projectLanguage6} {projectElem.data[0].projectLanguage7} {projectElem.data[0].projectLanguage8}</h5>}
                                                        <p class="para">
                                                        {projectElem.data[0].projectDescription}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>}
                                            {projectElem?.data[1] && <div class="timeline">
                                                <div class="left-tl-content">
                                                    <h5 class="tl-title">{projectElem.data[1].projectName}</h5>
                                                    {projectElem.data[1].projectLink && <p class="para"><a href={projectElem.data[1].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a></p>}
                                                    <p class="para">{projectElem.data[1].startDate} - {projectElem.data[1].endDate}</p>
                                                </div>
                                                <div class="right-tl-content">
                                                    <div class="tl-content">
                                                        {projectElem.data[1].projectLanguage1 &&<h5 class="tl-title-2">Technology: {projectElem.data[1].projectLanguage1} {projectElem.data[1].projectLanguage2} {projectElem.data[1].projectLanguage3} {projectElem.data[1].projectLanguage4} {projectElem.data[1].projectLanguage5} {projectElem.data[1].projectLanguage6} {projectElem.data[1].projectLanguage7} {projectElem.data[1].projectLanguage8}</h5>}
                                                        <p class="para">
                                                        {projectElem.data[1].projectDescription}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>}
                                            {projectElem?.data[2] && <div class="timeline">
                                                <div class="left-tl-content">
                                                    <h5 class="tl-title">{projectElem.data[2].projectName}</h5>
                                                    {projectElem.data[2].projectLink && <p class="para"><a href={projectElem.data[2].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a></p>}
                                                    <p class="para">{projectElem.data[2].startDate} - {projectElem.data[2].endDate}</p>
                                                </div>
                                                <div class="right-tl-content">
                                                    <div class="tl-content">
                                                        {projectElem.data[2].projectLanguage1 &&<h5 class="tl-title-2">Technology: {projectElem.data[2].projectLanguage1} {projectElem.data[2].projectLanguage2} {projectElem.data[2].projectLanguage3} {projectElem.data[2].projectLanguage4} {projectElem.data[2].projectLanguage5} {projectElem.data[2].projectLanguage6} {projectElem.data[2].projectLanguage7} {projectElem.data[2].projectLanguage8}</h5>}
                                                        <p class="para">
                                                        {projectElem.data[2].projectDescription}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>}
                                            {projectElem?.data[3] && <div class="timeline">
                                                <div class="left-tl-content">
                                                    <h5 class="tl-title">{projectElem.data[3].projectName}</h5>
                                                    {projectElem.data[3].projectLink && <p class="para"><a href={projectElem.data[3].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a></p>}
                                                    <p class="para">{projectElem.data[3].startDate} - {projectElem.data[3].endDate}</p>
                                                </div>
                                                <div class="right-tl-content">
                                                    <div class="tl-content">
                                                        {projectElem.data[3].projectLanguage1 &&<h5 class="tl-title-2">Technology: {projectElem.data[3].projectLanguage1} {projectElem.data[3].projectLanguage2} {projectElem.data[3].projectLanguage3} {projectElem.data[3].projectLanguage4} {projectElem.data[3].projectLanguage5} {projectElem.data[3].projectLanguage6} {projectElem.data[3].projectLanguage7} {projectElem.data[3].projectLanguage8}</h5>}
                                                        <p class="para">
                                                        {projectElem.data[3].projectDescription}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>}
                                            {projectElem?.data[4] && <div class="timeline">
                                                <div class="left-tl-content">
                                                    <h5 class="tl-title">{projectElem.data[4].projectName}</h5>
                                                    {projectElem.data[4].projectLink && <p class="para"><a href={projectElem.data[4].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a></p>}
                                                    <p class="para">{projectElem.data[4].startDate} - {projectElem.data[4].endDate}</p>
                                                </div>
                                                <div class="right-tl-content">
                                                    <div class="tl-content">
                                                        {projectElem.data[4].projectLanguage1 &&<h5 class="tl-title-2">Technology: {projectElem.data[4].projectLanguage1} {projectElem.data[4].projectLanguage2} {projectElem.data[4].projectLanguage3} {projectElem.data[4].projectLanguage4} {projectElem.data[4].projectLanguage5} {projectElem.data[4].projectLanguage6} {projectElem.data[4].projectLanguage7} {projectElem.data[4].projectLanguage8}</h5>}
                                                        <p class="para">
                                                        {projectElem.data[4].projectDescription}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>}
                                        </section>
                                    )})}
                                </div>
                            </section>
                        </main>
                    )})}
        </>
    )
}

export default forwardRef(ResumeTemplate4);