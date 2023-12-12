"use client";

import { Card, Layout, Descriptions, Skeleton, Avatar, Tabs, FloatButton, theme, Dropdown } from "antd";
import FooterComponent from "../../../components/FooterComponent";
import { useGetUserQuery } from "../../../redux/api/userApi";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
const { Header } = Layout;

export default function ProfileAdminPage() {
  const { data: userData } = useGetUserQuery();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const cookies = new Cookies();

  const dataProfile = [
    {
      key: "1",
      label: "Username",
      children: userData.user?.name || "",
    },
    {
      key: "2",
      label: "Email",
      children: userData.user?.email || "",
    },
    {
      key: "3",
      label: "Role",
      children: userData.user?.role || "",
    },
    {
      key: "4",
      label: "Points",
      children: userData.user?.points || "",
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

  const [setState] = useState({
    ACCESS_TOKEN: cookies.get("access_token"),
    REFRESH_TOKEN: cookies.get("refresh_token"),
  });

  const logOut = () => {
    cookies.remove("access_token");
    cookies.remove("refresh_token");

    setState((prevState) => ({
      ...prevState,
      ACCESS_TOKEN: null,
      REFRESH_TOKEN: null,
    }));

    window.location.reload();
  };

  const itemsAdmin = [
    {
      key: "1",
      label: <Link to={"/admin/profile"}>Profile</Link>,
    },
    {
      key: "2",
      label: (
        <Link to={"/"} onClick={logOut}>
          <p>Logout</p>
        </Link>
      ),
    },
  ];

  return (
    <>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Link to={"/admin/dashboard"}>
            <img src="/logo.png" className="flex items-start h-8 mr-3" alt="Smart Recycling Logo" />
          </Link>
          <Dropdown menu={{ items: itemsAdmin }} placement="bottom" arrow={{ pointAtCenter: true }}>
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
          </Dropdown>
        </Header>
        <Card className="mt-10 mx-10 my-10" bordered={true}>
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
