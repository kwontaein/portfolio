import React from "react";
import "./Projects.css";

const Projects = () => {
    const projects = [
        {
            title: "다온정보",
            description: "Saas ERP System",
            duration:"2025.01.15 ~ 2025.05.26",
            people:"2인 팀 프로젝트",
            work: "Back-End, Server",
            useTech : "Spring, Java, Jpa, Redis, Mysql, React, Node.js",
            image: "img/daon.png", // 이미지 경로
            link: "https://github.com/kwontaein/Daon",
            notion: "https://www.notion.so/SaaS-ERP-Program-21e664c3baf98012a695dcbcf37705b2",
        },
        {
            title: "Calen J",
            description: "개인 일정 및 그룹 간의 실시간 채팅을 통한 그룹 일정을 관리할 수 있는 사이트",
            duration:"2024.01.04 ~ 2024.09.04",
            people:"2인 팀 프로젝트",
            work: "Back-End, Server, Design",
            useTech : "Spring Boot , JPA, Java, Mysql, React",
            image: "img/calenj.png", // 이미지 경로
            link: "https://github.com/kwontaein/Calenj",
            notion: "https://www.notion.so/CalenJ-b2b7952492364e0b85018f8479e7014c",
        },
        {
            title: "야놀자 클론 코딩",
            description: "야놀자 사이트를 모방해 기능을 구현한 사이트",
            duration:"2023.09.25 ~ 2023.12.07",
            people:"개인 프로젝트",
            work: "Full-Stack",
            useTech : "Spring Boot, Java, Mysql, JSP, Mybatis",
            image: "img/yanolja.png", // 이미지 경로
            link: "https://github.com/kwontaein/Spring_Yanolja",
            notion: "https://github.com/kwontaein/portfolio",
        },{
            title: "VWS(Vertical Working Simulation)",
            description: "VR을 통한 자격증 시험 연습 및 웹사이트를 통한 필기 시험 연습",
            duration:"2022.06.20 ~ 2022.10.04",
            people:"6인 팀 프로젝트",
            work: "Back-End, Server",
            useTech : "Spring, Node.Js, React, Yup, Unity",
            image: "img/vws.png", // 이미지 경로
            link: "https://github.com/kwontaein/mars",
            notion: "https://github.com/kwontaein/portfolio",
        },
    ];

    return (
        <section id="projects">
            <div className="projects-container">
                <h1>My Projects</h1>
                <div className="project-list">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-img"
                            />
                            <h2>{project.title}</h2>
                            <div className="project-info">
                                <p>개발기간 : {project.duration}</p>
                                <p>개발규모 : {project.people}</p>
                                <p>개발분야 : {project.work}</p>
                            </div>
                            <hr/>
                            <p>{project.description}</p>
                            <div>
                                <a href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                GitHub
                                </a>
                            </div>
                            <div>
                                <a href={project.notion}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    View Project
                                </a>
                            </div>
                            <div className="project-tech">{project.useTech}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
