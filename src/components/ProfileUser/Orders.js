import React, { useState } from "react";
import { CalendarDate, CaretUp } from "react-bootstrap-icons";

const Orders = () => {
  
  const [elementsVisible, setElementsVisible] = useState(true);

  const toggleElementsVisibility = () => {
    setElementsVisible(!elementsVisible);
  };
  const OrdersList = ["Orders", "Completed Orders"];
  return (
    <>
      <div className="OrdersMain">
        <div className="header">
          <div className="title">
            <CalendarDate size="18" />
            <p style={{ marginBottom: "0" }}>Orders</p>
          </div>
          <div className="btns">
            <span>
              <CaretUp size="20" onClick={toggleElementsVisibility} />
            </span>
          </div>
        </div>
        <div className="items">
          {OrdersList.map(
            (e) =>
              elementsVisible && (
                <div className="item" key={e}>
                  {e}
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
};

export default Orders;
