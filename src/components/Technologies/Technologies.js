import React from 'react';
import BlockTitle from '../BlockTitle/BlockTitle';
import Carousel from 'react-elastic-carousel'
import "./Technologies.css";

const Technologies = (props) => {
    return (
        <div className="technology-section mt-1">
            <BlockTitle title="Technologies"></BlockTitle>
            <Carousel itemsToShow={3}>
                {props.technologies.map((tech) => {
                    return <div key={tech.id} className="m-2 mt-3 technology-item-cls" title={tech.name}>
                        <img src={tech.logoUrl} className="mt-1 text-center tech-img-cls" alt="Unavailable"></img>
                    </div>
                })}
            </Carousel>
        </div>
    )
};

export default Technologies;