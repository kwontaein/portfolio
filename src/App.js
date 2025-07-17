import './App.css';
import React from "react";
import Header from "./components/global/Header";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Archiving from "./components/global/Archiving";
import Footer from "./components/global/Footer";
import Hero from "./components/hero/Hero";
import Experience from "./components/experience/Experience";
import Information from "./components/information/information";
import DetailSkill from "./components/detailskill/DetailSkill";

function App() {
    return (
        <div>
            <Header />
            <main>
                <Hero/>
                <About />
                <Experience/>
                <Skills />
                <DetailSkill/>
                <Projects />
                <Information/>
                <Archiving />
            </main>
            <Footer />
        </div>
    );
}

export default App;
