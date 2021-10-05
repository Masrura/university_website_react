import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import './Service.css'

const Service = (props) => {
    //console.log("service", props.service);
    const { id, name, department, img, duration, tutionFee } = props.service;
    const history = useHistory();
    const handleClick = () => {
        history.push(`/service/${id}`);
    }
    return (
        <div>
            <div className="card service">
                <img src={img} className="card-img-top" alt="..."/>
                <div className ="card-body">
                    <h5 className ="card-title">{name}</h5>
                    <p className="card-text">{ department}</p>
                    <p className="card-text"> Duration: { duration} Years</p>
                    <p className="card-text">Fees: {tutionFee}</p>
                    <button className="btn-success" onClick={handleClick}> Learn More </button>
                </div>
            </div>
        </div>
    );
};

export default Service;