"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import { FaInstagram, FaFacebookF, FaYelp, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="absolute top-0 w-full z-10">
            <div className="flex justify-between px-6 md:px-[80px] py-[20px] md:py-[25px] items-center">
                <div>
                    <Image src={Logo} alt="logo" className="rounded-full w-12 md:w-32" />
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
                <div className={`md:flex ${isOpen ? "block" : "hidden"} absolute md:static top-[60px] left-0 w-full md:w-auto bg-black md:bg-transparent`}>
                    <ul className="flex flex-col md:flex-row uppercase gap-10 text-white font-semibold text-lg p-6 md:p-0">
                        <li className="hover:text-yellow-400 duration-200 cursor-pointer">
                            Menu
                        </li>
                        <li className="hover:text-yellow-400 duration-200 cursor-pointer">
                            Catering Menu
                        </li>
                        <li className="hover:text-yellow-400 duration-200 cursor-pointer">
                            Contact
                        </li>
                        <li className="hover:text-yellow-400 duration-200 cursor-pointer">
                            Hiring
                        </li>
                    </ul>
                </div>
                <div className="hidden md:flex gap-4">
                    <div className="bg-white p-2 rounded-full">
                        <FaFacebookF />
                    </div>
                    <div className="bg-white p-2 rounded-full">
                        <FaInstagram />
                    </div>
                    <div className="bg-white p-2 rounded-full">
                        <FaYelp />
                    </div>
                </div>
            </div>
        </div>
    )
}
