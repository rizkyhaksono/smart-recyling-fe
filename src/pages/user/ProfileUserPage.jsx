"use client";

import { Card, Layout, Descriptions, Skeleton, Avatar, Tabs, FloatButton, Tag } from "antd";
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import { useGetUserQuery } from "../../redux/api/userApi";
import { useGetExchangeByIdQuery } from "../../redux/api/exchangeApi";
import { useGetEventsQuery } from "../../redux/api/eventApi";
import { useGetReportsQuery } from "../../redux/api/reportApi";

export default function ProfileUserPage() {
  const { data: userData } = useGetUserQuery();
  const userUuid = userData?.user?.uuid;
  const { data: exchangeData } = useGetExchangeByIdQuery(userUuid);

  const dataProfile = [
    {
      key: "1",
      label: "Username",
      children: userData.user.name,
    },
    {
      key: "2",
      label: "Email",
      children: userData.user.email,
    },
    {
      key: "3",
      label: "Role",
      children: userData.user.role,
    },
    {
      key: "4",
      label: "Points",
      children: userData.user.points,
    },
  ];

  let exchangeItems = null;

  if (exchangeData && exchangeData.data) {
    exchangeItems = exchangeData.data.map((exchangeItem) => (
      <Card key={exchangeItem.id} className="my-5">
        <div className="my-2">
          <Tag bordered={false} color="success">
            Created At: {exchangeItem.created_at}
          </Tag>
        </div>
        <div className="my-2">
          <Tag bordered={false}>User ID: {exchangeItem.user_id}</Tag>
        </div>
        <div className="my-2">
          <Tag bordered={false}>
            <p>Item Name: {exchangeItem.items.name}</p>
          </Tag>
        </div>
        <div className="my-2">
          <Tag bordered={false}>
            <p>Item Points: {exchangeItem.items.points}</p>
          </Tag>
        </div>
      </Card>
    ));
  } else {
    exchangeItems = [];
  }

  const dataActivities = [
    {
      key: "1",
      label: "Exchange",
      children: <>{exchangeItems.length > 0 ? exchangeItems : <p>No exchange data available</p>}</>,
    },
    {
      key: "2",
      label: "Reports",
      children: "Content of Tab Pane 1",
    },
    {
      key: "3",
      label: "Events",
      children: "Content of Tab Pane 2",
    },
  ];

  return (
    <>
      <NavbarComponent />
      <Layout>
        <Card className="mt-28 mx-10 my-10" bordered={true}>
          <p>{userData.user.name ? <p className="font-bold text-2xl text-center mb-4 text-textColor">My Profile</p> : <Skeleton />}</p>
          <div className="flex items-center justify-center">
            <Avatar size={100} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
          </div>
          <Descriptions title="User Info" items={dataProfile} />
        </Card>
        <Card className="mx-10 mb-10" bordered={true}>
          <p>{userData.user.name ? <p className="font-bold text-2xl text-center mb-4 text-textColor">Your Activities</p> : <Skeleton />}</p>
          <Tabs defaultActiveKey="1" items={dataActivities} />
        </Card>
      </Layout>
      <FloatButton.BackTop />
      <FooterComponent />
    </>
  );
}
