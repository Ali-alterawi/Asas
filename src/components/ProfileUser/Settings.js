import React, { useState } from "react";
import { CaretUp, Gear} from "react-bootstrap-icons";
const Settings = () => {
  const [elementsVisible, setElementsVisible] = useState(true);

  const toggleElementsVisibility = () => {
    setElementsVisible(!elementsVisible);
  };
  const AllSettings = [
    {id:1, name: "Profile"}
    ,{id:2, name: "Address"}
    ,{id:3, name: "Chat"}
    ,{id:4, name: "Logout"}
  ]
  



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
          {AllSettings.map((e) => (
            elementsVisible && <div className="item" key={e.id}>{e.name}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Settings;
