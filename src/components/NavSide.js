import React from "react";
import Icon from "@mdi/react";
import {
  mdiSpeedometer,
  mdiHome,
  mdiTable,
  mdiFaceAgent,
  mdiAccountBadge,
} from "@mdi/js";
import { Link } from "react-router-dom";

const NavSide = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="bg-dark col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column">
          <div>
            <Link className="text-decoration-none text-white d-none d-sm-inline d-flex align-itemcenter ms-3 mt-2">
              <i className="bi bi-speedometer"></i>
              <span className="ms-1 fs-4 d-none d-sm-inline">Brand</span>
            </Link>
            <hr className="text-secondary d-sm-block" />
            <ul className="nav nav-pills flex-column mt-3 mt-sm-0">
              <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a
                  href="2"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <Icon path={mdiSpeedometer} size={1} />
                  <span className="ms-3 d-none d-sm-inline">Dashboard</span>
                </a>
              </li>
              <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a
                  href="2"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <Icon path={mdiHome} size={1} />
                  <span className="ms-3 d-none d-sm-inline">Home</span>
                </a>
              </li>
              <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a
                  href="2"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <Icon path={mdiTable} size={1} />
                  <span className="ms-3 d-none d-sm-inline">Orders</span>
                </a>
              </li>
              <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a
                  href="2"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <Icon path={mdiFaceAgent} size={1} />
                  <span className="ms-3 d-none d-sm-inline">Customer</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown open">
            <Link
              class="text-decoration-none dropdown-toggle text-white p-3"
              type="button"
              id="triggerId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <Icon path={mdiAccountBadge} size={1} />
              <span className="ms-2 d-none d-sm-inline">Ali</span>
            </Link>
            <div class="dropdown-menu" aria-labelledby="triggerId">
              <Link class="dropdown-item" href="#">
                Logout
              </Link>
              <Link class="dropdown-item disabled" href="#">
                Disabled action
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavSide;
