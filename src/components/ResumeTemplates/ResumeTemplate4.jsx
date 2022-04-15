import React from "react";
import "./ResumeTemplate4.css"

export default function ResumeTemplate4(props) {
    return (
        <main class="main-content">
            <section class="left-section">
                <div class="left-content">
                    <div class="profile">
                        <div class="image">
                            <img src="./avatar.jpg" alt="pic" />
                        </div>
                        <h2 class="name">Lorem Dola Ipsum</h2>
                        <p class="career">Software Engineer</p>
                    </div>
                    <div class="contact-info">
                        <h3 class="main-title">Contact Info</h3>
                        <ul>
                            <li class="contact-info">
                                <i class="fa fa-phone"></i>
                                07661892982
                            </li>
                            <li class="contact-info">
                                <i class="fa fa-fax"></i>
                                loremipsum@gmail.com
                            </li>
                            <li class="contact-info">
                                <i class="fa fa-globe"></i>
                                www.loremipsum.com
                            </li>
                            <li class="contact-info">
                                <i class="fa fa-map-marker"></i>
                                37 Pramount St, London
                            </li>
                        </ul>
                    </div>
                    <div class="skills-section">
                        <h3 class="main-title">Skills</h3>
                        <ul>
                            <li>
                                <p class="skill-title">Javascript</p>
                            </li>
                            <li>
                                <p class="skill-title">Photoshop</p>
                            </li>
                            <li>
                                <p class="skill-title">Java</p>
                            </li>
                            <li>
                                <p class="skill-title">C++</p>
                            </li>
                            <li>
                                <p class="skill-title">Ruby</p>
                            </li>
                            <li>
                                <p class="skill-title">Node js</p>
                            </li>
                            <li>
                                <p class="skill-title">html/css</p>
                            </li>
                            <li>
                                <p class="skill-title">illustrator</p>
                            </li>
                            <li>
                                <p class="skill-title">Wordpress</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section class="right-section">
                <div class="right-main-content">
                    <section class="about sect">
                        <h2 class="right-title">About Me</h2>
                        <p class="para">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam molestias facilis ullam dolorum, reprehenderit dolorem accusantium sit quo
                            dolore nostrum assumenda obcaecati animi commodi nobis labore exercitationem corporis esse eveniet optio laudantium molestiae maiores pariatur nisi cumque.
                            Distinctio et, totam, dicta autem nostrum doloribus ipsam vel
                        </p>
                    </section>

                    <section class="experince sect">
                        <h2 class="right-title">Experience</h2>
                        <div class="timeline">
                            <div class="left-tl-content">
                                <h5 class="tl-title">Google Inc</h5>
                                <p class="para">2019 - 2020</p>
                            </div>
                            <div class="right-tl-content">
                                <div class="tl-content">
                                    <h5 class="tl-title-2">Lead Web developer</h5>
                                    <p class="para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae
                                        voluptatem deleniti,
                                        laboriosam odio nobis quae fugit facilis quo.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="timeline">
                            <div class="left-tl-content">
                                <h5 class="tl-title">Apple</h5>
                                <p class="para">2020 - Present</p>
                            </div>
                            <div class="right-tl-content">
                                <div class="tl-content">
                                    <h5 class="tl-title-2">Senior Developer</h5>
                                    <p class="para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae
                                        voluptatem deleniti,
                                        laboriosam odio nobis quae fugit facilis quo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="education sect">
                        <h2 class="right-title">education</h2>
                        <div class="timeline">
                            <div class="left-tl-content">
                                <h5 class="tl-title">Cheney School</h5>
                                <p class="para">2016 - 2018</p>
                            </div>
                            <div class="right-tl-content">
                                <div class="tl-content">
                                    <h5 class="tl-title-2">A - Levels</h5>
                                    <p class="para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae
                                        voluptatem deleniti,
                                        laboriosam odio nobis quae fugit facilis quo.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="timeline">
                            <div class="left-tl-content">
                                <h5 class="tl-title">University of Sussex</h5>
                                <p class="para">2018 - Present</p>
                            </div>
                            <div class="right-tl-content">
                                <div class="tl-content">
                                    <h5 class="tl-title-2">Computer Science</h5>
                                    <p class="para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae
                                        voluptatem deleniti,
                                        laboriosam odio nobis quae fugit facilis quo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="education sect">
                        <h2 class="right-title">Project</h2>
                        <div class="timeline">
                            <div class="left-tl-content">
                                <h5 class="tl-title">FunGame</h5>
                                <p class="para">Dec 2020 - Jan 2018</p>
                            </div>
                            <div class="right-tl-content">
                                <div class="tl-content">
                                    <h5 class="tl-title-2">Technology: Javascript Node.js Socket.io</h5>
                                    <p class="para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae
                                        voluptatem deleniti,
                                        laboriosam odio nobis quae fugit facilis quo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    )
}