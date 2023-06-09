import React from "react";
import { Link } from 'react-router-dom'
const AddNewOrder = () => {
  return (
    <>
      <div className="AddNewOrder">
        <div className="btn">
          <Link to="/OrderForm" className="calculator" >New Order</Link>
        </div>
      </div>
    </>
  );
};

export default AddNewOrder;
