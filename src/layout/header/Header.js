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
     
        <div
          className={`container-fluid ${
            isAdmin ? "admin_header" : "teacher_header"
          }`}
        >
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-3 ">
              <Link to="#">University Portal</Link>
            </div>

            <div className="col-lg-6 col-md-3 text-center d-flex justify-content-center ">
              <div class="form-check form-switch text-center">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"  onClick={() => {
                    setIsAdmin(!isAdmin);
                  }}
                />
                <label class="form-check-label label_tag" for="flexSwitchCheckDefault">
                {isAdmin ? "Admin" : "Teacher"}
                </label>
              </div>
              <>
                
              </>
            </div>
            {/* Umair  */}

            <div className="col-lg-3 col-md-6">
              <ul>
                {logedIn? (
                  <li>
                    <Link to="/" onClick={handleloginEvent}>
                      Logout
                    </Link>
                  </li>
                ):""}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
