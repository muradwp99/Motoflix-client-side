import React from 'react';
import '../whyChoose/WhyChoose.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faMapLocation, faHeadset } from '@fortawesome/free-solid-svg-icons';

const WhyChoose = () => {
    return (
        <div>

            <div className="point-div">
                <h2>Why Choose Us</h2>
                <div className="list-section">
                    <div className="individual-features">
                        <div>
                            <FontAwesomeIcon className="choose-icon" icon={faThumbsUp}></FontAwesomeIcon>
                        </div>
                        <div>
                            <h3>Outstanding Services</h3>
                            <p>Way of interaction and communication skills describe are you really can satisfy the person you deal with with us we are best at it.</p>
                        </div>
                    </div>
                    <div className="individual-features">
                        <div>
                            <FontAwesomeIcon className="choose-icon" icon={faMapLocation}></FontAwesomeIcon>
                        </div>
                        <div>
                            <h3>GPS on Every Vehicle!</h3>
                            <p>We believe if our world become more clever and why not we become similar like that so we decided to tract the vehicle movement using GPS</p>
                        </div>
                    </div>
                    <div className="individual-features">
                        <div>
                            <FontAwesomeIcon className="choose-icon" icon={faHeadset}></FontAwesomeIcon>
                        </div>
                        <div>
                            <h3>24 Hours Support</h3>
                            <p>Anytime or any problem we are always here for you 24/7 without any kinds of delay. Your problem is our problem</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WhyChoose;