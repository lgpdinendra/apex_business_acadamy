import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import StudentDashboard from './pages/student/StudentDashboard'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginPageHome from './pages/LoginPageHome'
import LoginPage from './pages/LoginPage'
import TeacherDashboard from './pages/teacher/TeacherDashboard'
import AdminDashboard from './pages/admin/AdminDashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './DashboardStudent/DashboardStudent';
import {Class} from './screens'
import Profile from './Profile/Profile';
import MyClass from './MyClass/MyClass';
import LoginTeacher from './pages/LoginTeacher';
import DashboardTeacher from './DashboardTeacher/DashboardTeacher';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Router>
        <Routes>
          <Route path='/' Component={LoginPageHome}/>
          <Route path='/LoginPage' Component={LoginPage}/>
          <Route path='/Login/LoginPage' Component={Dashboard}/>
          <Route path='/Login/LoginPage/profile' Component={Profile}/>
          <Route path='/Login' Component={Login}/>
          <Route path='/LoginTeacher' Component={LoginTeacher}/>
          <Route path='/Register' Component={Register}/>
          <Route path='/LoginTeachar/LoginTeacherDash' Component={DashboardTeacher}/>
          <Route path='/Login/LoginPage/class' Component={MyClass}/>
          
        </Routes>
      </Router>
    </>
    
  )
}

export default App
