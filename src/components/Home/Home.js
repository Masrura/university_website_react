import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState([]);

    //Data Fetch from fake data file
    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    const newServices = services.slice(0, 4);
    return (
        <>
            <div className="banner-box">
                <div className="row align-items-center">

                    <div className="col-md-4 offset-md-1 banner-text">
                        <h2>
                            Learn more and make success the result of perfection.
                        </h2>
                        <p>
                            Pick from over 100,000 online video courses with new additions published every month.
                        </p>
                    </div>
                    <div className="col-md-7">
                        <img className="banner" src="banner.jpg" alt="" />
                    </div>

                </div>

            </div>
            <div className="row">
                {
                    newServices.map(service =>
                        <div className="col-md-4">
                            <Service
                                key={service.id}
                                service={service}
                            ></Service>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default Home;