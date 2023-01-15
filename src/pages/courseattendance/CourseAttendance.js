import React, { Component } from "react";
const CourseAttendance = () => {
  return (
    <>
      <section>
        <div className="courseattendance_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <h4>Course Attendance</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th className="text-end">Open </th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CourseAttendance;
