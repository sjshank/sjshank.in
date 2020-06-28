import React from 'react';
import "./ExpertiseItem.css";

const ExpertiseItem = (props) => {
    return (
        <div className="expertise-item col-xs-12 col-sm-6">
            <div className="d-flex mb-3 ml-2">
                <div className="pr-4 icon-column-cls">
                    <i className="fa fa-code fa-2x fa-custom-cls" aria-hidden="true"></i>
                </div>
                <div>
                    <div className="expert-text-cls">
                        <h6 className="font-weight-bold">{props.expert.expertIn}</h6>
                        <p className="text-muted">{props.expert.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExpertiseItem;