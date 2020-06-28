import React from 'react';
import './TimelineItem.css';

const TimelineItem = (props) => {
    return (
        <div className="timeline-item-cls clearfix">
            <h5 className="item-period-cls hvr-shutter-out-horizontal">{props.item.year}</h5>
            <span className="item-company-cls">{props.item.instituteName}</span>
            <h4 className="item-title-cls">{props.item.grade}</h4>
            <p>{props.item.description}</p>
        </div>
    );
}

export default TimelineItem