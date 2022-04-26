import React,{useState,useEffect,useContext} from 'react';
import Avatar from 'react-avatar';
import AuthContext from '../../Context/auth/authContext';
function DashLogo () {

    const authContext = useContext(AuthContext);
    const {user} = authContext;

    useEffect(()=>{
        authContext.loadUser();
        //eslint-disable-next-lineContext.loadUser();

    },[]);

    return (
    <div>
        
            <div className=' w-1/4 py-4 '>
                <Avatar className='mx-auto' color={Avatar.getRandomColor('sitebase', ['yellow', 'red', 'green'])} name={user && user.username}  size='70px' round={true}/>

                </div>
                
         
    </div>
  )
}

export default DashLogo;
