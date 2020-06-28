import React from 'react';
import "./HeroSection.css";

const HeroSection = (props) => {
    return (
        <div className="hero-section">
            <div className="page-title container container-cls">
                <div className="row clearfix">
                    <div className="col-12">
                        <div className="title float-left clearfix">
                            <span className="block"></span>
                            <div><h1>{props.title}</h1></div>
                        </div>
                        <div className="sub-title-cls">
                            <p className="float-left text-muted">{props.subTitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
