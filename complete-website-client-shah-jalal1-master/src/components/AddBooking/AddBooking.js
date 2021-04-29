import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import StripePayment from '../ProcessPayment/StripePayment/StripePayment';

const AddBooking = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { id } = useParams()
    // console.log(id);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`https://stormy-retreat-53136.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    // console.log(services);

    return (
        <div>
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h3>Add Booking</h3>
                <form >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" name="name" placeholder={loggedInUser.name} disabled />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Email</label>
                        <input type="text" className="form-control" name="email" placeholder={loggedInUser.email} disabled />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Product Name</label>
                        <input type="text" className="form-control" name="name" placeholder={services.name} disabled />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Product Price</label>
                        <input type="text" className="form-control" name="price" placeholder={services.price} disabled />
                    </div>
                    {/* <button type="submit" className="btn btn-primary mb-3">Submit</button> */}
                    
                </form>
                <div className="mt-4">
                    <StripePayment services={services}></StripePayment>
                </div>
                
            </div>
        </div>
    );
};

export default AddBooking;