import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import logo from "../../images/logo-DWG.png"

const CompletedOrder = () => {
  // const downloadFile = () => {
  //   const fileUrl = "plan.dwg";
  //   const link = document.createElement("a");
  //   link.href = fileUrl;
  //   link.download = "plan.dwg";
  //   link.click();
  // };
  return (
    <>
      <div
        className="border border rounded-4 my-3"
        style={{ backgroundColor: "#F0F0F7" }}
      >
        <div>
          <h5 className="fw-bold mt-3 ms-4">Engineering Design</h5>
        </div>
        <hr />
        <div className="p-4">
          <h6 className="mt-2"> Order number : #52125</h6>
          <h6 className="mt-4"> Status : Completed</h6>
          <h6 className="mt-4">
            {" "}
            Engineering office : Lamar Engineering Office
          </h6>
          <h6 className="mt-4"> type of services: Electrical Plan</h6>
          <h6 className="mt-4"> Project Address: Amman / Jordan</h6>
          <h6 className="mt-4"> Status of Payment: Paided</h6>
        </div>
        <div className="d-flex dwg justify-content-around flex-wrap">
          <MDBCard className="rounded ms-3 mb-5"> 
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay "
            >
              <MDBCardImage
                src={logo}
                fluid
                alt="..."
                className="pt-3"
              />
              <Link>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </Link>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <button className=" calculator mt-3">Download DWG</button>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="rounded ms-3 mb-5"> 
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay "
            >
              <MDBCardImage
                src={logo}
                fluid
                alt="..."
                className="pt-3"
              />
              <Link>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </Link>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <button className=" calculator mt-3">Download DWG</button>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="rounded ms-3 mb-5"> 
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay "
            >
              <MDBCardImage
                src={logo}
                fluid
                alt="..."
                className="pt-3"
              />
              <Link>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </Link>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <button className=" calculator mt-3">Download DWG</button>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="rounded ms-3 mb-5"> 
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay "
            >
              <MDBCardImage
                src={logo}
                fluid
                alt="..."
                className="pt-3"
              />
              <Link>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </Link>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <button className=" calculator mt-3">Download DWG</button>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    </>
  );
};

export default CompletedOrder;
