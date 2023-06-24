import React from "react";
import { MDBCheckbox } from "mdb-react-ui-kit";
const SettingsPro = () => {
  return (
    <>
    <div className="Main Sidebar my-3 border rounded-4">
      <h2 className="p-3">Settings</h2>

      <div
        className="border border rounded-4 my-3 p-5"
        style={{ backgroundColor: "#F0F0F7" }}
      >
        <div>
          <h6 className="my-2">Email</h6>
          <h6 className="my-2">info@Lamar.com</h6>
        </div>
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
            <p class="small-text">
              I'm ok to receive interesting exclusive offers from Asas over
              email
            </p>
          </div>
        </div>
        <button class="calculator" type="button">
          Accept
        </button>
      </div>
      </div>
    </>
  );
};

export default SettingsPro;
