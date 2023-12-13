import { Tabs, Table, Spin } from "antd";
import { useGetReportsQuery } from "../../../redux/api/reportApi";
const { TabPane } = Tabs;

const ManageReportsContent = () => {
  const { data: reportData, isLoading: reportLoading } = useGetReportsQuery();

  console.log(reportData);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      responsive: ["lg"],
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      responsive: ["xs", "sm"],
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
      responsive: ["xs", "sm", "lg"],
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      responsive: ["lg"],
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
      responsive: ["lg"],
    },
    {
      title: "User ID",
      dataIndex: "user_id",
      key: "user_id",
      responsive: ["lg"],
    },
  ];

  return (
    <>
      <div className="h-screen">
        <Tabs defaultActiveKey="1" onChange={(key) => console.log(key)} indicatorSize={(origin) => origin - 16}>
          <TabPane tab="All Events" key="1">
            <Spin spinning={reportLoading}>
              <Table columns={columns} dataSource={reportData ? reportData.data.flat() : []} />
            </Spin>
          </TabPane>
          <TabPane tab="Input Events" key="2">
            <p>test</p>
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default ManageReportsContent;
