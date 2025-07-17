import React from "react";
import "./DetailSkill.css";

const Detailskills = () => {
    const skillData = [
        {
            category: "Back-End (Spring 기반)",
            items: [
                "MVC 아키텍처에 대한 이해를 바탕으로 구조적인 코드 작성 가능",
                "JPA와 Spring Data를 활용한 CRUD 기능 구현 가능",
                "Spring Security + JWT 기반 인증/인가 시스템 구축 가능",
                "DTO를 사용한 계층 간 데이터 전달 및 유효성 검증 처리",
                "RESTful API 설계 원칙에 따라 API를 구조화할 수 있음",
                "기본적인 Spring Annotation의 목적과 활용 방식 이해"
            ]
        },
        {
            category: "Front-End",
            items: [
                "React를 활용한 컴포넌트 기반 UI 구성 경험",
                "Next.js를 이용한 SSR 페이지 구성 및 라우팅 처리 가능",
                "Axios를 통한 API 연동 및 상태 관리 처리 경험",
                "TailwindCSS를 이용한 반응형 UI 설계 가능"
            ]
        },
        {
            category: "Database / Data Handling",
            items: [
                "MySQL / MariaDB를 이용한 데이터베이스 설계 및 쿼리 작성 가능",
                "Redis를 이용한 캐싱 및 세션 관리 경험",
                "ERD 설계를 통한 데이터 흐름 및 테이블 관계 구조화 가능"
            ]
        },
        {
            category: "DevOps / 운영 환경",
            items: [
                "Git을 이용한 형상 관리 및 협업 경험",
                "Nginx를 이용한 Reverse Proxy 설정 경험",
                "Linux 환경에서의 기본적인 서버 운영 및 배포 가능",
                "Docker Compose를 통한 간단한 컨테이너 기반 개발 환경 구성 가능"
            ]
        },
        {
            category: "협업 / 기타 기술",
            items: [
                "Notion, Figma를 통한 요구사항 정리 및 UI 협업 경험",
                "Postman을 활용한 API 테스트 및 문서화 경험",
                "Discord를 통한 실시간 커뮤니케이션 경험",
                "Trello, Jira 등을 활용한 업무 분담 및 일정 관리"
            ]
        }
    ];

    return (
        <section id="skills-detail">
            <h2 className="section-title">기술 역량</h2>
            <div className="skill-category-container">
                {skillData.map((category, index) => (
                    <div className="skill-category" key={index}>
                        <h3 className="category-title">{category.category}</h3>
                        <ul className="skill-list">
                            {category.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Detailskills;
