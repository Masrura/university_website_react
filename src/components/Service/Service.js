import React from 'react';
import './Service.css'

const Service = (props) => {
    console.log("service", props.service);
    const {name,department,img,duration, tutionFee } = props.service;
    return (
        <div>
            <div className="card service">
                <img src={img} className="card-img-top" alt="..."/>
                <div className ="card-body">
                    <h5 className ="card-title">{name}</h5>
                    <p className="card-text">{ department}</p>
                    <p className="card-text"> Duration: { duration} Years</p>
                    <p className="card-text">Fees: {tutionFee}</p>
                    <button className="btn-success"> Learn More </button>
                </div>
            </div>
        </div>
    );
};

export default Service;