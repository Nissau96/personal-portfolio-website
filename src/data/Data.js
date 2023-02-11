import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';



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
        bgcolor: 'blue-600'
    },
    {
        id: 2,
        child: (
            <>
                GitHub <FaGithub size={30} />
            </>
        ),
        href: 'https://github.com/Nissau96',
        bgcolor: '[#333333]',
    },
    {
        id: 3,
        child: (
            <>
                Email <HiOutlineMail size={30} />
            </>
        ),
        href: 'mailto:ihalidu996@gmail.com',
        bgcolor: '[#6fc2b0]',
    },
    {
        id: 4,
        child: (
            <>
                Resume <BsFillPersonLinesFill size={30} />
            </>
        ),
        href: '/Ibrahim Halidu CV--_.pdf',
        style: ' rounded-br-md',
        bgcolor: '[#565f69]',
        download: true,
    },
];