import React from 'react';
import HeroImage from '../assets/userAvatar.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const LandingPage = () => {
    return (
        <div className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-800' name='profile' id='profile'>
            <div className='flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl font-medium text-teal-600 sm:text-7xl font-heading py-2'>Ibrahim Halidu</h2>
                    <h3 className='text-2xl text-white sm:text-5xl py-2'>Full Stack Developer & Designer</h3>
                    <p className='max-w-md py-4 text-gray-500 text-md'>
                        Freelancer with 4-years of experience building, designing and developing websites and apps.
                        I provide services for programming and design content needs using technologies like React, Tailwind, Next JS, Figma, Laravel, WordPress and Flutter.
                    </p>
                    <div className="">
                        <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 cursor-pointer">
                            Portfolio
                            <span className='group-hover:rotate-90 duration-500'>
                                <MdOutlineKeyboardArrowRight size={22} className='ml-1' />
                            </span>
                        </button>
                    </div>
                </div>
                <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-100 h-100 mt-20 overflow-hidden">
                    <img src={HeroImage} alt="My Virtual Avatar" className="w-2/3 mx-auto md:w-full" />
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
