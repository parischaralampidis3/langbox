import React, { useContext, useEffect } from 'react'
import AuthContext from '../Context/auth/authContext';
import Greeting from '../Components/Greeting';
import Logo from "../Components/designComponents/Logo";
import VideoCall from '../Components/Socket/VideoCall';
const Home = () => {

    const authContext = useContext(AuthContext)
    useEffect(() => {
        authContext.loadUser();
        //eslint-disable-next-line
    }, [])
    return (

        <div className="container mx-auto">

            <div className='flex w-full h-screen'>
            <div>

                <div className='mt-6  bg-gray-100 drop-shadow-lg '>
                    <Greeting />
                </div>

                <div className='mt-6  bg-gray-100 drop-shadow-lg h-3/5 w-5/5'>
                    <Logo />
  
                </div>

            </div>



            <div className=' mt-6 bg-gray-100 mx-auto items-center w-3/5 h-3/5 drop-shadow-lg'>
              <VideoCall />
            </div>

        </div>
        </div>
    )
}


export default Home;



