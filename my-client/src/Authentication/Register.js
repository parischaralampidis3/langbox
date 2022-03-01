
import React, {useState } from "react";

import {Link} from "react-router-dom";


const Register = ({setAuth}) => {


  const [user, setUser] = useState({
    firstName:"",
    lastName:"",
    userEmail: "",
    userName:"",
    userPassword: ""
});

  const { first_name,last_name,user_name,user_email,user_password} = user;

 
  const onChange = e =>
    setUser({ ...user, [e.target.name]: e.target.value });

 
  const onSubmit= async e => {
    e.preventDefault();
    try {
      const body = {first_name,last_name, user_name,user_email,user_password };
      const response = await fetch(
        "http://localhost:5000/auth/register",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );
      const parseRes = await response.json();
      localStorage.setItem("token",parseRes.token);
      setAuth(true);

    } catch (err) {
      console.error(err.message);
    }
  };

    return (
        //  <h1>Create your account by filling out the information bellow!</h1>
        <div >
            <form onSubmit={onSubmit} action="">
                   
            <div className='flex flex-col justify-center  lg:text-xl'>
                  <div className='text-center text-gray-700 text-3xl font-bold'>
                    <h1 >Register</h1>
                  </div>
                  <div className='text-gray-800 text-sm mt-6 '>
                     <h3>Create your account by filling out the information bellow!</h3>
                  </div>
                </div>
                <div className='flex flex-col bg-gray-700  my-6 p-6 mx-auto items-center w-2/3 lg:w-full'>
                 
                    <label htmlFor='first_name' className="text-lg text-white">First Name:</label>
                    <input className="p-2 w-2/3 form-control" type="text" name="first_name" id="first_name" value={first_name} onChange={onChange} />
               
                 
                    <label htmlFor='last_name' className=' text-white text-lg mt-6'>Last Name:</label>
                    <input className="p-2 w-2/3" type="text" name="last_name" id="last_name" value={last_name} onChange={onChange} />
                 
                   
                    <label htmlFor='user_name' className=" text-white text-lg mt-6">User Name:</label>
                    <input className="p-2 w-2/3" type="text" name="user_name" id="user_name" value={user_name} onChange={onChange} />
                
                    <label htmlFor='user_email' className="text-white text-lg mt-6" >Email:</label>
                    <input className="p-2 w-2/3" type="email" name="user_email" id="user_email" value={user_email} onChange={onChange} />
                   
                    <label htmlFor='user_password' className='text-white text-lg mt-6'>Password:</label>
                    <input className="p-2 w-2/3" type="password" name="user_password" id="user_password" value={user_password} onChange={onChange} />
                   
                </div>
                <div className='mt-6 flex justify-center'>
                    <input type="submit" className="w-2/3  inline-flex items-center justify-center px-4 py-2 bg-blue-300 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-blue-700 active:bg-blue-700 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 disabled:opacity-25 transition lg:w-full" value="FormSignup"/>
                </div>
                <div className='text-gray-900 flex justify-center mt-2'>
                <span>Already have an account? <a className="text-lg text-blue-300 font-bold" href="/login">Sign in</a></span>
                </div>
                
            </form>  
            <Link to="/login">login</Link>
        </div>
    )
};
export default Register;