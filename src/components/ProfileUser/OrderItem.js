import React from "react";
import { Link } from "react-router-dom";

const OrderItem = () => {
  return (
    <>
      <div className="border border rounded-4 my-3" style={{ backgroundColor: "#F0F0F7"}}>
        <div>
          <div className="d-flex flex-row justify-content-between align-items-baseline">
            <h5 className="fw-bold ms-4">Engineering Design</h5>
            <div className="d-flex flex-row align-items-center">
             <Link to="/PaymentGate" ><button className="me-3 calculator mt-3">Payment</button></Link>
             <Link to="/OrderDetails" ><button className="calculator mt-3 me-2">See Details</button></Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="p-4">
          <h6 className="mt-2">Order number : #52125</h6>
          <h6 className="mt-4"> Status : New</h6>
          <h6 className="mt-4">type of services: Electrical Plan</h6>
          <h6 className="mt-4">Project Address: Amman / Jordan</h6>
          <h6 className="mt-4"> Status of Payment: No</h6>
        </div>
      </div>
    </>
  );
};

export default OrderItem;
