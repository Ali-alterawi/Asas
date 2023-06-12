import React from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";

const OrderPro = () => {
  return (
    <div>
      <h2 className="mt-3">Orders</h2>
      <div>
        <MDBTable align="middle" className="border-2 ">
          <MDBTableHead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Type of service</th>
              <th scope="col">Status</th>
              <th scope="col">Position</th>
              <th scope="col">Actions</th>
              <th scope="col">Detailes</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
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
                <p className="text-muted mb-0">Preparation structural design plans</p>
              </td>
              <td>
                <MDBBadge color="primary" pill>
                  new
                </MDBBadge>
              </td>
              <td>Senior</td>
              <td>
                <MDBBtn color="link" rounded size="sm">
                  Edit
                </MDBBtn>
              </td>
              <td>
                <MDBBtn color="link" rounded size="sm">
                view more
                </MDBBtn>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">Alex Ray</p>
                    <p className="text-muted mb-0">alex.ray@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">Preparation Mechanical design plans</p>
              </td>
              <td>
                <MDBBadge color="success" pill>
                  Completed
                </MDBBadge>
              </td>
              <td>Junior</td>
              <td>
                <MDBBtn color="link" rounded size="sm">
                  Edit
                </MDBBtn>
              </td>
              <td>
                <MDBBtn color="link" rounded size="sm">
                view more
                </MDBBtn>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">Kate Hunington</p>
                    <p className="text-muted mb-0">kate.hunington@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">Preparation architectural design plans</p>
              </td>
              <td>
                <MDBBadge color="success" pill>
                  Completed
                </MDBBadge>
              </td>
              <td>Senior</td>
              <td>
                <MDBBtn color="link" rounded size="sm">
                  Edit
                </MDBBtn>
              </td>
              <td>
                <MDBBtn color="link" rounded size="sm">
                view more
                </MDBBtn>
              </td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </div>
    </div>
  );
};

export default OrderPro;
