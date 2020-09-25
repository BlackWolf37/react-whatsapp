import { Button } from '@material-ui/core';
import React from 'react'
import { auth, provider } from '../firebase';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';

import './Login.css';

function Login() {
    const [{}, dispatch] = useStateValue();

    const onSignin = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                });
            })
            .catch((err) => alert(err.message))
    };

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="Whatsapp logo" />
                <div className="login__text">
                    <h1>Sign in to Whatsapp</h1>
                </div>
                <Button onClick={onSignin}>
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
}

export default Login
