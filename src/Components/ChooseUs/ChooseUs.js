import React from 'react';
import './ChooseUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faArrowAltCircleRight} />
const ChooseUs = () => {
    return (
        <div className="container chooseusbody">
            <h3>Why you choose us</h3>
            <p>Barton waited twenty always repair in within we do. An delighted offending
                <br />
                curiosity my is dashwoods at. Boy prosperous increasing surrounded.
            </p>
            <div className="row chooseUs">
                <div className="col-md-4">
                    <img className="img-fluid" src="/images/Image/adult-blur-blurred-background-687824.png" alt="" />
                    <div className="floatEvent">
                        <img src="images/ICON/Group 204.png" alt=""/>
                        <div className="row">
                        <div className="col">
                        <h5>Fast Delivery</h5>
                        <p>Keep your system in sync with automated web hook based notifications each time link is paid and how we dream about future.</p>
                        <h6 className="text-primary">See More {element}</h6>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid" src="/images/Image/chef-cook-food-33614.png" alt="" />
                    <div className="floatEvent">
                        <img src="images/ICON/Group 1133.png" alt=""/>
                        <div className="row">
                        <div className="col">
                        <h5>A Good Auto Responder</h5>
                        <p>Keep your system in sync with automated web hook based notifications each time link is paid and how we dream about future.</p>
                        <h6 className="text-primary">See More {element}</h6>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid" src="/images/Image/architecture-building-city-2047397.png" alt="" />
                    <div className="floatEvent">
                        <img src="images/ICON/Group 245.png" alt=""/>
                        <div className="row">
                        <div className="col">
                        <h5>Home Delivery</h5>
                        <p>Keep your system in sync with automated web hook based notifications each time link is paid and how we dream about future.</p>
                        <h6 className="text-primary">See More {element}</h6>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ChooseUs;