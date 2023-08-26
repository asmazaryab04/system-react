import React, {useState} from 'react'
import Loginform from './components/Teacher/Teacherlogin/Loginform.jsx'
import Signup from './components/Teacher/Teacherlogin/Signup.jsx'
import TeacherHeader from './components/Teacher/TeacherHeader/Header.jsx'
import Nav from './components/nav/nav.jsx'
import Studentheader from './components/Student/Stheader/Studentheader.jsx'
import Studentassignment from './components/Student/Stheader/Studentassignment.jsx'
import StLogin from './components/Student/Stlogin/StLogin.jsx'
import Notfound  from './Notfound.jsx'
import Stsignup from './components/Student/Stlogin/Stsignup.jsx'
import StudentsList from './components/Teacher/TeacherHeader/Studentslist.jsx'




const App = () => {

const [currentForm, setCurrentForm] = useState ('Loginform',StLogin);
const toggleform = (forName) => {
  setCurrentForm (forName);
}
const [AddStudent] =useState (StudentsList);
 

  return (
    <>
currentForm === "Login" ? <Loginform onFormSwitch= {toggleform}/> ; <Signup onFormSwitch= {toggleform}/>
currentForm === "Login" ? <StLogin onFormSwitch= {toggleform}/> ; <Stsignup onFormSwitch= {toggleform}/>
    <TeacherHeader/>
      <Nav/>   
     <Studentheader/>
      <Studentassignment/>
      <Notfound/>
      
    </>
  )
}

export default App






