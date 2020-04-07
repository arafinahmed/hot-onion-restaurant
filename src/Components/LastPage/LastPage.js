import React from 'react';
import ThreButton from '../Threbutton/ThreButton';
import './LastPage.css'

const LastPage = () => {
    return (
        <div className="container">
            <ThreButton></ThreButton>
            <div className="d-flex justify-content-between">
                <div className="col-md-8">
                    <img className="img-fluid" src="/images/map.PNG" alt="" />
                </div>
                <div className="col-md-4 designIt">
                    <div>
                        <img className="car img-fluid" src="/images/Image/Group 1151.png" alt=""/>
                    </div>
                    <div className="makeithappen">
                        <ul>
                            <b><li>Your Location</li></b>
                            <p>107 Road No 8</p>
                            <b><li>Shop Address</li></b>
                            <p>GulShan plaza Restaurant</p>
                        </ul>
                    </div>
                    <div>
                        <h1>9:30</h1>
                        <p>Estimated Delivery Time</p>
                    </div>
                    <div className="d-flex justify-content-left makeithappen">
                        <div>
                        <img className="sizekori img-fluid" src="/images/Image/Group 1152.png" alt=""/>
                        </div>
                        <div>
                            <h6>Hamim</h6>
                            <p>Your Rider</p>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-danger custom">Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LastPage;