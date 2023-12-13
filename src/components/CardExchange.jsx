import { useEffect, useState } from "react";
import { List, Modal, Spin } from "antd";
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

  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 4,
        }}
        className="mb-5"
        dataSource={useItem.data}
        renderItem={(item) => (
          <List.Item key={item.id} onClick={() => handleItemClick(item)}>
            <div>
              {/* <img src={`/exchange-${item.id}.png`} alt={item.name} /> */}
              <h3>{item.name}</h3>
              <p>{`Points: ${item.points}`}</p>
              <p>{`Total: ${item.total}`}</p>
            </div>
          </List.Item>
        )}
      />

      <Modal title={selectedItem ? selectedItem.name : ""} visible={modalOpen} onCancel={closeModal} footer={null}>
        {selectedItem && (
          <>
            <p>{`Points: ${selectedItem.points}`}</p>
            <p>{`Total: ${selectedItem.total}`}</p>
          </>
        )}
      </Modal>
    </>
  );
}
