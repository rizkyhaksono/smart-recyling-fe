import { Tabs, Table, Spin } from "antd";
// import
const { TabPane } = Tabs;

const ManageExchangeContent = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: "All Exchange",
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "Input Exchange",
      children: "Content of Tab Pane 2",
    },
  ];

  return (
    <>
      <div className="h-screen">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} indicatorSize={(origin) => origin - 16} />
      </div>
    </>
  );
};

export default ManageExchangeContent;
