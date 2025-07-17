import React from "react";
import "./Archiving.css";
const Archiving = () => {
    return (

        <section id="Archiving">
            <h1>Archiving</h1>
            <div className="contact-container">
                <a
                    href="https://github.com/kwontaein"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-box"
                >
                    <h3>GitHub</h3>
                    <p>프로젝트 및 코딩테스트 코드</p>
                    <p>fork, clone을 통한 협업</p>
                </a>

                <a
                    href="https://www.notion.so/233664c3baf980afb97cc83cd0a52375"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-box"
                >
                    <h3>Notion</h3>
                    <p>학습내용 및 기록 정리</p>
                    <p>학습할 내용 스크랩 및 저장</p>
                </a>
            </div>
        </section>

    );
};

export default Archiving;