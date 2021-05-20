import React, { Component } from "react";
import "./Resume.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import Certificates from "../../components/Certificates/Certificates";
import Skills from "../../components/Skills/Skills";
import AxiosInstance from "../../config/AxiosConfig";
import Education from "../../components/Education/Education";
import Experience from "../../components/Experience/Experience";
import Spinner from "../../components/Spinner/Spinner";
import ErrorHandler from "../../UI/ErrorHandler/ErrorHandler";


class ResumeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resumeData: null,
            showSpinner: true
        };
    }

    componentDidMount() {
        AxiosInstance.get("/resumeData.json")
            .then(response => {
                if (response) {
                    this.setState({ resumeData: response.data, showSpinner: false });
                }
            })
            .catch(error => {
                this.setState({ showSpinner: false });
                console.log(error);
            });
    }

    render() {
        if (!this.state.resumeData && !this.state.showSpinner) {
            return <ErrorHandler></ErrorHandler>;
        }
        return (
            <React.Fragment>
                <HeroSection title="Resume" subTitle="8 Years of Experience"></HeroSection>
                {this.state.showSpinner &&
                    <Spinner></Spinner>
                }
                {!this.state.showSpinner &&
                    <div className="resume-content-cls mt-5">
                        <div className="container clearfix">
                            <div className="row">
                                {this.state.resumeData &&
                                    <Education educationList={this.state.resumeData.education}></Education>}
                                {this.state.resumeData &&
                                    <Experience experienceList={this.state.resumeData.experience}></Experience>}
                            </div>
                            <hr className="section-divider-cls mt-3" />
                            {this.state.resumeData &&
                                <Certificates certificates={this.state.resumeData.certificates}></Certificates>}
                            <hr className="section-divider-cls mt-3" />
                            <Skills></Skills>
                        </div>

                    </div>}
            </React.Fragment>
        )
    }
}

export default ResumeComponent;
