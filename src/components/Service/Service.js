import React from 'react';
import './Service.css'

const Service = (props) => {
    console.log("service", props.service);
    const {name,department,img } = props.service;
    return (
        <div className>
            <div className="card service">
                <img src={img} class="card-img-top" alt="..."/>
                <div className ="card-body">
                    <h5 className ="card-title">{name}</h5>
                    <p className="card-text">{ department}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;