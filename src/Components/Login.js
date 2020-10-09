import React, {useState} from 'react'
import '../static/css/Login.css'
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../Firebase'

function Login() {
    const history = useHistory();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push('/')
        })
        .catch(error =>alert(error.message))
    }

    const register = e =>{
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch(error=>alert(error.message))
    }
    return (
        <div className="login">
        <Link to="/">
            <img
                className="login__logo"
                src={require('../static/images/amazon-black.png')}
                alt=""/>
        </Link>
        <div className="login__container">
            <h1>Sign-in</h1>
            <form>
                <h5>
                    Email
                </h5>
                <input type="text" value={email} onChange={e=> setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e=> setPassword(e.target.value)}/>
                <button type="submit" className="login__signInButton" onClick={signIn}>Sign In</button>
                <p>
                By continuing, you agree to Amazon-Clone Conditions of Use and Privacy Notice.
                </p>
                <button onClick={register} className="login__registerButton">Sign up</button>
            </form>
        </div>
        </div>
    )
}

export default Login
