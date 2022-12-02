import React from "react";
import { NavLink } from "react-router-dom";
import "./SideNav.css";
const SideNav = () => {
  return (
    <div className="body text-center">
      <nav className="sideNav">
        <header className="mt-3 d-flex justify-content-center">
        <i className="fa-solid fa-graduation-cap rounded-circle header_icon"></i>
          <h3 className="fecDiary">FEC Diary</h3>
          {/* <i class="fa-solid fa-chevron-right toggle d-flex align-items-center justify-content-center rounded-circle text-white"></i> */}
        </header>

        <div className="side-menu p-2 mt-3 ">
          <div className="input-group mb-4">
            <input type="text" className="form-control p-1" placeholder="Search" />
            <button className="btn btn-primary" type="submit">
              Go
            </button>
          </div>
          <div className="menu">
            <ul>
              <li className="item  pt-3">
                <NavLink
                  to="/"
                  className="text-dark d-flex text-decoration-none"
                >
                  <i className="fa-solid fa-house-user mt-1 item-i"></i>
                  <p>Dashboard</p>
                </NavLink>
              </li>
              <li className="item pt-3">
                <NavLink
                  to="dashboard"
                  className="text-dark d-flex text-decoration-none"
                >
                  <i className="fa-solid fa-people-group mt-1 item-i"></i>
                  <p>Students</p>
                </NavLink>
              </li>
              <li className="item pt-3">
                <NavLink
                  to="dashboard"
                  className="text-dark d-flex text-decoration-none"
                >
                  <i className="fa-solid fa-chalkboard-user mt-1 item-i"></i>
                  <p>Teachers</p>
                </NavLink>
              </li>
              <li className="item pt-3">
                <NavLink
                  to="dashboard"
                  className="text-dark d-flex text-decoration-none"
                >
                  <i className="fa-solid fa-person-cane mt-1 item-i"></i>
                  <p>Staff</p>
                </NavLink>
              </li>
              <li className="item pt-3">
                <NavLink
                  to="dashboard"
                  className="text-dark d-flex text-decoration-none"
                >
                  <i className="fa-solid fa-bell mt-1 item-i"></i>
                  <p>Notice</p>
                </NavLink>
              </li>
              <li className="item pt-3">
                <NavLink
                  to="dashboard"
                  className="text-dark d-flex text-decoration-none"
                >
                  <i className="fa-solid fa-calendar-days mt-1 item-i"></i>
                  <p>Calendar</p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideNav;
