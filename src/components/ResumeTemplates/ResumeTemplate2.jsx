import React from "react";
import "./ResumeTemplate2.css";

export default function ResumeTemplate2(props) {
    return (
        <div class="resume">
            <div class="resume_left">
                <div class="resume_profile">
                    <img src="./profile.png" alt="profile_pic" />
                </div>
                <div class="resume_content">
                    <div class="resume_item resume_info">
                        <div class="title">
                            <p class="bold">stephen colbert</p>
                            <p class="regular">Designer</p>
                        </div>
                        <div class="resume_item resume_about">
                            <div class="title">
                                <p class="bold">About</p>
                            </div>
                            <p class="about">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis illo fugit officiis distinctio culpa officia totam atque exercitationem inventore repudiandae?</p>
                        </div>
                        <ul>
                            <li>
                                <div class="icon">
                                    <i class="fas fa-map-signs"></i>
                                </div>
                                <div class="data">
                                    21 Street, Texas <br /> USA
                                </div>
                            </li>
                            <li>
                                <div class="icon">
                                    <i class="fas fa-mobile-alt"></i>
                                </div>
                                <div class="data">
                                    +324 4445678
                                </div>
                            </li>
                            <li>
                                <div class="icon">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div class="data">
                                    stephen@gmail.com
                                </div>
                            </li>
                            <li>
                                <div class="icon">
                                    <i class="fab fa-weebly"></i>
                                </div>
                                <div class="data">
                                    www.stephen.com
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="resume_item resume_skills">
                        <div class="title">
                            <p class="bold">skill's</p>
                        </div>
                        <ul>
                            <li>
                                <div class="skill_name">
                                    HTML
                                </div>

                            </li>
                            <li>
                                <div class="skill_name">
                                    CSS
                                </div>

                            </li>
                            <li>
                                <div class="skill_name">
                                    SASS
                                </div>

                            </li>
                            <li>
                                <div class="skill_name">
                                    JS
                                </div>

                            </li>
                            <li>
                                <div class="skill_name">
                                    JQUERY
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="resume_right">
                <div class="resume_item resume_work">
                    <div class="title">
                        <p class="bold">Work Experience</p>
                    </div>
                    <ul>
                        <li>
                            <div class="date">2013 - 2015</div>
                            <div class="info">
                                <p class="semi-bold">Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                            </div>
                        </li>
                        <li>
                            <div class="date">2015 - 2017</div>
                            <div class="info">
                                <p class="semi-bold">Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                            </div>
                        </li>
                        <li>
                            <div class="date">2017 - Present</div>
                            <div class="info">
                                <p class="semi-bold">Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="resume_item resume_education">
                    <div class="title">
                        <p class="bold">Education</p>
                    </div>
                    <ul>
                        <li>
                            <div class="date">2010 - 2013</div>
                            <div class="info">
                                <p class="semi-bold">Web Designing (Texas University)</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
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
}