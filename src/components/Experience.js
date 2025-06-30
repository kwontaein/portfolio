import React from "react";
import "./Experience.css";

const Experience = () => {
    const experiences = [
       {
            company: "다원OA",
            position: "Full Stack",
            period: "2023.01.01 - 2023.12.31",
            description: [
                "웹 리팩토링 및 도커 서버 구동",
                "PHP 사이트의 여러 기능 수정 및 도커를 통해 아파치 서버 구축 및 웹 업로드."
            ],
            tools: ["PHP" , "MySQL"],
        },
        {
            company: "이음IT",
            position: "Full Stack 개발자 인턴",
            period: "2023.08.08 - 2023.12.08",
            description: [
                "이음아이티 회사에서 3개월간의 인턴 활동을 하며 JAVA 와 Spring Boot 로 프로젝트를 진행하며 교육 이수.",
                "DB 설계 방식 및 페이지 동작 과정, MVC2 구조 등을 활용법 숙달.",
            ],
            tools: ["Spring Boot", "Java", "Mysql", "JSP", "Mybatis"],  
        },  {
            company: "다온정보",
            position: "Back-End",
            period: "2025.01.15 - 2025.05.26",
            description: [
                "웹페이지 제작",
                "PHP로 제작된 사이트의 노후화로 인해 구글 크롬 및 네이버 웨일에서 기능이 대부분 작동하지 않아, 새로운 기술로 페이지 제작."
            ],
            tools: ["Spring", "Java", "Jpa", "Redis", "Mysql", "React", "Node.js"],
        },
    ];

    return (
        <section id="experience">
            <div className="experience-container">
                <h1>Experience</h1>
                {experiences.map((exp, index) => (
                    <div className="experience-card" key={index}>
                        <div className="experience-header">
                            <h2>{exp.company}</h2>
                            <h3>{exp.position}</h3>
                            <p className="experience-period">{exp.period}</p>
                        </div>
                        <ul className="experience-description">
                            {exp.description.map((desc, idx) => (
                                <li key={idx}>{desc}</li>
                            ))}
                        </ul>
                        <p className="experience-tools">
                            <strong>Tools:</strong> {exp.tools.join(", ")}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
