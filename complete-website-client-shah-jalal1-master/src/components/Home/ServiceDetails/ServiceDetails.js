import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { FaDollarSign } from "react-icons/fa";
import './ServiceDetails.css'

const ServiceDetails = (props) => {
    const history = useHistory();
    const {name, price, desc, image, _id} = props.service;

    return (
        <div className="col-md-4 text-center text-white flip-card" >
            <img style={{height: '50px'}} src={`data:image/png;base64,${image.img}`} alt="" className="flip-card-back"/>
            <h2 className="mt-2 mb-3 flip-card-back">{name}</h2>
            <h5 >{price}<FaDollarSign/></h5>
            <p className="text-white">{desc}</p>
            <Link to={`/addBooking/${_id}`}><button className="btn btn-success mb-4">Booking Service</button></Link>
        </div>
    );
};

export default ServiceDetails;