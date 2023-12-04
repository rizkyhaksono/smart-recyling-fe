/* eslint-disable no-unused-vars */
"use client";

import React, { useState, useEffect } from "react";
import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";
export default function FillExchangePage() {
  var path = window.location.pathname;
  var index = path.substr(path.length - 1);
  console.log("ini adalah url : " + index);
  return (
    <>
      <NavbarComponent />
      <div className="container mt-10 pt-20 px-4 mx-auto">
        <p className="font-extrabold text-5xl text-left text-textColor">Please fill in your address</p>
      </div>
      <section className="container mx-auto mb-24 md:mb-32">
        <div className="grid grid-cols-12 gap-14">
          <div className="col-span-12 md:col-span-8 py-8 lg:py-16 px-4 pe">
            <form action="#" className="space-y-8">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="name@gmail.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="Address" className="block mb-2 text-sm font-medium text-gray-900">
                  Address
                </label>
                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="your address" required />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="note" className="block mb-2 text-sm font-medium text-gray-900">
                  Note
                </label>
                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="your address" required />
              </div>
              <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white bg-primary rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">
                Done
              </button>
            </form>
          </div>
          <div className="col-span-12 md:col-span-4 ">
            <div className="flex justify-end ">
              <img src="/icons/coin.png" alt="" width={"56px"} />
              <h5 className="font-poppins font-bold text-[40px] text-textColor">100000 coin</h5>s
            </div>
            <div className="flex justify-end">
              <img src={"/exchange-" + index + ".png"} alt="" className="w-full" />
            </div>

            <h5 className="font-poppins font-bold text-[40px] text-textColor text-center">T-shirt</h5>
          </div>
        </div>
      </section>
      <FooterComponent />
    </>
  );
}
