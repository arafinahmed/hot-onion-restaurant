import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="d-flex justify-content-between first-section">
                    <div><img className="logo-image" src="/images/logo2.png" alt=""/></div>
                    <div className="d-flex justify-content-between">
                    <div className="aladaKori">
                        <p>About Online Food</p>
                        <p>Read our blog</p>
                        <p>Sign up to deliver</p>
                        <p>Add your restaurant</p>
                    </div>
                    <div className="aladaKori">
                        <p>Get Help</p>
                        <p>Read FAQs</p>
                        <p>View All cities</p>
                        <p>Restaurant Near Me</p>
                    </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <p>Copyright © 2020 Online food</p>
                    <div className="d-flex justify-content-between">
                    <p className="aladaKori">Privacy Policy.</p>
                    <p className="aladaKori">Terms of Use</p>
                    <p className="aladaKori">Pricing</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;