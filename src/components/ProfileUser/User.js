import React, { useEffect, useState } from "react";
import profile from "../../images/image.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [userId, setUserId] = useState("");
  const [userDetail, setUserDetail] = useState([]);
  let id;
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          const response = await axios.get(
            "http://localhost:8000/Verify_token",
            {
              headers: {
                Authorization: token,
              },
            }
          );
          id = response.data.user.id;
          setUserId(response.data.user.id);
          //   console.log(response.data.user.id);
        }

        try {
          const response = await axios.get(`http://localhost:8000/User0/${id}`);

          setUserDetail(response.data);
          //   console.log(response.data);
        } catch (error) {
          console.error("Error retrieving user data:", error);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle the error here
      }
    };

    fetchUserData();
  }, [userId]);

  //   console.log(userDetail);

  return (
    <div className="">
      {userDetail.map((detail) => (
        <div key={detail._id} className="User my-2">
          <div className="logo">
            <img src={profile} alt="testimalion3" />
          </div>
          <div className="info">
            <p>{detail.userName}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default User;
