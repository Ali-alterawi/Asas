import React, { useState } from "react";
import { CaretUp, Gear} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const Settings = () => {
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
        {elementsVisible && (
        <div className="items d-flex flex-column">
        
          <Link className="text-black" to="Profile">Profile</Link>
          <Link to="SettingsUser">Settings Orders</Link>
          <Link to="Soon">Chat</Link>
          <Link to="Main">Logout</Link>
        </div>)}
      </div>
    </>
  );
};

export default Settings;
