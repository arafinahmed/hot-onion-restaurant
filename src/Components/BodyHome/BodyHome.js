import React from 'react';
import './BodyHome.css'
const BodyHome = () => {
    return (
        <div className="body d-flex align-items-center justify-content-center">
            <div>
            <h1>Best food waiting for your belly</h1>
            <div className="middle">
            <input className="search-box" type="search" placeholder="Search food items"/>
            <button className="overlap btn btn-danger">Search</button>
            </div>
            <div className="nouse"></div>
            </div>
            
        </div>
    );
};

export default BodyHome;