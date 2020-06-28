import React from 'react';
import "./Organization.css";
import BlockTitle from '../BlockTitle/BlockTitle';

const Organization = (props) => {
    return (
        <div className="organization-section mt-1">
            <BlockTitle title="Organization"></BlockTitle>
            <div className="row">
                {props.organizations.map((item) => {
                    return <div className="col-4 text-center mt-1" key={item.id}>
                        <img src={item.logoUrl} className="org-img-cls" alt="Unavailable"></img>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Organization;