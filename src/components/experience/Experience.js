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
                "PHP 사이트의 여러 기능 수정 및 도커를 통해 아파치 서버 구축 및 웹 업로드.",
                "브라우저 업데이트로 인한 기존 기능 오류 수정 및 JS 리팩토링 수행",
                "Docker 환경 기반으로 Synology NAS 서버에 재배포 구조 구축",
                "총 6개 이상 주요 기능 오류 해결 및 신규 브라우저에서도 호환성 문제 없는 서비스 제공"

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
                "Java, Spring Boot, MyBatis, JSP 등 백엔드 기술 학습",
                "개인 프로젝트에서 백엔드 개발 및 DB 설계 담당"
            ],
            tools: ["Spring Boot", "Java", "Mysql", "JSP", "Mybatis"],  
        },  {
            company: "다온정보",
            position: "Back-End",
            period: "2025.01.15 - 2025.05.26",
            description: [
                "웹페이지 제작",
                "PHP로 제작된 사이트의 노후화로 인해 여러 브라우저에서 기능이 대부분 작동하지 않아, 새로운 기술로 페이지 제작.",
                "AWS EC2 를 통한 배포 테스트 후 회사 서버에 재배포",
                "Spring Boot 기반 백엔드 API 전면 개편 및 Redis 기반 세션 처리, 캐시 전략 적용",
                "JWT 인증/인가 시스템 구현 및 기존 쿠키 인증 구조 탈피",
                "프론트엔드와의 API 명세 정비 및 협업 주도, 응답 속도 평균 2.2초 → 1.5초로 개선",
                "보안 취약점 4건 제거 및 프론트 요청 기반 API 설계 리팩토링으로 협업 속도 20% 향상"
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
