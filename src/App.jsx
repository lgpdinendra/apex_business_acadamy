import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentDashboard from './pages/student/StudentDashboard'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginPageHome from './pages/LoginPageHome'
import LoginPage from './pages/LoginPage'
import TeacherDashboard from './pages/teacher/TeacherDashboard'
import AdminDashboard from './pages/admin/AdminDashboard'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Router>
        <Routes>
          <Route path='/' Component={LoginPageHome}/>
          <Route path='/LoginPage' Component={LoginPage}/>
          <Route path='/Login' Component={Login}/>
          <Route path='/Register' Component={Register}/>
          <Route path='/LoginPage/student' Component={StudentDashboard}/>
          <Route path='/LoginPage/teacher' Component={TeacherDashboard}/>
          <Route path='/LoginPage/admin' Component={AdminDashboard}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
