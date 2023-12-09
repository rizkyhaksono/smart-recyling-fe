import React from "react";
import { Avatar, List, Space, Card } from "antd";
const { Meta } = Card;
import PropTypes from "prop-types";

export default function CardBlog() {
  const data = [
    {
      id: 1,
      title: "Test 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eius cumque ducimus distinctio libero sunt, cum amet mollitia ad quibusdam exercitationem architecto quidem minima a debitis voluptas aspernatur reiciendis odio rerum obcaecati iure omnis odit quam laboriosam?",
      coverImage: "https://malang-post.com/wp-content/uploads/2021/02/Tumpukan-sampah-di-tempat-pembuangan-sampah-Pasar-Merjosari-tidak-diangkut-petugas-kebersihan.jpg",
      avatarImage: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=1",
    },
    {
      id: 2,
      title: "Test 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eius cumque ducimus distinctio libero sunt, cum amet mollitia ad quibusdam exercitationem architecto quidem minima a debitis voluptas aspernatur reiciendis odio rerum obcaecati iure omnis odit quam laboriosam?",
      coverImage: "https://asset-2.tstatic.net/suryamalang/foto/bank/images/tumpukan-sampah-yang-berada-di-jalan-muharto-kota-malang.jpg",
      avatarImage: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=2",
    },
    {
      id: 3,
      title: "Test 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eius cumque ducimus distinctio libero sunt, cum amet mollitia ad quibusdam exercitationem architecto quidem minima a debitis voluptas aspernatur reiciendis odio rerum obcaecati iure omnis odit quam laboriosam?",
      coverImage: "https://static.gatra.com/foldershared/images/2019/fatikhin/11-Nov/IMG_20191102_183308.jpg",
      avatarImage: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=3",
    },
    {
      id: 4,
      title: "Test 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eius cumque ducimus distinctio libero sunt, cum amet mollitia ad quibusdam exercitationem architecto quidem minima a debitis voluptas aspernatur reiciendis odio rerum obcaecati iure omnis odit quam laboriosam?",
      coverImage: "https://static.republika.co.id/uploads/images/inpicture_slide/pemerintah-kota-pemkot-malang-bersama-sejumlah-instansi-melakukan-bersih-bersih-_191227143207-599.jpg",
      avatarImage: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=4",
    },
    {
      id: 5,
      title: "Test 5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eius cumque ducimus distinctio libero sunt, cum amet mollitia ad quibusdam exercitationem architecto quidem minima a debitis voluptas aspernatur reiciendis odio rerum obcaecati iure omnis odit quam laboriosam?",
      coverImage: "https://asset-2.tstatic.net/jogja/foto/bank/images/rahasia-kota-malang-sukses-kelola-sampah-lewat-sistem-yang-diadopsi-dari-warga-bantul.jpg",
      avatarImage: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=5",
    },
  ];

  const cardComponents = data.map((item) => (
    <Card className="flex flex-col items-center justify-center justify-items-center justify-self-center" key={item.id} cover={<img alt="example" src={item.coverImage} />}>
      <Meta avatar={<Avatar src={item.avatarImage} />} title={item.title} description={item.description} />
    </Card>
  ));

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  IconText.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
    text: PropTypes.string.isRequired,
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
          pageSize: 3,
        }}
        dataSource={cardComponents}
        renderItem={(item, index) => <List.Item key={index}>{item}</List.Item>}
      />
    </>
  );
}
