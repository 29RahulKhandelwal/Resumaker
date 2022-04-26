import React from "react";
import "./ResumeTemplate5.css";

export default function ResumeTemplate5(props) {
    return (
        <div class="wrapper">
            <div class="resume_design">
                <div class="resume_left">
                    <div class="about_sec">
                        <div class="button">About Me</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.</p>
                        <p> Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div class="exp_sec">
                        <div class="button">Experience</div>
                        <ul>
                            <li>
                                <div class="item">
                                    <div class="item_grp">
                                        <p class="title">Microsoft, India</p>
                                        <p class="sub_title">Software Engineer</p>
                                        <span class="timeline">2020 - Present</span>
                                    </div>
                                    <p class="content">Job Responsibility.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="edu_sec">
                        <div class="button">Education</div>
                        <ul>
                            <li>
                                <div class="item">
                                    <div class="item_grp">
                                        <p class="title">B.Tech in CSE (HMRITM, India)</p>
                                        <p class="sub_title">CGPA: 8.6 Percentage: 90</p>
                                        <span class="timeline">2011-2015</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="edu_sec">
                        <div class="button">Project</div>
                        <ul>
                            <li>
                                <div class="item">
                                    <div class="item_grp">
                                        <p class="title">Chat Application</p>
                                        <a href="" class="project-anchor">ProjectLink <i class="fa-solid fa-up-right-from-square"></i></a>
                                        <span class="timeline">Jun 2019- July 2019</span>
                                        <p class="technology">Technology: Javascript React</p>
                                    </div>
                                    <p class="content">Chat Application where you can chat in real time with anyone from anywhere.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="resume_right">
                    <div class="profile_sec">
                        <div class="img_holder">
                            <img src="profile.png" alt="profileimage" />
                        </div>
                        <div class="profile_info">
                            <p class="first_name">Mark</p>
                            <p class="last_name">levin peterwood</p>
                            <p class="role">Full Stack Developer</p>
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
                                    <p class="subtitle">+123 45566688</p>
                                </div>
                            </li>
                            <li class="item">
                                <div class="icon">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div class="content">
                                    <p class="title">Email</p>
                                    <p class="subtitle">Markwood@gmail.com</p>
                                </div>
                            </li>
                            <li class="item">
                                <div class="icon">
                                    <i class="fab fa-weebly"></i>
                                </div>
                                <div class="content">
                                    <p class="title">Website</p>
                                    <p class="subtitle">www.Markwood.com</p>
                                </div>
                            </li>
                            <li class="item">
                                <div class="icon">
                                    <i class="fas fa-map-signs"></i>
                                </div>
                                <div class="content">
                                    <p class="title">Address</p>
                                    <p class="subtitle">12th cross, Townhall, NY, USA</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="skills_sec">
                        <div class="button">Skills</div>
                        <ul class="skills">
                            <li class="item">
                                <div class="content">HTML/CSS</div>
                            </li>
                            <li class="item">
                                <div class="content">Javascript</div>
                            </li>
                            <li class="item">
                                <div class="content">PHP</div>
                            </li>
                            <li class="item">
                                <div class="content">SQL</div>
                            </li>
                            <li class="item">
                                <div class="content">Github</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}