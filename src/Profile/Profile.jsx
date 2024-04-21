import React from 'react'

import { Route, Router, Routes } from 'react-router-dom'
import BaseLayout from '../layout/BaseLayout'
import MyProfileScreen from '../screens/profile/MyProfileScreen'
import '../DashboardStudent/Dashboard.scss';
import { Class, MyProfile, Myclass } from '../screens'

const Profile = () => {
  return (
    <div>
      
      <Routes>
        <Route element={<BaseLayout/>}>
            <Route path='/' element={<MyProfileScreen/>}/>
        </Route>
      </Routes>
     
    </div>
  )
}

export default Profile
