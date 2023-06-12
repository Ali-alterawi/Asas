import React from "react";
import Sidebar from "../components/ProfileUser/Sidebar";
import Main from "../components/ProfileUser/Main";
import "../components/ProfileUser/Profile.css";
import NavBar from "../components/NavBar";
const ProfileCustomer = () => {
  return (
    <>
      <NavBar/>
      <div className="container my-5">
        <div className="row justify-content-between">
          <div className="col-lg-3 col-md-12 border rounded-4">
            {" "}
            <Sidebar/>
          </div>
          <div className="col-lg-8 col-md-12 border rounded-4">
            <Main/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCustomer;
