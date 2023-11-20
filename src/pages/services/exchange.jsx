"use client";

import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";
import { Col, Row } from "antd";
import { BsCoin } from "react-icons/bs";
import { Card } from "antd";
import CardExchange from "../../components/card_exchange";

export default function ExchangePage() {
  return (
    <>
      <NavbarComponent />
      <div className="container mx-auto mt-10 pt-20 text-center">
        <div className="font-extrabold text-6xl text-primary">Exchange</div>
        <div className="font-normal text-xl text-textColor mt-5">
          Information points to exchange good items
        </div>
      </div>
      <Row
        className="container mx-auto mt-5 mb-10 "
        align="middle"
        justify={"space-around"}
      >
        <Col span={12}>
          <div className="flex items-center gap-2 font-normal text-2xl text-textColor mt-10  ">
            <img src="./exchange-price.png" alt="" />
          </div>
        </Col>
        <Col span={12}>
          <img src="/exchange.png" className="mx-auto" />
        </Col>
      </Row>
      <div className="container mx-auto mt-24 pt-2">
        <div className="text-center">
          <div className="font-extrabold text-4xl text-primary">
            Goods that can be exchanged
          </div>
          <div className="font-normal text-xl text-textColor mb-9">
            There is a choice of items that can be exchanged for the points that
            have been collected
          </div>
        </div>
        <CardExchange />
      </div>

      <FooterComponent />
    </>
  );
}
