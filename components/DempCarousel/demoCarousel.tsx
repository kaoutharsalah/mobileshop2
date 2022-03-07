

import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
 
 export default function DemoCarousel() {
    return (
            <Carousel>
                <div>
                    <img src="img/h4-slide.png" />
                  
                </div>
                <div>
                    <img src="img/h4-slide2.png" />
               
                </div>
                <div>
                    <img src="img/h4-slide3.png" />
         
                </div>
            </Carousel>
           
        );
    };

