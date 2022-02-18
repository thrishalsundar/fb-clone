import { Button } from '@mui/material'
import React from 'react'
import './Login.css'
import {auth,provider} from '../firebase';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';

const Login = () => {
    const [state, dispatch] = useStateValue()

    var signIn=()=>{
        // signin
        auth.signInWithPopup(provider)
        .then(result=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })

            console.log(result);
        })
        .catch((error)=>alert(error.message))
    }
    return (
        <div className="login">
            <div className="login-logo">
                <img className='fb-logo' src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="FB Logo" />
                <img className='fb-name' src={require('../imgs/logoname.png')} alt="logo name" />
            </div>
            <Button type='submit' onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login