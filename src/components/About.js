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
                    저는 <span className="highlight">Java</span> 개발자로서 새로운 도전을 즐기며 성장해 나가는 개발자입니다.
                    문제를 해결하고, 복잡한 로직을 단순화하며, <span className="highlight">효율적이고 확장 가능한 시스템</span>을 만드는 데 열정을 가지고 있습니다.
                </p>
                <p className="about-description">
                    새로운 기술과 트렌드를 배우는 것을 좋아하며, 기존에 해보지 않았던 일에 도전하며 더 넓은 시야를 키우는 것을 즐깁니다.
                </p>
                <ul>
                    <li><strong>도전 정신:</strong> 새로운 환경과 마주한 문제를 두려워하지 않고, 그것을 통해 스스로 성장합니다.</li>
                    <li><strong>배움의 즐거움:</strong> 새로운 기술, 언어, 프레임워크를 배우고 이를 실제 프로젝트에 적용하며 실력을 넓혀갑니다.</li>
                    <li><strong>협업과 소통:</strong> 팀과의 협력을 통해 더 나은 결과를 도출하고, 함께 성장하는 경험을 추구합니다.</li>
                </ul>
            </div>
        </section>
    );
};

export default About;
