import axios from "axios";
import React, { useState, useEffect } from "react";
import AbsAllCourses from "../../Components/absAllCourses/AbsAllCourses";
import AbsStudentList from "../../Components/absStudentList/AbsStudentList";

const Studentlist = () => {
  const [getCourseList, setCourseList] = useState([]);
  const [value, setValue] = useState("");

  const [selectedCourse, setSelectedCourse] = useState({});
  const [studentList, setStudentlsit] = useState([]);

  const [QRcode, setQRcode] = useState(
    "https://chart.googleapis.com/chart?chs=300x200&cht=qr&chl=input&choe=UTF-8"
  );
  const getCourseListing = () => {
    axios
      .get("https://dark-gray-agouti-kit.cyclic.app/api/course")
      .then((resp) => {
        setCourseList(resp.data.data);
      })
      .catch((err) => console.log(err));
  };
  const _handleCourseForAttendance = (id) => {
    console.log(id, "course");
    axios
      .get(`https://dark-gray-agouti-kit.cyclic.app/api/course/${id}`)
      .then((resp) => {
        console.log("res jere", resp.data.data);
        setSelectedCourse(resp.data.data);
      })
      .catch((err) => console.log(err));
  };
  const _handleAttendRecord = () => {
    axios
      .get(
        `https://dark-gray-agouti-kit.cyclic.app/api/attendence/${selectedCourse._id}`
      )
      .then((resp) => {
        setStudentlsit(resp.data.results);
      })
      .catch((err) => console.log(err));
  };
  // console.log(studentList._id,"id listed");
  useEffect(() => {
    getCourseListing();
  }, []);
  const _handleQrFunction = (e) => {
    e.preventDefault();
    const random = Math.random();
    const qrcodesrc =
      "https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=" +
      random +
      "&choe=UTF-8";
    setQRcode(qrcodesrc);
    setValue("");
  };
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h5>Student Attendance </h5>
            </div>
          </div>
          <div className="row justify-content-between algin-items-center">
            <div className="col-lg-4">
              <AbsAllCourses
                getCourseList={getCourseList}
                _handleCourseSelectForAttendance={(e) =>
                  _handleCourseForAttendance(e)
                }
              />
            </div>
            <div className="col-lg-4">
              <input type="date" className="form-control" />
            </div>
            <div className="col-lg-4">
              <button
                className="btn w-100 py-2"
                onClick={(e, id) => _handleAttendRecord(e.target.value, id)}
              >
                Fetch Data
              </button>
            </div>
          </div>
          <div className="row justify-content-center my-3">
            <div className="col-lg-6">
              <form onSubmit={_handleQrFunction}>
                <div className="d-flex flex-column align-items-center ">
                  <img src={QRcode} alt="qr code" />
                  {/* <label>Please Button to Generate New QR</label> */}
                  <button className="btn">Generate QR Code</button>
                </div>
              </form>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <table className="table ">
                <thead>
                  <tr>
                    <th>Sr #:</th>
                    <th>Student Name</th>
                    <th>Last Name</th>
                    <th>Student Id</th>
                  </tr>
                </thead>
                <tbody>
                  {studentList.length > 0 ? (
                    studentList?.map((e, idx) => (
                      <>
                        <AbsStudentList
                          key={idx}
                          idx={idx + 1}
                          id={e.id}
                          studentName={e.student.firstName}
                          courseName={e.student.lastName}
                          subjectName={e.student.regNumber}
                        />
                      </>
                    ))
                  ) : (
                    <td>
                      <p>No Attendance Found</p>
                    </td>
                  )}
                  {/* {studentList?.map((e, idx) => (
                    <>
                      <AbsStudentList
                        key={idx}
                        idx={idx + 1}
                        id={e.id}
                        studentName={e.student.firstName}
                        courseName={e.student.lastName}
                        subjectName={e.student.regNumber}
                      />
                    </>
                  ))} */}
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
