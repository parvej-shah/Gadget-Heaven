import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const activeLink = `${location.pathname=='/'?'text-white underline':'text-primaryBg'}  font-bold`;
  const inActiveLink =
    `${location.pathname=='/'?'text-white hover:underline no-underline':'text-primaryText/70'}  font-medium `;
  const navItem = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? activeLink : inActiveLink)}
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        to={"/statistics"}
        className={({ isActive }) => (isActive ? activeLink : inActiveLink)}
      >
        <li>Statistics</li>
      </NavLink>
      <NavLink
        to={"/dashboard"}
        className={({ isActive }) => (isActive ? activeLink : inActiveLink)}
      >
        <li>Dashboard</li>
      </NavLink>
    </>
  );
  return (
    <div className={location.pathname=='/'?'bg-primaryBg':'bg-white'}>
      <div className="navbar container mx-auto py-7">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItem}
            </ul>
          </div>
          <a className={location.pathname=='/'?'text-white font-bold text-xl':'text-xl text-primaryText font-bold'} >Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3">{navItem}</ul>
        </div>
        <div className="navbar-end gap-8 pr-4">
          <div className="indicator">
            <span className="indicator-item badge bg-primaryBg font-bold text-white border-0 rounded-full w-6 h-6">
              16
            </span>
            <div className="h-10 w-10 border rounded-full bg-white flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </div>
          </div>
          <div className="indicator">
            <span className="indicator-item badge bg-primaryBg font-bold text-white border-0 rounded-full w-6 h-6">
              16
            </span>
            <div className="h-10 w-10 rounded-full border bg-white flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
