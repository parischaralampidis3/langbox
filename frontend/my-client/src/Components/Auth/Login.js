import React, {useState} from 'react';

const Login = () => {
    const [user,setUser] = useState({
        email: "", 
        password: "" 
    });

    //destructure inputs
    const { email,password} = user;
    
    //this function listens on login input value and updates the state
    const onChange = (e) =>{ 
        setUser({
                ...user, 
                [e.target.name]: e.target.value
             });
    }
    //this function listens on submit button
    const onSubmit = (e) =>{
        e.preventDefault();
        console.log('login is listening..')
    }

    return (
        <div >
            <form onSubmit={onSubmit}>
        
                <div className='flex flex-col justify-center  lg:text-xl'>
                  <div className='text-center text-gray-700 text-3xl font-bold'>
                    <h1 >Login</h1>
                  </div>
                  <div className='text-gray-800 text-sm mt-6 '>
                    <h3>Almost there!  Please fill out the information bellow!</h3>
                  </div>
                </div>
                <div className='flex flex-col bg-gray-700  my-6 p-6  items-center w-full lg:w-full'>
                
                    <label htmlFor='email' className="text-white text-lg mt-6" >Email:</label>
                    <input className="p-2 w-2/3" type="email" name="email" id="email" value={email} onChange={onChange} />
                   
                    <label htmlFor='password' className='text-white text-lg mt-6'>Password:</label>
                    <input className="p-2 w-2/3" type="password" name="password" id="user_password" value={password} onChange={onChange} />
                   
                </div>
                <div className='mt-6 flex justify-center'>
                    <input type="submit" className="w-2/3  inline-flex items-center justify-center px-4 py-2 bg-blue-300 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-blue-700 active:bg-blue-700 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 disabled:opacity-25 transition lg:w-full" value="Login"/>
                </div>
   
            </form>
           
        </div>
    )
};
export default Login;