import React, {forwardRef} from "react";
import "./ResumeTemplate5.css";

function ResumeTemplate5(props,ref) {
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
                            <div class="resume_design">
                                <div class="resume_left">
                                    <div class="about_sec">
                                        <div class="button">About Me</div>
                                        <p>{profileElem.data.about}</p>
                                    </div>
                                    {workData.map((workElem, workIndex) => {
                                    return (
                                        <div class="exp_sec" key={workIndex}>
                                            <div class="button">Experience</div>
                                            <ul>
                                                {workElem?.data[0] && <li>
                                                    <div class="item">
                                                        <div class="item_grp">
                                                            <p className="timeline">{workElem.data[0].startDate} - {workElem.data[0].endDate}</p>
                                                            <p class="title">{workElem.data[0].companyName}, {workElem.data[0].jobLocation}</p>
                                                            <p class="sub_title">{workElem.data[0].jobTitle}</p>
                                                        </div>
                                                        <p class="content">{workElem.data[0].jobResponsibility1}</p>
                                                        <p class="content">{workElem.data[0].jobResponsibility2}</p>
                                                        <p class="content">{workElem.data[0].jobResponsibility3}</p>
                                                        <p class="content">{workElem.data[0].jobResponsibility4}</p>
                                                        <p class="content">{workElem.data[0].jobResponsibility5}</p>
                                                    </div>
                                                </li>}
                                                {workElem?.data[1] && <li>
                                                    <div class="item">
                                                        <div class="item_grp">
                                                            <p className="timeline">{workElem.data[1].startDate} - {workElem.data[1].endDate}</p>
                                                            <p class="title">{workElem.data[1].companyName}, {workElem.data[1].jobLocation}</p>
                                                            <p class="sub_title">{workElem.data[1].jobTitle}</p>
                                                        </div>
                                                        <p class="content">{workElem.data[1].jobResponsibility1}</p>
                                                        <p class="content">{workElem.data[1].jobResponsibility2}</p>
                                                        <p class="content">{workElem.data[1].jobResponsibility3}</p>
                                                        <p class="content">{workElem.data[1].jobResponsibility4}</p>
                                                        <p class="content">{workElem.data[1].jobResponsibility5}</p>
                                                    </div>
                                                </li>}
                                                {workElem?.data[2] && <li>
                                                    <div class="item">
                                                        <div class="item_grp">
                                                            <p className="timeline">{workElem.data[2].startDate} - {workElem.data[2].endDate}</p>
                                                            <p class="title">{workElem.data[2].companyName}, {workElem.data[2].jobLocation}</p>
                                                            <p class="sub_title">{workElem.data[2].jobTitle}</p>
                                                        </div>
                                                        <p class="content">{workElem.data[2].jobResponsibility1}</p>
                                                        <p class="content">{workElem.data[2].jobResponsibility2}</p>
                                                        <p class="content">{workElem.data[2].jobResponsibility3}</p>
                                                        <p class="content">{workElem.data[2].jobResponsibility4}</p>
                                                        <p class="content">{workElem.data[2].jobResponsibility5}</p>
                                                    </div>
                                                </li>}
                                                {workElem?.data[3] && <li>
                                                    <div class="item">
                                                        <div class="item_grp">
                                                            <p className="timeline">{workElem.data[3].startDate} - {workElem.data[3].endDate}</p>
                                                            <p class="title">{workElem.data[3].companyName}, {workElem.data[3].jobLocation}</p>
                                                            <p class="sub_title">{workElem.data[3].jobTitle}</p>
                                                        </div>
                                                        <p class="content">{workElem.data[3].jobResponsibility1}</p>
                                                        <p class="content">{workElem.data[3].jobResponsibility2}</p>
                                                        <p class="content">{workElem.data[3].jobResponsibility3}</p>
                                                        <p class="content">{workElem.data[3].jobResponsibility4}</p>
                                                        <p class="content">{workElem.data[3].jobResponsibility5}</p>
                                                    </div>
                                                </li>}
                                                {workElem?.data[4] && <li>
                                                    <div class="item">
                                                        <div class="item_grp">
                                                            <p className="timeline">{workElem.data[4].startDate} - {workElem.data[4].endDate}</p>
                                                            <p class="title">{workElem.data[4].companyName}, {workElem.data[4].jobLocation}</p>
                                                            <p class="sub_title">{workElem.data[4].jobTitle}</p>
                                                        </div>
                                                        <p class="content">{workElem.data[4].jobResponsibility1}</p>
                                                        <p class="content">{workElem.data[4].jobResponsibility2}</p>
                                                        <p class="content">{workElem.data[4].jobResponsibility3}</p>
                                                        <p class="content">{workElem.data[4].jobResponsibility4}</p>
                                                        <p class="content">{workElem.data[4].jobResponsibility5}</p>
                                                    </div>
                                                </li>}
                                            </ul>
                                        </div>
                                    )})}
                                    {educationData.map((educationElem, educationIndex) => {
                                    return (
                                        <div class="edu_sec" key={educationIndex}>
                                            <div class="button">Education</div>
                                            <ul>
                                                {educationElem?.data[0] && <li>
                                                    <div class="item">
                                                        <div class="item_grp">
                                                            <p className="timeline">{educationElem?.data[0]?.educationStartDate} - {educationElem?.data[0]?.educationEndDate}</p>
                                                            <p class="title">{educationElem?.data[0]?.major} ({educationElem?.data[0]?.schoolName}, {educationElem?.data[0]?.schoolLocation})</p>
                                                            <p class="sub_title">CGPA: {educationElem?.data[0]?.cgpa} Percentage: {educationElem?.data[0]?.percentage}</p>
                                                        </div>
                                                    </div>
                                                </li>}
                                                {educationElem?.data[1] && <li>
                                                    <div class="item">
                                                        <div class="item_grp">
                                                            <p className="timeline">{educationElem?.data[1]?.educationStartDate} - {educationElem?.data[1]?.educationEndDate}</p>
                                                            <p class="title">{educationElem?.data[1]?.major} ({educationElem?.data[1]?.schoolName}, {educationElem?.data[1]?.schoolLocation})</p>
                                                            <p class="sub_title">CGPA: {educationElem?.data[1]?.cgpa} Percentage: {educationElem?.data[1]?.percentage}</p>
                                                        </div>
                                                    </div>
                                                </li>}
                                                {educationElem?.data[2] && <li>
                                                    <div class="item">
                                                        <div class="item_grp">
                                                            <p className="timeline">{educationElem?.data[2]?.educationStartDate} - {educationElem?.data[2]?.educationEndDate}</p>
                                                            <p class="title">{educationElem?.data[2]?.major} ({educationElem?.data[2]?.schoolName}, {educationElem?.data[2]?.schoolLocation})</p>
                                                            <p class="sub_title">CGPA: {educationElem?.data[2]?.cgpa} Percentage: {educationElem?.data[2]?.percentage}</p>
                                                        </div>
                                                    </div>
                                                </li>}
                                                {educationElem?.data[3] && <li>
                                                    <div class="item">
                                                        <div class="item_grp">
                                                            <p className="timeline">{educationElem?.data[3]?.educationStartDate} - {educationElem?.data[3]?.educationEndDate}</p>
                                                            <p class="title">{educationElem?.data[3]?.major} ({educationElem?.data[3]?.schoolName}, {educationElem?.data[3]?.schoolLocation})</p>
                                                            <p class="sub_title">CGPA: {educationElem?.data[3]?.cgpa} Percentage: {educationElem?.data[3]?.percentage}</p>
                                                        </div>
                                                    </div>
                                                </li>}
                                                {educationElem?.data[4] && <li>
                                                    <div class="item">
                                                        <div class="item_grp">
                                                            <p className="timeline">{educationElem?.data[4]?.educationStartDate} - {educationElem?.data[4]?.educationEndDate}</p>
                                                            <p class="title">{educationElem?.data[4]?.major} ({educationElem?.data[4]?.schoolName}, {educationElem?.data[4]?.schoolLocation})</p>
                                                            <p class="sub_title">CGPA: {educationElem?.data[4]?.cgpa} Percentage: {educationElem?.data[4]?.percentage}</p>
                                                        </div>
                                                    </div>
                                                </li>}
                                            </ul>
                                        </div>
                                    )})}
                                    {projectData.map((projectElem, projectIndex) => {
                                    return (
                                        <div class="edu_sec" key={projectIndex}>
                                            <div class="button">Project</div>
                                            <ul>
                                                {projectElem?.data[0] && <li>
                                                    <div class="item">
                                                        <div class="item_grp">
                                                            <p className="timeline">{projectElem.data[0].startDate} - {projectElem.data[0].endDate}</p>
                                                            <p class="title">{projectElem.data[0].projectName}</p>
                                                            {projectElem.data[0].projectLink && <a href={projectElem.data[0].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}
                                                            {projectElem.data[0].projectLanguage1 && <p class="technology">Technology: {projectElem.data[0].projectLanguage1} {projectElem.data[0].projectLanguage2} {projectElem.data[0].projectLanguage3} {projectElem.data[0].projectLanguage4} {projectElem.data[0].projectLanguage5} {projectElem.data[0].projectLanguage6} {projectElem.data[0].projectLanguage7} {projectElem.data[0].projectLanguage8}</p>}
                                                        </div>
                                                        <p class="content">{projectElem.data[0].projectDescription}</p>
                                                    </div>
                                                </li>}
                                                {projectElem?.data[1] && <li>
                                                    <div class="item">
                                                        <div class="item_grp">
                                                            <p className="timeline">{projectElem.data[1].startDate} - {projectElem.data[1].endDate}</p>
                                                            <p class="title">{projectElem.data[1].projectName}</p>
                                                            {projectElem.data[1].projectLink && <a href={projectElem.data[1].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}
                                                            {projectElem.data[1].projectLanguage1 && <p class="technology">Technology: {projectElem.data[1].projectLanguage1} {projectElem.data[1].projectLanguage2} {projectElem.data[1].projectLanguage3} {projectElem.data[1].projectLanguage4} {projectElem.data[1].projectLanguage5} {projectElem.data[1].projectLanguage6} {projectElem.data[1].projectLanguage7} {projectElem.data[1].projectLanguage8}</p>}
                                                        </div>
                                                        <p class="content">{projectElem.data[1].projectDescription}</p>
                                                    </div>
                                                </li>}
                                                {projectElem?.data[2] && <li>
                                                    <div class="item">
                                                        <div class="item_grp">
                                                            <p className="timeline">{projectElem.data[2].startDate} - {projectElem.data[2].endDate}</p>
                                                            <p class="title">{projectElem.data[2].projectName}</p>
                                                            {projectElem.data[2].projectLink && <a href={projectElem.data[2].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}
                                                            {projectElem.data[2].projectLanguage1 && <p class="technology">Technology: {projectElem.data[2].projectLanguage1} {projectElem.data[2].projectLanguage2} {projectElem.data[2].projectLanguage3} {projectElem.data[2].projectLanguage4} {projectElem.data[2].projectLanguage5} {projectElem.data[2].projectLanguage6} {projectElem.data[2].projectLanguage7} {projectElem.data[2].projectLanguage8}</p>}
                                                        </div>
                                                        <p class="content">{projectElem.data[2].projectDescription}</p>
                                                    </div>
                                                </li>}
                                                {projectElem?.data[3] && <li>
                                                    <div class="item">
                                                        <div class="item_grp">
                                                            <p className="timeline">{projectElem.data[3].startDate} - {projectElem.data[3].endDate}</p>
                                                            <p class="title">{projectElem.data[3].projectName}</p>
                                                            {projectElem.data[3].projectLink && <a href={projectElem.data[3].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}
                                                            {projectElem.data[3].projectLanguage1 && <p class="technology">Technology: {projectElem.data[3].projectLanguage1} {projectElem.data[3].projectLanguage2} {projectElem.data[3].projectLanguage3} {projectElem.data[3].projectLanguage4} {projectElem.data[3].projectLanguage5} {projectElem.data[3].projectLanguage6} {projectElem.data[3].projectLanguage7} {projectElem.data[3].projectLanguage8}</p>}
                                                        </div>
                                                        <p class="content">{projectElem.data[3].projectDescription}</p>
                                                    </div>
                                                </li>}
                                                {projectElem?.data[4] && <li>
                                                    <div class="item">
                                                        <div class="item_grp">
                                                            <p className="timeline">{projectElem.data[4].startDate} - {projectElem.data[4].endDate}</p>
                                                            <p class="title">{projectElem.data[4].projectName}</p>
                                                            {projectElem.data[4].projectLink && <a href={projectElem.data[4].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}
                                                            {projectElem.data[4].projectLanguage1 && <p class="technology">Technology: {projectElem.data[4].projectLanguage1} {projectElem.data[4].projectLanguage2} {projectElem.data[4].projectLanguage3} {projectElem.data[4].projectLanguage4} {projectElem.data[4].projectLanguage5} {projectElem.data[4].projectLanguage6} {projectElem.data[4].projectLanguage7} {projectElem.data[4].projectLanguage8}</p>}
                                                        </div>
                                                        <p class="content">{projectElem.data[4].projectDescription}</p>
                                                    </div>
                                                </li>}
                                            </ul>
                                        </div>
                                    )})}
                                </div>
                                <div class="resume_right">
                                    <div class="profile_sec">
                                    {profileElem?.data?.imageUrl && <div class="img_holder">
                                            <img src={profileElem.data.imageUrl} alt="profileimage" />
                                        </div>}
                                        <div class="profile_info">
                                            <p class="first_name">{profileElem.data.fullName}</p>
                                            <p class="role">{profileElem.data.jobRole}</p>
                                        </div>
                                    </div>
                                    <div class="contact_sec">
                                        <div class="button">Contact US</div>
                                        <ul>
                                            <li class="item">
                                                <div class="icon">
                                                    <i class="fas fa-phone"></i>
                                                </div>
                                                <div class="content">
                                                    <p class="title">Phone</p>
                                                    <p class="subtitle">{profileElem.data.phn}</p>
                                                </div>
                                            </li>
                                            <li class="item">
                                                <div class="icon">
                                                    <i class="fas fa-envelope"></i>
                                                </div>
                                                <div class="content">
                                                    <p class="title">Email</p>
                                                    <p class="subtitle">{profileElem.data.email}</p>
                                                </div>
                                            </li>
                                            <li class="item">
                                                <div class="icon">
                                                    <i class="fab fa-weebly"></i>
                                                </div>
                                                <div class="content">
                                                    <p class="title">Website</p>
                                                    <p class="subtitle">{profileElem.data.link}</p>
                                                </div>
                                            </li>
                                            <li class="item">
                                                <div class="icon">
                                                    <i class="fas fa-map-signs"></i>
                                                </div>
                                                <div class="content">
                                                    <p class="title">Address</p>
                                                    <p class="subtitle">{profileElem.data.location}</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {skillData.map((skillElem, skillIndex) => {
                                        return (
                                            <div class="skills_sec" key={skillIndex}>
                                                <div class="button">Skills</div>
                                                <ul class="skills">
                                                    {skillElem?.data[0] && <li class="item">
                                                        <div class="content">{skillElem.data[0].skillName}</div>
                                                    </li>}
                                                    {skillElem?.data[1] && <li class="item">
                                                        <div class="content">{skillElem.data[1].skillName}</div>
                                                    </li>}
                                                    {skillElem?.data[2] && <li class="item">
                                                        <div class="content">{skillElem.data[2].skillName}</div>
                                                    </li>}
                                                    {skillElem?.data[3] && <li class="item">
                                                        <div class="content">{skillElem.data[3].skillName}</div>
                                                    </li>}
                                                    {skillElem?.data[4] && <li class="item">
                                                        <div class="content">{skillElem.data[4].skillName}</div>
                                                    </li>}
                                                    {skillElem?.data[5] && <li class="item">
                                                        <div class="content">{skillElem.data[5].skillName}</div>
                                                    </li>}
                                                    {skillElem?.data[6] && <li class="item">
                                                        <div class="content">{skillElem.data[6].skillName}</div>
                                                    </li>}
                                                    {skillElem?.data[7] && <li class="item">
                                                        <div class="content">{skillElem.data[7].skillName}</div>
                                                    </li>}
                                                    {skillElem?.data[8] && <li class="item">
                                                        <div class="content">{skillElem.data[8].skillName}</div>
                                                    </li>}
                                                    {skillElem?.data[9] && <li class="item">
                                                        <div class="content">{skillElem.data[9].skillName}</div>
                                                    </li>}
                                                </ul>
                                            </div>
                                        )})}
                                </div>
                            </div>
                        </div>
                    )})}
        </>
    )
}

export default forwardRef(ResumeTemplate5);