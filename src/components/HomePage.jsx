import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import HeroImage from '../assets/3d-avatar.png';

const HomePage = () => {
    return (
        <div className='container h-screen flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24' id='profile'>
            <div className="flex flex-wrap md:flex-nowrap">
                <div className="flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-36">
                    <h1 className="font-bold font-poppins text-5xl md:text-6xl lg:text-7xl text-center md:text-left text-white">
                        Transforming <br /> Ideas into Digital Reality
                    </h1>
                    <div className="w-full flex justify-center md:justify-start">
                        <button className="px-8 py-5 bg-teal-500 text-white font-bold  mt-12 flex items-center space-x-3">
                            <BsFillPersonLinesFill size={22} />
                            <span className='tracking-wide text-lg'>My Portfolio</span>
                        </button>
                    </div>
                </div>
                <div className="flex flex-wrap items-center w-auto mx-auto justify-center p-6 mt-8 lg:mt-20 h-72 sm:h-80 md:h-90 lg:h-112 xl:h-128 2xl:h-172 lg:mr-40 md:ml-40 md:mt-20">
                    <img src={HeroImage} alt="illustrations by Icon 8" className="w-auto mx-auto object-contain h-72 sm:h-80 sm:w-full md:mt-16 md:h-90 md:absolute lg:h-112 xl:h-112 2xl:h-128" />
                    <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA"></a> <a href="https://icons8.com/illustrations"></a>
                </div>

            </div>
        </div>
    )
}

export default HomePage