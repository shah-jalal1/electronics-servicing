import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

const OrderList = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://stormy-retreat-53136.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    // console.log(bookings);

    const [value, setValue] = useState('');
    const handleSelect = (e) => {

        const element = e;
        // console.log(e);
        setValue(element)
    }
    // console.log(value);

    const statusHandler = (id) => {
        console.log(id, value);

        fetch('https://stormy-retreat-53136.herokuapp.com/updateOrder/'+id, {
            method: 'PATCH',
            // headers: {'Content-type': 'application/json'},
            // body: JSON.stringify(value)
            body: value
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('your order placed successfully');
                }
            })
    }


    return (
        <section>
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Order List {bookings.length}</h5>


                <Table borderless>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email Id</th>
                            <th>Services</th>
                            <th>Price</th>
                            <th>Pay With</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            bookings.map((booking, index) =>

                                <tr>
                                    <td>{booking.eName}</td>
                                    <td>{booking.email}</td>
                                    <td>{booking.name}</td>
                                    <td>{booking.price}</td>
                                    <td>Credit Card</td>
                                    {/* <td>{booking.status}</td>                 */}
                                    <td>
                                        <div className="d-flex justify-content-start">
                                            <DropdownButton
                                                alignRight
                                                title={booking.status}
                                                id={booking._id}
                                                // id="dropdown-menu-align-right"
                                                onSelect={handleSelect}
                                            >
                                                <Dropdown.Item key={booking._id} eventKey="Ongoing">Ongoing</Dropdown.Item>
                                                <Dropdown.Item eventKey="Done">Done</Dropdown.Item>
                                                <Dropdown.Item eventKey="Pending">Pending</Dropdown.Item>
                                            </DropdownButton>
                                            <button onClick={() => statusHandler(booking._id)} type="submit" className="btn btn-success">Submit</button>
                                        </div>
                                    </td>
                                    {/* 
                                    <td>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                Dropdown Button
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item onChange={handleChange()} href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td> */}

                                </tr>
                            )
                        }
                    </tbody>
                </Table>


            </div>
        </section>
    );
};

export default OrderList;