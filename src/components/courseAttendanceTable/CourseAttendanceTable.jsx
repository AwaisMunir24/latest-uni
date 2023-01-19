import React from 'react'

const CourseAttendanceTable = (props) => {
    const {date,studentName,regId , _handleBackPage}=props;
  return (
    <>
    <tr>
        <td>
        <p>{date}</p></td>
        <td><p>{studentName}</p></td>
        <td> <p>{regId}</p></td>
        <td><i className="fas fa-angle-left" onClick={_handleBackPage}></i></td>
       
    </tr>
    
    </>
  )
}

export default CourseAttendanceTable