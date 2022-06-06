import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import ThinkingSection from '../ThinkingSection/ThinkingSection';
import ducati from '../../assets/img/Ducati-Logo-2009.png';
import hero from '../../assets/img/hero logo.png';
import yamaha from '../../assets/img/yamaha logo.png';
import bmw from '../../assets/img/bmw logo.png';
import maruti from '../../assets/img/maruti-suzuki-logo.png';
import honda from '../../assets/img/honda-logo.png';
import '../Home/Home.css'
import WhyChoose from '../whyChoose/WhyChoose';
const Home = () => {
    return (

        <div>
            <Banner></Banner>
            <div className="below-banner">
                <div className='companies container'>
                    <div className="img-logo">
                        <img width='100' className='' src={ducati} alt="" />
                    </div>
                    <div className="img-logo">
                        <img width='100' className='' src={hero} alt="" />
                    </div>
                    <div className="img-logo">
                        <img width='100' className='' src={yamaha} alt="" />
                    </div>
                    <div className="img-logo">
                        <img width='100' className='' src={bmw} alt="" />
                    </div>
                    <div className="img-logo">
                        <img width='100' className='' src={maruti} alt="" />
                    </div>
                    <div className="img-logo">
                        <img width='100' className='' src={honda} alt="" />
                    </div>
                </div>
            </div>
            <WhyChoose></WhyChoose>
            <Inventory></Inventory>
            <ThinkingSection></ThinkingSection>
        </div>

    );
};

export default Home;