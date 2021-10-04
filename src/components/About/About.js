import React from 'react';
import './About.css'
const About = () => {
    return (
        <div>
            <div className="row">
                <img className="about-img" src="about.jpg" alt="" />
            </div>
            <div className="row about">
                <div className="col-md-4 pt-5 m-5">
                    <h2>Who We Are</h2>
                    <p>
                        The Spring University (SU) aims to grant global access to quality undergraduate, graduate, and postgraduate level education programs for students at virtually no cost. Its mission is to change the Muslim Nation and the world situation through appropriate, Islamized education.

                        Making authentic Islamic knowledge readily available to the world through the Internet solely for God’s pleasure is a noble life-goal and a mission well worth sacrificing all of one’s energies and means for.
                    </p>
                </div>
                <div className="col-md-6 p-5 m-5 about-right">
                    <div className="row align-items-center">
                        <div className="col-md-2 offset-md-1">
                            <i className="fas fa-3x fa-user-graduate"></i>
                        </div>
                        <div className="col-md-7">
                            <h4>Associate Degree</h4>
                            <p>IOU offers undergraduate academic degree upon completion of a course of study lasting two years</p>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-2 offset-md-1">
                            <i className="fas fa-3x fa-certificate"></i>
                        </div>
                        <div className="col-md-7">
                           <h4> Bachelors Degree</h4>
                            <p>SU offers undergraduate academic degree upon completion of a course of study lasting four years</p>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-2 offset-md-1">
                            <i className="fas fa-3x fa-graduation-cap"></i>
                        </div>
                        <div className="col-md-7">
                            <h4> Masters Degree</h4>
                            <p>SU offers undergraduate academic degree upon completion of a course of study lasting two years</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;