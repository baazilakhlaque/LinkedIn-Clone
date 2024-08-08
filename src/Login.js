import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'

function Login() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [profilePic, setProfilePic] = useState('')

    const dispatch = useDispatch()

    function loginToAppHandler(event) {
        event.preventDefault()
        auth.signInWithEmailAndPassword(email, password).then(
            (userAuth) => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    //profileUrl: userAuth.user.photoURL,
                    photoUrl: userAuth.user.photoURL,

                }))
            }
        ).catch((error) => alert(error))

    }

    function registerHandler() {
        if (!name){
            return alert("Please enter full name!")
        }
        auth.createUserWithEmailAndPassword(email, password).then(
            (userAuth) => (userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            }).then(() => {
                dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
            }))})) 
        ).catch((error) => alert(error))
    }

  return (
    <div className='login'>
        <img src='https://logos-world.net/wp-content/uploads/2020/06/Linkedin-Logo-2011-700x394.png' alt='LinkedIn name logo' />
        <form>
            <input value={name} onChange={(event) => setName(event.target.value)} type='text' placeholder='Full Name (required if registered)'></input>
            <input value={profilePic} onChange={(event) => setProfilePic(event.target.value)} type='text' placeholder='Profile pic URL (optional)'></input>
            <input value={email} onChange={(event) => setEmail(event.target.value)} type='email' placeholder='Email'></input>
            <input value={password} onChange={(event) => setPassword(event.target.value)} type='password' placeholder='Password'></input>
            <button onClick={loginToAppHandler} type='submit'>Sign In</button>
        </form>
        <p>Not a member?
            <span className='login__register' onClick={registerHandler}>Create Account</span>
        </p> 
      
    </div>
  )
}

export default Login
