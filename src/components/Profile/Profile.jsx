import React, { useState } from 'react';
import Nav from '../HomeScreen/Nav';
import Avatar from '@mui/material/Avatar';
import Footer from '../Footer/Footer';
import { MdKeyboardArrowRight } from "react-icons/md";
import david from '../../assets/david.jpg'
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
                <Avatar alt="Remy Sharp" src={david} />
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
              <h3>Mobile Plan</h3>
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
        <div className="profile_footer">
        <Footer />
        </div>
      </div>
    </div>
  );
}

export default Profile;
