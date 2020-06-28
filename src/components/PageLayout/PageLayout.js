import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import "./PageLayout.css";
import AppFooter from '../AppFooter/AppFooter';

const PageLayout = (props) => (
    <React.Fragment>
        <div id="page_container" className="page-container-cls container-fluid transition-puff-in-cls animated-cls" data-animation="transition-puff-in">
            <AppHeader></AppHeader>
            <div id="main" className="main-section-cls">
                <div id="main-content" className="main-content-cls">
                    <article>
                        <section className="primary-content-section-cls">
                            {props.children}
                        </section>
                    </article>
                </div>
            </div>
            <AppFooter></AppFooter>
        </div>
    </React.Fragment >
)

export default PageLayout;