import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import motor1 from '../../assets/img/motorcycle-1.jpg';
import motor2 from '../../assets/img/motorcycle-2.jpg';
import motor3 from '../../assets/img/motorcycle-3.jpg';
import motor4 from '../../assets/img/motorcycle-4.jpg';
import motor5 from '../../assets/img/motorcycle-5.jpg';
import motor6 from '../../assets/img/motorcycle-6.jpg';
import './Banner.css';



const Banner = () => {
    const [slide, setSlide] = useState(false)

    return (
        <div className='carousel-banner'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slide-img"
                        src={motor1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slide-img"
                        src={motor2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slide-img"
                        src={motor3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slide-img"
                        src={motor4}
                        alt="Four slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slide-img"
                        src={motor5}
                        alt="Five slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slide-img"
                        src={motor6}
                        alt="Six slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div >
    );
};

export default Banner;