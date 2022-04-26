import React from 'react';
import "../ResumeTemplates/ResumeTemplate1.css";

const Preview = () => {
    
    return (
        <>
            <div className="resume">
                <div class="resume_wrapper">
                    <div class="resume_left">
                        <div class="resume_image">
                            <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Resume_image" />
                        </div>
                        <div class="resume_bottom">
                            <div class="resume_item resume_namerole">
                                <div class="name">Rosie Jackson</div>
                                <div class="role">UI Designer</div>
                            </div>
                            <div class="resume_item resume_profile">
                                <div class="resume_title">Profile</div>
                                <div class="resume_info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur.</div>
                            </div>
                            <div class="resume_item resume_address">
                                <div class="resume_title">Address</div>
                                <div class="resume_info">
                                    18th home,<br />
                                    woods street,<br />
                                    New York City, United States
                                </div>
                            </div>
                            <div class="resume_item resume_contact">
                                <div class="resume_title">Contact</div>
                                <div class="resume_info">
                                    <div class="resume_subtitle">Phone</div>
                                    <div class="resume_subinfo">+62 000 222 333</div>
                                </div>
                                <div class="resume_info">
                                    <div class="resume_subtitle">Email</div>
                                    <div class="resume_subinfo">rosiejack@gmail.com</div>
                                </div>
                                <div class="resume_info">
                                    <div class="resume_subtitle">Website</div>
                                    <div class="resume_subinfo">www.rosiejackson.com</div>
                                </div>
                            </div>
                            <div class="resume_item resume_skills">
                                <div class="resume_title">Skills</div>
                                <div class="resume_info">
                                    <div class="skills_list">
                                        <div class="skills_left">HTML</div>
                                    </div>
                                    <div class="skills_list">
                                        <div class="skills_left">CSS</div>
                                    </div>
                                    <div class="skills_list">
                                        <div class="skills_left">Javascript</div>
                                    </div>
                                    <div class="skills_list">
                                        <div class="skills_left">Photoshop</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="resume_right">
                        <div class="resume_item resume_namerole">
                            <div class="name">Rosie Jackson</div>
                            <div class="role">UI Designer</div>
                        </div>
                        <div class="resume_item resume_education">
                            <div class="resume_title">Education</div>
                            <div class="resume_info">
                                <div class="resume_data">
                                    <div class="year">2000 - 2010</div>
                                    <div class="content">
                                        <p>HMRRITM, India</p>
                                        <p>Computer Science CGPA: 8.1 Percentage: 85</p>
                                    </div>
                                </div>
                                <div class="resume_data">
                                    <div class="year">2010 - 2013</div>
                                    <div class="content">
                                        <p>Title</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                                <div class="resume_data">
                                    <div class="year">2013 - 2015</div>
                                    <div class="content">
                                        <p>Title</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="resume_item resume_experience">
                            <div class="resume_title">Experience</div>
                            <div class="resume_info">
                                <div class="resume_data">
                                    <div class="year">2013 - 2015</div>
                                    <div class="content">
                                        <p>Google, India</p>
                                        <p>Software Engineer</p>
                                        <p>Full Stack Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, laudantium!</p>
                                    </div>
                                </div>
                                <div class="resume_data">
                                    <div class="year">2013 - 2015</div>
                                    <div class="content">
                                        <p>Title</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                                <div class="resume_data">
                                    <div class="year">2013 - 2015</div>
                                    <div class="content">
                                        <p>Title</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="resume_item resume_experience">
                            <div class="resume_title">Project</div>
                            <div class="resume_info">
                                <div class="resume_data">
                                    <div class="year">2013 - 2015</div>
                                    <div class="content">
                                        <p>Title  &nbsp;&nbsp;</p>
                                        <a href="" class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>
                                        <p>Technology: React MaterialUI</p>
                                        <p>Full Stack Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, laudantium!</p>
                                    </div>
                                </div>
                                <div class="resume_data">
                                    <div class="year">2013 - 2015</div>
                                    <div class="content">
                                        <p>Title</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Preview