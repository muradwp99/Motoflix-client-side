import React from 'react';
import thinking from '../../assets/img/motorcycle-1.jpg'
import './ThinkingSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faEnvelope } from '@fortawesome/free-solid-svg-icons';



const ThinkingSection = () => {


    return (
        <>

            <div className='d-flex thinking-container justify-content-center align-items-center '>
                <div className='row'>
                    <div className=' col-lg-6 align-items-center thinking'>
                        <div>
                            <h1>New Thinking For Old Bikes</h1>
                            <p>A philosophical opening statement to the third of our series on innovative and original bike builders, but appropriate to the experience I had when meeting Mal Sheperdson and his team. They operate Metal Malarkey from their engineering and mechanical workshop at Bishops Castle </p>
                            <button className='about-btn'>About me</button>
                        </div>
                    </div>
                    <div className='col-lg-6 d-flex  justify-content-end'>
                        <img className='img-fluid rounded-img' src={thinking} alt="" />
                    </div>
                </div >
            </div>
            <div className='inquiry-section'>
                <div className="sub-inquiry">
                    <div className="have-ques">
                        <h3>HAVE A QUESTIONS? FEEL FREE TO ASK...</h3>
                    </div>
                    <div className="information">
                        <p><FontAwesomeIcon style={{ color: 'White', fontSize: "30px" }} icon={faHeadset}></FontAwesomeIcon> +8801789181646</p>
                        <button><FontAwesomeIcon style={{ color: '#273f44', fontSize: "18px" }} icon={faEnvelope}></FontAwesomeIcon> Email Us</button>
                    </div>
                </div>

            </div>
        </>

    );
};

export default ThinkingSection;