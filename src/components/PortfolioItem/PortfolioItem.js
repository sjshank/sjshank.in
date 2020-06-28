import React from 'react';
import "./PortfolioItem.css";
import Moment from 'react-moment';

const PortfolioItem = (props) => {
    return (
        <div className="card portfolio-item-cls mt-3 mb-3 hvr-grow-shadow">
            <div className="card-body p-2 pl-3">
                <h5 className="card-title project-title-cls">{props.item.name}</h5>
                <p className="card-text text-muted project-desc-cls">{props.item.description}</p>
                <ul className="d-flex text-muted">
                    <li className="pr-2 text-muted">
                        Created on (<Moment format="MM/DD/YYYY" date={props.item.created_at} />)
                        </li>
                    <span>|</span>
                    <li className="pr-2 pl-2 text-muted">Open issues ({props.item.open_issues})</li><span>|</span>
                    <li className="pr-2 pl-2 text-muted">Forks ({props.item.forks_count})</li>
                </ul>
                <a href={props.item.html_url} target="blank" className="card-link hvr-grow">Repo link</a>
            </div>
        </div>
    );
}

export default PortfolioItem;