import { useEffect, useState } from "react";
import { List, Modal, Spin, Button, Card, Popover } from "antd";
import { useGetItemQuery } from "../redux/api/itemApi";

export default function CardExchange() {
  const { data: useItem, isError, isLoading } = useGetItemQuery();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    console.log(useItem);
  });

  if (isLoading) {
    return <Spin size="large" />;
  }

  if (isError) {
    return <div>Error loading exchange data</div>;
  }

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  const renderPopoverContent = (item) => (
    <div className="text-base text-textColor">
      <p className="font-semibold mb-3">{`Name: ${item.name}`}</p>
      <p>{`Points: ${item.points}`}</p>
      <p>{`Total: ${item.total}`}</p>
    </div>
  );

  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 2,
        }}
        className="mb-5 container mx-auto"
        dataSource={useItem.data}
        renderItem={(item) => (
          <List.Item key={item.id} onClick={() => handleItemClick(item)}>
            <Popover content={renderPopoverContent(item)} trigger="hover">
              <div className="flex flex-row gap-5 items-center cursor-pointer" onClick={() => handleItemClick(item)}>
                <img className="sm:w-40 md:w-56 lg:w-64 xl:w-1/3 max-[640px]:w-32 rounded-xl" src={`/exchange-${item.id}.png`} alt={item.name} />
                <Card className="text-textColor font-medium">
                  <p className="text-2xl">{item.name}</p>
                  <p className="text-base mt-4">{`Points: ${item.points}`}</p>
                  <p className="text-base">{`Total: ${item.total}`}</p>
                </Card>
              </div>
            </Popover>
          </List.Item>
        )}
      />

      <Modal
        title={<div className="text-textColor text-2xl font-bold mb-5">{selectedItem ? selectedItem.name : ""}</div>}
        open={modalOpen}
        onCancel={closeModal}
        footer={[
          <Button key="close" onClick={closeModal}>
            Close
          </Button>,
        ]}
      >
        {selectedItem && (
          <>
            <img src={`/exchange-${selectedItem.id}.png`} alt={selectedItem.name} />
            <p className="text-textColor text-lg font-medium mt-5">{`Points: ${selectedItem.points}`}</p>
            <p className="text-textColor text-lg font-medium">{`Total: ${selectedItem.total}`}</p>
          </>
        )}
      </Modal>
    </>
  );
}
