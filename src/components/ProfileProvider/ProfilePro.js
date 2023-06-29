import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [userId, setUserId] = useState("");
  const [userDetail, setUserDetail] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({
    userName: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          const response = await axios.get("http://localhost:8000/Verify_token", {
            headers: {
              Authorization: token,
            },
          });
          const id = response.data.user.id;
          setUserId(id);
          // console.log(id);

          const userResponse = await axios.get(`http://localhost:8000/User0/${id}`);
          setUserDetail(userResponse.data);
        } else {
          // Handle the case when token is missing
          console.log("Error becuase no token");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle the error here
      }
    };

    fetchUserData();
  }, []);

  const handleEditClick = () => {
    setIsEditMode(true);
    setUpdatedUser({
      userName: userDetail[0].userName,
      email: userDetail[0].email,
      phone: userDetail[0].phone
    });
  };

  const handleInputChange = (e) => {
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value
    });
  };
// console.log(updatedUser);
  const handleSaveClick = async () => {
    try {
      const response = await axios.put(`http://localhost:8000/User/${userId}`, updatedUser);
      // console.log(response.data); // Assuming the response contains the updated user data

      setIsEditMode(false);
      // Optionally, you can update the userDetail state with the updated user data
      setUserDetail([response.data]);
    } catch (error) {
      console.error("Error updating user data:", error);
      // Handle the error here
    }
  };

  return (
    <div className="Main Sidebar my-3 border rounded-4">
      {userDetail.map((detail) => (
        <div className="mx-3" key={detail._id}>
          <div className="d-flex flex-row justify-content-between">
            <h2 className="p-3 ms-3">Profile</h2>
            {!isEditMode && (
              <button className="calculator mx-2 mt-2" onClick={handleEditClick}>
                Edit
              </button>
            )}
          </div>
          <div className="border border rounded-4 my-3" style={{ backgroundColor: "#F0F0F7" }}>
            <div className="profileUser p-5">
              {isEditMode ? (
                <React.Fragment>
                  <h5 className="mt-3">
                    <span>Full Name :</span>{" "}
                    <input
                      type="text"
                      name="userName"
                      value={updatedUser.userName}
                      onChange={handleInputChange}
                    />
                  </h5>
                  <h5 className="mt-3">
                    <span>Phone:</span>{" "}
                    <input
                      type="text"
                      name="phone"
                      value={updatedUser.phone}
                      onChange={handleInputChange}
                      className="form-floating"
                    />
                  </h5>
                  <button className="editButton" onClick={handleSaveClick}>Save</button>
                  <button className="editButton" onClick={() => setIsEditMode(false)}>Cancel</button>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <h5 className="mt-3">
                    <span>Full Name:</span> {detail.userName}
                  </h5>
                  <h5 className="mt-3">
                    <span>Email:</span> {detail.email}
                  </h5>
                  <h5 className="mt-3">
                    <span>Phone:</span> {detail.phone}
                  </h5>
                  <h5 className="mt-3">
                    <span>Main service:</span> {detail.service}
                  </h5>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
