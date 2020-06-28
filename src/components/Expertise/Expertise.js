import React from 'react';
import BlockTitle from '../BlockTitle/BlockTitle';
import "./Expertise.css";
import ExpertiseItem from './ExpertiseItem/ExpertiseItem';

const Expertise = (props) => {
    return (
        <div className="expertise-section mt-1">
            <BlockTitle title="What I Do"></BlockTitle>
            <div className="row">
                {props.expertise.map((expert, ind) => {
                    return <ExpertiseItem key={expert.expertIn + ind} expert={expert}></ExpertiseItem>;
                })}
            </div>
        </div>
    );
}

export default Expertise;