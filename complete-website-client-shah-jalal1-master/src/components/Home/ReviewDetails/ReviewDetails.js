import React from 'react';
import './ReviewDetails.css';

const ReviewDetails = (props) => {
    const { name, designation, desc, image } = props.review;
    console.log(props.review);
    return (
        <div className="review-details-section">
            <div className="col-md-12  " >
                <div className="d-flex justify-content-start text-center">
                    <img style={{ height: '35px' }} src={`data:image/png;base64,${image.img}`} alt="" />
                    <h6 className="ml-3 mb-3">{name}</h6>
                </div>
                <h6>{designation}</h6>
                <p className="text-secondary ">{desc}</p>
            </div>
        </div>
    );
};

export default ReviewDetails;