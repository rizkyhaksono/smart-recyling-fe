"use client";

import { Card, Layout, Descriptions, Skeleton, Avatar, Tabs, FloatButton } from "antd";
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import { useGetUserQuery } from "../../redux/api/userApi";

export default function ProfileUserPage() {
  const { data: userData } = useGetUserQuery();

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

  const dataActivities = [
    {
      key: "1",
      label: "Reports",
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "Events",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Exchange",
      children: "Content of Tab Pane 3",
    },
  ];

  return (
    <>
      <NavbarComponent />
      <Layout>
        <Card className="mt-28 mx-10 my-10" bordered={true}>
          <p>{userData.user.name ? <p className="font-bold text-2xl text-center mb-4">My Profile</p> : <Skeleton />}</p>
          <div className="flex items-center justify-center">
            <Avatar size={100} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
          </div>
          <Descriptions title="User Info" items={dataProfile} />
        </Card>
        <Card className="mx-10 mb-10" bordered={true}>
          <p>{userData.user.name ? <p className="font-bold text-2xl text-center mb-4">Your Activities</p> : <Skeleton />}</p>
          <Tabs defaultActiveKey="1" items={dataActivities} />
        </Card>
      </Layout>
      <FloatButton.BackTop />
      <FooterComponent />
    </>
  );
}
