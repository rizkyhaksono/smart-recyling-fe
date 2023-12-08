import { Tabs } from "antd";

const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: "1",
    label: "All Events",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Upload Events",
    children: "Content of Tab Pane 2",
  },
];

const ManageEventsContent = () => (
  <>
    <div className="h-screen">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} indicatorSize={(origin) => origin - 16} />
    </div>
  </>
);

export default ManageEventsContent;
