import { Tabs, Table, Spin } from "antd";
import { useGetExchangeQuery } from "../../../redux/api/exchangeApi";

const { TabPane } = Tabs;

const ManageExchangeContent = () => {
  const { data: exchangeData, isLoading: exchangeLoading } = useGetExchangeQuery();

  console.log(exchangeData);

  const getItemName = (itemId) => {
    const itemMappings = {
      1: "Kaos",
      2: "Totebag",
      3: "Bottle",
      4: "Cutlery",
    };

    return itemMappings[itemId] || "Unknown Item";
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      responsive: ["lg"],
    },
    {
      title: "Item",
      dataIndex: "items_id",
      key: "items_id",
      render: (itemsId) => getItemName(itemsId),
      responsive: ["xs", "sm"],
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
        <p className="font-bold text-3xl text-textColor mt-3 mb-10">Manage Exchanges</p>
        <Tabs defaultActiveKey="1" onChange={(key) => console.log(key)} indicatorSize={(origin) => origin - 16}>
          <TabPane tab="All Exchanges" key="1">
            <Spin spinning={exchangeLoading}>
              <Table columns={columns} dataSource={exchangeData ? exchangeData.data.flat() : []} />
            </Spin>
          </TabPane>
          <TabPane tab="Input Exchange" key="2">
            <p>test</p>
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default ManageExchangeContent;
