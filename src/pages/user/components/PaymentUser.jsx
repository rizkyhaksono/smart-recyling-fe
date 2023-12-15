import { Card, Table } from "antd";

const PaymentUser = ({}) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Method Type",
      dataIndex: "methodType",
      key: "methodType",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
    },
  ];

  return (
    <>
      <Card className="my-5">
        <Table columns={columns} pagination={false} />
      </Card>
    </>
  );
};

export default PaymentUser;
