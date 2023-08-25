import React from 'react';
import HeroImage from '../assets/userAvatar.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const LandingPage = () => {
    return (
        <div className='w-full h-screen bg-primary px-8 md:px-14 lg:px-24' id='profile'>
            <div className='flex flex-col items-center justify-center h-full max-w-screen-lg lg:gap-x-12 gap-y-8 px-4 mx-auto md:flex-row sm:gap-y-1'>
                <div className='flex flex-col justify-center h-full'>
                    <motion.h1
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className='text-4xl font-normal text-white sm:text-7xl py-2 leading-[0.8] tracking-normal'>
                        I'm <span className='text-teal-600 font-heading uppercase font-bold tracking-wide'>Ibrahim</span>
                    </motion.h1>
                    <motion.h3
                        variants={fadeIn('right', 0.4)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className='text-2xl font-normal  text-white sm:text-4xl normal-case py-2 tracking-wide'>
                        I am a{' '}
                        <TypeAnimation
                            sequence={['Developer', 2000, 'Designer', 2000]}
                            speed={50}
                            className='text-teal-600 font-heading uppercase heading font-medium tracking-wider'
                            wrapper='span'
                            repeat={Infinity}
                        />
                    </motion.h3>
                    <motion.p
                        variants={fadeIn('right', 0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className='max-w-lg py-4 text-gray-400 text-md lg:mx-0 tracking-wide leading-relaxed'>
                        Freelancer with 4-years of experience building, designing and developing websites and
                        apps. I provide services for programming and design content needs using technologies
                        like React, Tailwind, Next JS, Figma, Laravel, WordPress and Flutter.
                    </motion.p>
                    <motion.div
                        variants={fadeIn('right', 0.6)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className=''>
                        <button className='group text-white w-fit px-6 py-2 my-2  font-bold flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-500'>
                                <MdOutlineKeyboardArrowRight
                                    size={22}
                                    className='ml-1'
                                />
                            </span>
                        </button>
                    </motion.div>
                </div>
                <motion.div
                    variants={fadeIn('left', 0.6)}
                    initial='hidden'
                    whileInView={'show'}
                    // viewport={{ once: false, amount: 0.7 }}
                    className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden sm:flex'>
                    <img
                        src={HeroImage}
                        alt='My Virtual Avatar'
                        className='w-2/3 mx-auto sm:w-full '
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default LandingPage;
