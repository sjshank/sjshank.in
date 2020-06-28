import React from 'react';
import './FunFact.css';
import BlockTitle from '../BlockTitle/BlockTitle';

const FunFact = (props) => {
    return (
        <div className="funfact-section mt-2">
            <BlockTitle title="Fun Facts"></BlockTitle>
            <div className="row">
                <div className="col-md-4 col-lg-2">
                    <div className="funfact-item-cls text-center justify-content-center m-1 p-4  hvr-float-shadow">
                        <ul>
                            <li><i className="fa fa-heart-o fa-3x fa-custom-cls" aria-hidden="true"></i></li>
                            <li className="pt-1"><h6 className="fact-title">Happy Clients</h6></li>
                            <li><h5>5</h5></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4 col-lg-2">
                    <div className="funfact-item-cls text-center justify-content-center m-1 p-4  hvr-float-shadow">
                        <ul>
                            <li><i className="fa fa-clock-o fa-3x fa-custom-cls" aria-hidden="true"></i></li>
                            <li className="pt-1"><h6 className="fact-title">Working Hours</h6></li>
                            <li><h5>8000+</h5></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4 col-lg-2">
                    <div className="funfact-item-cls text-center justify-content-center m-1 p-4  hvr-float-shadow">
                        <ul>
                            <li><i className="fa fa-trophy fa-3x fa-custom-cls" aria-hidden="true"></i></li>
                            <li className="pt-1"><h6 className="fact-title">Achievements</h6></li>
                            <li><h5>7</h5></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4 col-lg-2">
                    <div className="funfact-item-cls text-center justify-content-center m-1 p-4  hvr-float-shadow">
                        <ul>
                            <li><i className="fa fa-language fa-3x fa-custom-cls" aria-hidden="true"></i></li>
                            <li className="pt-1"><h6 className="fact-title">Languages</h6></li>
                            <li><h5>English, Hindi</h5></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4 col-lg-2">
                    <div className="funfact-item-cls text-center justify-content-center m-1 p-4  hvr-float-shadow">
                        <ul>
                            <li><i className="fa fa-globe fa-3x fa-custom-cls" aria-hidden="true"></i></li>
                            <li className="pt-1"><h6 className="fact-title">Nationality</h6></li>
                            <li><h5>Indian</h5></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4 col-lg-2">
                    <div className="funfact-item-cls text-center justify-content-center m-1 p-4  hvr-float-shadow">
                        <ul>
                            <li><i className="fa fa-birthday-cake fa-3x fa-custom-cls" aria-hidden="true"></i></li>
                            <li className="pt-1"><h6 className="fact-title">Birth</h6></li>
                            <li><h5>9 July</h5></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FunFact;