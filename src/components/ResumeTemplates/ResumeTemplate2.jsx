import React from "react";
import "./ResumeTemplate2.css";

export default function ResumeTemplate2(props) {
    var profileData = props.profileData;
    // var educationData = props.educationData;
    var workData = props.workData;
    var skillData = props.skillData;
    // var projectData = props.projectData;
    return (
        <>
            {
                profileData.map((profileElem, profileIndex) => {
                    return (
                        <div class="resume" key={profileIndex}>
                            <div class="resume_left">
                                {profileElem?.data?.imageUrl && <div class="resume_profile">
                                    <img src= {profileElem.data.imageUrl}alt="profile_pic" />
                                </div>}
                                <div class="resume_content">
                                    <div class="resume_item resume_info">
                                        <div class="title">
                                            <p class="bold">{profileElem.data.fullName}</p>
                                            <p class="regular">{profileElem.data.jobRole}</p>
                                        </div>
                                        <div class="resume_item resume_about">
                                            <div class="title">
                                                <p class="bold">About</p>
                                            </div>
                                            <p class="about">{profileElem.data.about}</p>
                                        </div>
                                        <ul>
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
                                                <ul>
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
                                {/* {educationData.map((educationElem, educationIndex) => {
                                    return (
                                        
                                    )})} */}
                                <div class="resume_item resume_education">
                                    <div class="title">
                                        <p class="bold">Education</p>
                                    </div>
                                    <ul>
                                        <li>
                                            <div class="date">2010 - 2013</div>
                                            <div class="info">
                                                <p class="semi-bold">B.Tech in CSE (HMRITM, India)</p>
                                                <p>CGPA: 8.6 Percentage: 90</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="date">2000 - 2010</div>
                                            <div class="info">
                                                <p class="semi-bold">Texas International School</p>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="resume_item resume_education">
                                    <div class="title">
                                        <p class="bold">Projects</p>
                                    </div>
                                    <ul>
                                        <li>
                                            <div class="date">Sep 2018 - Dec 2018</div>
                                            <div class="info">
                                                <p class="semi-bold">Chat Application</p>
                                                <a href="" class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>
                                                <p class="semi-bold">Technology: Python Django</p>
                                                <p>Real Time chat application build using node.js and socket.io</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="date">Jan 2019 - Feb 2019</div>
                                            <div class="info">
                                                <p class="semi-bold">Twitter Clone</p>
                                                <p>Created Twitter clone using node.js and socket.io</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    )
                })
            }
        </>
    )
}