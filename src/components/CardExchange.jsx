import { useEffect, useState } from "react";
import { List, Modal, Input, Spin } from "antd";
import { BsCoin } from "react-icons/bs";
import { useGetExchangeQuery } from "../redux/api/exchangeApi";

export default function CardExchange() {
  const { data: useExchange, isError, isLoading } = useGetExchangeQuery();
  const [modalOpen, setModalOpen] = useState(false);

  // const data = useExchange.map((item, i) => ({
  //   imgUrl: `/exchange-${i}.png`,
  //   title: item.items.name,
  //   description: "Made from soft and environmentally friendly material, you can get this t-shirt with 100,000 coins.",
  //   price: `1${i}0.000`,
  // }));

  if (isLoading) {
    return <Spin size="large" />;
  }

  if (isError) {
    return <div>Error loading exchange data</div>;
  }

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
        // dataSource={data}
        renderItem={(item) => <div>test</div>}
      />
    </>
  );
}
