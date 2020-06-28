import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavigationItem.css";

const NavigationItem = (props) => {
    return (
        <li className="menu-item-cls">
            <NavLink to={props.link} exact={true} activeClassName='is-active-cls' className="hvr-grow">{props.name}</NavLink>
        </li>
    )
}

export default NavigationItem;