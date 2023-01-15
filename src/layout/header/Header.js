import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoginTest } from "../../controller/Auth";
import "./Header.css";
const Header = ({ isAdmin, setIsAdmin }) => {
  const [logedIn, setLogedIn] = useState(false);
  useEffect(() => {
    console.log("Check Test Case : ", LoginTest());
    setLogedIn(LoginTest());
  }, []);
  const handleloginEvent = () => {
    // setLogedIn(!logedIn);
    localStorage.clear();
    
  };
  return (
    <>
      <header>
        {/* todo 
        Switch theme 
        Awais 
        ${isAdmin ? "admin_header" : "teacher_header"}  */}
        <div className={`container-fluid ` }>
          <div className="row">
            <div className="col-lg-3 col-md-3 ">
              <Link to="#">University Portal</Link>
            </div>

            <div className="col-lg-3 col-md-3 ">
            <>
              <button
              onClick={()=>{ setIsAdmin(!isAdmin) }}
              >
                { isAdmin ? "Admin" : "Teacher" }
                </button>
            </>
            </div>
            {/* Umair  */}
            
            <div className="col-lg-6 col-md-6">
             
              <ul>
                {logedIn && (
                  <li>
                    <Link to="/" onClick={handleloginEvent}>
                      Logout
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
