import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const MakeAdmin = () => {
    const [info, setInfo] = useState({});
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleSubmit = (e) => {
        const formData = new FormData()
        console.log(info.email);
        formData.append('email', info.email);
        console.log();

        fetch('https://stormy-retreat-53136.herokuapp.com/createAdmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                alert('Email Added Successfully');
            })
            .catch(error => {
                console.error(error)
            })

            // fetch('https://stormy-retreat-53136.herokuapp.com/createAdmin', {
            //     method: 'POST',
            //     headers: {
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify(info.email)
            // })
            //     .then(res => {
            //         alert('successfully add product');
            //         console.log('server side response', res);
                    
            //     })

        e.preventDefault();
    }
    return (
        <section>
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Make Admin</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input onBlur={handleBlur}  type="email" className="form-control" name="email" placeholder="Enter Email" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default MakeAdmin;