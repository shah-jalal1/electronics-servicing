import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { UserContext } from '../../../App';
import DisplayBookings from '../DisplayBookings/DisplayBookings';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://stormy-retreat-53136.herokuapp.com/bookingEmail?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    console.log(bookings);
    return (
        <section>
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Booking List</h5>
                <div className="row">
                    {
                        bookings.map(booking => <DisplayBookings booking={booking}></DisplayBookings>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BookingList;