"use client";

import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";
import { Col, Row } from "antd";
import { BsAndroid } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function MobilePage() {
  return (
    <>
      <NavbarComponent />
      <Row className="container mx-auto mt-20 mb-10" align="middle" justify={"center"}>
        <Col span={14}>
          <div className="font-extrabold text-6xl text-primary">Integrated Apps System</div>
          <div className="font-normal text-xl text-textColor mt-10">
            The Smart Recycling app is designed to offer practical and innovative solutions for promoting a sustainable environment. A User-friendly interface and a wide range of services make waste management easy and convenient. Users can
            actively participate in waste reduction and proper disposal efforts, leading to a healthier and sustainable environment.
          </div>
          <div className="my-5">
            <Link to={"#"}>
              <button className="flex gap-2 justify-center items-center rounded-full bg-primary pl-4 pr-4 pt-2 pb-2 text-white font-medium text-base hover:bg-green-500">
                PlayStore <BsAndroid size={20} />
              </button>
            </Link>
          </div>
        </Col>
        <div span={12}>
          <img src="/mobile.png" />
        </div>
      </Row>
      <FooterComponent />
    </>
  );
}
