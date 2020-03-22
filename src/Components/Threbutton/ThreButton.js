import React from 'react';
import { Link } from 'react-router-dom';

const ThreButton = () => {
    return (
        <div>
            
            <div className="d-flex justify-content-center">
                <Link to="/shop">
                <div>
                    <button className="selection-button">Breakfast</button>
                </div>
                </Link>
                <Link to="/shop">
                <div>
                    <button className="selection-button">Lunch</button>
                </div>
                </Link>
                <Link to="/shop">
                <div>
                    <button className="selection-button">Dinner</button>
                </div>
                </Link>                
            </div>
        </div>
    );
};

export default ThreButton;