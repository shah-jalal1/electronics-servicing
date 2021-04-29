import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://stormy-retreat-53136.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    // console.log(services);
    return (
        <section className="services-container mt-5 services-section">
            <div className="text-center mt-4">
                <h2 >Services</h2>
            </div>

            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-2 pt-5">
                    {
                        services.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
        </div>
        </section>
    );
};

export default Services;