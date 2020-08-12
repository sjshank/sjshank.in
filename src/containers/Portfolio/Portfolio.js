import React, { Component } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import Axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
import * as AppConstants from "../../config/AppConstants"
import ErrorHandler from '../../UI/ErrorHandler/ErrorHandler';
import Spinner from '../../components/Spinner/Spinner';

class PortfolioComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projectList: [],
            showSpinner: false
        };
    }

    componentDidMount() {
        this.setState({ showSpinner: true });
        Axios.get(AppConstants.GITHUB_REPO_URL)
            .then(response => {
                const sortedRepos = [...response.data.sort((a,b)=> new Date(b['created_at']) - new Date(a['created_at']))];
                this.setState({ projectList: sortedRepos, showSpinner: false });
            })
            .catch(error => {
                this.setState({ showSpinner: false });
                toast.configure(AppConstants.TOAST_OPTIONS);
                if (error) {
                    toast.error(AppConstants.GENERIC_ERROR_MSG, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }
            })
    }


    render() {
        if (this.state.projectList.length === 0 && !this.state.showSpinner) {
            return <ErrorHandler></ErrorHandler>;
        }
        return (
            <React.Fragment>
                <HeroSection title="Portfolio" subTitle="Creative products build here"></HeroSection>
                {this.state.showSpinner &&
                    <Spinner></Spinner>
                }
                {!this.state.showSpinner &&
                    <div className="contact-content-cls mt-4">
                        <div className="container clearfix">
                            <div className="row">
                                <div className="col-12">
                                    {this.state.projectList &&
                                        this.state.projectList.map((item) => {
                                            return <PortfolioItem key={item.id} item={item}></PortfolioItem>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>}
            </React.Fragment >
        )
    }
}

export default PortfolioComponent;