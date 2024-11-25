import React from "react";
import "./Skills.css";

const Skills = () => {
    return (
        <section id="skills">
            <div className="skills-container">
                <h1>My Skills</h1>
                <div className="skill-categories">
                    <div className="skill-category">
                        <h2>Backend / Server</h2>
                        <div className="skills-list backend">
                            <div className="skill-item backend">
                                <div><img className="skill-img" src={"img/java.png"}></img></div>
                                <div>Java</div>
                            </div>
                            <div className="skill-item backend">
                                <div><img className="skill-img" src={"img/mysql.png"}></img></div>
                                <div>MYSQL</div>
                            </div>
                            <div className="skill-item backend">
                                <div><img className="skill-img" src={"img/spring.png"}></img></div>
                                <div>Spring</div>
                            </div>
                            <div className="skill-item server">
                                <div><img className="skill-img" src={"img/aws.png"}></img></div>
                                <div>AWS</div>
                            </div>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h2>Frontend</h2>
                        <div className="skills-list frontend">
                            <div className="skill-item frontend">
                                <div><img className="skill-img" src={"img/css.png"}></img></div>
                                <div>CSS</div>
                            </div>
                            <div className="skill-item frontend">
                                <div><img className="skill-img" src={"img/html.png"}></img></div>
                                <div>HTML</div>
                            </div>
                            <div className="skill-item frontend">
                                <div><img className="skill-img" src={"logo512.png"}></img></div>
                                <div>React</div>
                            </div>
                            <div className="skill-item frontend">
                                <div><img className="skill-img" src={"img/js.png"}></img></div>
                                <div>JavaScript</div>
                            </div>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h2>Design</h2>
                        <div className="skills-list design">
                            <div className="skill-item design">
                                <div><img className="skill-img" src={"img/figma.png"}></img></div>
                                <div>Figma</div>
                            </div>
                            <div className="skill-item design">
                                <div><img className="skill-img" src={"img/photoshop.png"}></img></div>
                                <div>PhotoShop</div>
                            </div>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h2>Version Control</h2>
                        <div className="skills-list version-control">
                            <div className="skill-item version-control">
                                <div><img className="skill-img" src={"img/git.png"}></img></div>
                                <div>Git</div>
                            </div>
                            <div className="skill-item version-control">
                                <div><img className="skill-img" src={"img/github.png"}></img></div>
                                <div>GitHub</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skill-category">
                    <h2>ETC</h2>
                    <div className="skills-list etc">
                        <div className="skill-item etc">
                            <div><img className="skill-img" src={"img/php.png"}></img></div>
                            <div>PHP</div>
                        </div>
                        <div className="skill-item etc">
                            <div><img className="skill-img" src={"img/python.png"}></img></div>
                            <div>Python</div>
                        </div>
                        <div className="skill-item etc">
                            <div>
                                <img className="skill-img" src={"img/node.png"}></img></div>
                            <div>Node.js</div>
                        </div>
                        <div className="skill-item etc">
                            <div>
                                <img className="skill-img" src={"img/redis.png"}></img></div>
                            <div>Redis</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Skills;