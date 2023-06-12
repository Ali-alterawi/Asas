import React from 'react'
import NavBar from '../components/NavBar';
import SidebarPro from '../components/ProfileProvider/SidebarPro';
import MainPro from '../components/ProfileProvider/MainPro';

const ProfileOffice = () => {
    return (
        <>
          <NavBar/>
          <div className="container my-5">
            <div className="row justify-content-between">
              <div className="col-lg-3 col-md-12 border rounded-4">
                {" "}
                <SidebarPro/>
              </div>
              <div className="col-lg-8 col-md-12 border rounded-4">
              <MainPro/>
              </div>
            </div>
          </div>
        </>
      );
    };


export default ProfileOffice