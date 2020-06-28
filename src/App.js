import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'hover.css/css/hover-min.css';
import PageLayout from './components/PageLayout/PageLayout';
import HomeComponent from "./containers/Home/Home";
import { Switch, Route, Redirect } from 'react-router';
import ResumeComponent from './containers/Resume/Resume';
import ContactComponent from './containers/Contact/Contact';
import BlogComponent from './containers/Blog/Blog';
import PortfolioComponent from './containers/Portfolio/Portfolio';

function App() {
  return (
    <div className="app-cls">
      <PageLayout>
        {/* Main */}
        <div id="main" className="main-section-cls">
          <div id="main-content" className="main-content-cls">
            <article>
              <section className="primary-content-section-cls">
                <Switch>
                  <Route path="/about" component={HomeComponent}></Route>
                  <Route path="/resume" component={ResumeComponent}></Route>
                  <Route path="/contact" component={ContactComponent}></Route>
                  <Route path="/portfolio" component={PortfolioComponent}></Route>
                  <Route path="/blog" component={BlogComponent}></Route>
                  <Redirect from="/" to="about" exact></Redirect>
                </Switch>
              </section>
            </article>
          </div>
        </div>
      </PageLayout>
    </div>
  );
}

export default App;
