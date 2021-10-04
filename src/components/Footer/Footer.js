import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className="box">
            <div className="row">
                <p className="footer-title">Spring University</p>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <nav>
                        <NavLink className="footer-item" to="/home">Home</NavLink>
                        <NavLink className="footer-item" to="/services">Services</NavLink>
                        <NavLink className="footer-item" to="/about">About</NavLink>
                        <NavLink className="footer-item" to="/contact">Contact Us</NavLink>

                    </nav>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-3"><i className="fab fa-2x fa-facebook-f"></i></div>
                        <div className="col-md-3"><i className="fab fa-2x fa-skype"></i></div>
                        <div className="col-md-3"><i className="fab fa-2x fa-linkedin"></i></div>
                        <div className="col-md-3"><i className="fas fa-2x fa-envelope"></i></div>
                    </div>
                </div>
            </div>
            <div className="row contacts">
                <div className="col-md-6 get-in-touch">
                    <p>GET IN TOUCH</p>
                    <p> something@gmail.com</p>
                    <p>Mobile: +1234567810</p>
                    <p> Skype: some.thing</p>
                </div>
                <div className="col-md-5">
                    <p>Terms and Condition</p>
                    <p> Legal Notice</p>
                    <p>Join Us NOw</p>
                </div>
               
            </div>
        </div>
    );
};

export default Footer;