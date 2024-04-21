import React from 'react'
import { SidebarProvider } from '../context/SidebarContext'
import { Route, Router, Routes } from 'react-router-dom'
import BaseLayout from '../layout/BaseLayout'
import MyClassScreen from '../screens/myclass/MyclassScreen'
import ClassScreen from '../screens/class/ClassScreen'
import '../DashboardStudent/Dashboard.scss';
import { Class, MyProfile, Myclass } from '../screens'

const MyClass = () => {
  return (
    <div>
      
      <Routes>
        <Route element={<BaseLayout/>}>
            <Route path='/' element={<MyClassScreen/>}/>
            <Route path='/clz' element={<ClassScreen/>}/>
        </Route>
      </Routes>
     
    </div>
  )
}

export default MyClass
