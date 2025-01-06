import React from 'react'

export default function Footer() {
  return (
    <div className='bg-primaryRed text-white py-14 px-5 md:px-0'>
        <p className='text-center text-sm md:text-balance font-semibold tracking-wide uppercase'>6037 south blvd charlotte, nc • 704-554-6601 707-554-6602</p>
        <div>
            <ul className='flex justify-center gap-10 md:gap-24 my-8 uppercase text-base md:text-lg font-semibold'>
                <li className='hover:underline duration-200'>home</li>
                <li className='hover:underline duration-200'>menu</li>
                <li className='hover:underline duration-200'>catering menu</li>
                <li className='hover:underline duration-200'>hiring</li>
            </ul>
        </div>
        <p className='flex text-center justify-center'>© 800degreespizzeria 2025 • All rights reserved • Design by Rakha</p>
    </div>
  )
}
