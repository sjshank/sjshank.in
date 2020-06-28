import React, { Component } from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import "./Home.css";
import Expertise from "../../components/Expertise/Expertise";
import FunFact from "../../components/FunFact/FunFact";
import AxiosInstance from "../../config/AxiosConfig";
import Spinner from "../../components/Spinner/Spinner";
import ErrorHandler from "../../UI/ErrorHandler/ErrorHandler";
import Technologies from "../../components/Technologies/Technologies";

class HomeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            portfolioData: null,
            showSpinner: true
        };
        this.redirectToResume = this.redirectToResume.bind(this);
    }

    componentDidMount() {
        AxiosInstance.get("/aboutMe.json")
            .then(response => {
                if (response) {
                    this.setState({ portfolioData: response.data, showSpinner: false });
                }
            })
            .catch(error => {
                this.setState({ showSpinner: false });
                console.log(error);
            });
    }

    redirectToResume() {
        this.props.history.push("/resume");
    }

    render() {
        if (!this.state.portfolioData && !this.state.showSpinner) {
            return <ErrorHandler></ErrorHandler>;
        }
        return (
            <React.Fragment>
                {this.state.showSpinner &&
                    <Spinner></Spinner>
                }
                {!this.state.showSpinner &&
                    <div className="container container-cls">
                        <div className="about-me-hero-section mb-4">
                            <div className="row">
                                <div className="col-xs-12 col-sm">
                                    <div className="row flex-v-align-cls">
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <div className="home-art-section">
                                                <img src="/Home_Design.webp" alt="Unavailable"></img>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            {this.state.portfolioData && <AboutMe intro={this.state.portfolioData.intro}></AboutMe>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="home-content-cls pl-4 pr-4">
                            <hr className="section-divider-cls mt-3" />
                            <div className="row">
                                <div className="col-xs-12 col-sm home-item">
                                    {this.state.portfolioData && <Expertise expertise={this.state.portfolioData.expertise}></Expertise>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm home-item">
                                    {this.state.portfolioData && <Technologies technologies={this.state.portfolioData.technologies}></Technologies>}
                                </div>
                            </div>

                            {/* <div className="row">
                                <div className="col-xs-12 col-sm home-item">
                                    {this.state.portfolioData && <Organization organizations={this.state.portfolioData.organizations}></Organization>}
                                </div>
                            </div> */}
                            <div className="row">
                                <div className="col-xs-12  col-sm home-item">
                                    <FunFact></FunFact>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm home-item text-center">
                                    <div className="text-center cv-box hvr-outline-out  p-3" onClick={this.redirectToResume}>
                                        <h6>Continue Exploring ?</h6>
                                        <h3>Resume</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
            </React.Fragment>
        )
    }
}

export default HomeComponent;