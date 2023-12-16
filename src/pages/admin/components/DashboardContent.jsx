import { ArrowUpOutlined, UsergroupDeleteOutlined, CarryOutOutlined, FileTextOutlined, BarsOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic, Spin } from "antd";
import { useGetAllUsersQuery } from "../../../redux/api/userApi";
import { useGetReportsQuery } from "../../../redux/api/reportApi";
import { useGetItemQuery } from "../../../redux/api/itemApi";
import { useGetEventsQuery } from "../../../redux/api/eventApi";

export default function DashboardContent() {
  const { data: usersData, isLoading: usersLoading } = useGetAllUsersQuery();
  const { data: reportsData, isLoading: reportsLoading } = useGetReportsQuery();
  const { data: itemsData, isLoading: itemsLoading } = useGetItemQuery();
  const { data: evenstData, isLoading: eventLoading } = useGetEventsQuery();

  if (usersLoading || reportsLoading || itemsLoading || eventLoading) {
    return <Spin size="large" className="flex justify-center items-center" />;
  }

  const adminCount = usersData.data.reduce((count, user) => count + (user.role === "ADMIN" ? 1 : 0), 0);
  const userCount = usersData.data.reduce((count, user) => count + (user.role === "USER" ? 1 : 0), 0);
  const pengepulCount = usersData.data.reduce((count, user) => count + (user.role === "PENGEPUL" ? 1 : 0), 0);

  return (
    <>
      <p className="font-bold text-3xl text-textColor mt-3 mb-10">Dashboard Admin Smart Recycling</p>
      <p className="font-semibold text-xl text-textColor mb-2">Overview Users Data</p>
      <Card bordered={true}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Card bordered={false} className="hover:shadow-md transition-transform transform-gpu hover:translate-y-1">
              <Statistic
                title="Total Records"
                value={usersData.data.length}
                valueStyle={{
                  color: "#3f8600",
                }}
                prefix={<UsergroupDeleteOutlined />}
                suffix="records"
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Card bordered={false} className="hover:shadow-md transition-transform transform-gpu hover:translate-y-1">
              <Statistic
                title="Total Users"
                value={userCount}
                valueStyle={{
                  color: "#3f8600",
                }}
                prefix={<UsergroupDeleteOutlined />}
                suffix="users"
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Card bordered={false} className="hover:shadow-md transition-transform transform-gpu hover:translate-y-1">
              <Statistic
                title="Total Pengepul"
                value={pengepulCount}
                valueStyle={{
                  color: "#3f8600",
                }}
                prefix={<UsergroupDeleteOutlined />}
                suffix="pengepul"
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Card bordered={false} className="hover:shadow-md transition-transform transform-gpu hover:translate-y-1">
              <Statistic
                title="Total Admin"
                value={adminCount}
                valueStyle={{
                  color: "#3f8600",
                }}
                prefix={<UsergroupDeleteOutlined />}
                suffix="admin"
              />
            </Card>
          </Col>
        </Row>
      </Card>
      <p className="font-semibold text-xl text-textColor my-2">Overview Reports Data</p>
      <Card bordered={true}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={12} lg={12}>
            <Card bordered={false} className="hover:shadow-md transition-transform transform-gpu hover:translate-y-1">
              <Statistic
                title="Total Reports"
                value={reportsData.data.length}
                valueStyle={{
                  color: "#3f8600",
                }}
                prefix={<CarryOutOutlined />}
                suffix="reports"
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12}>
            <Card bordered={false} className="hover:shadow-md transition-transform transform-gpu hover:translate-y-1">
              <Statistic
                title="Total Location In Malang"
                value={11.28}
                precision={2}
                valueStyle={{
                  color: "#3f8600",
                }}
                prefix={<ArrowUpOutlined />}
                suffix="in Malang"
              />
            </Card>
          </Col>
        </Row>
      </Card>
      <p className="font-semibold text-xl text-textColor my-2">Overview Events Data</p>
      <Card bordered={true}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={12} lg={12}>
            <Card bordered={false} className="hover:shadow-md transition-transform transform-gpu hover:translate-y-1">
              <Statistic
                title="Total Events"
                value={evenstData.data.length}
                valueStyle={{
                  color: "#3f8600",
                }}
                prefix={<FileTextOutlined />}
                suffix="events"
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12}>
            <Card bordered={false} className="hover:shadow-md transition-transform transform-gpu hover:translate-y-1">
              <Statistic
                title="Total Events"
                value={11.28}
                precision={2}
                valueStyle={{
                  color: "#3f8600",
                }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>
      </Card>
      <p className="font-semibold text-xl text-textColor my-2">Overview Items Data</p>
      <Card bordered={true}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={12} lg={12}>
            <Card bordered={false} className="hover:shadow-md transition-transform transform-gpu hover:translate-y-1">
              <Statistic
                title="Total Items"
                value={itemsData.data.length}
                valueStyle={{
                  color: "#3f8600",
                }}
                prefix={<BarsOutlined />}
                suffix="items"
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12}>
            <Card bordered={false} className="hover:shadow-md transition-transform transform-gpu hover:translate-y-1">
              <Statistic
                title="Total T-Shirt"
                value={11.28}
                precision={2}
                valueStyle={{
                  color: "#3f8600",
                }}
                prefix={<ArrowUpOutlined />}
                suffix="items"
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12}>
            <Card bordered={false} className="hover:shadow-md transition-transform transform-gpu hover:translate-y-1">
              <Statistic
                title="Total Totebag"
                value={11.28}
                precision={2}
                valueStyle={{
                  color: "#3f8600",
                }}
                prefix={<ArrowUpOutlined />}
                suffix="items"
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12}>
            <Card bordered={false} className="hover:shadow-md transition-transform transform-gpu hover:translate-y-1">
              <Statistic
                title="Total Bottle"
                value={11.28}
                precision={2}
                valueStyle={{
                  color: "#3f8600",
                }}
                prefix={<ArrowUpOutlined />}
                suffix="items"
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12}>
            <Card bordered={false} className="hover:shadow-md transition-transform transform-gpu hover:translate-y-1">
              <Statistic
                title="Total Cutlery"
                value={11.28}
                precision={2}
                valueStyle={{
                  color: "#3f8600",
                }}
                prefix={<ArrowUpOutlined />}
                suffix="items"
              />
            </Card>
          </Col>
        </Row>
      </Card>
    </>
  );
}
