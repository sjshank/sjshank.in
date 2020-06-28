import React from 'react';
import BlockTitle from '../BlockTitle/BlockTitle';
import Timeline from '../Timeline/Timeline';

const Education = (props) => {
    return (
        <div className="col-xs-12 col-md-12 col-sm-12 col-lg-6 home-item">
            <div>
                <BlockTitle title="Education"></BlockTitle>
                {props.educationList.map((item, id) => {
                    return <Timeline key={id} timelineItem={item}></Timeline>
                })}
            </div>
        </div>
    );
}

export default Education;