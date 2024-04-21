import React from 'react'
import { SidebarProvider } from '../context/SidebarContext'
import { Route, Router, Routes } from 'react-router-dom'
import BaseLayout from '../layout/BaseLayout'
import DashboardScreen from '../screens/dashboard/DashboardScreen'
import './Dashboard.scss';
import { Class, MyProfile, Myclass } from '../screens'

const DashboardStudent = () => {
  return (
    <div>
      
      <Routes>
        <Route element={<BaseLayout/>}>
            <Route path='/' element={<Myclass/>}/>
            {/* <Route path='/Login/LoginPage/profile' element={<MyProfile/>}/> */}
        </Route>
      </Routes>
     
    </div>
  )
}

export default DashboardStudent
