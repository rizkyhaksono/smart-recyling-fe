import { Col, Row, Card } from "antd";
const { Meta } = Card;

export default function CardTeamWeb() {
  return (
    <>
      <Row justify={"center"} className="my-5 container mx-auto px-5 text-center">
        <Col xs={24} sm={12} md={8} lg={6} xl={4} className="pr-2 pb-5">
          <Card hoverable cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            <Meta title="Aufa Rizki Abdi Maulana" description="Hipster" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4} className="pr-2 pb-5">
          <Card hoverable cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            <Meta title="Nailul Faiz Hidayatullah" description="Hacker / Scrum Master" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4} className="pr-2 pb-5">
          <Card hoverable cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            <Meta title="Rizky Haksono" description="Hacker" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4} className="pr-2 pb-5">
          <Card hoverable cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            <Meta title="Rafidatun Najwa" description="Hustler / PM" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4} className="pr-2 pb-5">
          <Card hoverable cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            <Meta title="Event Rifki Pratiwi" description="Hipster" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4} className="pr-2 pb-5">
          <Card hoverable cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            <Meta title="Annisa Nailiya Zahroh" description="Hipster" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
