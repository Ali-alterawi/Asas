import React, { useEffect, useState } from "react";
import axios from "axios";
import { MDBCheckbox } from "mdb-react-ui-kit";
const SettingsUser = () => {
  const [userId, setUserId] = useState("");
  const [userDetail, setUserDetail] = useState([]);
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
          const id = response.data.user.id;
          setUserId(id);
          console.log(id);

          const userResponse = await axios.get(
            `http://localhost:8000/User0/${id}`
          );
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
  return (
    <>
      <div className="Main Sidebar my-3 border rounded-4">
        <h2 className="p-3">Settings</h2>

        <div
          className="border border rounded-4 my-3 p-5 mx-3"
          style={{ backgroundColor: "#F0F0F7" }}
        >
          {userDetail.map((detail) => (
            <div key={detail._id}>
              <h6 className="my-2">Email</h6>
              <h6 className="my-2">{detail.email}</h6>
            </div>
          ))}
          <div className="d-flex flex-row align-item mt-5">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckChecked"
              className="me-3"
              defaultChecked
            />
            <div>
              <h6>Company News</h6>
              <p className="small-text">
                I'm ok to receive interesting exclusive offers from Asas over
                email
              </p>
            </div>
          </div>
          <button className="calculator" type="button">
            Accept
          </button>
        </div>
      </div>
    </>
  );
};

export default SettingsUser;
