import React from "react";
import "./Projects.css";

const Projects = () => {
    const projects = [
        {
            title: "다온정보",
            description: ["Saas ERP System",
            "WebSocket + Saga Middleware를 활용한 실시간 데이터 호출",
           "JWT + Redis 를 활용한 검증 처리",
             "JPA + Criteria API 를 활용한 로직 간소화",
            "Scheduler 를 활용한 정기적인 데이터 정리, 자동 상태 갱신 처리",],
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
            description:[ "개인 일정 및 그룹 간의 실시간 채팅을 통한 일정 관리 사이트",
             "웹소켓을 활용한 실시간 채팅",
             "그룹간 소통을 돕는 투표 및 공지기능",
           "FullCalendar를 활용한 일정관리",
            "Spring Security, JWT를 활용한 사용자 인증"],
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
            description: ["야놀자 사이트를 모방해 기능을 구현한 사이트",
             "Mybatis를 사용한 쿼리문 직접 조회",
             "세션 방식을 사용한 데이터 관리",
             "ERD 설계 및 DB 구축",
             "Naver 및 Kakao API를 활용한 지도 및 로그인과 결제 구현",],
            duration:"2023.09.25 ~ 2023.12.07",
            people:"개인 프로젝트",
            work: "Full-Stack",
            useTech : "Spring Boot, Java, Mysql, JSP, Mybatis",
            image: "img/yanolja.png", // 이미지 경로
            link: "https://github.com/kwontaein/Spring_Yanolja",
        },{
            title: "VWS(Vertical Working Simulation)",
            description: ["VR을 통한 자격증 시험 및 사이트를 통한 필기 시험 연습",
             "VR을 통한 모의실기 시험 테스트 기능",
             "웹, 모바일을 통한 필기 일정 및 모의시험 기능",
            "랭킹을 통한 경쟁 시스템",
           "자격증 발급 및 플레이 영상 기록",],
            duration:"2022.06.20 ~ 2022.10.04",
            people:"6인 팀 프로젝트",
            work: "Back-End, Server",
            useTech : "Spring, Node.Js, React, Yup, Unity",
            image: "img/vws.png", // 이미지 경로
            link: "https://github.com/kwontaein/mars",
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
                            <p>  {project.description.map((desc, idx) => (
                                <li key={idx}>{desc}</li>
                            ))}</p>
                            <div>
                                <a href={project.link}
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    GitHub
                                </a>
                            </div>
                            {project.notion && (
                                <div>
                                    <a
                                        href={project.notion}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Project
                                    </a>
                                </div>
                            )}
                            <div className="project-tech">{project.useTech}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
