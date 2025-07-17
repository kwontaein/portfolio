import React from "react";
import "./Information.css";

const Information = () => {
    return (
        <section id="about">
            <h1>Contact Me</h1>
            <div className="contact-container">

                <div className="contact-box">
                    <h3>학력</h3>
                    <p>동양미래대학교</p>
                    <p>컴퓨터정보공학과</p>
                </div>
                <div className="contact-box">
                    <h3>생년월일</h3>
                    <p>2000.11.28</p>
                </div>
                <div className="contact-box">
                    <h3>Email</h3>
                    <p>kosq3964@naver.com</p>
                </div>
                <div className="contact-box">
                    <h3>Phone</h3>
                    <p>010-2502-3964</p>
                </div>
            </div>

        </section>
    );
};

export default Information;
