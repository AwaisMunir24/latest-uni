import React, { Component } from 'react';
import './ReportList.css';

const ReportList=(props)=>{
const {idx,courseTitle,coursecode,subjectcode,credithour,handleCourseAttendance}=props;
    return(
        <>
        <tr>
            <td>{idx}</td>
            <td>{courseTitle}</td>
            <td>{coursecode}</td>
            <td>{subjectcode}</td>
            <td>{credithour}</td>
            
            <td><i className="fa-solid fa-hand-point-right" title='Details' onClick={handleCourseAttendance}></i></td>
        </tr>
        </>
    )
}
export default ReportList