import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Table } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import './ManageService.css'

const MangageService = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('https://stormy-retreat-53136.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    console.log(services);

    const deleteService = (id) => {
        console.log(id);
        fetch('https://stormy-retreat-53136.herokuapp.com/delete/' +id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                //    console.log("deleted successfully");
                if (result) {
                    //  event.target.parentNode.style.display = "none";
                    alert("successfully delete product")
                    // history.push("/manageProducts")
                }
            })
    }

    return (
        <section>
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <div className="pl-5 pr-5 pt-2">
                    <h3 className="text-center">Manage Services</h3>
                    <Table borderless>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                services.map((service, index) =>

                                    <tr>
                                        <td>{service.name}</td>
                                        <td>{service.price}</td>
                                        <td>{service.desc}</td>
                                        <td><FaTrashAlt onClick={() => deleteService(service._id)} className="delIcon" /></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </section>
    );
};

export default MangageService;