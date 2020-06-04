import React from 'react';
import Particles from 'react-particles-js';

const Introduction = () => {
    return (
        <>
        
            <div className="intro">
                
                   <div>
                   <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 160,
                                "density": {
                                    "enable": false
                                }
                            },
                            "size": {
                                "value": 3,
                                "random": true,
                                "anim": {
                                    "speed": 4,
                                    "size_min": 0.3
                                }
                            },
                            "line_linked": {
                                "enable": false
                            },
                            "move": {
                                "random": true,
                                "speed": 1,
                                "direction": "top",
                                "out_mode": "out"
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "bubble"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            },
                            "modes": {
                                "bubble": {
                                    "distance": 250,
                                    "duration": 2,
                                    "size": 0,
                                    "opacity": 0
                                },
                                "repulse": {
                                    "distance": 400,
                                    "duration": 4
                                }
                            }
                        }
                    }} 
                    />
            <div className="row intro-row">
                <div className="col-lg-6">
                    <div className="intro-text">
                   
                        <div className="mx-xs-auto mx-lg-0">
                            <h1>VGG Virtual <br/> Internship</h1>
                            <p>The VGG Virtual Internship is a <br className="big"/>
                            remote <br className="small"/> internship hosted by <br className="big"/>
                            Venture Garden <br className="small"/> Group that seeks to <br className="big"/>
                            build and upskill <br className="small"/> talent across Africa</p>
                            <button className="get-started-btn">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 illustration-parent">
                    <div>
                        <img src="https://i.ibb.co/rFhH2gW/ILLUSTRATION.png" alt="illustration"/>
                    </div>
                </div>
            </div>
           
        </div>
        </div>
       
        </>
        
    )
}

export default Introduction
