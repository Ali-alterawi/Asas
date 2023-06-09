import React from "react";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiEmail, mdiPhone, mdiGoogleMaps } from "@mdi/js";
const Test = () => {
  return (
    <>
      <div className="container text-center my-5">
        <div className="row">
          <div className="gap-1 col-lg-4 col-md-12 card-contact ">
            <div className="icon text-center">
              <Icon path={mdiGoogleMaps} size={2} />
            </div>
            <div className="text">
              <h3>OFFICE ADDRESS</h3>
              <p>380 St Khalda Road, Amman 3004, Jordan</p>
            </div>
          </div>
          <div className=" gap-1 col-lg-4 col-md-12 card-contact ">
            <div className="icon text-center">
              <Icon path={mdiPhone} size={2} />
            </div>
            <div className="text">
              <h3>Phone:</h3>
              <p>+ 1234 4567 89</p>
              <p>+ 1234 4567 89</p>
            </div>
          </div>
          <div className=" gap-1 col-lg-4 col-md-12 card-contact ">
            <div className="icon text-center">
              <Icon path={mdiEmail} size={2} />
            </div>
            <h3>MESSAGE US:</h3>
            <p>
              E-mail :{" "}
              <Link
                to="support@example.com"
                target="_blank"
                className="text-blue text-decoration-none"
              >
                support@tent.com
              </Link>
            </p>
            <p>
              E-mail :{" "}
              <Link
                to="info@example.com"
                target="_blank"
                className="text-blue text-decoration-none"
              >
                info@tent.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
