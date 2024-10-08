import React, {useState} from 'react'
import logo from '../../../src/assets/logo.png'
import SignIn from './SignIn'
const Login = () => {
    const [signIn, setSignIn] = useState(false) 
    const handleClick = () => {
        setSignIn((prev) => !prev)
    }
  return (
    <div className='login'>
        <div className='loginScreen'>
            <img className='login_img' src={logo} alt="" />
            <button
            onClick={() => setSignIn(true)}
            className='login_btn'
            >
                Sign In
            </button>
            <div className='loginScreen_gradient'></div>
        </div>
        <div className="login_body">
            {signIn ? (
                <SignIn handleClick={handleClick}/>
            ):(
                <>
                    <h1>Unlimited films, TV programmes and more.</h1>
                    <h2>Watch anywhere. cancel at anytime.</h2>
                    <p>Ready to watch? Enter your email to create or start membership</p>
            
                    <div className='input'>
                        <form action="">
                            <input type="email" required placeholder='Email Address'/>
                            <button
                                onClick={() => setSignIn(true)} 
                                className='login_get'>
                                GET STARTED
                            </button>
                        </form>
                    </div>
                </> 
            )}
        </div>
    </div>
  )
}

export default Login
