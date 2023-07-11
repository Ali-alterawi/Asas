import React, { useState, useEffect } from "react";
import axios from "axios";
import image from "../../images/image.jpg";
import { Link } from "react-router-dom";

const OrderPro = ({ UserId }) => {
  const [orders, setOrders] = useState([]);
  console.log(UserId);
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    console.log(UserId);
    try {
      const response = await axios.get(
        `http://localhost:8000/OfficeOrders/${UserId}`
      );
      setOrders(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  return (
    <div className="Main Sidebar my-3 border rounded-4">
      <h2 className="mt-3 p-3 ms-3">All Orders</h2>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Type of service</th>
              <th scope="col">Status</th>
              <th scope="col">Payment</th>
              <th scope="col">Price</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={image}
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">{order.applicantName}</p>
                      <p className="text-muted mb-0">{order.email}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="text-muted mb-0">{order.kindOfService}</p>
                </td>
                <td>
                  <span
                    className={`badge ${
                      order.completed === "completed"
                        ? "bg-success"
                        : "bg-primary"
                    }`}
                  >
                    {order.completed}
                  </span>
                </td>
                <td>{order.payment}</td>
                <td>
                  <p className="text-muted mb-0">{order.number}</p>
                </td>
                <td>
                  <Link to={`/AllDetails/${order._id}`}>
                    {" "}
                    <button
                      className="btn btn-link rounded text-decoration-none text-black"
                      type="button"
                    >
                      View more
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderPro;
