import { useState } from "react";
import { ProjectOutlined, CopyrightOutlined, BookOutlined, TeamOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Layout, Menu, theme, Avatar, Dropdown } from "antd";
import FooterComponent from "../../../components/FooterComponent";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
const { Header, Sider, Content } = Layout;

const itemSidebar = [
  {
    key: "1",
    icon: <AppstoreOutlined />,
    label: "Dashboard",
  },
  {
    key: "2",
    icon: <TeamOutlined />,
    label: "Manage Users",
  },
  {
    key: "3",
    icon: <BookOutlined />,
    label: "Manage Events",
  },
  {
    key: "4",
    icon: <ProjectOutlined />,
    label: "Manage Reports",
  },
  {
    key: "5",
    icon: <CopyrightOutlined />,
    label: "Manage Exchange",
  },
];

const DashboardContent = () => <div>Dashboard Content</div>;
const ManageUsersContent = () => <div>Manage Users Content</div>;
const ManageEventsContent = () => <div>Manage Events Content</div>;
const ManageReportsContent = () => <div>Manage Reports Content</div>;
const ManageExchangeContent = () => <div>Manage Exchange Content</div>;

export default function DashboardAdminPage() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [collapsed, setCollapsed] = useState(false);
  const [selectedTab, setSelectedTab] = useState("1");

  const handleMenuClick = (selected) => {
    setSelectedTab(selected.key);
  };

  const cookies = new Cookies();

  const setState = useState({
    ACCESS_TOKEN: cookies.get("access_token"),
    REFRESH_TOKEN: cookies.get("refresh_token"),
    USER_ROLE: cookies.get("user_role"),
  });

  const logOut = () => {
    cookies.remove("access_token");
    cookies.remove("refresh_token");
    cookies.remove("user_role");

    setState((prevState) => ({
      ...prevState,
      ACCESS_TOKEN: null,
      REFRESH_TOKEN: null,
      USER_ROLE: null,
    }));
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
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        collapsed={collapsed}
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          setCollapsed(collapsed);
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} items={itemSidebar} onClick={handleMenuClick} selectedKeys={[selectedTab]} />
      </Sider>
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
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {selectedTab === "1" && <DashboardContent />}
            {selectedTab === "2" && <ManageUsersContent />}
            {selectedTab === "3" && <ManageEventsContent />}
            {selectedTab === "4" && <ManageReportsContent />}
            {selectedTab === "5" && <ManageExchangeContent />}
          </div>
        </Content>
        <FooterComponent />
      </Layout>
    </Layout>
  );
}
