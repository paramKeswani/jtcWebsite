import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

import murli from './assets/murli.jpeg';
import fortune from './assets/fortune.jpg';
import samrat from './assets/samrat.jpeg';
import swadeshi from './assets/swadeshi.png';
import parivar from './assets/parivar.jpg';
import swastik from './assets/swastik.png';
import mshathi from './assets/mshathi.jpg';
import ruchi from './assets/ruchi.jpg';
import raag from './assets/raag.jpg';
import biryaniking from './assets/biryaniking.jpg';

// Define the style for the images in the carousel
const imageStyle = {
    width: '250px',
    height: '150px',
    borderRadius: '15px',
    border: '3px solid black',
};

function Carousel() {
    return (
        <div>
        <div className='text-center text-3xl border bg-amber-300  p-1'>
         Brands you love♥️ 
            <div className="relative flex h-full ">

<div className="container max-w-screen-xl mx-auto relative z-20 overflow-x-hidden p-2">
    <Splide
        options={{
            type: "loop", // Loop back to the beginning when reaching the end
            autoScroll: {
                pauseOnHover: false, // Do not pause scrolling when hovering over the carousel
                pauseOnFocus: false, // Do not pause scrolling when the carousel is focused
                rewind: true, // Rewind to start when the end is reached
                speed: 0.6 // Scrolling speed
            },
            arrows: false, // Hide navigation arrows
            pagination: false, // Hide pagination dots
            fixedWidth: 'px', // Fixed width for each slide
            gap: '5px', // Gap between slides
        }}
        extensions={{ AutoScroll }} // Use the AutoScroll extension
    >
        <SplideSlide>
            <img className='border-black' src={murli} alt="Poster Brooklyn" style={imageStyle} />
        </SplideSlide>
        <SplideSlide>
            <img src={fortune} className='border-black' alt="Poster Macao" style={imageStyle} />
        </SplideSlide>
        <SplideSlide>
            <img src={samrat} className='border-black' alt="Poster Navada" style={imageStyle} />
        </SplideSlide>
        <SplideSlide className={`bg-white-100`}>
            <img src={swadeshi} className='border-black bg-white-100' alt="Poster Brooklyn" style={imageStyle} />
        </SplideSlide>
        <SplideSlide>
            <img src={parivar} className='border-black' alt="Poster Macao" style={imageStyle} />
        </SplideSlide>
        <SplideSlide>
            <img src={swastik} className='border-black' alt="Poster Navada" style={imageStyle} />
        </SplideSlide>
        <SplideSlide>
            <img src={mshathi} className='border-black' alt="Poster Navada" style={imageStyle} />
        </SplideSlide>
        <SplideSlide>
            <img src={ruchi} className='border-black' alt="Poster Navada" style={imageStyle} />
        </SplideSlide>
        <SplideSlide>
            <img src={raag} className='border' alt="Poster Navada" style={imageStyle} />
        </SplideSlide>
        <SplideSlide>
            <img src={biryaniking} className='border' alt="Poster Navada" style={imageStyle} />
        </SplideSlide>
    </Splide>
</div>
</div>
        </div>
        </div>
        
    );
}

export default Carousel;