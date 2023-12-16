import { Tabs, Table, Spin } from "antd";
import { useGetEventsQuery } from "../../../redux/api/eventApi";

const ManageEventsContent = () => {
  const { data: eventData, isLoading: eventLoading } = useGetEventsQuery();

  const eventsLoading = eventLoading;

  if (eventsLoading) {
    return <Spin size="large" className="flex justify-center items-center" />;
  }

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      responsive: ["lg"],
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      responsive: ["xs", "sm"],
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      responsive: ["xs", "sm", "lg"],
    },
    {
      title: "Path Image",
      dataIndex: "path_image",
      key: "path_image",
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
      <div className="">
        <p className="font-bold text-3xl text-textColor mt-3 mb-10">Manage Events</p>
        <Tabs defaultActiveKey="1" onChange={(key) => console.log(key)} indicatorSize={(origin) => origin - 16}>
          <Tabs.Item key="1" tab="All Events">
            <Spin spinning={eventsLoading}>
              <Table columns={columns} dataSource={eventData ? eventData.data[0].flatMap((item) => item) : []} />
            </Spin>
          </Tabs.Item>
          <Tabs.Item key="2" tab="Input Events">
            <p>test</p>
          </Tabs.Item>
        </Tabs>
      </div>
    </>
  );
};

export default ManageEventsContent;
