import React, { Component, useEffect, useState } from "react";
import "./Report.css";
import ReportList from "../../components/reportsList/ReportList";
import {useNavigate} from 'react-router-dom' 
import axios from "axios";
const Report = () => {
    const navigate=useNavigate()
    const[reports,setreports]=useState([ ])
    const _handleAttendance=()=>{
        navigate('/courseattendance')
    }
useEffect(() => {
axios.get("https://dark-gray-agouti-kit.cyclic.app/api/course").then((resp)=>{
  console.log(resp.data.data);
  setreports(resp.data.data )
})
}, [])


    return (
    <>
      <section>
        <div className="report_section">
          <div className="container-fluid">
            <div className="row mb-3">
              <div className="col-lg-12">
                <h4>Reports</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <table className="table ">
                  <thead>
                    <tr>
                    <th>#</th>
                    <th>Course title</th>
                    <th>Course Code</th>
                    <th>Subject Code</th>
                     <th>Credit Hours</th>
                     </tr>
                  </thead>
                  <tbody>
                    {
                        reports.map((e,idx)=>
                        <ReportList
                        key={idx}
                        id={e.id}
                        idx={idx+1}
                        courseTitle={e.title}
                        coursecode={e.courseCode}
                        subjectcode={e.subjectId.name}
                        credithour={e.creditHours}
                        handleCourseAttendance={_handleAttendance}
                        />
                        )
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Report;
