import React, { Component, useState } from "react";
import "./Report.css";
import ReportList from "../../components/reportsList/ReportList";
import {useNavigate} from 'react-router-dom' 
const Report = () => {
    const navigate=useNavigate()
    const[reports,setreports]=useState([
        {
            id:"1",
            courseTitle:"Data Logic & design",
            coursecode:"cs402",
            subjectcode:'cs301',
            credithour:"3"
        }
    ])
    const _handleAttendance=()=>{
        navigate('/courseattendance')
    }
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
                        courseTitle={e.courseTitle}
                        coursecode={e.coursecode}
                        subjectcode={e.subjectcode}
                        credithour={e.credithour}
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
