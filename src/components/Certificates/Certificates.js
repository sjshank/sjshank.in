import React from 'react';
import CertificateItem from './CertificateItem/CertificateItem';
import BlockTitle from '../BlockTitle/BlockTitle';

const Certificates = (props) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-12">
                    <BlockTitle title="Certificates & Courses"></BlockTitle>
                </div>
            </div>
            <div className="row mt-2">
                {props.certificates.map((item, id) => {
                    return <CertificateItem key={id} certificateItem={item}></CertificateItem>
                })}
            </div>
        </React.Fragment>
    );
}

export default Certificates;