import React, { forwardRef } from 'react';
import "./ResumeTemplate15.css"; 

const ResumeTemplate15 = (props, ref) => {
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
                        <div id="doc2" class="yui-t7" key={profileIndex} ref={ref}>
                            <div id="inner">
                                <div id="hd">
                                    <div class="yui-gc">
                                        <div class="yui-u first">
                                            <h1>{profileElem.data.fullName}</h1>
                                            <h2>{profileElem.data.jobRole}</h2>
                                        </div>
                                        <div class="yui-u">
                                            <div class="contact-info">
                                                <h3 className='heading3'><a class="email-anchor" href="mailto:abc@gmail.com">{profileElem.data.email}</a></h3>
                                                <h3 className='heading3'>{profileElem.data.phn}</h3>
                                                <h3 className='heading3'>{profileElem.data.location}</h3>
                                                <h3 className='heading3'>{profileElem.data.link}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="bd">
                                    <div id="yui-main">
                                        <div class="yui-b">

                                            <div class="yui-gf">
                                                <div class="yui-u first">
                                                    <h2>Profile</h2>
                                                </div>
                                                <div class="yui-u">
                                                    <p class="enlarge">
                                                    {profileElem.data.about}
                                                    </p>
                                                </div>
                                            </div>
                                            {skillData.map((skillElem, skillIndex) => {
                                                return (
                                                    <div class="yui-gf" key={skillIndex}>
                                                        <div class="yui-u first">
                                                            <h2>Skills</h2>
                                                        </div>
                                                        <div class="yui-u">
                                                            <ul class="talent">
                                                                {skillElem?.data[0] && <li className='resume15list'>{skillElem.data[0].skillName}</li>}
                                                                {skillElem?.data[1] && <li className='resume15list'>{skillElem.data[1].skillName}</li>}
                                                                {skillElem?.data[2] && <li className='resume15list' class="last">{skillElem.data[2].skillName}</li>}
                                                            </ul>

                                                            <ul class="talent">
                                                                {skillElem?.data[3] && <li className='resume15list'>{skillElem.data[3].skillName}</li>}
                                                                {skillElem?.data[4] && <li className='resume15list'>{skillElem.data[4].skillName}</li>}
                                                                {skillElem?.data[5] && <li className='resume15list' class="last">{skillElem.data[5].skillName}</li>}
                                                            </ul>

                                                            <ul class="talent">
                                                                {skillElem?.data[6] && <li className='resume15list'>{skillElem.data[6].skillName}</li>}
                                                                {skillElem?.data[7] && <li className='resume15list'>{skillElem.data[7].skillName}</li>}
                                                                {skillElem?.data[8] && <li className='resume15list' class="last">{skillElem.data[8].skillName}</li>}
                                                            </ul>

                                                            <ul class="talent">
                                                                {skillElem?.data[9] && <li className='resume15list'>{skillElem.data[9].skillName}</li>}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                )})}

                                            {workData.map((workElem, workIndex) => {
                                                return (
                                                    <div class="yui-gf" key={workIndex}>
                                                        <div class="yui-u first">
                                                            <h2>Experience</h2>
                                                        </div>
                                                        <div class="yui-u">
                                                            {workElem?.data[0] && <div class="job">
                                                                <h2>{workElem.data[0].companyName}, {workElem.data[0].jobLocation}</h2>
                                                                <h3 className='heading3'>{workElem.data[0].jobTitle}</h3>
                                                                <h4>{workElem.data[0].startDate} - {workElem.data[0].endDate}</h4>
                                                                <p>{workElem.data[0].jobResponsibility1} </p>
                                                                <p>{workElem.data[0].jobResponsibility2} </p>
                                                                <p>{workElem.data[0].jobResponsibility3} </p>
                                                                <p>{workElem.data[0].jobResponsibility4} </p>
                                                                <p>{workElem.data[0].jobResponsibility5} </p>
                                                            </div>}
                                                            {workElem?.data[1] && <div class="job">
                                                                <h2>{workElem.data[1].companyName}, {workElem.data[1].jobLocation}</h2>
                                                                <h3 className='heading3'>{workElem.data[1].jobTitle}</h3>
                                                                <h4>{workElem.data[1].startDate} - {workElem.data[1].endDate}</h4>
                                                                <p>{workElem.data[1].jobResponsibility1} </p>
                                                                <p>{workElem.data[1].jobResponsibility2} </p>
                                                                <p>{workElem.data[1].jobResponsibility3} </p>
                                                                <p>{workElem.data[1].jobResponsibility4} </p>
                                                                <p>{workElem.data[1].jobResponsibility5} </p>
                                                            </div>}
                                                            {workElem?.data[2] && <div class="job">
                                                                <h2>{workElem.data[2].companyName}, {workElem.data[2].jobLocation}</h2>
                                                                <h3 className='heading3'>{workElem.data[2].jobTitle}</h3>
                                                                <h4>{workElem.data[2].startDate} - {workElem.data[2].endDate}</h4>
                                                                <p>{workElem.data[2].jobResponsibility1} </p>
                                                                <p>{workElem.data[2].jobResponsibility2} </p>
                                                                <p>{workElem.data[2].jobResponsibility3} </p>
                                                                <p>{workElem.data[2].jobResponsibility4} </p>
                                                                <p>{workElem.data[2].jobResponsibility5} </p>
                                                            </div>}
                                                            {workElem?.data[3] && <div class="job">
                                                                <h2>{workElem.data[3].companyName}, {workElem.data[3].jobLocation}</h2>
                                                                <h3 className='heading3'>{workElem.data[3].jobTitle}</h3>
                                                                <h4>{workElem.data[3].startDate} - {workElem.data[3].endDate}</h4>
                                                                <p>{workElem.data[3].jobResponsibility1} </p>
                                                                <p>{workElem.data[3].jobResponsibility2} </p>
                                                                <p>{workElem.data[3].jobResponsibility3} </p>
                                                                <p>{workElem.data[3].jobResponsibility4} </p>
                                                                <p>{workElem.data[3].jobResponsibility5} </p>
                                                            </div>}
                                                            {workElem?.data[4] && <div class="job">
                                                                <h2>{workElem.data[4].companyName}, {workElem.data[4].jobLocation}</h2>
                                                                <h3 className='heading3'>{workElem.data[4].jobTitle}</h3>
                                                                <h4>{workElem.data[4].startDate} - {workElem.data[4].endDate}</h4>
                                                                <p>{workElem.data[4].jobResponsibility1} </p>
                                                                <p>{workElem.data[4].jobResponsibility2} </p>
                                                                <p>{workElem.data[4].jobResponsibility3} </p>
                                                                <p>{workElem.data[4].jobResponsibility4} </p>
                                                                <p>{workElem.data[4].jobResponsibility5} </p>
                                                            </div>}
                                                        </div>
                                                    </div>
                                                )})}
                                            {projectData.map((projectElem, projectIndex) => {
                                            return (
                                                <div class="yui-gf" key={projectIndex}>
                                                    <div class="yui-u first">
                                                        <h2>Projects</h2>
                                                    </div>
                                                    <div class="yui-u">
                                                        {projectElem?.data[0] && <div class="job">
                                                            <h2>{projectElem.data[0].projectName}</h2>
                                                            {projectElem.data[0].projectLink && <a href={projectElem.data[0].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}
                                                            {projectElem.data[0].projectLanguage1 && <h3 className='heading3'>Technology: {projectElem.data[0].projectLanguage1} {projectElem.data[0].projectLanguage2} {projectElem.data[0].projectLanguage3} {projectElem.data[0].projectLanguage4} {projectElem.data[0].projectLanguage5} {projectElem.data[0].projectLanguage6} {projectElem.data[0].projectLanguage7} {projectElem.data[0].projectLanguage8}</h3>}
                                                            <h4>{projectElem.data[0].startDate} - {projectElem.data[0].endDate}</h4>
                                                            <p>{projectElem.data[0].projectDescription}</p>
                                                        </div>}
                                                        {projectElem?.data[1] && <div class="job">
                                                            <h2>{projectElem.data[1].projectName}</h2>
                                                            {projectElem.data[1].projectLink && <a href={projectElem.data[1].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}
                                                            {projectElem.data[1].projectLanguage1 && <h3 className='heading3'>Technology: {projectElem.data[1].projectLanguage1} {projectElem.data[1].projectLanguage2} {projectElem.data[1].projectLanguage3} {projectElem.data[1].projectLanguage4} {projectElem.data[1].projectLanguage5} {projectElem.data[1].projectLanguage6} {projectElem.data[1].projectLanguage7} {projectElem.data[1].projectLanguage8}</h3>}
                                                            <h4>{projectElem.data[1].startDate} - {projectElem.data[1].endDate}</h4>
                                                            <p>{projectElem.data[1].projectDescription}</p>
                                                        </div>}
                                                        {projectElem?.data[2] && <div class="job">
                                                            <h2>{projectElem.data[2].projectName}</h2>
                                                            {projectElem.data[2].projectLink && <a href={projectElem.data[2].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}
                                                            {projectElem.data[2].projectLanguage1 && <h3 className='heading3'>Technology: {projectElem.data[0].projectLanguage1} {projectElem.data[2].projectLanguage2} {projectElem.data[2].projectLanguage3} {projectElem.data[2].projectLanguage4} {projectElem.data[2].projectLanguage5} {projectElem.data[2].projectLanguage6} {projectElem.data[2].projectLanguage7} {projectElem.data[2].projectLanguage8}</h3>}
                                                            <h4>{projectElem.data[2].startDate} - {projectElem.data[2].endDate}</h4>
                                                            <p>{projectElem.data[2].projectDescription}</p>
                                                        </div>}
                                                        {projectElem?.data[3] && <div class="job">
                                                            <h2>{projectElem.data[3].projectName}</h2>
                                                            {projectElem.data[3].projectLink && <a href={projectElem.data[3].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}
                                                            {projectElem.data[3].projectLanguage1 && <h3 className='heading3'>Technology: {projectElem.data[3].projectLanguage1} {projectElem.data[3].projectLanguage2} {projectElem.data[3].projectLanguage3} {projectElem.data[3].projectLanguage4} {projectElem.data[3].projectLanguage5} {projectElem.data[3].projectLanguage6} {projectElem.data[3].projectLanguage7} {projectElem.data[3].projectLanguage8}</h3>}
                                                            <h4>{projectElem.data[3].startDate} - {projectElem.data[3].endDate}</h4>
                                                            <p>{projectElem.data[3].projectDescription}</p>
                                                        </div>}
                                                        {projectElem?.data[4] && <div class="job">
                                                            <h2>{projectElem.data[4].projectName}</h2>
                                                            {projectElem.data[0].projectLink && <a href={projectElem.data[4].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}
                                                            {projectElem.data[4].projectLanguage1 && <h3 className='heading3'>Technology: {projectElem.data[4].projectLanguage1} {projectElem.data[4].projectLanguage2} {projectElem.data[4].projectLanguage3} {projectElem.data[4].projectLanguage4} {projectElem.data[4].projectLanguage5} {projectElem.data[4].projectLanguage6} {projectElem.data[4].projectLanguage7} {projectElem.data[4].projectLanguage8}</h3>}
                                                            <h4>{projectElem.data[4].startDate} - {projectElem.data[4].endDate}</h4>
                                                            <p>{projectElem.data[4].projectDescription}</p>
                                                        </div>}
                                                    </div>
                                                </div>
                                            )})}

                                            {educationData.map((educationElem, educationIndex) => {
                                            return (
                                                <div class="yui-gf" key={educationIndex}>
                                                        <div class="yui-u first">
                                                            <h2>Education</h2>
                                                        </div>
                                                        <div class="yui-u">
                                                            {educationElem?.data[0] && <div class="job">
                                                                <h2>{educationElem?.data[0]?.schoolName}, {educationElem?.data[0]?.schoolLocation}</h2>
                                                                <h3 className='heading3'>{educationElem?.data[0]?.major} CGPA: {educationElem?.data[0]?.cgpa} Percentage: {educationElem?.data[0]?.percentage}</h3>
                                                                <h4>{educationElem?.data[0]?.educationStartDate} - {educationElem?.data[0]?.educationEndDate}</h4>
                                                            </div>}
                                                            {educationElem?.data[1] && <div class="job">
                                                                <h2>{educationElem?.data[1]?.schoolName}, {educationElem?.data[1]?.schoolLocation}</h2>
                                                                <h3 className='heading3'>{educationElem?.data[1]?.major} CGPA: {educationElem?.data[1]?.cgpa} Percentage: {educationElem?.data[1]?.percentage}</h3>
                                                                <h4>{educationElem?.data[1]?.educationStartDate} - {educationElem?.data[1]?.educationEndDate}</h4>
                                                            </div>}
                                                            {educationElem?.data[2] && <div class="job">
                                                                <h2>{educationElem?.data[2]?.schoolName}, {educationElem?.data[2]?.schoolLocation}</h2>
                                                                <h3 className='heading3'>{educationElem?.data[2]?.major} CGPA: {educationElem?.data[2]?.cgpa} Percentage: {educationElem?.data[2]?.percentage}</h3>
                                                                <h4>{educationElem?.data[2]?.educationStartDate} - {educationElem?.data[2]?.educationEndDate}</h4>
                                                            </div>}
                                                            {educationElem?.data[3] && <div class="job">
                                                                <h2>{educationElem?.data[3]?.schoolName}, {educationElem?.data[3]?.schoolLocation}</h2>
                                                                <h3 className='heading3'>{educationElem?.data[3]?.major} CGPA: {educationElem?.data[3]?.cgpa} Percentage: {educationElem?.data[3]?.percentage}</h3>
                                                                <h4>{educationElem?.data[3]?.educationStartDate} - {educationElem?.data[3]?.educationEndDate}</h4>
                                                            </div>}
                                                            {educationElem?.data[4] && <div class="job">
                                                                <h2>{educationElem?.data[4]?.schoolName}, {educationElem?.data[4]?.schoolLocation}</h2>
                                                                <h3 className='heading3'>{educationElem?.data[4]?.major} CGPA: {educationElem?.data[4]?.cgpa} Percentage: {educationElem?.data[4]?.percentage}</h3>
                                                                <h4>{educationElem?.data[4]?.educationStartDate} - {educationElem?.data[4]?.educationEndDate}</h4>
                                                            </div>}
                                                        </div>
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

export default forwardRef(ResumeTemplate15);