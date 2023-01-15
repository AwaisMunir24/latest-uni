import Header from "./layout/header/Header";
import SideBar from "./layout/sidebar/SideBar";
import "./App.css";
import { useNavigate } from "react-router-dom";
import MainPage from "./pages/mainpage/MainPage";
import TeacherMainPage from "./pages/mainpage/TeacherRoures";
import SidebarTeacher from "./teacher/layout/sidebar/Sidebar";
import Login from "./pages/login/Login";
import { useState } from "react";

function App() {
  const [isAdmin, setIsAdmin] = useState(true);
  const [ loggedIn, setLoggedIn] = useState(false)
  return (
    <>
      <div>
        <>
          <Header isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
          {isAdmin && (
            <div className="content">
              <MainPage isAdmin={isAdmin} />
            </div>
          )}
          {/* !isAdmin = Teacher  */}
          {!isAdmin && (
            <div className="content">
             
              {/* Replace Sidebar With Teacher Side bar  */}
              <TeacherMainPage isAdmin={isAdmin} />
            </div>
          )}
        </>
      </div>
    </>
  );
}

export default App;
