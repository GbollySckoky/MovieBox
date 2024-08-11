import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebase' 
import { MdOutlineCancel } from "react-icons/md";
const SignIn = ({handleClick}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)
    // console.log(email)
    const register = async (e) => {
        e.preventDefault()
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
             console.log(userCredential)
             const user = userCredential.user;
             localStorage.setItem('token', user.accessToken)
             localStorage.setItem('user', JSON.stringify(user))
        }
        catch(err){
            setErrorMessage(err.message)
            setTimeout(() => {
                setErrorMessage(null);
            },3000)
        }
    }

    const signIn = async (e) => {
        e.preventDefault()
        // Implement sign-in logic here

        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
             console.log(userCredential)
             const user = userCredential.user;
             localStorage.setItem('token', user.accessToken)
             localStorage.setItem('user', JSON.stringify(user))
        }
        catch(error){
           setErrorMessage(error.message)
           setTimeout(() => {
            setErrorMessage(null);
            },3000)
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className='signIn'>
            <div className="icon-container">
                <MdOutlineCancel
                    onClick={handleClick}
                    className='bg-red-900 w-full cursor-pointer' />
            </div>
            <form>
                <h1>Sign In</h1>
                <div>
                    <input
                        type="email"
                        placeholder='Email Address'
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button
                    type='submit'
                    id='signIn_btn'
                    onClick={signIn}>
                    Sign In
                </button>
                <h4 className='gid'>
                    <span className='grey'>New to Netflix?</span>
                    <span className='signIn_link' onClick={register}> Sign Up now.</span>
                </h4>
                {errorMessage && <p className='red'>{errorMessage}</p>}
            </form>
        </div>
    )
}

export default SignIn
