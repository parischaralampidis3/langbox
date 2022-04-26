import React,{useContext,useEffect} from 'react'
import AuthContext from '../Context/auth/authContext';
import DashLogo from "../../src/Components/designComponents/DashLogo";
 const Home = () => {

    const authContext = useContext(AuthContext)
    useEffect(()=>{
        authContext.loadUser();
        //eslint-disable-next-line
    },[])
    return (

    <div className="container mx-auto"> 
   <div className='flex  font-medium justify-start text-xl items-center'>
      <h1>Welcome,</h1>
  </div>

  <div><DashLogo/></div>

      </div>
  )
}


export default Home;



