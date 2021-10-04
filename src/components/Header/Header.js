import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        
    }
    return (
        <div className="row title align-items-center">
            <div className="col-md-3 header">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <img className="img-fluid" src="logo.png" alt="" />
                    </div>
                    <div className="col-md-8">
                        <p>Spring University</p>
                    </div>
                </div>
                
            </div>
            <div className="col-md-7">
                <nav>
                    <NavLink activeStyle={activeStyle} className="item" to="/home">Home</NavLink>
                    <NavLink activeStyle={activeStyle} className="item" to="/services">Services</NavLink>
                    <NavLink activeStyle={activeStyle} className="item" to="/about">About Us</NavLink>
                    <NavLink activeStyle={activeStyle} className="item" to="/contact">Contact Us</NavLink>

                </nav>
            </div>
            
        </div>

    );
};

export default Header;