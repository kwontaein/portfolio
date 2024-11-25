import React from "react";
import "./Experience.css";

const Experience = () => {
    const experiences = [
        {
            company: "다온정보",
            position: "Full Stack",
            period: "2023.01.01 - 2023.12.31",
            description: [
                "웹페이지 유지보수",
                "PHP로 제작된 사이트의 버전이 너무 낮아 구글 크롬 및 네이버 웨일에서 기능이 작동하지 않는 문제를 해결함."
            ],
            tools: ["PHP" , "MySQL"],
        },
        {
            company: "이음IT",
            position: "Full Stack 개발자 인턴",
            period: "2023.08.08 - 2023.12.08",
            description: [
                "이음아이티 회사에서 3개월간의 인턴 활동을 하며 JAVA 와 Spring Boot 로 프로젝트를 진행하며 교육을 받았음.",
                "DB 설계 방식 및 페이지 동작 과정, MVC2 구조 등을 활용하는 방법을 배웠음.",
            ],
            tools: ["Spring Boot", "Java", "Mysql", "JSP", "Mybatis"],  
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
