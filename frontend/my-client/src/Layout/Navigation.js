import React, { useState, useContext } from 'react';
import Hamburger from './Hamburger';
import MobileMenu from './MobileMenu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import AuthContext from "../Context/auth/authContext"

const  Navigation = () => {

    const authContext = useContext(AuthContext);

    const { isAuthenticated, logout, user } = authContext;

    const onLogout = ()=>{
        logout();
    }


    const navigation = [
        { link: '#', text: 'Link 1' },

    ];
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open)


    const authLinks = (
        <div className="flex  list-none">
        <li className='md:text-base lg:text-bold text-lg'>
        Hello, {user && user.username}
        </li>
            
            <a onClick={onLogout} href="#" >
                <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-xl absolute -mt-6 p-6 text-gray-700 " />
           
                <span className='mx-12'>Logout</span>
            </a>
    
        
        </div>
    )


    const guestLinks = (
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
    )

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
            
                    {isAuthenticated?authLinks:guestLinks}
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