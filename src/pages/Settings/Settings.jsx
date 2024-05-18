import React from 'react'
import Profile from '../../components/Profile/Profile'

const Settings = ({user}) => {
  return (
    <div>
        <Profile user={user} />
    </div>
  )
}

export default Settings