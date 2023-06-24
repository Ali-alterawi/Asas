import React, { useState } from "react";
import { CaretUp, Gear} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const SettingsListPro = () => {
  const [elementsVisible, setElementsVisible] = useState(true);

  const toggleElementsVisibility = () => {
    setElementsVisible(!elementsVisible);
  };
  return (
    <>
      <div className="Settings">
        <div className="header">
          <div className="title">
            <Gear size="18" />
            <p style={{marginBottom: "0"}}>Settings</p>
          </div>
          <div className="btns">
            <span>
              <CaretUp size="20" onClick={toggleElementsVisibility} />
            </span>
          </div>
        </div>
        <div className="items" >
        {elementsVisible && (
            <div className="items d-flex flex-column">
              <Link className="text-black text-decoration-none mb-2" to="ProfilePro">
              Profile
              </Link>
              <Link className="text-black text-decoration-none mb-2" to="SettingsPro">
              Settings
              </Link>
              <Link className="text-black text-decoration-none mb-2" to="">
              Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SettingsListPro;
