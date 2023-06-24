import React from "react";

import { Link } from "react-router-dom";
const NewOrdersPro = () => {
  return (
    <>
      <div className="Main Sidebar my-3 border rounded-4">
        <h2 className="mt-3 p-3 ms-3">New Orders</h2>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Type of service</th>
                <th scope="col">Status</th>
                <th scope="col">Payment</th>
                <th scope="col">Actions</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">John Doe</p>
                      <p className="text-muted mb-0">john.doe@gmail.com</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="text-muted mb-0">
                    Preparation structural design plans
                  </p>
                </td>
                <td>
                  <span className="badge bg-primary">new</span>
                </td>
                <td>paid</td>
                <td>

                    <button className="btn btn-link rounded" type="button">
                      Edit
                    </button>
                  
                </td>
                <td>
                 <Link to="/AllDetails"><button className="btn btn-link rounded" type="button">
                    View more
                  </button></Link>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">John Doe</p>
                      <p className="text-muted mb-0">john.doe@gmail.com</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="text-muted mb-0">
                    Preparation structural design plans
                  </p>
                </td>
                <td>
                  <span className="badge bg-primary">new</span>
                </td>
                <td>paid</td>
                <td>
                  <button className="btn btn-link rounded" type="button">
                    Edit
                  </button>
                </td>
                <td>
                  <button className="btn btn-link rounded" type="button">
                    View more
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">John Doe</p>
                      <p className="text-muted mb-0">john.doe@gmail.com</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="text-muted mb-0">
                    Preparation structural design plans
                  </p>
                </td>
                <td>
                  <span className="badge bg-primary">new</span>
                </td>
                <td>paid</td>
                <td>
                  <button className="btn btn-link rounded" type="button">
                    Edit
                  </button>
                </td>
                <td>
                  <button className="btn btn-link rounded" type="button">
                    View more
                  </button>
                </td>
              </tr>
              {/* More table rows */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default NewOrdersPro;
