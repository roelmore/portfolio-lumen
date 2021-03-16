import React, { Component } from 'react';
import aboutImg from '../Assets/Images/about.jpg';

class About extends Component {
    render() {
        return (
            <div className="hx-about-style-1" id="about">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-6 col-lg-6 d-xl-flex d-lg-flex d-block align-items-center">
                            <div className="hx-about-content">
                                <div className="hx-site-title">
                                    <span>Finance & Strategy Professional</span>
                                    <h2>About Me</h2>
                                </div>
                                <p>I am an avid student of finance, business strategy, and the universe of tools that can help me effectively impact the organizations with whom I am given the opportunity to work. I actively pursue opportunities to add knowledge and value to my skill sets. </p>
                                <div className="btns">
                                    <a href="#" className="theme-btn">Download CV</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="hx-about-img">
                                <img src={aboutImg}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;