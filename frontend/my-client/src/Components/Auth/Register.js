import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertContext from '../../Context/alert/alertContext';
import AuthContext from '../../Context/auth/authContext';
import StrengthPassword from "../StrengthPassword"


//fix alert message - display issue


const Register = () => {

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { register, error, clearErrors, isAuthenticated } = authContext;
    let navigate = useNavigate();
    useEffect(() => {

        if(isAuthenticated){
            navigate("/")
        }

        
        if (error === 'User already exists') {
            setAlert(error, 'text-red-700');
            clearErrors();
        }
        //eslint-disable-next-line
    }, [error,isAuthenticated,navigate]);

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });

    //destructure inputs
    const { username, email, password } = user;

    //this function listens on input value and updates the state 
    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    //this function listens on submit button 
    const onSubmit = e => {
        e.preventDefault();


        if (username === "" || email === "" || password === "") {
            setAlert('Please fill out all the fields', "text-red-700")
        } else if (password.length <= 8) {
            setAlert("Your password can't be less than 8 characters", "text-red-700")
        } else if (password.length >= 15) {
            setAlert("Your password can't be more than 15 characters", "text-red-700")
        }
        else {
            register({
                email,
                username,
                password
            });
        }
        console.log('register is listening..')
    }
    return (
        //  <h1>Create your account by filling out the information bellow!</h1>
        <div >
            <form onSubmit={onSubmit}>

                <div className='flex flex-col justify-center  lg:text-xl'>
                    <div className='text-center text-gray-700 text-3xl font-bold'>
                        <h1 >Register</h1>
                    </div>
                    <div className='text-gray-800 text-sm mt-6 '>
                        <h3>Create your account by filling out the information bellow!</h3>
                    </div>
                </div>
                <div className='flex flex-col bg-gray-700  my-6 p-6 mx-auto items-center w-2/3 lg:w-full'>

                    <label htmlFor='username' className=" text-white text-lg mt-6">User Name:</label>
                    <input className="p-2 w-2/3" type="text" name="username" id="username" value={username} onChange={onChange} />

                    <label htmlFor='email' className="text-white text-lg mt-6" >Email:</label>
                    <input className="p-2 w-2/3" type="email" name="email" id="email" value={email} onChange={onChange} />

                    <label htmlFor='password' className='text-white text-lg mt-6'>Password:</label>
                    <input className="p-2 w-2/3" type="password" name="password" id="password" value={password} onChange={onChange} />
                    <StrengthPassword password={password} />

                </div>

                <div className='mt-6 flex justify-center'>
                    <input type="submit" className="w-2/3  inline-flex items-center justify-center px-4 py-2 bg-blue-300 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-blue-700 active:bg-blue-700 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 disabled:opacity-25 transition lg:w-full" value="Register" />
                </div>

                <div className='text-gray-900 flex justify-center mt-2'>
                    <span>Already have an account? <a className="text-lg text-blue-300 font-bold" href="/login">Sign in</a></span>
                </div>

            </form>

        </div>
    )
};
export default Register;