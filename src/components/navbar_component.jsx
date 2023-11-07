import { useState } from "react";

export default function NavbarComponent() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="fixed w-full z-20 top-0 left-0 border-b border-gray-300 bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <img src="/logo.png" className="h-8 mr-3" alt="Flowbite Logo" />
        </a>
        <div className="flex md:order-2">
          <a href="/signup">
            <button type="button" className="py-2 px-4 mr-2 text-sm font-medium text-primary focus:outline-none bg-white rounded-lg border hover:bg-gray-200 hover:text-green-700 focus:ring-4 focus:ring-gray-200">
              Sign Up
            </button>
          </a>
          <a href="/login">
            <button type="button" className="py-2 px-4 mr-2 text-sm font-medium text-white focus:outline-none bg-primary rounded-lg border border-primary hover:bg-green-700 hover:text-white focus:ring-4 focus:ring-gray-200">
              Login
            </button>
          </a>
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-expanded={isDropdownOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`w-full md:block md:w-auto ${isDropdownOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <a href="/" className="block py-2 pl-3 pr-4 text-gray-900 hover:text-primary rounded md:p-0" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <button onClick={toggleDropdown} data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:p-0 md:w-auto">
                Services{" "}
                <svg className={`w-2.5 h-2.5 ml-2.5 ${isDropdownOpen ? "rotate-0" : "rotate-180"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <div className={`z-10 ${isDropdownOpen ? "block" : "hidden"} font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}>
                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownNavbarLink">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Report Trash
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover-bg-gray-100">
                      Mobile App
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover-bg-gray-100">
                      Event
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 hover:text-primary rounded  md:p-0">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 hover:text-primary rounded md:p-0">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
