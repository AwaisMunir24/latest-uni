import React, { Component, useEffect, useMemo, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Studentlist from "../../teacher/pages/studentList/Studentlist";
import CourseList from "../../teacher/pages/courseList/CourseList";
import { LoginTest } from "../../controller/Auth";
import TeacherLogin from "../../teacher/pages/login/TeacherLogin";
import SidebarTeacher from "../../teacher/layout/sidebar/Sidebar";
const MainPage = ({isAdmin}) => {
  const [ isLogin, setIsLogin ] = useState(false);
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
    setIsAuth(LoginTest());
  }, []);

  return (
    <>
      <div className="context">
      {isAuthenticated && (
        <SidebarTeacher />
      )}
        <Routes>
          {isAuthenticated ? (
            <>
              <Route path="studentlist" element={<Studentlist />} />
              <Route path="courselist" element={<CourseList />} />
            </>
          ) : (
            <Route path="/" element={<TeacherLogin role={"Teacher"} />} />
          )}
        </Routes>
      </div>
    </>
  );
};
export default MainPage;
