import { Col, Row, Card } from "antd";
const { Meta } = Card;

export default function CardTeamWeb() {
  return (
    <>
      <Row justify={"center"} className="my-5 container mx-auto px-5 text-center">
        <Col xs={24} sm={12} md={8} lg={6} xl={4} className="pr-2 pb-5">
          <Card hoverable cover={<img alt="profile" src="/team/web1.jpg" />}>
            <Meta title="Rizky Haksono" description="Hipster" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4} className="pr-2 pb-5">
          <Card hoverable cover={<img alt="profile" src="/team/default.png" />}>
            <Meta title="Nailul Faiz Hidayatullah" description="Hacker / Scrum Master" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4} className="pr-2 pb-5">
          <Card hoverable cover={<img alt="profile" src="/team/web2.jpg" />}>
            <Meta title="Aufa Rizki Abdi Maulana" description="Hipster" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4} className="pr-2 pb-5">
          <Card hoverable cover={<img alt="profile" src="/team/default.png" />}>
            <Meta title="Rafidatun Najwa" description="Hustler / PM" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4} className="pr-2 pb-5">
          <Card hoverable cover={<img alt="profile" src="/team/default.png" />}>
            <Meta title="Event Rifki Pratiwi" description="Hipster" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4} className="pr-2 pb-5">
          <Card hoverable cover={<img alt="profile" src="/team/web3.jpg" />}>
            <Meta title="Annisa Nailiya Zahroh" description="Hipster" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
