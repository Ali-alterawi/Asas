import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const OrderItem = ({ UserId }) => {
  const [userOrders, setUserOredrs] = useState([]);

  const fetchAllOrdersById = async (req, res) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/orders/${UserId}`
      );

      setUserOredrs(response.data);
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  useEffect(() => {
    fetchAllOrdersById();
  }, []);
  console.log(userOrders);

  return (
    <>
      {userOrders.length > 0 ? (
        userOrders.map((order) => (
          <div
            className="border border rounded-4 my-3 mx-3"
            style={{ backgroundColor: "#F0F0F7" }}
            key={order._id}
          >
            <div>
              <div className="d-flex flex-row justify-content-between align-items-baseline">
                <h5 className="fw-bold ms-4">{order.services}</h5>
                <div className="d-flex flex-row align-items-center">
                  <Link to= {`/PaymentGate/${order._id}`}  >
                    <button className="me-3 calculator mt-3">Payment</button>
                  </Link>
                  <Link to={`/OrderDetails/${order._id}`}>
                    <button className="calculator mt-3 me-2">
                      See Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <hr />
            <div className="p-4">
              <h6 className="mt-2">Order number : #{order._id}</h6>
              <h6 className="mt-4">Status : {order.completed}</h6>
              <h6 className="mt-4">Type of services: {order.kindOfService}</h6>
              <h6 className="mt-4">Project Address: {order.location}</h6>
              <h6 className="mt-4">Status of Payment: {order.payment}</h6>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center" style={{height:"20.5rem"}}>
          <div className="d-flex justify-content-center align-items-center fs-4 fst-italic" style={{height:"18rem" , textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",}}>
          you have not order yet
          </div>
          </div>
      )}
    </>
  );
};

export default OrderItem;
