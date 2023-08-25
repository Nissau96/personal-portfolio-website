import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';



//! Social Media Link Array 
export const Socials = [
    {
        id: 1,
        child: (
            <>
                LinkedIn <FaLinkedin size={30} />
            </>
        ),
        href: 'https://www.linkedin.com/in/ibrahim-halidu-05997a213/',
        style: ' rounded-tr-md',
    },
    {
        id: 2,
        child: (
            <>
                GitHub <FaGithub size={30} />
            </>
        ),
        href: 'https://github.com/Nissau96',
    },
    {
        id: 3,
        child: (
            <>
                Twitter <FaTwitter size={30} />
            </>
        ),
        href: 'https://twitter.com/Ibrah_Nissau',
    },
    {
        id: 4,
        child: (
            <>
                Email <HiOutlineMail size={30} />
            </>
        ),
        href: 'mailto:ihalidu996@gmail.com',
        style: ' rounded-br-md',
    },
];