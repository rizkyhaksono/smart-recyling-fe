/* eslint-disable no-unused-vars */
"use client";

import React, { useState, useEffect } from "react";
import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardBlog from "../../components/card_blog";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1624 },
    items: 3,
  },
  desktop2: {
    breakpoint: { max: 1624, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function BlogPage() {
  return (
    <>
      <NavbarComponent />
      <div className="pt-20">
        <p className="font-extrabold text-6xl text-center text-primary">Contact Us</p>
        <p className="font-normal text-center mt-5 text-gray-500 text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      </div>

      <FooterComponent />
    </>
  );
}
