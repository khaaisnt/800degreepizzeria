"use client"
import React from 'react'
import { useEffect } from 'react'
import AboutImage from '../../../public/about-us.jpeg'
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutUs() {
    useEffect(() => {
        AOS.init({
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);

  return (
    <div className='py-[100px] md:py-[200px] px-5 md:px-0 relative' style={{backgroundImage: `url(${AboutImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className='text-white relative'>
            <h1 data-aos="fade-up" className='special-header text-center text-[70px] font-bold mb-20'>About Us</h1>
            <div data-aos="fade-up" className='flex justify-center'>
            <p className='max-w-4xl text-base md:text-xl'>New York Pizza was changed to 800 Degrees New York Style Pizzeria in early 2016. The change was made to seperate ourselves from other pizzerias in the area. customer satisfaction is very important to us. We strive to provide our customers with the best food and service possible. One thing you come to appreciate is the quality of ingredients we use in out restaurant.</p>
            </div>
        </div>
    </div>
  )
}
