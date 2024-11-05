import React from "react";
import NavBar from "../navbar/NavBar";
import { Outlet, useLocation } from "react-router-dom";

export default function Root() {
    const location = useLocation();
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <Outlet />
    </div>
  );
}
