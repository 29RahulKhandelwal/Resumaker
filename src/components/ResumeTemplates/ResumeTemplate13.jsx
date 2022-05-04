import React, {forwardRef} from 'react';
import "./ResumeTemplate13.css";

const ResumeTemplate13 = (props,ref) => {
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
                    <div class="container-fluids overcover" key={profileIndex} ref={ref}>
                    <div class="profile-boxs">
                        <div class="title row">
                            <h1>{profileElem.data.fullName}</h1>
                            <p>
                                <i class="fas sel fa-star"></i>
                                <i class="fas sel fa-star"></i>
                                <i class="fas sel fa-star"></i>
                                <i class="fas sel fa-star"></i>
                                <i class="fas sel fa-star"></i>
                                <i class="fas sel fa-star"></i>
                                <i class="fas sel fa-star"></i>
                                <i class="fas sel fa-star"></i>
                                <i class="fas sel fa-star"></i>
                                <i class="fas sel fa-star"></i>
                            </p>
                            <h6>{profileElem.data.jobRole}</h6>
                        </div>
                        <div class="details row">
                            <div class="col-md-6 col6">
                                <div class="abouts pr">
                                    <h5>About</h5>
                                    <p>{profileElem.data.about}</p>
                                </div>
                            </div>
                            <div class="col-md-6 col6">
                                <div class="contact pl">
                                    <h5>Contact Details</h5>
                                    <ul>
                                        <li><i class="fas fa-phone"></i> {profileElem.data.phn}</li>
                                        <li><i class="far fa-envelope"></i> {profileElem.data.phn}</li>
                                        <li><i class="fas fa-globe-americas"></i> {profileElem.data.link}</li>
                                        <li><i class="fa-solid fa-location-pin"></i> {profileElem.data.location}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {workData.map((workElem, workIndex) => {
                            return (
                                <div class="details row" key={workIndex}>
                                    <div class="col-md-6 col6">
                                        <h5>Experience</h5>
                                        {workElem?.data[0] && <div class="experiance pr">
                                            <h6>{workElem.data[0].jobTitle}</h6>
                                            <p>{workElem.data[0].companyName}, {workElem.data[0].jobLocation}({workElem.data[0].startDate} - {workElem.data[0].endDate})</p>
                                            <ul>
                                                <li>{workElem.data[0].jobResponsibility1}</li>
                                                <li>{workElem.data[0].jobResponsibility2}</li>
                                                <li>{workElem.data[0].jobResponsibility3}</li>
                                                <li>{workElem.data[0].jobResponsibility4}</li>
                                                <li>{workElem.data[0].jobResponsibility5}</li>
                                            </ul>
                                        </div>}
                                        {workElem?.data[2] && <div class="experiance pr">
                                            <h6>{workElem.data[2].jobTitle}</h6>
                                            <p>{workElem.data[2].companyName}, {workElem.data[2].jobLocation}({workElem.data[2].startDate} - {workElem.data[2].endDate})</p>
                                            <ul>
                                                <li>{workElem.data[2].jobResponsibility1}</li>
                                                <li>{workElem.data[2].jobResponsibility2}</li>
                                                <li>{workElem.data[2].jobResponsibility3}</li>
                                                <li>{workElem.data[2].jobResponsibility4}</li>
                                                <li>{workElem.data[2].jobResponsibility5}</li>
                                            </ul>
                                        </div>}
                                        {workElem?.data[4] && <div class="experiance pr">
                                            <h6>{workElem.data[4].jobTitle}</h6>
                                            <p>{workElem.data[4].companyName}, {workElem.data[4].jobLocation}({workElem.data[4].startDate} - {workElem.data[4].endDate})</p>
                                            <ul>
                                                <li>{workElem.data[4].jobResponsibility1}</li>
                                                <li>{workElem.data[4].jobResponsibility2}</li>
                                                <li>{workElem.data[4].jobResponsibility3}</li>
                                                <li>{workElem.data[4].jobResponsibility4}</li>
                                                <li>{workElem.data[4].jobResponsibility5}</li>
                                            </ul>
                                        </div>}
                                    </div>
                                    <div class="col-md-6 col6 space">
                                    {workElem?.data[1] && <div class="experiance pl">
                                            <h6>{workElem.data[1].jobTitle}</h6>
                                            <p>{workElem.data[1].companyName}, {workElem.data[1].jobLocation}({workElem.data[1].startDate} - {workElem.data[1].endDate})</p>
                                            <ul>
                                                <li>{workElem.data[1].jobResponsibility1}</li>
                                                <li>{workElem.data[1].jobResponsibility2}</li>
                                                <li>{workElem.data[1].jobResponsibility3}</li>
                                                <li>{workElem.data[1].jobResponsibility4}</li>
                                                <li>{workElem.data[1].jobResponsibility5}</li>
                                            </ul>
                                        </div>}
                                        {workElem?.data[3] && <div class="experiance pl">
                                            <h6>{workElem.data[3].jobTitle}</h6>
                                            <p>{workElem.data[3].companyName}, {workElem.data[3].jobLocation}({workElem.data[3].startDate} - {workElem.data[3].endDate})</p>
                                            <ul>
                                                <li>{workElem.data[3].jobResponsibility1}</li>
                                                <li>{workElem.data[3].jobResponsibility2}</li>
                                                <li>{workElem.data[3].jobResponsibility3}</li>
                                                <li>{workElem.data[3].jobResponsibility4}</li>
                                                <li>{workElem.data[3].jobResponsibility5}</li>
                                            </ul>
                                        </div>}
                                    </div>
                                </div>
                            )})}
                        {projectData.map((projectElem, projectIndex) => {
                            return (
                            <div class="details row" key={projectIndex}>
                                <div class="col-md-6 col6">
                                    {projectElem?.data[0] && <div class="experiance pr">
                                        <h6 class="rt6">{projectElem.data[0].projectName} ({projectElem.data[0].startDate} - {projectElem.data[0].endDate})</h6>
                                        <p>{projectElem.data[0].projectLink && <a href={projectElem.data[0].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}</p>
                                        {projectElem.data[0].projectLanguage1 && <p>Technology: {projectElem.data[0].projectLanguage1} {projectElem.data[0].projectLanguage2} {projectElem.data[0].projectLanguage3} {projectElem.data[0].projectLanguage4} {projectElem.data[0].projectLanguage5} {projectElem.data[0].projectLanguage6} {projectElem.data[0].projectLanguage7} {projectElem.data[0].projectLanguage8}</p>}
                                        <ul>
                                            <li>{projectElem.data[0].projectDescription}</li>
                                        </ul>
                                    </div>}
                                </div>
                                <div class="col-md-6 col6 space-project">
                                    {projectElem?.data[1] && <div class="experiance pl">
                                        <h6 class="rt6">{projectElem.data[1].projectName} ({projectElem.data[1].startDate} - {projectElem.data[1].endDate})</h6>
                                        <p>{projectElem.data[1].projectLink && <a href={projectElem.data[1].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}</p>
                                        {projectElem.data[1].projectLanguage1 && <p>Technology: {projectElem.data[1].projectLanguage1} {projectElem.data[1].projectLanguage2} {projectElem.data[1].projectLanguage3} {projectElem.data[1].projectLanguage4} {projectElem.data[1].projectLanguage5} {projectElem.data[1].projectLanguage6} {projectElem.data[1].projectLanguage7} {projectElem.data[1].projectLanguage8}</p>}
                                        <ul>
                                            <li>{projectElem.data[1].projectDescription}</li>
                                        </ul>
                                    </div>}
                                </div>
                                <div class="col-md-6 col6">
                                    {projectElem?.data[2] && <div class="experiance pr">
                                        <h6 class="rt6">{projectElem.data[2].projectName} ({projectElem.data[2].startDate} - {projectElem.data[2].endDate})</h6>
                                        <p>{projectElem.data[2].projectLink && <a href={projectElem.data[2].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}</p>
                                        {projectElem.data[2].projectLanguage1 && <p>Technology: {projectElem.data[2].projectLanguage1} {projectElem.data[2].projectLanguage2} {projectElem.data[2].projectLanguage3} {projectElem.data[2].projectLanguage4} {projectElem.data[2].projectLanguage5} {projectElem.data[2].projectLanguage6} {projectElem.data[2].projectLanguage7} {projectElem.data[2].projectLanguage8}</p>}
                                        <ul>
                                            <li>{projectElem.data[2].projectDescription}</li>
                                        </ul>
                                    </div>}
                                </div>
                                <div class="col-md-6 col6 space-project">
                                    {projectElem?.data[3] && <div class="experiance pl">
                                        <h6 class="rt6">{projectElem.data[3].projectName} ({projectElem.data[3].startDate} - {projectElem.data[3].endDate})</h6>
                                        <p>{projectElem.data[3].projectLink && <a href={projectElem.data[3].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}</p>
                                        {projectElem.data[3].projectLanguage1 && <p>Technology: {projectElem.data[3].projectLanguage1} {projectElem.data[3].projectLanguage2} {projectElem.data[3].projectLanguage3} {projectElem.data[3].projectLanguage4} {projectElem.data[3].projectLanguage5} {projectElem.data[3].projectLanguage6} {projectElem.data[3].projectLanguage7} {projectElem.data[3].projectLanguage8}</p>}
                                        <ul>
                                            <li>{projectElem.data[3].projectDescription}</li>
                                        </ul>
                                    </div>}
                                </div>
                                <div class="col-md-6 col6">
                                    {projectElem?.data[4] && <div class="experiance pr">
                                        <h6 class="rt6">{projectElem.data[4].projectName} ({projectElem.data[4].startDate} - {projectElem.data[4].endDate})</h6>
                                        <p>{projectElem.data[4].projectLink && <a href={projectElem.data[4].projectLink} class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>}</p>
                                        {projectElem.data[4].projectLanguage1 && <p>Technology: {projectElem.data[4].projectLanguage1} {projectElem.data[4].projectLanguage2} {projectElem.data[4].projectLanguage3} {projectElem.data[4].projectLanguage4} {projectElem.data[4].projectLanguage5} {projectElem.data[4].projectLanguage6} {projectElem.data[4].projectLanguage7} {projectElem.data[4].projectLanguage8}</p>}
                                        <ul>
                                            <li>{projectElem.data[4].projectDescription}</li>
                                        </ul>
                                    </div>}
                                </div>
                            </div>
                        )})}
                        <div class="details row">
                        {educationData.map((educationElem, educationIndex) => {
                            return (
                                <div class="col-md-6 col6" key={educationIndex}>
                                    {educationElem?.data[0] && <div class="award educa pr">
                                        <h5>Education</h5>
                                        <h6>{educationElem?.data[0]?.schoolName},  {educationElem?.data[0]?.schoolLocation}  ({educationElem?.data[0]?.educationStartDate} - {educationElem?.data[0]?.educationEndDate})</h6>
                                        <p>{educationElem?.data[0]?.major}</p>
                                        <p class="education-para-last">CGPA: {educationElem?.data[0]?.cgpa} Percentage: {educationElem?.data[0]?.percentage}</p>
                                    </div>}
                                    {educationElem?.data[1] && <div class="award educa pr">
                                        <h6>{educationElem?.data[1]?.schoolName},  {educationElem?.data[1]?.schoolLocation}  ({educationElem?.data[1]?.educationStartDate} - {educationElem?.data[1]?.educationEndDate})</h6>
                                        <p>{educationElem?.data[1]?.major}</p>
                                        <p class="education-para-last">CGPA: {educationElem?.data[1]?.cgpa} Percentage: {educationElem?.data[1]?.percentage}</p>
                                    </div>}
                                    {educationElem?.data[2] && <div class="award educa pr">
                                        <h6>{educationElem?.data[2]?.schoolName},  {educationElem?.data[2]?.schoolLocation}  ({educationElem?.data[2]?.educationStartDate} - {educationElem?.data[2]?.educationEndDate})</h6>
                                        <p>{educationElem?.data[2]?.major}</p>
                                        <p class="education-para-last">CGPA: {educationElem?.data[2]?.cgpa} Percentage: {educationElem?.data[2]?.percentage}</p>
                                    </div>}
                                    {educationElem?.data[3] && <div class="award educa pr">
                                        <h6>{educationElem?.data[3]?.schoolName},  {educationElem?.data[3]?.schoolLocation}  ({educationElem?.data[3]?.educationStartDate} - {educationElem?.data[3]?.educationEndDate})</h6>
                                        <p>{educationElem?.data[3]?.major}</p>
                                        <p class="education-para-last">CGPA: {educationElem?.data[3]?.cgpa} Percentage: {educationElem?.data[3]?.percentage}</p>
                                    </div>}
                                    {educationElem?.data[4] && <div class="award educa pr">
                                        <h6>{educationElem?.data[4]?.schoolName},  {educationElem?.data[4]?.schoolLocation}  ({educationElem?.data[4]?.educationStartDate} - {educationElem?.data[4]?.educationEndDate})</h6>
                                        <p>{educationElem?.data[4]?.major}</p>
                                        <p class="education-para-last">CGPA: {educationElem?.data[4]?.cgpa} Percentage: {educationElem?.data[4]?.percentage}</p>
                                    </div>}
                                </div>
                            )})}
                            {skillData.map((skillElem, skillIndex) => {
                                return (
                                    <div class="col-md-6 col6" key={skillIndex}>
                                        <div class="skill pl">
                                            <h5>Skills</h5>
                                            <ul>
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
                                    </div>
                                )})}
                        </div>
                    </div>
                    </div>
                )})}
    </>
  )
}

export default forwardRef(ResumeTemplate13);