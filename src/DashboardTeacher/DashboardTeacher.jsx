import React from 'react'

import { Route, Router, Routes } from 'react-router-dom'


import './DashboardTeacher.scss';
import { Class, MyProfile, Myclass } from '../screens'
import BaseLayout_Teacher from '../layout/BaseLayout_Teacher';
import DashboardScreen from '../../src/screens_Teacher/dashboard/DashboardScreen'

const DashboardTeacher = () => {
  return (
    <div>
      
      <Routes>
        <Route element={<BaseLayout_Teacher/>}>
            <Route path='/' element={<DashboardScreen/>}/>
            {/* <Route path='/Login/LoginPage/profile' element={<MyProfile/>}/> */}
        </Route>
      </Routes>
     
    </div>
  )
}

export default DashboardTeacher
