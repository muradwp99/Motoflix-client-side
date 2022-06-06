import React from 'react';
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    const date = new Date;
    return (
        <div className='footer p-2 '>
            <div className='footer-information'>
                <div className="column1">
                    <h4><span style={{ color: "#f0c540" }}>About</span> MotoFlix</h4>
                    <p>MotoFlix Automotive we deal domestic and foreign bikes. We service world wide with Metro Area for all Automotive Seller & Dealer.</p>
                </div>
                <div className="column2">
                    <h4>Contact info</h4>
                    <p><b>Bike Dealer Office:</b> (+880) 18648-64572 <br />
                        <b>Vehicle Selling service:</b> (+880) 17891-81646 <br />
                        <b>Email:</b> muradmd107@gmail.com</p>
                </div>
                <div className="column3">
                    <h4>SERVICE HOURS</h4>
                    <p>
                        <b>Monday - Friday:</b> 09:00AM - 09:00PM <br />
                        <b>Saturday:</b> 09:00AM - 07:00PM <br />
                        <b>Sunday:</b> Closed</p>
                </div>
                <div className="column4">
                    <h4>Social network</h4>
                    <div className="brand-icons">
                        <FontAwesomeIcon className='icons' icon={faGoogle}></FontAwesomeIcon>
                        <FontAwesomeIcon className='icons' icon={faFacebook}></FontAwesomeIcon>
                        <FontAwesomeIcon className='icons' icon={faYoutube}></FontAwesomeIcon>
                        <FontAwesomeIcon className='icons' icon={faInstagram}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className="copyupLine">

                </div>
                <p className='text-center footer-item mt-4'>Copyright © {date.getFullYear()} Murad@MotoFlix All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer; 