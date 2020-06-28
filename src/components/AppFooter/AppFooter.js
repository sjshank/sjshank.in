import React from "react";
import * as NavConfig from "../../config/NavConfig";
import "./AppFooter.css";

const AppFooter = (props) => {
    return (
        <footer className="footer-cls clearfix">
            <div className="justify-content-center">
                <ul className="justify-content-center social-network-links-cls d-flex">
                    {NavConfig.FooterNavList.map(item => {
                        return <li key={item.id} className="m-2 mr-4 footer-item hvr-shrink ">
                            <i className={item.iconName} aria-hidden="true"></i>
                            <a target="blank" className="pl-1" href={item.link}>{item.name}</a>
                        </li>
                    })}
                </ul>
            </div>
            <div className="justify-content-center footer-copyright-cls d-flex">
                <p className="m-1">© 2020 All rights reserved. Saurabh Shankariya.</p>
            </div>
        </footer>
    );
}

export default AppFooter;