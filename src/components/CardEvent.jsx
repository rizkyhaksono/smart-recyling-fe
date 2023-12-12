import React from "react";
import { Avatar, List, Space } from "antd";
import PropTypes from "prop-types";
import { useGetEventsQuery } from "../redux/api/eventApi";

export default function CardEvent() {
  const { data: eventData } = useGetEventsQuery();

  const validEvents = eventData?.data[0] || [];

  console.log(validEvents);

  const data = validEvents.map((item, i) => ({
    id: item.id,
    href: `https://example.com/events/${item.id}`,
    title: item.title,
    avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
    description: item.description,
    content: item.description,
    image: item.path_image,
    created_at: item.created_at,
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
            <p>{item.image}</p>
            <p>Created: {item.created_at}</p>
          </List.Item>
        )}
      />
    </>
  );
}
