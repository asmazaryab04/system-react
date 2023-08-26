import React, {useState} from 'react';
import Addstudent from './Addstudent.jsx';
import Teacherassignment from './TeacherAssignment.jsx';
import Studentslist from './Studentslist.jsx';
import { Link, Outlet } from 'react-router-dom';


 function Header() {
  const links = [
    { name: 'Add Assignment', href: '#' },
    { name: 'Add Student', href: '#' }
  ];
  
  return (
<div>
 <ul className="nav">
 <li className="nav-item">
   <a className="nav-link active" aria-current="page" href="#">Active</a>
 </li>
 <li classNameName="nav-item">
                <Link classNameName="nav-link active" to="/TeacherAssignment">
                  Assignment
                </Link>
              </li>
              <li classNameName="nav-item">
                <Link classNameName="nav-link active" to="/Addstudent">
                  Assignment
                </Link>
              </li>
              <div classNameName="container">
        <Outlet />
      </div>
      </ul>
      <Teacherassignment/>
      <Studentslist/>
      <Addstudent/>
      </div>
  );
};
export default Header
