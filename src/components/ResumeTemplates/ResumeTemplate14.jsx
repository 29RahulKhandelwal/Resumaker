import React, { forwardRef } from 'react';
import "./ResumeTemplate14.css";

const ResumeTemplate14 = (props, ref) => {
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
                        <div class="wrapper14 mt-lg-5" key={profileIndex} ref={ref}>
                            <div class="sidebar-wrapper14">
                                <div class="profile-container">
                                {profileElem?.data?.imageUrl && <img class="profile profile-img" src={profileElem.data.imageUrl} alt="Resume_Img" />}
                                    <h1 class="name">{profileElem.data.fullName}</h1>
                                    <h3 class="tagline">{profileElem.data.jobRole}</h3>
                                </div>

                                <div class="contact-container container-block">
                                    <ul class="list-unstyled contact-list">
                                        <li class="email"><i class="fas fa-envelope"></i><a className='anchor-spacing'
                                            href="mailto: yourname@email.com">{profileElem.data.email}</a></li>
                                        <li class="phone"><i class="fas fa-phone"></i><a  className='anchor-spacing'href="tel:0123 456 789">{profileElem.data.phn}</a></li>
                                        <li class="address"><i class="fa-solid fa-location-pin"></i><a  className='anchor-spacing'href="tel:0123 456 789">{profileElem.data.location}</a></li>
                                        <li class="website"><i class="fas fa-globe"></i><a className='anchor-spacing'
                                            href={profileElem.data.link}
                                            target="_blank" rel='noreferrer'>{profileElem.data.link}</a></li>
                                    </ul>
                                </div>
                                {skillData.map((skillElem, skillIndex) => {
                                    return (
                                        <div class="interests-container container-block" key={skillIndex}>
                                            <h2 class="container-block-title">Skills</h2>
                                            <ul class="list-unstyled interests-list">
                                            {skillElem?.data[0] && <li>{skillElem.data[0].skillName}</li>}
                                            {skillElem?.data[1] && <li>{skillElem.data[1].skillName}</li>}
                                            {skillElem?.data[2] && <li>{skillElem.data[2].skillName}</li>}
                                            {skillElem?.data[3] && <li>{skillElem.data[3].skillName}</li>}
                                            {skillElem?.data[4] && <li>{skillElem.data[4].skillName}</li>}
                                            {skillElem?.data[5] && <li>{skillElem.data[5].skillName}</li>}
                                            {skillElem?.data[6] && <li>{skillElem.data[6].skillName}</li>}
                                            {skillElem?.data[7] && <li>{skillElem.data[7].skillName}</li>}
                                            {skillElem?.data[8] && <li>{skillElem.data[8].skillName}</li>}
                                            {skillElem?.data[9] && <li>{skillElem.data[9].skillName}</li>}
                                            </ul>
                                        </div>
                                    )})}

                            </div>

                            <div class="main-wrapper14">
                                
                                <section class="section summary-section">
                                    <h2 class="section-title"><span class="icon-holder"><i class="fas fa-user"></i></span>Career Profile
                                    </h2>
                                    <div class="summary">
                                        <p>{profileElem.data.about}</p>
                                    </div>
                                </section>
                                {workData.map((workElem, workIndex) => {
                                    return (
                                        <section class="section experiences-section" key={workIndex}>
                                            <h2 class="section-title"><span class="icon-holder"><i class="fas fa-briefcase"></i></span>Experiences
                                            </h2>

                                            {workElem?.data[0] && <div class="item">
                                                <div class="meta">
                                                    <div class="upper-row">
                                                        <h3 class="job-title">{workElem.data[0].jobTitle}</h3>
                                                        <div class="time">{workElem.data[0].startDate} - {workElem.data[0].endDate}</div>
                                                    </div>
                                                    <div class="company">{workElem.data[0].companyName}, {workElem.data[0].jobLocation}</div>
                                                </div>
                                                <div class="details">
                                                    <p>{workElem.data[0].jobResponsibility1} </p>
                                                    <p>{workElem.data[0].jobResponsibility2} </p>
                                                    <p>{workElem.data[0].jobResponsibility3} </p>
                                                    <p>{workElem.data[0].jobResponsibility4} </p>
                                                    <p>{workElem.data[0].jobResponsibility5} </p>
                                                </div>
                                            </div>}
                                            {workElem?.data[1] && <div class="item">
                                                <div class="meta">
                                                    <div class="upper-row">
                                                        <h3 class="job-title">{workElem.data[1].jobTitle}</h3>
                                                        <div class="time">{workElem.data[1].startDate} - {workElem.data[1].endDate}</div>
                                                    </div>
                                                    <div class="company">{workElem.data[1].companyName}, {workElem.data[1].jobLocation}</div>
                                                </div>
                                                <div class="details">
                                                    <p>{workElem.data[1].jobResponsibility1} </p>
                                                    <p>{workElem.data[1].jobResponsibility2} </p>
                                                    <p>{workElem.data[1].jobResponsibility3} </p>
                                                    <p>{workElem.data[1].jobResponsibility4} </p>
                                                    <p>{workElem.data[1].jobResponsibility5} </p>
                                                </div>
                                            </div>}
                                            {workElem?.data[2] && <div class="item">
                                                <div class="meta">
                                                    <div class="upper-row">
                                                        <h3 class="job-title">{workElem.data[2].jobTitle}</h3>
                                                        <div class="time">{workElem.data[2].startDate} - {workElem.data[2].endDate}</div>
                                                    </div>
                                                    <div class="company">{workElem.data[2].companyName}, {workElem.data[2].jobLocation}</div>
                                                </div>
                                                <div class="details">
                                                    <p>{workElem.data[2].jobResponsibility1} </p>
                                                    <p>{workElem.data[2].jobResponsibility2} </p>
                                                    <p>{workElem.data[2].jobResponsibility3} </p>
                                                    <p>{workElem.data[2].jobResponsibility4} </p>
                                                    <p>{workElem.data[2].jobResponsibility5} </p>
                                                </div>
                                            </div>}
                                            {workElem?.data[3] && <div class="item">
                                                <div class="meta">
                                                    <div class="upper-row">
                                                        <h3 class="job-title">{workElem.data[3].jobTitle}</h3>
                                                        <div class="time">{workElem.data[3].startDate} - {workElem.data[3].endDate}</div>
                                                    </div>
                                                    <div class="company">{workElem.data[3].companyName}, {workElem.data[3].jobLocation}</div>
                                                </div>
                                                <div class="details">
                                                    <p>{workElem.data[3].jobResponsibility1} </p>
                                                    <p>{workElem.data[3].jobResponsibility2} </p>
                                                    <p>{workElem.data[3].jobResponsibility3} </p>
                                                    <p>{workElem.data[3].jobResponsibility4} </p>
                                                    <p>{workElem.data[3].jobResponsibility5} </p>
                                                </div>
                                            </div>}
                                            {workElem?.data[4] && <div class="item">
                                                <div class="meta">
                                                    <div class="upper-row">
                                                        <h3 class="job-title">{workElem.data[4].jobTitle}</h3>
                                                        <div class="time">{workElem.data[4].startDate} - {workElem.data[4].endDate}</div>
                                                    </div>
                                                    <div class="company">{workElem.data[4].companyName}, {workElem.data[4].jobLocation}</div>
                                                </div>
                                                <div class="details">
                                                    <p>{workElem.data[4].jobResponsibility1} </p>
                                                    <p>{workElem.data[4].jobResponsibility2} </p>
                                                    <p>{workElem.data[4].jobResponsibility3} </p>
                                                    <p>{workElem.data[4].jobResponsibility4} </p>
                                                    <p>{workElem.data[4].jobResponsibility5} </p>
                                                </div>
                                            </div>}


                                        </section>
                                    )})}
                                {projectData.map((projectElem, projectIndex) => {
                                    return (
                                        <section class="section experiences-section" key={projectIndex}>
                                            <h2 class="section-title"><span class="icon-holder"><i class="fas fa-briefcase"></i></span>Projects
                                            </h2>

                                            {projectElem?.data[0] && <div class="item">
                                                <div class="meta">
                                                    <div class="upper-row">
                                                        <span class="project-title"><a href={projectElem.data[0].projectLink}>{projectElem.data[0].projectName}</a></span>
                                                        <div class="time">{projectElem.data[0].startDate} - {projectElem.data[0].endDate}</div>
                                                    </div>
                                                    {projectElem.data[0].projectLanguage1 && <div class="company"><p>Technology: {projectElem.data[0].projectLanguage1} {projectElem.data[0].projectLanguage2} {projectElem.data[0].projectLanguage3} {projectElem.data[0].projectLanguage4} {projectElem.data[0].projectLanguage5} {projectElem.data[0].projectLanguage6} {projectElem.data[0].projectLanguage7} {projectElem.data[0].projectLanguage8}</p></div>}
                                                </div>
                                                <div class="details">
                                                    <p>{projectElem.data[0].projectDescription} </p>
                                                </div>
                                            </div>}
                                            {projectElem?.data[1] && <div class="item">
                                                <div class="meta">
                                                    <div class="upper-row">
                                                        <span class="project-title"><a href={projectElem.data[1].projectLink}>{projectElem.data[1].projectName}</a></span>
                                                        <div class="time">{projectElem.data[1].startDate} - {projectElem.data[1].endDate}</div>
                                                    </div>
                                                    {projectElem.data[1].projectLanguage1 && <div class="company"><p>Technology: {projectElem.data[1].projectLanguage1} {projectElem.data[1].projectLanguage2} {projectElem.data[1].projectLanguage3} {projectElem.data[1].projectLanguage4} {projectElem.data[1].projectLanguage5} {projectElem.data[1].projectLanguage6} {projectElem.data[1].projectLanguage7} {projectElem.data[1].projectLanguage8}</p></div>}
                                                </div>
                                                <div class="details">
                                                    <p>{projectElem.data[1].projectDescription} </p>
                                                </div>
                                            </div>}
                                            {projectElem?.data[2] && <div class="item">
                                                <div class="meta">
                                                    <div class="upper-row">
                                                        <span class="project-title"><a href={projectElem.data[2].projectLink}>{projectElem.data[2].projectName}</a></span>
                                                        <div class="time">{projectElem.data[2].startDate} - {projectElem.data[2].endDate}</div>
                                                    </div>
                                                    {projectElem.data[2].projectLanguage1 && <div class="company"><p>Technology: {projectElem.data[2].projectLanguage1} {projectElem.data[2].projectLanguage2} {projectElem.data[2].projectLanguage3} {projectElem.data[2].projectLanguage4} {projectElem.data[2].projectLanguage5} {projectElem.data[2].projectLanguage6} {projectElem.data[2].projectLanguage7} {projectElem.data[2].projectLanguage8}</p></div>}
                                                </div>
                                                <div class="details">
                                                    <p>{projectElem.data[2].projectDescription} </p>
                                                </div>
                                            </div>}
                                            {projectElem?.data[3] && <div class="item">
                                                <div class="meta">
                                                    <div class="upper-row">
                                                        <span class="project-title"><a href={projectElem.data[3].projectLink}>{projectElem.data[3].projectName}</a></span>
                                                        <div class="time">{projectElem.data[3].startDate} - {projectElem.data[3].endDate}</div>
                                                    </div>
                                                    {projectElem.data[3].projectLanguage1 && <div class="company"><p>Technology: {projectElem.data[3].projectLanguage1} {projectElem.data[3].projectLanguage2} {projectElem.data[3].projectLanguage3} {projectElem.data[3].projectLanguage4} {projectElem.data[3].projectLanguage5} {projectElem.data[3].projectLanguage6} {projectElem.data[3].projectLanguage7} {projectElem.data[3].projectLanguage8}</p></div>}
                                                </div>
                                                <div class="details">
                                                    <p>{projectElem.data[3].projectDescription} </p>
                                                </div>
                                            </div>}
                                            {projectElem?.data[4] && <div class="item">
                                                <div class="meta">
                                                    <div class="upper-row">
                                                        <span class="project-title"><a href={projectElem.data[4].projectLink}>{projectElem.data[4].projectName}</a></span>
                                                        <div class="time">{projectElem.data[4].startDate} - {projectElem.data[4].endDate}</div>
                                                    </div>
                                                    {projectElem.data[4].projectLanguage1 && <div class="company"><p>Technology: {projectElem.data[4].projectLanguage1} {projectElem.data[4].projectLanguage2} {projectElem.data[4].projectLanguage3} {projectElem.data[4].projectLanguage4} {projectElem.data[4].projectLanguage5} {projectElem.data[4].projectLanguage6} {projectElem.data[4].projectLanguage7} {projectElem.data[4].projectLanguage8}</p></div>}
                                                </div>
                                                <div class="details">
                                                    <p>{projectElem.data[4].projectDescription} </p>
                                                </div>
                                            </div>}

                                        </section>

                                    )})}
                                {educationData.map((educationElem, educationIndex) => {
                                    return (
                                        <section class="section experiences-section" key={educationIndex}>
                                            <h2 class="section-title"><span class="icon-holder"><i class="fas fa-briefcase"></i></span>Education
                                            </h2>

                                            {educationElem?.data[0] && <div class="item">
                                                <div class="meta">
                                                    <div class="upper-row">
                                                        <span class="project-title">{educationElem?.data[0]?.schoolName}, {educationElem?.data[0]?.schoolLocation}</span>
                                                        <div>{educationElem?.data[0]?.major}</div>
                                                        <div class="time">{educationElem?.data[0]?.educationStartDate} - {educationElem?.data[0]?.educationEndDate}</div>
                                                    </div>
                                                    <div class="company">CGPA: {educationElem?.data[0]?.cgpa} Percentage: {educationElem?.data[0]?.percentage}</div>
                                                </div>
                                            </div>}
                                            {educationElem?.data[1] && <div class="item">
                                                <div class="meta">
                                                    <div class="upper-row">
                                                        <span class="project-title">{educationElem?.data[1]?.schoolName}, {educationElem?.data[1]?.schoolLocation}</span>
                                                        <div>{educationElem?.data[1]?.major}</div>
                                                        <div class="time">{educationElem?.data[1]?.educationStartDate} - {educationElem?.data[1]?.educationEndDate}</div>
                                                    </div>
                                                    <div class="company">CGPA: {educationElem?.data[1]?.cgpa} Percentage: {educationElem?.data[1]?.percentage}</div>
                                                </div>
                                            </div>}
                                            {educationElem?.data[2] && <div class="item">
                                                <div class="meta">
                                                    <div class="upper-row">
                                                        <span class="project-title">{educationElem?.data[2]?.schoolName}, {educationElem?.data[2]?.schoolLocation}</span>
                                                        <div>{educationElem?.data[2]?.major}</div>
                                                        <div class="time">{educationElem?.data[2]?.educationStartDate} - {educationElem?.data[2]?.educationEndDate}</div>
                                                    </div>
                                                    <div class="company">CGPA: {educationElem?.data[2]?.cgpa} Percentage: {educationElem?.data[2]?.percentage}</div>
                                                </div>
                                            </div>}
                                            {educationElem?.data[3] && <div class="item">
                                                <div class="meta">
                                                    <div class="upper-row">
                                                        <span class="project-title">{educationElem?.data[3]?.schoolName}, {educationElem?.data[3]?.schoolLocation}</span>
                                                        <div>{educationElem?.data[3]?.major}</div>
                                                        <div class="time">{educationElem?.data[3]?.educationStartDate} - {educationElem?.data[3]?.educationEndDate}</div>
                                                    </div>
                                                    <div class="company">CGPA: {educationElem?.data[3]?.cgpa} Percentage: {educationElem?.data[3]?.percentage}</div>
                                                </div>
                                            </div>}
                                            {educationElem?.data[4] && <div class="item">
                                                <div class="meta">
                                                    <div class="upper-row">
                                                        <span class="project-title">{educationElem?.data[4]?.schoolName}, {educationElem?.data[4]?.schoolLocation}</span>
                                                        <div>{educationElem?.data[4]?.major}</div>
                                                        <div class="time">{educationElem?.data[4]?.educationStartDate} - {educationElem?.data[4]?.educationEndDate}</div>
                                                    </div>
                                                    <div class="company">CGPA: {educationElem?.data[4]?.cgpa} Percentage: {educationElem?.data[4]?.percentage}</div>
                                                </div>
                                            </div>}

                                        </section>
                                    )})}

                            </div>
                        </div>
                    )
                })}
        </>
    )
}
export default forwardRef(ResumeTemplate14);