import React from 'react';
import "./Timeline.css";
import TimelineItem from './TimelineItem/TimelineItem';

const Timeline = (props) => {
    return (
        <div className="timeline-cls clearfix">
            <TimelineItem item={props.timelineItem}></TimelineItem>
        </div>
    );
};

export default Timeline;