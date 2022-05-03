import React, { useContext, useEffect } from 'react'
import AuthContext from '../Context/auth/authContext';
import Greeting from '../Components/Greeting';
import Logo from "../Components/designComponents/Logo";

const Home = () => {

    const authContext = useContext(AuthContext)
    useEffect(() => {
        authContext.loadUser();
        //eslint-disable-next-line
    }, [])
    return (

        <div className="container mx-auto">
            
            <div>
                <Greeting />
            </div>

            <div className='mt-6 bg-gray-100 drop-shadow-lg w-1/3 h-screen'>
                <Logo />

            </div>

        </div>
    )
}


export default Home;



