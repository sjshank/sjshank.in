import React, { Component } from "react";
import BlockTitle from "../BlockTitle/BlockTitle";
import { InputGroup, FormControl } from "react-bootstrap";
import AxiosInstance from "../../config/AxiosConfig";
import "./ContactForm.css";
import Spinner from "../Spinner/Spinner";


class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            success: false,
            showSpinner: false
        };
        this.handleSendMessage = this.handleSendMessage.bind(this);
        this.nameInputRef = React.createRef();
        this.emailInputRef = React.createRef();
        this.subjectInputRef = React.createRef();
        this.messageInputRef = React.createRef();
    }

    handleSendMessage() {
        this.setState({ showSpinner: true });
        const _contactForm = {
            'name': this.nameInputRef.current.value,
            'email': this.emailInputRef.current.value,
            'subject': this.subjectInputRef.current.value,
            'message': this.messageInputRef.current.value
        };
        AxiosInstance.post("/contactFormData.json", _contactForm)
            .then(response => {
                if (response) {
                    this.setState({ success: true, showSpinner: false });
                    this.nameInputRef.current.value = '';
                    this.emailInputRef.current.value = '';
                    this.subjectInputRef.current.value = '';
                    this.messageInputRef.current.value = '';
                }
            })
            .catch(error => {
                this.setState({ success: false, showSpinner: false });
                console.log(error);
            });
    }



    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-12">
                        <BlockTitle title="How Can I Help You ?"></BlockTitle>
                    </div>
                </div>
                <div className="row contact-form-section">
                    <div className="col-xs-12 col-sm-6 ">
                        <InputGroup className="mb-3">
                            <FormControl
                                aria-label="Name"
                                placeholder="Full Name"
                                className="input-control-cls"
                                ref={this.nameInputRef}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <FormControl
                                aria-label="Email"
                                placeholder="Email Address"
                                className="input-control-cls"
                                ref={this.emailInputRef}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <FormControl
                                aria-label="Subject"
                                placeholder="Subject"
                                className="input-control-cls"
                                ref={this.subjectInputRef}
                            />
                        </InputGroup>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <FormControl type="textarea"
                            as="textarea"
                            placeholder="Your Message"
                            rows="5"
                            style={{ "resize": "none" }}
                            className="input-control-cls"
                            ref={this.messageInputRef} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 contact-from-button-section">
                        <button  className="btn mt-3 site-btn-cls hvr-rectangle-out"
                            onClick={this.handleSendMessage}>Send Message</button>
                    </div>
                    {this.state.showSpinner &&
                        <Spinner></Spinner>
                    }
                </div>
                {this.state.success && <div className="row">
                    <div className="col-12">
                        <h6 className="text-success mt-3">Thank you for your message !</h6>
                    </div>
                </div>}
            </React.Fragment>
        )
    }
}

export default ContactForm;