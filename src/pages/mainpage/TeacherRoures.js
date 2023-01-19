import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Studentlist from "../../teacher/pages/studentList/Studentlist";
import CourseList from "../../teacher/pages/courseList/CourseList";
import TeacherLogin from "../../teacher/pages/login/TeacherLogin";
import SidebarTeacher from "../../teacher/layout/sidebar/Sidebar";
import { RootContext } from "../../Routing/contextApi";
import Header from "../../layout/header/Header";

const MainPage = ({ isAdmin, setIsAdmin }) => {
  const { user } = useContext(RootContext);

  return (
    <Router>
      <Header isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
      <div className="teracher_right">     
         {user && <SidebarTeacher />}
      <Routes>
        {user ? (
          <>
            <Route path="studentlist" element={<Studentlist />} />
            <Route path="courselist" element={<CourseList />} />
          </>
        ) : (
          <Route path="/" element={<TeacherLogin role={"Teacher"} />} />
        )}
      </Routes>
      </div>

    </Router>
  );
};
export default MainPage;
