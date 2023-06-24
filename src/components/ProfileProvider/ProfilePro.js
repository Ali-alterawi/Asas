import React from "react";

const ProfilePro = () => {
  return (
    <div>
      {" "}
      <div className="Main Sidebar my-3 border rounded-4">
        <div className="d-flex flex-row justify-content-between ">
          <h2 className="p-3 ms-3">Profile</h2>
          <button className="calculator mt-2">Edit</button>
        </div>
        <div
          className="border border rounded-4 my-3"
          style={{ backgroundColor: "#F0F0F7" }}
        >
          <div className="profileUser p-5">
            <h5 className="mt-3">
              <span>Office Name :</span> Lamar Engineering office
            </h5>
            <h5 className="mt-3">
              <span>Email:</span> info@Lamar.com
            </h5>
            <h5 className="mt-3">
              <span>Phone:</span> +1 0129063075
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

export default ProfilePro;
