import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDencrypt } from "use-dencrypt-effect";
import "./AboutMe.css";

const AboutMe = (props) => {
    let initialCounterState = 3500;
    const { result, dencrypt } = useDencrypt();
    const i = useRef(0);
    useEffect(() => {
        const action = setInterval(() => {
            dencrypt(props.intro.workedAs[i.current]);
            i.current = i.current === props.intro.workedAs.length - 1 ? 0 : i.current + 1;
        }, initialCounterState);
        return () => clearInterval(action);
    });

    return (
        <div className="home-text text-left pl-3 pt-4">
            <div className="dp-bar-cls pb-4 text-center">
                <img src="/dp.png" alt="unavailable" className="dp-cls" />
            </div>
            <div className="title">
                <span className="block"></span>
                <h1>{props.intro.name}</h1>
            </div>
            <div className="role">
                <div className="block"></div>
                <p className="mt-2 text-uppercase" style={{ fontSize: "13px" }}>{result}</p>
            </div>
            <div className="intro-content-cls mt-2">
                <p>{props.intro.aboutMe}</p>
                <span style={{ fontFamily: 'kalam' }}>Welcome to my portfolio !</span>
                <div className="home-button-cls mt-4">
                    <a href="/Saurabh-Shankariya_FrontEndDeveloper.pdf" download className="btn m-2 site-btn-cls hvr-rectangle-out hvr-grow-shadow">Download CV</a>
                    <Link className="btn m-2 site-btn-cls hvr-rectangle-out hvr-grow-shadow" to="/contact">Contact Me</Link>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;