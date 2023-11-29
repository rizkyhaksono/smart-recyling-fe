/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { List, Modal, Input, Button } from "antd";
import { useLocation } from "react-router-dom";
import { BsCoin } from "react-icons/bs";

const data = Array.from({
  length: 10,
}).map((_, i) => ({
  id: i,
  imgUrl: `/exchange-${i}.png`,
  title: `T-shirt`,
  description:
    "Made from soft and environmentally friendly material, you can get this t-shirt with 100,000 coin.",
  price: `1${i}0.000`,
}));

export default function CardExchange() {
  const location = useLocation();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [modalName, setModalName] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
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
        dataSource={data}
        footer={
          <div>
            <b>Smart Recycling</b> Product
          </div>
        }
        renderItem={(item) => (
          <div class="flex font-sans py-2">
            <div class="flex-none w-[217px] h-[245px] relative">
              <img
                src={item.imgUrl}
                alt=""
                class="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <form class="flex-auto p-6 mt-7">
              <div class="flex flex-wrap">
                <h1 class="flex-auto text-4xl font-bold text-slate-900 ">
                  T-shirt
                </h1>
                <div class="flex items-center gap-2 text-lg font-semibold text-slate-500">
                  <BsCoin /> {item.price}
                </div>
                <div class="w-full flex-none text-sm font-normal text-slate-700 mt-2">
                  Made from soft and environmentally friendly material, you can
                  get this t-shirt with 100,000 coin.
                </div>
              </div>

              <div class="flex space-x-4 mb-6 text-sm font-medium pt-4">
                <div class="flex-auto flex space-x-4">
                  <a href={"/exchange/" + item.id}>
                    <button
                      class="h-10 px-6 font-semibold rounded-md bg-primary text-white"
                      type="button"
                    >
                      Exchange Now
                    </button>
                  </a>

                  <button
                    class="h-10 px-6 font-semibold rounded-md border border-primary text-primary"
                    type="button"
                    onClick={showModal}
                  >
                    Detail
                  </button>
                  {/* Start modal */}
                  <Modal
                    open={open}
                    title="Title"
                    onOk={handleOk}
                    centered
                    onCancel={handleCancel}
                    footer={[
                      <Button
                        class="h-10 px-6 font-semibold rounded-md bg-primary text-white"
                        key="back"
                        onClick={handleCancel}
                      >
                        Return
                      </Button>,
                    ]}
                  >
                    <div class="flex-none  h-[300px] relative items-center">
                      <img
                        src={`/exchange-${modalIndex}.png`}
                        alt=""
                        class="absolute inset-0 w-full h-full object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>
                    <p className="mt-3">Stok</p>
                    <Input size="large" placeholder="10" />
                  </Modal>
                  {/* <Modal
                    title={modalName}
                    centered
                    open={modalOpen}
                    footer={[
                      <Button key="back" onClick={() => setModalOpen(false)}>
                        Return
                      </Button>,
                    ]}
                  >
                    <div class="flex-none  h-[300px] relative items-center">
                      <img
                        src={`/exchange-${modalIndex}.png`}
                        alt=""
                        class="absolute inset-0 w-full h-full object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>
                    <p className="mt-3">Stok</p>
                    <Input size="large" placeholder="10" />
                  </Modal> */}
                  {/* end */}
                </div>
                <button
                  class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
                  type="button"
                  aria-label="Like"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    />
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
