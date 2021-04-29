import React, { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddReview = () => {const [info, setInfo] = useState({});
const [file, setFile] = useState(null);
const handleBlur = e => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
}
const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
}

const handleSubmit = (e) => {
    const formData = new FormData();
    console.log(info);

    formData.append('file', file);
    formData.append('name', info.name);
    formData.append('designation', info.designation);
    formData.append('desc', info.desc);

    fetch('https://stormy-retreat-53136.herokuapp.com/addAReview', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert("Successfully Added Data");
        })
        .catch(error => {
            console.error(error)
        })
        

        e.preventDefault();
}

    return (
        <section>
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a Review</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Enter Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Designation</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="designation" placeholder="Designation" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="desc" placeholder="Description" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddReview;