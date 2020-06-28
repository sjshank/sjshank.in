import React from 'react';
import "./CertificateItem.css";

const CertificateItem = (props) => {
    return (
        <div className="col-xs-12 col-md-12 col-sm-12 col-lg-6">
            <div className="certification-item-box m-1 mt-2 hvr-grow-shadow">
                <div className="row">
                    <div className="col-5 col-md-4 col-lg-3">
                        <div className="certificate-logo-cls text-center justify-content-center">
                            <img src={props.certificateItem.logoUrl}
                                className="p-2 mt-1 certificate-image-cls" alt="Unavailable"></img>
                        </div>
                    </div>
                    <div className="col-7 col-md-8 col-lg-9 pl-0">
                        <div className="certificate-detail-cls pt-2">
                            <h6>{props.certificateItem.name}</h6>
                            <p className="text-muted mb-0">{props.certificateItem.instituteName}</p>
                            <p className="text-muted mb-0">{props.certificateItem.year}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CertificateItem;