"use client"
import React from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
import LunchImage from '../../../public/special-lunch.jpeg'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Lunch() {
    useEffect(() => {
        AOS.init({
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);

  return (
    <div className='my-20 px-5 md:px-0 md:flex items-center justify-center gap-[120px]'>
        <div data-aos="fade-up" className='text-center'>
            <h1 className='special-header text-primaryRed text-[70px] mb-10 font-bold'>Lunch Specials</h1>
            <div className='max-w-[350px] mx-auto'>
                <h5 className='text-[24px] font-bold uppercase text-gray-600 mt-4'>2 slices of cheese pizza with a drink &4.60</h5>
                <p className='text-lg font-semibold text-gray-600'>+ taxes (toppings are extra)</p>
                <p className='text-lg font-semibold text-gray-600'>Please see menu</p>
            </div>
            <div className='max-w-[490px] mx-auto'>
                <h5 className='text-[24px] font-bold uppercase text-gray-600 mt-4'>1 slice of cheese pizza with a small house salad & drink $6.50</h5>
                <p className='text-lg font-semibold text-gray-600'>+ taxes (Toppings are extra)</p>
            </div>
            <div>
                <h5 className='text-[24px] font-bold uppercase text-gray-600 mt-4'>available monday-saturday 11am-3pm<br />dine in or carry out only</h5>
            </div>
            <h1 className='special-header text-primaryRed text-[35px] font-bold mt-4 my-12'>Limited time offer.</h1>
            <button className='uppercase py-2 px-6 bg-primaryRed hover:bg-red-700 duration-200 text-white font-semibold tracking-widest'>all specials</button>
        </div>
        <div>
            <Image src={LunchImage} alt='lunch' className='rounded-full hover:scale-125 duration-300 hidden md:block w-[480px]' />
        </div>
    </div>
  )
}
