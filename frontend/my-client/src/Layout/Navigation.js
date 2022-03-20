import React, { useState } from 'react';
import Hamburger from './Hamburger';
import MobileMenu from './MobileMenu';


const  Navigation = () => {
    const navigation = [
        { link: '#', text: 'Link 1' },
        { link: '#', text: 'Link 2' },
        { link: '#', text: 'Link 3' },
        { link: '/about', text: 'About' },
    ];
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open)

    return (
        <div className="bg-blue-200">
            <div className="container mx-auto">
                <nav className='flex  justify-evenly py-6'>
                    <ul>
                        <li><a className="text-2xl font-bold text-gray-900" href="/">Home</a></li>
                    </ul>
                    <ul className='hidden md:flex block menu-links '>
                        {navigation.map((nav) => (
                            <li className='mx-8 font-medium text-gray-600  hover: text-gray-900 text-lg' key={nav.text}>
                                <a href={nav.link} onClick={toggle}>{nav.text}</a>
                            </li>
                        ))}
                    </ul>
                <div className="hidden md:flex  block">  
                       <div>
                        <button className="bg-blue-600 font-medium text-white rounded-md py-2  px-6">
                          <a href="./register"> Register</a>
                        </button>
                    </div>

                    <div >
                        <button className="bg-blue-600 font-medium text-white rounded-md py-2 mx-12 px-6">
                          <a href="./login">Login</a>
                        </button>
                    </div>
                    </div>
               



                    <div onClick={toggle}>
                        <Hamburger />
                    </div>

                </nav>

                {open && <MobileMenu />}

            </div>
        </div>
    )
}

export default Navigation;