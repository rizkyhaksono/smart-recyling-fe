import { Card, Table } from "antd";

const TransactionUser = ({}) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Item Name",
      dataIndex: "itemName",
      key: "itemName",
    },
    {
      title: "Points",
      dataIndex: "points",
      key: "points",
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

export default TransactionUser;
