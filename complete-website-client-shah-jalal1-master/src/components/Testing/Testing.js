import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    return (
        <section>
        <Sidebar></Sidebar>
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">Order List</h5>
            
        </div>
    </section>
    );
};

export default OrderList;