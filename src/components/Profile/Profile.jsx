import React, { useState } from 'react';
import Nav from '../HomeScreen/Nav';
import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";
import david from '../../assets/david.jpg'
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Modal from './Modal';


const Profile = ({user}) => {
const [showModal, setShowModal] = useState(false)
const handleShowModal = () => {
  setShowModal(!showModal)
}
  return (
    <div className='profis'>
      <div className='profile'>
        <Nav />
        <div className='profile_body'>
          <h1>Edit Profile</h1>
          <div  className='profile_info'>
            <div className='profile_details'>
                <Avatar id="imgs" alt="Remy Sharp" src={david} />
                <h2>{user.email}</h2>
            </div>
          </div>
          <div className="">
          <div  className='profile_acct'>
            <h1>Account</h1>
            <p>Membership Details</p>
          </div>
          <div className='profile_member'>
            <p>Member since May 2024</p>
            <div className='plan'>
              <h3>Movie Plan</h3>
              <p>Next Payment: Unlimited Subscription</p>
              <p id="yu">{user.email}</p>
            </div>
            <hr />
            <div className='meb'>
              <h3>Manage Membership</h3>
              <span> <MdKeyboardArrowRight /> </span>
            </div>
          </div>
          <div >
            <button onClick={handleShowModal} className='prof_btn' >Sign Out</button>
            {showModal && <Modal  handleShowModal={handleShowModal} />}
          </div>
        </div>
        </div>
        <div className='profile-footer'> 
            <div className='profile-logo'>
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
            <div className='profile_copy'>
                <p> &copy; 2024</p>
                <Link to={'mailto:gbolahancoker99@gmail.com'} target='_blank'>gbolahancoker99@gmail.com</Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
