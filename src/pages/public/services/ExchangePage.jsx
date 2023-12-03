"use client";

import NavbarComponent from "../../../components/NavbarComponent";
import FooterComponent from "../../../components/FooterComponent";
import { Col, Row, FloatButton } from "antd";
import CardExchange from "../../../components/CardExchange";

export default function ExchangePage() {
  var coins = 100000;

  return (
    <>
      <NavbarComponent />
      <div className="container mx-auto mt-10 pt-20 text-center">
        <div className="font-extrabold text-6xl text-primary max-[640px]:text-4xl">Exchange</div>
        <div className="font-normal text-xl text-textColor mt-5 max-[640px]:text-lg">Information points to exchange good items</div>
      </div>
      <Row className="container mx-auto mt-5 mb-10 " align="middle" justify={"space-around"}>
        <Col span={12}>
          <div className="flex gap-2 font-bold text-6xl text-textColor mt-10  ">
            <span>
              <img src="./icons/coin.png" alt="" />
            </span>
            <h1 className="text-bold text-primary">
              {coins} coin <br /> = <br /> Rp {coins} ,-
            </h1>
          </div>
        </Col>
        <Col span={12}>
          <img src="/exchange.png" className="mx-auto" />
        </Col>
      </Row>
      <div className="container mx-auto mt-24 pt-2">
        <div className="text-center">
          <div className="font-extrabold text-4xl text-primary">Goods that can be exchanged</div>
          <div className="font-normal text-xl text-textColor mb-9">There is a choice of items that can be exchanged for the points that have been collected</div>
        </div>
        <CardExchange />
      </div>
      <FloatButton.BackTop />
      <FooterComponent />
    </>
  );
}
