import React, { useState } from "react";
import { CalendarDate, CaretUp } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const OrdersListPro = () => {
  const [elementsVisible, setElementsVisible] = useState(true);

  const toggleElementsVisibility = () => {
    setElementsVisible(!elementsVisible);
  };
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
          {elementsVisible && (
            <div className="items d-flex flex-column">
              <Link className="text-black text-decoration-none mb-2" to="OrderPro">
                All Orders
              </Link>
              <Link className="text-black text-decoration-none mb-2" to="NewOrdersPro">
                New Orders
              </Link>
              <Link className="text-black text-decoration-none mb-2" to="CompletedOrdersPro">
                Completed Orders
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OrdersListPro;
