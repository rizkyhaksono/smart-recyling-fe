/* eslint-disable no-unused-vars */
"use client";

import React, { useState, useEffect } from "react";
import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";
import { Galleria } from "primereact/galleria";

export default function AboutPage() {
  const [images, setImages] = useState(null);
  const responsiveOptions = [
    {
      breakpoint: "991px",
      numVisible: 4,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ];

  const sampleImages = [
    {
      itemImageSrc: "https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg",
      thumbnailImageSrc: "https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg",
      alt: "Description for Image 1",
      title: "Title 1",
    },
    {
      itemImageSrc: "https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg",
      thumbnailImageSrc: "https://primefaces.org/cdn/primereact/images/galleria/galleria2s.jpg",
      alt: "Description for Image 1",
      title: "Title 1",
    },
    {
      itemImageSrc: "https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg",
      thumbnailImageSrc: "https://primefaces.org/cdn/primereact/images/galleria/galleria3s.jpg",
      alt: "Description for Image 1",
      title: "Title 1",
    },
    {
      itemImageSrc: "https://primefaces.org/cdn/primereact/images/galleria/galleria4.jpg",
      thumbnailImageSrc: "https://primefaces.org/cdn/primereact/images/galleria/galleria4s.jpg",
      alt: "Description for Image 1",
      title: "Title 1",
    },
    {
      itemImageSrc: "https://primefaces.org/cdn/primereact/images/galleria/galleria5.jpg",
      thumbnailImageSrc: "https://primefaces.org/cdn/primereact/images/galleria/galleria5s.jpg",
      alt: "Description for Image 1",
      title: "Title 1",
    },
  ];

  useEffect(() => {
    setImages(sampleImages);
  }, []);

  const itemTemplate = (item) => {
    return <img src={item.itemImageSrc} alt={item.alt} style={{ width: "100%" }} />;
  };

  const thumbnailTemplate = (item) => {
    return <img src={item.thumbnailImageSrc} alt={item.alt} />;
  };

  return (
    <>
      <NavbarComponent />
      <div className="container mx-auto pt-20 mb-10">
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 1 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <div className="card">
          <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: "640px" }} item={itemTemplate} thumbnail={thumbnailTemplate} />
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
