import React from 'react'
import Nav from './HomeScreen/Nav'
import { Link } from 'react-router-dom';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const ErrorPage = () => {
  return (
    <div className='error'>
        <Nav />
        <div className="error-page">
            <h1>Oops!</h1>
            <p>The page you visited does not exist</p>
            <div className="error_home">
                <p>Navigate back to</p>
                <Link to={"/"}>home page</Link>
            </div>
        </div>
        <div className='error-footer'> 
            <div className='error-logo'>
                <Link to={"https://www.instagram.com/sckokyy/"} target='_blank'> 
                    <FaInstagram />
                </Link>
                <Link to={"https://twitter.com/Sckokyy"} target='_blank'>
                    <FaXTwitter />
                </Link>
                <Link to={'https://github.com/GbollySckoky'} target='_blank'>
                    <IoLogoGithub />
                </Link>
                <Link to={"https://www.linkedin.com/in/gbolahan-coker-85ba39241/"} target='_blank'>
                    <FaLinkedin />
                </Link>
            </div>
            <div className='error_copy'>
                <p> &copy; 2024</p>
                <Link to={'mailto:gbolahancoker99@gmail.com'} target='_blank'>gbolahancoker99@gmail.com</Link>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage