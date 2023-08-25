import React from 'react';
import { Socials } from '../data/Data';


const SocialLinks = () => {
    return (
        <div className="flex flex-col top-[35%] left-0 fixed">
            <ul className='social-links'>
                {Socials.map((socials, index) => (

                    <li key={index} className={`hidden  lg:flex justify-between items-center w-40 h-14  px-4 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300 bg-black/20 ${socials.style}`}>
                        <a href={socials.href} className='flex justify-between items-center w-full text-gray-100' target='_blank' rel='noreferrer'>
                            {socials.child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialLinks;
