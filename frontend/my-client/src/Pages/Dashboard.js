import React,{useContext,useEffect} from 'react'
import AuthContext from '../Context/auth/authContext';
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
      <h1 className='text-blue-800 mx-2 '>{localStorage.getItem("name")}</h1>
  </div>
 
      </div>
  )
}


export default Home;



