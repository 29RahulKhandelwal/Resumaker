import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useReactToPrint } from 'react-to-print';
import ResumeTemplate1 from '../ResumeTemplates/ResumeTemplate1';
import ResumeTemplate10 from '../ResumeTemplates/ResumeTemplate10';
import ResumeTemplate11 from '../ResumeTemplates/ResumeTemplate11';
import ResumeTemplate12 from '../ResumeTemplates/ResumeTemplate12';
import ResumeTemplate13 from '../ResumeTemplates/ResumeTemplate13';
import ResumeTemplate14 from '../ResumeTemplates/ResumeTemplate14';
import ResumeTemplate15 from '../ResumeTemplates/ResumeTemplate15';
import ResumeTemplate16 from '../ResumeTemplates/ResumeTemplate16';
import ResumeTemplate17 from '../ResumeTemplates/ResumeTemplate17';
import ResumeTemplate2 from '../ResumeTemplates/ResumeTemplate2';
import ResumeTemplate3 from '../ResumeTemplates/ResumeTemplate3';
import ResumeTemplate4 from '../ResumeTemplates/ResumeTemplate4';
import ResumeTemplate5 from '../ResumeTemplates/ResumeTemplate5';
import ResumeTemplate6 from '../ResumeTemplates/ResumeTemplate6';
import ResumeTemplate7 from '../ResumeTemplates/ResumeTemplate7';
import ResumeTemplate8 from '../ResumeTemplates/ResumeTemplate8';
import ResumeTemplate9 from '../ResumeTemplates/ResumeTemplate9';

const Preview = () => {
    var clicked=localStorage.getItem("Template");

    const componentRef=useRef();
    const handlePrint=useReactToPrint({
        content:()=>componentRef.current
    });

    const profileData=useSelector((state)=>state.profileReducer.profileData);
    const educationData=useSelector((state)=>state.educationReducer.educationData);
    const workData=useSelector((state)=>state.workReducer.workData);
    const projectData=useSelector((state)=>state.projectReducer.projectData);
    const skillData=useSelector((state)=>state.skillReducer.skillData);
    return (
        <>
            <div className='text-center download-pdf-btn'>
                <button className="btn btn-outline-primary btn-md create-button para-text template-button text-center" onClick={handlePrint}>Download PDF</button>
            </div>
            {clicked === "Template1" && <ResumeTemplate1 profileData={profileData} educationData={educationData} workData={workData} projectData={projectData} skillData={skillData} ref={componentRef} />}
            {clicked === "Template2" && <ResumeTemplate2 profileData={profileData} educationData={educationData} workData={workData} projectData={projectData} skillData={skillData} ref={componentRef} />}
            {clicked === "Template3" && <ResumeTemplate3 profileData={profileData} educationData={educationData} workData={workData} projectData={projectData} skillData={skillData} ref={componentRef}  />}
            {clicked === "Template4" && <ResumeTemplate4 profileData={profileData} educationData={educationData} workData={workData} projectData={projectData} skillData={skillData} ref={componentRef} />}
            {clicked === "Template5" && <ResumeTemplate5 profileData={profileData} educationData={educationData} workData={workData} projectData={projectData} skillData={skillData} ref={componentRef} />}
            {clicked === "Template6" && <ResumeTemplate6 profileData={profileData} educationData={educationData} workData={workData} projectData={projectData} skillData={skillData} ref={componentRef} />}
            {clicked === "Template7" && <ResumeTemplate7 profileData={profileData} educationData={educationData} workData={workData} projectData={projectData} skillData={skillData} ref={componentRef} />}
            {clicked === "Template8" && <ResumeTemplate8 profileData={profileData} educationData={educationData} workData={workData} projectData={projectData} skillData={skillData} ref={componentRef} />}
            {clicked === "Template9" && <ResumeTemplate9 profileData={profileData} educationData={educationData} workData={workData} projectData={projectData} skillData={skillData} ref={componentRef} />}
            {clicked === "Template10" && <ResumeTemplate10 profileData={profileData} educationData={educationData} workData={workData} projectData={projectData} skillData={skillData} ref={componentRef} />}
            {clicked === "Template11" && <ResumeTemplate11 profileData={profileData} educationData={educationData} workData={workData} projectData={projectData} skillData={skillData} ref={componentRef} />}
            {clicked === "Template12" && <ResumeTemplate12 profileData={profileData} educationData={educationData} workData={workData} projectData={projectData} skillData={skillData} ref={componentRef} />}
            {clicked === "Template13" && <ResumeTemplate13 profileData={profileData} educationData={educationData} workData={workData} projectData={projectData} skillData={skillData} ref={componentRef} />}
            {clicked === "Template14" && <ResumeTemplate14 profileData={profileData} educationData={educationData} workData={workData} projectData={projectData} skillData={skillData} ref={componentRef} />}
            {clicked === "Template15" && <ResumeTemplate15 profileData={profileData} educationData={educationData} workData={workData} projectData={projectData} skillData={skillData} ref={componentRef} />}
            {clicked === "Template16" && <ResumeTemplate16 profileData={profileData} educationData={educationData} workData={workData} projectData={projectData} skillData={skillData} ref={componentRef} />}
            {clicked === "Template17" && <ResumeTemplate17 profileData={profileData} educationData={educationData} workData={workData} projectData={projectData} skillData={skillData} ref={componentRef} />}
        </>
    )
}

export default Preview