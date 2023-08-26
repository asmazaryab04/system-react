import React from 'react'
import Assignment from '../../Teacher/TeacherHeader/TeacherAssignment'

const Studentassignment = () => {
  return (
    <div className='Studentassignment'>
    <a href={Assignment} download className='btn'>Download Assignment</a>
    <p>
    <a href='#contacts' className='btn btn-primary'><p>Let's Talk</p></a>
    </p>
    </div>
  )
}

export default Studentassignment
