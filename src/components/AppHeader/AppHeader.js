import React, { useState } from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import * as NavConfig from "../../config/NavConfig";
import "./AppHeader.css";
import { Link, NavLink } from 'react-router-dom';

const AppHeader = (props) => {
    const [menuFlag, setMenuFlag] = useState(false);
    const [barIcon, setbarIcon] = useState('fa fa-bars fa-2x');
    const toggleMenu = () => {
        setMenuFlag(!menuFlag);
        setbarIcon(!menuFlag ? "fa fa-close fa-2x" : "fa fa-bars fa-2x");
    }
    return (

        <header className="header-section-cls">
            <div className="header-content-cls clearfix">
                <div className="float-left pl-lg-4 pl-md-4 pl-sm-3 logo-box-cls" >
                    <Link to="/about">
                        <div className="logo-symbol">SS</div>
                        {/* <div className="logo-img-box">
                            <img src="/ss-logo.png" alt="unavailable" className="logo-img" />
                        </div> */}
                        <div className="logo-text">
                            <span className="">Saurabh Shankariya</span>
                        </div>
                    </Link>
                    <button className="icon-cls m-2 mr-4 d-lg-none d-md-none d-flex" onClick={toggleMenu}>
                        <i className={barIcon}></i>
                    </button>
                    <ul className={menuFlag ? 'd-block mb-0 pt-2 pl-4 mobile-menu-cls clearfix d-lg-none d-md-none' : 'd-none d-lg-none d-md-none'}>
                        {NavConfig.NavigationList.map((item, ind) => {
                            return <li key={item.name + ind}>
                                <NavLink to={item.link} exact={true} activeClassName='is-active-cls' className="hvr-grow">{item.name}</NavLink>
                            </li>
                        })}
                    </ul>
                </div>
                <NavigationItems navigationItems={NavConfig.NavigationList}></NavigationItems>
            </div>
        </header >
    );
}

export default AppHeader;