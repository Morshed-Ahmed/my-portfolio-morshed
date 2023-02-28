import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const work = pathname.includes("/work") ? "tab-active" : "";
  const about = pathname.includes("/about") ? "tab-active" : "";
  const blog = pathname.includes("/blog") ? "tab-active" : "";
  return (
    <div className="">
      <div className="navbar  fixed top-0 z-50  bg-transparent lg:mt-6">
        <div className="navbar-start lg:ml-6">
          <Link to={"/"}>
            <div className="avatar">
              <div className="bg-cover xs:w-6 lg:w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  className="bg-contain bg-center"
                  src="https://i.ibb.co/19BG2wT/IMG-20220828-105958.png"
                  alt=""
                />
              </div>
            </div>
          </Link>
        </div>

        <div className="navbar-center ">
          <ul className="menu menu-horizontal px-1">
            <div className="tabs bg-slate-100 p-2 rounded-md">
              {/* <NavLink to={"/"} className={`tab tab-lifted ${home}`}>
                Home
              </NavLink> */}
              <NavLink
                to={"/work"}
                className={`tab lg:tab-md  xs:tab-sm tab-lifted ${work}`}
              >
                Work
              </NavLink>
              <NavLink
                to={"/about"}
                className={`tab lg:tab-md xs:tab-sm tab-lifted ${about}`}
              >
                About
              </NavLink>
              <NavLink
                to={"/blog"}
                className={`tab lg:tab-md xs:tab-sm tab-lifted ${blog}`}
              >
                Blog
              </NavLink>
            </div>

            {/* <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-green-500 font-bold" : "bg-red-500 font-thin"
              }
            >
              Users
            </NavLink> */}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end dropdown-hover lg:mr-6">
            <label tabIndex={0} className="">
              <label className="btn xs:btn-sm lg:btn-md btn-circle swap ">
                <input type="checkbox" />

                <svg
                  className=" fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>
              </label>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/">Item 1</a>
              </li>
              <li>
                <a href="/">Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
