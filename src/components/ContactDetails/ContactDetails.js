import React from "react";

const ContactDetails = (props) => {
    return (
        <React.Fragment>
            <div className="d-flex mb-4">
                <div className="pr-3 icon-column-cls">
                    <i className="fa fa-mobile fa-3x fa-custom-cls" aria-hidden="true"></i>
                </div>
                <div>
                    <div><h6 className="font-weight-bold">+91 8087797428</h6></div>
                    <div><h6 className="font-weight-bold">+91 7416524024</h6></div>
                </div>
            </div>
            <div className="d-flex mb-4">
                <div className="pr-3 icon-column-cls">
                    <i className="fa fa-map-marker fa-3x fa-custom-cls" aria-hidden="true"></i>
                </div>
                <div>
                    <div><h6 className="font-weight-bold">Hyderabad, India</h6></div>
                    <div className="pt-0">
                        <ul className="address-ul">
                            <li>New Prashanth Nagar Colony, Miyapur</li>
                            <li>Hyderabad, Telangana</li>
                            <li>India 500049</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="d-flex mb-4">
                <div className="pr-3 icon-column-cls">
                    <i className="fa fa-envelope-o fa-2x fa-custom-cls" aria-hidden="true"></i>
                </div>
                <div>
                    <div><h6 className="font-weight-bold">sjshankariya@gmail.com</h6></div>
                    <div><h6 className="font-weight-bold">sshankariya@gmail.com</h6></div>
                </div>
            </div>
            <div className="d-flex mb-4">
                <div className="pr-3 icon-column-cls">
                    <i className="fa fa-skype fa-2x fa-custom-cls" aria-hidden="true"></i>
                </div>
                <div>
                    <div><h6 className="font-weight-bold">sjshankariya@gmail.com</h6></div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ContactDetails;