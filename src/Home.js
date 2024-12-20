import './Home.css';
import {useState} from "react";
import logo from './logo192.png';
import intro from "./intro.jpeg";
import weather from "./weatherlogo.png";

function Header() {
    return (
        <div className="home">
            <div className="header">
                <div className="header-name">
                    <a href="#">
                        <p>Jimmy Tran</p>
                    </a>
                </div>
                <div className="header-work">
                    <a href="#">
                        <p>Work</p>
                    </a>
                </div>
                <div className="header-about">
                    <a href="#">
                        <p>About</p>
                    </a>
                </div>
                <div className="header-contact">
                    <a href="#">
                        <p>Contact</p>
                    </a>
                </div>
            </div>
        </div>
    )
}


function Intro() {
    return (
        <div className="intro">
            <div className="intro-section">
                <div className="intro-desc">
                    <p>Jimmy Tran</p>
                    <p>Front-end Web Developer</p>
                </div>
                <div className="intro-img">
                    <img src={intro}></img>
                </div>
            </div>
        </div>
    )

}

function Projects() {
    return (
        <div className="projects">
            <div className="projects-section">
                <div className="projects-grid">
                    <div>
                        <a href="#">
                            <img src={weather}></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <div>
            <Header />
            <div className="spacer"></div>
            <Intro />
            <Projects />
        </div>
    )
}