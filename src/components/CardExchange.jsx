import { useState } from "react";
import { List, Modal, Input, Spin } from "antd";
import { BsCoin } from "react-icons/bs";
import { useGetExchangeQuery } from "../redux/api/exchangeApi";

export default function CardExchange() {
  const [modalOpen, setModalOpen] = useState(false);
  const { data: useExchange, isError, isLoading, isFetching } = useGetExchangeQuery();

  const data = Array.from({
    length: 10,
  }).map((_, i) => ({
    imgUrl: `/exchange-${i}.png`,
    title: `T-shirt`,
    description: "Made from soft and environmentally friendly material, you can get this t-shirt with 100,000 coin.",
    price: `1${i}0.000`,
  }));

  // Render loading indicator while data is being fetched
  if (isLoading) {
    return <Spin size="large" />;
  }

  // Render an error message if there is an error
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
        dataSource={data}
        footer={
          <div>
            <b>Smart Recycling</b> Product
          </div>
        }
        renderItem={(item) => (
          <div className="container mx-auto flex font-sans py-2">
            <div className="flex-none w-[217px] h-[245px] relative">
              <img src={item.imgUrl} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            </div>
            <form className="flex-auto p-6 mt-7">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-4xl font-bold text-slate-900 ">T-shirt</h1>
                <div className="flex items-center gap-2 text-lg font-semibold text-slate-500">
                  <BsCoin /> {item.price}
                </div>
                <div className="w-full flex-none text-sm font-normal text-slate-700 mt-2">Made from soft and environmentally friendly material, you can get this t-shirt with 100,000 coin.</div>
              </div>

              <div className="flex space-x-4 mb-6 text-sm font-medium pt-4">
                <div className="flex-auto flex space-x-4">
                  <a href="/exchange/0">
                    <button className="h-10 px-6 font-semibold rounded-md bg-primary text-white" type="button">
                      Exchange Now
                    </button>
                  </a>

                  <button className="h-10 px-6 font-semibold rounded-md border border-primary text-primary" type="button" onClick={() => setModalOpen(true)}>
                    Detail
                  </button>
                  {/* Start modal */}
                  <Modal title={item.title} centered open={modalOpen} onOk={() => setModalOpen(false)} onCancel={() => setModalOpen(false)}>
                    <div className="flex-none  h-[300px] relative items-center">
                      <img src={item.imgUrl} alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
                    </div>
                    <p className="mt-3">Stok</p>
                    <Input size="large" placeholder="10" />
                  </Modal>
                  {/* end */}
                </div>
                <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                  <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        )}
      />
    </>
  );
}
