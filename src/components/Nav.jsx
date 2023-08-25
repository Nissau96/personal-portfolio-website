import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsGrid, BsClipboardData, BsChatSquareText } from 'react-icons/bs';

//! React Smooth Scroll
import { Link } from 'react-scroll';

const Nav = () => {
    return (
        <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
            <div className='container mx-auto'>
                <div className=' w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl items-center text-gray-100'>
                    <Link
                        to='profile'
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        className='group duration-300 cursor-pointer w-[60px]  h-[6p0x] flex items-center justify-center hover:drop-shadow-xl hover:bg-light-gray'>
                        <span className="bg-black/20 absolute  -top-8  scale-0 rounded p-2 text-xs text-white group-hover:scale-100 after:top-[100%] after:-translate-x-1/2 ">
                            Home
                        </span>
                        <BiHomeAlt />
                    </Link>
                    <Link
                        to='about'
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        className=' cursor-pointer w-[60px]  h-[6p0x] flex items-center justify-center'>
                        <BiUser />
                    </Link>
                    <Link
                        to='portfolio'
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        className=' cursor-pointer w-[60px]  h-[6p0x] flex items-center justify-center'>
                        <BsGrid />
                    </Link>
                    <Link
                        to='experience'
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        className=' cursor-pointer w-[60px]  h-[6p0x] flex items-center justify-center'>
                        <BsClipboardData />
                    </Link>
                    <Link
                        to='contact'
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        className=' cursor-pointer w-[60px]  h-[6p0x] flex items-center justify-center'>
                        <BsChatSquareText />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
