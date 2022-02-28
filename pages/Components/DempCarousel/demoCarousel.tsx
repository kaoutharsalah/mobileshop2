

import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 
 
 export default function DemoCarousel() {
    return (
            <Carousel>
                <div>
                    <img src="img/h4-slide.png" />
                   {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="img/h4-slide2.png" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="img/h4-slide3.png" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
           
        );
    };

