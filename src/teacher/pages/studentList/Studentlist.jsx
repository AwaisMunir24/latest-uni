import React from "react";
import { useState } from "react";
import AbsStudentList from "../../Components/absStudentList/AbsStudentList";

const Studentlist = () => {
  const [studentList, setStudentList] = useState([
    {
      studentName: "bc190202899",
      courseName: "Cs",
      attandance: "marked",
      subjectName:"DLD"
    },
    {
      studentName: "bc190202890",
      courseName: "Cs",
      attandance: "un marked",
      subjectName:"Mathss"
    },
  ]);
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h5>Student Attendance </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <table className="table ">
                <thead>
                  <tr>
                    <th>Sr #:</th>
                    <th>Student Id</th>
                    <th>Course Name</th>
                    <th>Subject Name</th>
                    <th>Attandance</th>
                  </tr>
                </thead>
                <tbody>
                  {studentList.map((e, idx) => (
                    <>
                      <AbsStudentList
                        key={idx}
                        idx={idx + 1}
                        id={e.id}
                        studentName={e.studentName}
                        courseName={e.courseName}
                        subjectName={e.subjectName}
                        attandance={e.attandance}
                      />
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Studentlist;
