import React, { Component } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import AxiosInstance from "../../config/AxiosConfig";
import ErrorHandler from '../../UI/ErrorHandler/ErrorHandler';
import Spinner from '../../components/Spinner/Spinner';
import "./Blog.css";

class BlogComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogData: null,
            showSpinner: true
        };
    }

    componentDidMount() {
        AxiosInstance.get("/blogData.json")
            .then(response => {
                if (response) {
                    this.setState({ blogData: response.data.blog, showSpinner: false });
                }
            })
            .catch(error => {
                this.setState({ showSpinner: false });
                console.log(error);
            });
    }


    render() {
        if (!this.state.blogData && !this.state.showSpinner) {
            return <ErrorHandler></ErrorHandler>;
        }
        return (
            <React.Fragment>
                <HeroSection title="Blog" subTitle="Knowledge repository for dev community"></HeroSection>
                {this.state.showSpinner &&
                    <Spinner></Spinner>
                }
                {!this.state.showSpinner &&
                    this.state.blogData.map((blog) => {
                        return <div className="blog-content-cls mt-4" key={blog.id}>
                            <div className="container clearfix">
                                <div className="row">
                                    <div className="col-1"></div>
                                    <div className="col-10" >
                                        <div className="card blog-item-cls mt-3 mb-3">
                                            <div className="card-body p-2 pl-3">
                                                <img src={blog.imageUrl} alt="Unavailable" className="blog-img-cls" />
                                                <div className="clearfix m-2 blog-box">
                                                    <ul className="blog-text-ul">
                                                        <li><h4>{blog.name}</h4></li>
                                                        <li><p>{blog.createdOn}</p></li>
                                                    </ul>
                                                    <a href={blog.htmlUrl} target="blank" className="card-link hvr-grow">Access Link</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                        </div>
                    })}
            </React.Fragment >
        )
    }
}

export default BlogComponent;