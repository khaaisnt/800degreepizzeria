"use client"
import React from 'react'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hours() {
    useEffect(() => {
        AOS.init({
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);

  return (
    <div className='my-28'>
        <div data-aos="fade-up" className='text-center special-header mb-20 text-primaryRed font-bold text-[70px]'>
            <h1>Hours</h1>
        </div>
        <div className='grid grid-cols-1 gap-y-10 md:gap-y-0 md:flex md:gap-x-20 justify-center uppercase'>
            <div data-aos="fade-up" className='font-bold text-center text-gray-600'>
                <h5 className='text-2xl'>monday - thusday</h5>
                <h3 className='text-3xl'>11am - 9pm</h3>
            </div>
            <div data-aos="fade-up" className='font-bold text-center text-gray-600'>
                <h5 className='text-2xl'>friday</h5>
                <h3 className='text-3xl'>11am - 11pm</h3>
            </div>
            <div data-aos="fade-up" className='font-bold text-center text-gray-600'>
                <h5 className='text-2xl'>saturday</h5>
                <h3 className='text-3xl'>11am - 10pm</h3>
            </div>
            <div data-aos="fade-up" className='font-bold text-center text-gray-600'>
                <h5 className='text-2xl'>sunday</h5>
                <h3 className='text-3xl'>closed</h3>
            </div>
        </div>
    </div>
  )
}
