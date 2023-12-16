import { Table, Spin } from "antd";
import { useGetReportsQuery } from "../../../redux/api/reportApi";
import formatDate from "../../../components/utils/formatDate";

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
      render: (created_at) => formatDate(created_at),
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
        <p className="font-bold text-3xl text-textColor mt-3 mb-10">Manage Reports</p>
        <Spin spinning={reportLoading}>
          <Table columns={columns} dataSource={reportData ? reportData.data.flat() : []} />
        </Spin>
      </div>
    </>
  );
};

export default ManageReportsContent;
