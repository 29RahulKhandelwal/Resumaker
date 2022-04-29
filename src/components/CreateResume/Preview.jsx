import React from 'react';
import { useSelector } from 'react-redux';
import ResumeTemplate1 from '../ResumeTemplates/ResumeTemplate1';
import ResumeTemplate2 from '../ResumeTemplates/ResumeTemplate2';
// import ResumeTemplate3 from '../ResumeTemplates/ResumeTemplate3';
// import ResumeTemplate4 from '../ResumeTemplates/ResumeTemplate4';
// import ResumeTemplate5 from '../ResumeTemplates/ResumeTemplate5';

const Preview = () => {
    var clicked=localStorage.getItem("Template");
    const profileData=useSelector((state)=>state.profileReducer.profileData);
    const educationData=useSelector((state)=>state.educationReducer.educationData);
    const workData=useSelector((state)=>state.workReducer.workData);
    const projectData=useSelector((state)=>state.projectReducer.projectData);
    const skillData=useSelector((state)=>state.skillReducer.skillData);
    return (
        <>
            <button className="btn btn-outline-primary btn-md create-button para-text template-button download-btn">Download PDF</button>
            {clicked === "Template1" && <ResumeTemplate1 profileData={profileData} educationData={educationData} workData={workData} projectData={projectData} skillData={skillData} />}
            {clicked === "Template2" && <ResumeTemplate2 profileData={profileData} educationData={educationData} workData={workData} projectData={projectData} skillData={skillData} />}
            {/* {clicked === "Template3" && <ResumeTemplate3 profileData={profileData} educationData={educationData} workData={workData} projectData={projectData} skillData={skillData} />}
            {clicked === "Template4" && <ResumeTemplate4 profileData={profileData} educationData={educationData} workData={workData} projectData={projectData} skillData={skillData} />}
            {clicked === "Template5" && <ResumeTemplate5 profileData={profileData} educationData={educationData} workData={workData} projectData={projectData} skillData={skillData} />} */}
        </>
    )
}

export default Preview