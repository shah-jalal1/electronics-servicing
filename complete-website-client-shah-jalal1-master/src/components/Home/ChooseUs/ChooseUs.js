import React from 'react';
import { FaHandHoldingHeart, FaHammer, FaHandsHelping } from 'react-icons/fa';

const ChooseUs = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">

                <h2 className="mt-4">Why Choose Us</h2>
            </div>

            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-2 pt-5">
                    <div className="col-md-4 text-center" >
                        <FaHandHoldingHeart size={50} className="mb-1" />
                        <p className="text-secondary">10% Price Guarantee</p>
                    </div>
                    <div className="col-md-4 text-center" >
                        <FaHammer size={50} className="mb-1" />
                        <p className="text-secondary">18 Month In-Service Warranty</p>
                    </div>
                    <div className="col-md-4 text-center" >
                        <FaHandsHelping size={50} className="mb-1" />
                        <p className="text-secondary">Free 1-2 Day Rush Service</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ChooseUs;