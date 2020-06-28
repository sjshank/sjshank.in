import React from 'react';
import "./NavigationItems.css";
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {

    return (
        <div className="site-nav float-right">
            <ul id="menu-classic" className="main-menu-cls d-lg-block d-md-block d-none">
                {props.navigationItems.map(item => {
                    return <NavigationItem key={item.id} link={item.link} name={item.name}></NavigationItem>
                })}
            </ul>
        </div>
    )
}

export default NavigationItems;