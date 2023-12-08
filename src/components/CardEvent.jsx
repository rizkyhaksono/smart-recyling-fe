import React, { useState } from "react";
import { Avatar, List, Space } from "antd";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { useGetEventsQuery } from "../redux/api/eventApi";

export default function CardEvent() {
  const { data: eventData } = useGetEventsQuery();

  useState(() => {
    console.log(eventData);
  });

  const data = (eventData?.data || []).map((item, i) => ({
    href: "https://ant.design",
    title: `${item.title}`,
    avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
    description: `${item.description}`,
    content: `${item.description}`,
  }));

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
        dataSource={data}
        renderItem={(item) => (
          <List.Item key={item.title}>
            <List.Item.Meta avatar={<Avatar src={item.avatar} />} title={<a href={item.href}>{item.title}</a>} description={item.description} />
            {item.content}
          </List.Item>
        )}
      />
    </>
  );
}
