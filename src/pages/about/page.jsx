"use client";

import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";
import { Carousel } from "antd";
import { Collapse } from "antd";
import { Col, Row } from "antd";
import { Card } from "antd";
const { Meta } = Card;

const items = [
  {
    key: "1",
    label: "Apa itu Smart Recycling?",
    children: (
      <p>{`Inovasi terdepan yang memberikan solusi berkelanjutan untuk keberlanjutan digital. Dengan memanfaatkan prinsip daur ulang, kami memberikan pengalaman online yang ramah lingkungan tanpa mengorbankan kualitas dan fungsionalitas.`}</p>
    ),
  },
  {
    key: "2",
    label: "Bagaimana cara menukarkan points?",
    children: <p>{`Anda dapat menukarkan pada halaman Services > Exchange Points.`}</p>,
  },
  {
    key: "3",
    label: "Apakah bisa membeli points menggunakan uang?",
    children: <p>{`Anda hanya bisa mendapatkan points dengan cara membuang sampah menggunakan fasilitas kami.`}</p>,
  },
  {
    key: "4",
    label: "Apakah bisa membeli points menggunakan uang?",
    children: <p>{`Anda hanya bisa mendapatkan points dengan cara membuang sampah menggunakan fasilitas kami.`}</p>,
  },
  {
    key: "5",
    label: "Apakah bisa membeli points menggunakan uang?",
    children: <p>{`Anda hanya bisa mendapatkan points dengan cara membuang sampah menggunakan fasilitas kami.`}</p>,
  },
];

const contentStyle = {
  height: "320px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#808080",
};

export default function AboutPage() {
  return (
    <>
      <NavbarComponent />
      <div className="container mx-auto mt-10 pt-20">
        <p className="font-extrabold text-6xl text-center text-primary">About Us</p>
        <p className="font-normal text-center mt-5 text-textColor text-xl">
          At Smart Recycling, we are passionate about promoting a sustainable future and making recycling an effortless part of your daily routine. Our mission is simple yet impactful: to inspire, educate, and empower individuals and
          businesses to embrace recycling practices that benefit both our environment and our communities.
        </p>
      </div>

      <Row justify={"center"} className="container mx-auto my-5 gap-5">
        <Col span={10}>
          <Carousel autoplay>
            <div>
              <div style={contentStyle} className="flex items-center justify-center">
                <img src="/illustration.png" alt="" style={contentStyle} />
              </div>
            </div>
            <div>
              <div style={contentStyle} className="flex items-center justify-center">
                <img src="/illustration.png" alt="" style={contentStyle} />
              </div>
            </div>
            <div>
              <div style={contentStyle} className="flex items-center justify-center">
                <img src="/illustration.png" alt="" style={contentStyle} />
              </div>
            </div>
            <div>
              <div style={contentStyle} className="flex items-center justify-center">
                <img src="/illustration.png" alt="" style={contentStyle} />
              </div>
            </div>
          </Carousel>
        </Col>
        <Col span={10}>
          <Collapse accordion items={items} className="font-normal text-textColor text-lg" />
        </Col>
      </Row>

      <div className="container mx-auto flex justify-center mt-10">
        <p className="font-semibold text-4xl text-center text-primary">Our Website Team</p>
      </div>

      <Row justify={"center"} className="container mx-auto mt-5 mb-5">
        <Col span={4}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="Rizky Haksono" />
          </Card>
        </Col>
        <Col span={4}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="Rizky Haksono" />
          </Card>
        </Col>
        <Col span={4}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="Rizky Haksono" />
          </Card>
        </Col>
        <Col span={4}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="Rizky Haksono" />
          </Card>
        </Col>
        <Col span={4}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="Rizky Haksono" />
          </Card>
        </Col>
      </Row>

      <div className="container mx-auto flex justify-center mt-10">
        <p className="font-semibold text-4xl text-center text-primary">Our Mobile Team</p>
      </div>

      <Row justify={"center"} className="container mx-auto mt-5 mb-5">
        <Col span={4}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="Rizky Haksono" />
          </Card>
        </Col>
        <Col span={4}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="Rizky Haksono" />
          </Card>
        </Col>
        <Col span={4}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="Rizky Haksono" />
          </Card>
        </Col>
        <Col span={4}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="Rizky Haksono" />
          </Card>
        </Col>
        <Col span={4}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="Rizky Haksono" />
          </Card>
        </Col>
      </Row>

      <FooterComponent />
    </>
  );
}
