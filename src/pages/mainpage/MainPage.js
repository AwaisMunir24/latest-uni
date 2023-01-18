import React, { Component, useEffect, useMemo, useState } from "react";
import Login from "../login/Login";
import Students from "../students/Students";
import Home from "../home/Home";
import Teachers from "../teachers/Teachers";
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Course from "../course/Course";
import Report from "../report/Report";
import CourseAttendance from "../courseattendance/CourseAttendance";
import Studentlist from "../../teacher/pages/studentList/Studentlist";
import CourseList from "../../teacher/pages/courseList/CourseList";
import { LoginTest } from "../../controller/Auth";
import SideBar from "../../layout/sidebar/SideBar";
const MainPage = ({ setLoggedIn, isAdmin }) => {
  function adminList() {
    let items = JSON.parse(localStorage.getItem("admin"));
    if (items) {
      return JSON.parse(localStorage.getItem("admin"));
    } else {
      return [];
    }
  }

  const [admins, setAdmins] = useState(adminList());
  let navigate = useNavigate();
  const [isAuthenticated, setIsAuth] = useState(false);
  const loginng = () => {
    navigate("/");
  };
  useEffect(() => {
      loginng();
      setIsAuth(LoginTest())
  }, []);
  return (
    <>
      <div className="context">
      { isAuthenticated &&
        <SideBar />
      }
        <Routes>
          {isAuthenticated ? (
            <>
            <Route path="dashboard" element={<Dashboard />} />
              <Route path="students" element={<Students />} />
              <Route path="teachers" element={<Teachers />} />
              <Route path="course" element={<Course />} />
              <Route path="report" element={<Report />} />
              <Route
                path="courseattendance"
                element={<CourseAttendance />}
              />
            </>
          ) : (
            <Route path="/" element={<Login role={"Admin"} setIsAuth={setIsAuth} />} />
          )}

          {/* teacher panel starts here */}

          {/* <Route path="studentlist" element={<Studentlist />} />
          <Route path="courselist" element={<CourseList />} />  */}

          {/* teacher panel ends here */}
        </Routes>
      </div>
    </>
  );
};
export default MainPage;
