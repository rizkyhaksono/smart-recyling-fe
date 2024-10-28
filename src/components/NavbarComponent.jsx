/* eslint-disable react/prop-types */
"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeOutlined, PhoneOutlined, AppstoreOutlined, TeamOutlined } from "@ant-design/icons";
import { Dropdown, Avatar } from "antd";
import Cookies from "universal-cookie";
import useCheckToken from "./utils/checkToken";

const renderDropdownItem = (path, label, location) => (
  <Link to={path} key={path}>
    <p
      className={`block py-2 pl-3 pr-4 text-gray-900 hover:text-primary rounded md:p-0 ${location.pathname === path ? "text-primary" : ""}`}
    >
      {label}
    </p>
  </Link>
);

const items = (location) => [
  { key: "1", label: renderDropdownItem("/report", "Report Trash", location) },
  { key: "2", label: renderDropdownItem("/mobile", "Mobile App", location) },
  { key: "3", label: renderDropdownItem("/blog", "Blog & Event", location) },
  { key: "4", label: renderDropdownItem("/exchange", "Exchange Points", location) },
];

const NavbarComponent = () => {
  const cookies = new Cookies();
  const isLoggedIn = useCheckToken();
  const location = useLocation();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logOut = () => {
    cookies.remove("access_token");
    cookies.remove("refresh_token");
    cookies.remove("user_role");
    window.location.reload();
  };

  const renderMenuLink = (path, label) => (
    <Link to={path} key={path}>
      <p className={`block py-2 pl-3 pr-4 text-gray-900 hover:text-primary rounded md:p-0 ${location.pathname === path ? "text-primary" : ""}`}>
        {label}
      </p>
    </Link>
  );

  const renderAuthLink = (path, label, type) => (
    <Link to={path} key={path}>
      <button
        className={
          type === "login"
            ? "text-white bg-primary hover:bg-secondary rounded"
            : "text-primary bg-white border border-gray-300 hover:text-primary rounded mr-2"
        }
        style={{
          padding: '8px 16px',
          borderRadius: '8px',
        }}
      >
        {label}
      </button>
    </Link>
  );

  const isAdmin = isLoggedIn?.user?.role === "ADMIN";

  const itemsProfile = [
    { key: "1", label: <p className="font-bold text-textColor">{isLoggedIn ? isLoggedIn?.user?.name : "Hello User"}</p> },
    { key: "2", label: <Link to={isAdmin ? "/admin/profile" : "/user/profile"}>My Profile</Link> },
    { key: "3", label: <Link to={"/"} onClick={logOut}>Logout</Link> },
  ];


  return (
    <nav className={`fixed w-full z-20 top-0 left-0 border-b border-gray-300 bg-white ${isMobileView ? "md:hidden" : ""}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4 justify-between">
        <Link to={"/"}>
          <img src="/logo.png" className="flex items-start h-8 mr-3" alt="Smart Recycling Logo" />
        </Link>
        <div className="flex md:order-2">
          {isLoggedIn ? (
            <Dropdown menu={{ items: itemsProfile }} placement="bottom" arrow>
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
            </Dropdown>
          ) : (
            <>
              {renderAuthLink("/signup", "Sign Up")}
              {renderAuthLink("/signin", "Login", "login")}
            </>
          )}
        </div>
        <div className={`w-full md:block md:w-auto ${dropdownOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white items-center">
            {renderMenuLink("/", "Home")}
            <li>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:text-primary md:p-0 md:w-auto"
              >
                Services{" "}
                <svg
                  className={`w-2.5 h-2.5 ml-2.5 ${dropdownOpen ? "rotate-0" : "rotate-180"}`}
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div className={`absolute z-10 ${dropdownOpen ? "block" : "hidden"} font-normal bg-white divide-y divide-gray-100 rounded-lg shadow mt-2`}>
                <ul className="py-2 text-sm text-gray-700">
                  {items(location).map((item) => (
                    <li key={item.key} className="mx-4">
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {renderMenuLink("/contact", "Contact")}
            {renderMenuLink("/about", "About")}
          </ul>
        </div>
      </div>
      {isMobileView && <MobileNavbar items={items(location)} location={location} />}
    </nav>
  );
};

const MobileNavbar = ({ items, location }) => (
  <div className="fixed bottom-0 left-0 w-full flex justify-between pt-2 pb-2 pl-6 pr-6 bg-white border-t border-gray-300">
    <MobileNavLink to={"/"} icon={<HomeOutlined />} active={location.pathname === "/"} />
    <Dropdown menu={{ items }} placement="top" arrow={{ pointAtCenter: true }}>
      <AppstoreOutlined style={{ fontSize: "24px", color: "#00AF5C" }} />
    </Dropdown>
    <MobileNavLink to={"/contact"} icon={<PhoneOutlined />} active={location.pathname === "/contact"} />
    <MobileNavLink to={"/about"} icon={<TeamOutlined />} active={location.pathname === "/about"} />
  </div>
);

const MobileNavLink = ({ to, icon, active }) => (
  <Link to={to} className={`block py-2 pl-3 pr-4 ${active ? "text-primary" : "text-gray-900"} rounded`}>
    {icon}
  </Link>
);

export default NavbarComponent;
