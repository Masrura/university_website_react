import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css'
const Details = () => {
    const [serviceDetails, setServiceDetails] = useState([]);
    const [singleDetails, setSingleDetails] = useState({});
    const { serviceId } = useParams();


    //Data Fetch from fake data file
    useEffect(() => {
        fetch('/dataDetail.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data.services));
    }, [])

    //console.log('data= ', serviceDetails[0]);
    useEffect(() => {
        //console.log('anni1', serviceDetails);
        const foundService = serviceDetails.find(service => service.id === parseInt(serviceId))
        setSingleDetails(foundService)


    },[serviceDetails, serviceId])
    
   
    return (
        <div className="details-main">
            <img src={singleDetails?.img} className="details-img" alt="" />
            <h2>{singleDetails?.name}</h2>
            <h2>Department of {singleDetails?.department}</h2>
            
            <div className="description-box">
                <h3>Overview</h3>
                <p>{singleDetails?.description}</p>
                <h4><u>Duration:</u> {singleDetails?.duration}</h4>
                <h4><u>Tution Fees:</u> {singleDetails?.tutionFee}</h4>
            </div>
            <div>
                
           </div>
            
        
        </div>
    );
};

export default Details;