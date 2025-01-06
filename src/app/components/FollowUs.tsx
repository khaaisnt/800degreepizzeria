"use client"
import React from 'react'
import FollowImage from '../../../public/follow-us.jpeg'
import { FaFacebookF, FaInstagram, FaYelp } from 'react-icons/fa'

export default function FollowUs() {
  return (
    <div className='py-20 relative' style={{backgroundImage: `url(${FollowImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className='flex flex-col justify-center relative'>
            <div className='text-center text-white'>
                <h1 className='special-header font-bold text-[70px]'>Follow Us</h1>
                <h5 className='text-2xl font-semibold'>#800degreespizzeria</h5>
            </div>
            <div>
                <div className='flex justify-center mt-20 gap-16'>
                    <div className='bg-white p-5 md:p-8 rounded-full text-3xl md:text-5xl'>
                        <FaFacebookF />
                    </div>
                    <div className='bg-white p-5 md:p-8 rounded-full text-3xl md:text-5xl'>
                        <FaInstagram />
                    </div>
                    <div className='bg-white p-5 md:p-8 rounded-full text-3xl md:text-5xl'>
                        <FaYelp />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
