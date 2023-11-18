"use client";

import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";
import { Col, Row } from "antd";
import { BsCoin } from "react-icons/bs";

export default function ExchangePage() {
  return (
    <>
      <NavbarComponent />
      <div className="container mx-auto mt-10 pt-20 text-center">
        <div className="font-extrabold text-6xl text-primary">Exchange</div>
        <div className="font-normal text-xl text-textColor mt-5">Information points to exchange good items</div>
      </div>
      <Row className="container mx-auto mt-5 mb-10" align="middle" justify={"space-around"}>
        <Col span={12}>
          <div className="flex items-center gap-2 font-normal text-2xl text-textColor mt-10">
            <BsCoin /> 0 Points
          </div>
        </Col>
        <Col span={12}>
          <img src="/exchange.png" className="mx-auto" />
        </Col>
      </Row>
      <FooterComponent />
    </>
  );
}
