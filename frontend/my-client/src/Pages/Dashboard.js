import React,{useContext,useEffect} from 'react'
import AuthContext from '../Context/auth/authContext';
import Logo from "../Components/designComponents/Logo";
 const Home = () => {

    const authContext = useContext(AuthContext)
    useEffect(()=>{
        authContext.loadUser();
        //eslint-disable-next-line
    },[])
    return (

    <div className="container mx-auto"> 
    <Logo/>
   <div className='flex  font-medium justify-start text-xl items-center'>
      <h1>Welcome,</h1>
  </div>

  {/*<div><Logo/></div>*/}

      </div>
  )
}


export default Home;



