import React from "react";

const Profile = () => {
  return (
    <div className="Main Sidebar my-3 border rounded-4">
      <div className="ms-3">
        <div className="d-flex flex-row justify-content-between ">
          <h2 className="p-3 ms-3">Profile</h2>
          <button className="calculator mx-2 mt-2">Edit</button>
        </div>
        <div
          className="border border rounded-4 my-3"
          style={{ backgroundColor: "#F0F0F7" }}
        >
          <div className="profileUser p-5">
            <h5 className="mt-3">
              <span>Full Name :</span> Ali
            </h5>
            <h5 className="mt-3">
              <span>Email:</span> alielterawe@gmail.com
            </h5>
            <h5 className="mt-3">
              <span>Phone</span> +1 0129063075
            </h5>
            <h5 className="mt-3">
              <span>Additional Contacts: </span>+1 0129063075
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
