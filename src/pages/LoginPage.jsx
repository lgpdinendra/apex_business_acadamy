import React from 'react'
import './LoginPage.css'
import { GrUserAdmin } from "react-icons/gr";
import { PiStudentLight } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `student`; 
    navigate(path);
  }
  const routeChangeteacher = () =>{ 
    let path = `teacher`; 
    navigate(path);
  }
  const routeChangeadmin = () =>{ 
    let path = `admin`; 
    navigate(path);
  }
  return (
    <div className='maincontainer'>
      <div className='admin'>
        <button className='btn' onClick={routeChangeadmin}>
            <GrUserAdmin className='btnicon'/> 
            <br/>
            <div className='btnname'>
            Staff
            </div>
            <div className='btndecription'>Login as an staff to access the <br/>
                 dashboard to manage app data .</div>
        </button>
      </div>

<Link to='/Login' className='link-class'>
      <div className='student'>
      <button className='btn' onClick={routeChange}>
            <PiStudentLight className='btnicon'/> 
            <br/>
            <div className='btnname'>
            Student
            </div>
            <div className='btndecription'>Login as a student to explore course <br/>
                 materials and assignments.</div>
        </button>
      </div>
      </Link>

      <Link to='/LoginTeacher' className='link-class'>
      <div className='teacher'>
      <button className='btn' onClick={routeChangeteacher}>
            <GiTeacher className='btnicon'/> 
            <br/>
            <div className='btnname'>
            Teacher
            </div>
            <div className='btndecription'>Login as a teacher to create course <br/>
                  assignments.</div>
        </button>
      </div>
      </Link>
    </div>
  )
}

export default LoginPage
