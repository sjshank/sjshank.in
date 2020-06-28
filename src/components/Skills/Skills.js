import React from 'react';
import BlockTitle from '../BlockTitle/BlockTitle';
import "./Skills.css";

const Skills = (props) => {
    return (
        <div className="row mt-5">
            <div className="col-xs-12 col-md-12 col-sm-12 col-lg-4 mobile-block-title">
                <div className="row">
                    <div className="col-12">
                        <BlockTitle title="Frontend Skills"></BlockTitle>
                    </div>
                </div>
                <div>
                    <pre className="text-white skills-pre-section">
                        <h6>         <span className="font-weight-bold yellow-font hvr-grow-shadow">HTML5, CSS3,</span> </h6>
                        <h6>       Bootstrap, <span className="font-weight-bold blueish-font hvr-grow-shadow">LESS,</span> </h6>
                        <h6>     UX Designing, <span className="font-weight-bold yellow-font hvr-grow-shadow">JavaScript</span>,  </h6>
                        <h6>   Typescript, <span className="font-weight-bold red-font hvr-grow-shadow">Angular, ReactJS,</span>   </h6>
                        <h6>   <span className="font-weight-bold blueish-font hvr-grow-shadow">OOPS JS, Hooks,</span> Angular-Cli,   </h6>
                        <h6><span className="font-weight-bold green-font hvr-grow-shadow">Salesforce Lightning,  </span></h6>
                        <h6>  <span className="font-weight-bold red-font hvr-grow-shadow">LWC, NodeJS,</span></h6>
                        <h6>  ExpressJS, MongoDB, </h6>
                        <h6>   Webpack, <span className="font-weight-bold yellow-font hvr-grow-shadow">Responsive Design</span>,</h6>
                        <h6>    RequireJS, BackboneJS,  </h6>
                        <h6>JQuery, Redux     </h6>
                    </pre>
                </div>
            </div>
            <div className="col-xs-12 col-md-12 col-sm-12 col-lg-4 mobile-block-title">
                <div className="row">
                    <div className="col-12 pl-lg-5 ">
                        <BlockTitle title="Blockchain Skills"></BlockTitle>
                    </div>
                </div>
                <div>
                    <pre className="text-white skills-pre-section">
                        <h6>       Blockchain, Bitcoin,      </h6>
                        <h6>     Mining, Consensus, </h6>
                        <h6> <span className="font-weight-bold yellow-font hvr-grow-shadow">Ethereum, Solidity,</span>  </h6>
                        <h6> EVM, <span className="font-weight-bold green-font hvr-grow-shadow">Truffle,</span>  </h6>
                        <h6> <span className="font-weight-bold blueish-font hvr-grow-shadow">Web3.js, Ganache,</span> </h6>
                        <h6><span className="font-weight-bold red-font hvr-grow-shadow">DAPP, MetaMask</span></h6>
                    </pre>
                </div>
            </div>
            <div className="col-xs-12 col-md-12 col-sm-12 col-lg-4 mobile-block-title">
                <div className="row">
                    <div className="col-12 pl-lg-5">
                        <BlockTitle title="Professional Skills"></BlockTitle>
                    </div>
                </div>
                <div>
                    <pre className="text-white skills-pre-section">
                        <h6>      <span className="font-weight-bold red-font hvr-grow-shadow">Agile, Scrum,</span> Waterfall,  </h6>
                        <h6>   <span className="font-weight-bold green-font hvr-grow-shadow">JIRA, TFS, GIT,</span></h6>
                        <h6> Tech Lead, Team Player,   </h6>
                        <h6>Estimation, <span className="font-weight-bold yellow-font hvr-grow-shadow">Code Review,</span></h6>
                        <h6>  Requirement Analysis</h6>
                    </pre>
                </div>
            </div>
        </div>
    )
}

export default Skills;