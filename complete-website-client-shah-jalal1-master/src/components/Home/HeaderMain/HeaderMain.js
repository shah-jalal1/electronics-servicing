import React from 'react';
import {
    Link
  } from "react-router-dom";
import hero from '../../../images/hero.jpg'

const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h3 style={{ color: '#3A4256' }}>Any Electronics Problems </h3>
                <h1>We Will Help You</h1>
            </div>
            <div className="col-md-6">
                <img src={hero} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;