"use client";
import Image from 'next/image';
import { useState } from 'react';

const Nav = () => {
    const Links = [
        { name: "HOME", link: "/" },
        { name: "ABOUT US", link: "#about" },
        { name: "TEAM", link: "#team" },
        { name: "PROJECTS", link: "#projects" },
        { name: "JOIN US", link: "#joinus" },
        { name: "DONATE", link: "#donate" },
    ];

    const [open, setOpen] = useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-beige py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                    <Image
                        src="/logo2.png"
                        alt="ChangeSpark Foundation logo"
                        width={100}
                        height={100}
                        className="h-min w-40 pl-5 bg-transparent"
                    />
                    <h1 className="text-black">
                        ChangeSpark<span className="text-black"> Foundation</span>
                    </h1>
                </div>

                <div 
                    onClick={() => setOpen(!open)} 
                    className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
                >
                    <Image
                        src={open ? "/close.svg" : "/menu.svg"}
                        alt={open ? 'Close Menu' : 'Open Menu'}
                        width={32}
                        height={32}
                    />
                </div>

                <ul 
                    className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-beige md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-80 transition-transform duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}
                >
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7  md:mr-8'>
                                <a 
                                    href={link.link} 
                                    className='text-base font-semibold text-black capitalize relative group'
                                >
                                    {link.name}
                                    <span className='absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Nav;
