import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FaGripHorizontal, FaCalendarDay, FaUsers, FaFileAlt, FaUserCog, FaSignOutAlt, FaUserPlus } from 'react-icons/fa';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setAdmin] = useState(false);
    // console.log('firebase email', loggedInUser.email);

    useEffect(() => {
        fetch('https://stormy-retreat-53136.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAdmin(data));
    }, [])
    // console.log("from database", isAdmin);


    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">

                {/* USERS DASHBOARD */}
                <li>
                    <Link to="/addBooking" className="text-white">
                        {/* <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>  */}
                        <span> <FaCalendarDay /> Book </span>
                    </Link>
                </li>

                <li>
                    <Link to="/bookings/bookingList" className="text-white">
                        {/* <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span> */}
                        <span> <FaFileAlt /> Booking List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addReview" className="text-white">
                        {/* <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>  */}
                        <span> <FaCalendarDay /> Add Review </span>
                    </Link>
                </li>

                {/* ADMIN DASHBOARD */}
                {isAdmin &&
                    <div>
                        <li>
                            <Link to="/orderList" className="text-white">
                                {/* <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>  */}
                                <span> <FaGripHorizontal /> Order list </span>
                            </Link>
                        </li>

                        <div>
                            <li>
                                <Link to="/addService" className="text-white">
                                    {/* <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>  */}
                                    <span> <FaCalendarDay /> Add Service </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/makeAdmin" className="text-white">
                                    {/* <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>  */}
                                    <span> <FaCalendarDay /> Make Admin </span>
                                </Link>
                            </li>


                            <li>
                                <Link to="/service/manageService" className="text-white">
                                    {/* <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span> */}
                                    <span> <FaFileAlt /> Manage Service </span>
                                </Link>
                            </li>

                        </div>
                    </div>
                }
            </ul>
        </div>
    );
};

export default Sidebar;