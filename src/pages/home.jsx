/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import NavbarComponent from "../components/navbar_component";

export default function HomePage() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <NavbarComponent />
      <div className="mt-20">
        
      </div>
    </>
  );
}
