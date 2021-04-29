import React from 'react';

const DisplayBookings = (props) => {
    console.log(props.booking);

    const {name, price, desc, image, status} = props.booking;

    return (
        <div className="mr-5 bg-white p-3 rounded">
            <div className="d-flex justify-content-end">
            <img style={{height: '50px'}} src={`data:image/png;base64,${image.img}`} alt=""/>
            <p className="ml-3 text-danger">{status}</p>
            </div>
            <h5>{name}</h5>
            <h6>{price}</h6>
            <p>{desc}</p>
        </div>
    );
};

export default DisplayBookings;