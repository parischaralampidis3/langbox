import React,{useContext, useEffect,useRef,useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import AuthContext from '../../Context/auth/authContext';


const SearchUserBar = () =>{

    const authContext = useContext(AuthContext); 
    const text = useRef('');
    const {authFilter,clearFilter,filtered}=authContext;
    useEffect(()=>{
        if(filtered === null){
             text.current.value = '';
        }
    },[])

    const onChange  = (e)=>{
        if(text.current.value !== ''){
          authFilter(e.target.value);
        }
        else{
            clearFilter();
        }
    }
    

    return(
        <div className='container mx-auto'>
        <div className='relative w-3/5'>
            <FontAwesomeIcon icon = {faMagnifyingGlass} className = "absolute mt-4  right-0 mr-4"/>
            <input type='text' className='rounded-full' placeholder='Search user..' onChange={onChange}/>
        </div>
        </div>
    )
}

export default SearchUserBar;