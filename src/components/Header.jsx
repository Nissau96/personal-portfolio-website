import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className='bg-primary container fixed w-full h-20 flex justify-between items-center px-8 md:px-14 lg:px-24 py-2 my-2'>
            <div className="">
                <div className="">
                    {/* logo */}
                    <a href="profile" className="ml-2">
                        <img src={Logo} alt="Personal Brand-logo" style={{ width: '200px' }} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header