import React,{useContext,useEffect} from 'react'
import AuthContext from '../Context/auth/authContext';



 const Home = () => {

    const authContext = useContext(AuthContext)
    useEffect(()=>{
        authContext.loadUser();
        //eslint-disable-next-line
    },[])
    return (
    <div>Home</div>
  )
}


export default Home;