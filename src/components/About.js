import React from "react";
import "./About.css";

const About = () => {
    return (
        <section id="about">
            <div className="about-container">
                <h1>About Me</h1>
                <div className="keywords-container">
                    <div className="keyword">Java</div>
                    <div className="keyword">Problem-Solving</div>
                    <div className="keyword">Scalable Systems</div>
                    <div className="keyword">Collaboration</div>
                    <div className="keyword">Learning</div>
                </div>
                <p className="about-description">
                    저는 <span className="highlight">백엔드 개발자</span>로서 복잡한 문제를 구조화하고, 효율적인 해결책을 설계하는 데 큰 흥미를 느낍니다. <br/>
                    단순한 기능 구현을 넘어, <span className="highlight">유지보수성과 확장성</span>을 고려한 설계를 지향하며, 안정적인 시스템을 구축하기 위해 끊임없이
                    고민합니다.
                </p>
                <p className="about-description">
                    새로운 기술을 빠르게 습득하고 실제 프로젝트에 적용해보는 것을 좋아합니다. <br/>
                    기존에 경험하지 않았던 영역에 도전하면서도, 필요한 개념을 빠르게 흡수하고, 이를 문제 해결에 연결하는 과정을 즐깁니다.
                </p>
                <ul>
                    <li><strong>도전 정신:</strong> 낯선 기술 스택이나 복잡한 요구사항도 기꺼이 마주하며, 이를 극복하는 과정에서 개발자로서의 역량을 넓혀갑니다.</li>
                    <li><strong>지속적인 학습:</strong> Java, Spring, JPA와 같은 백엔드 핵심 기술은 물론, Redis, WebSocket, JWT 등 실무에서의 요구를
                        기반으로 학습하고 적용한 경험이 있습니다.
                    </li>
                    <li><strong>협업과 커뮤니케이션:</strong> 팀 프로젝트에서 명확한 소통과 역할 분담, 문서화 등을 통해 <span className="highlight">동료와의 시너지</span>를
                        창출하며 함께 성장하는 문화를 추구합니다.
                    </li>
                </ul>

            </div>
        </section>
    );
};

export default About;
