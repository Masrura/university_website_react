import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    //Data Fetch from fake data file
    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="services-list">
            <div className="row">
                {
                    services.map(service =>
                        <div className="col-md-4 justify-content-center">
                            <Service
                                key={service.id}
                                service={service}
                            ></Service>
                        </div>
                    )
                }

            </div>

        </div>
    );
};

export default Services;