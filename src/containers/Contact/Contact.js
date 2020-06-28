import React, { Component } from 'react';
import "./Contact.css";
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactDetails from '../../components/ContactDetails/ContactDetails';
import HeroSection from '../../components/HeroSection/HeroSection';

class ContactComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <HeroSection title="Contact" subTitle="Get in Touch"></HeroSection>
                <div className="contact-content-cls mt-4">
                    <div className="container clearfix">
                        <div className="row">
                            <div className="col-xs-12 col-sm-4">
                                <ContactDetails></ContactDetails>
                            </div>
                            <div className="col-xs-12 col-sm-8">
                                <ContactForm></ContactForm>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default ContactComponent;