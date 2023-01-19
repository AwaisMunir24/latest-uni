import "./App.css";
import MainPage from "./pages/mainpage/MainPage";
import TeacherMainPage from "./pages/mainpage/TeacherRoures";

import { useState } from "react";

function App() {
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <>
      <div className="main_div">
        <>
          {isAdmin && <MainPage isAdmin={isAdmin} setIsAdmin={setIsAdmin} />}
          {/* !isAdmin = Teacher  */}
          {!isAdmin && (
            <TeacherMainPage isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
          )}
        </>
      </div>
    </>
  );
}

export default App;
