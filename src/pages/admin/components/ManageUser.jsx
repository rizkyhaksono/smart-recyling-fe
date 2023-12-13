import { Space, Table, Modal, Button, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { useGetAllUsersQuery } from "../../../redux/api/userApi";

export default function ManageUsersContent() {
  const { data: usersData, isLoading: usersLoading } = useGetAllUsersQuery();
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    console.log(usersData);
  });

  const showModal = (user) => {
    setSelectedUser(user);
    setIsModalVisible(true);
    form.setFieldsValue(user);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleUpdate = () => {
    console.log("Updating user:", selectedUser);
    setIsModalVisible(false);
  };

  const handleDelete = () => {
    console.log("Deleting user:", selectedUser);
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      responsive: ["md"],
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      responsive: ["md"],
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      responsive: ["md"],
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      responsive: ["lg"],
    },
    {
      title: "Points",
      dataIndex: "points",
      key: "points",
      responsive: ["lg"],
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
      responsive: ["lg"],
    },
    {
      title: "Updated At",
      dataIndex: "updated_at",
      key: "updated_at",
      responsive: ["lg"],
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => showModal(record)}>Update {record.name}</a>
          <a onClick={() => showModal(record)}>Delete</a>
        </Space>
      ),
      responsive: ["xs", "sm"],
    },
  ];

  return (
    <>
      <div className="h-screen">
        {usersLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <p className="font-bold text-3xl text-textColor mt-3 mb-10">Manage Users</p>
            <Table columns={columns} dataSource={usersData ? usersData.data : []} />

            <Modal
              title={`Edit User: ${selectedUser?.name}`}
              open={isModalVisible}
              onCancel={handleCancel}
              footer={[
                <Button key="cancel" onClick={handleCancel}>
                  Cancel
                </Button>,
                <Button className="bg-red-500 text-white hover:bg-red-800" key="delete" type="danger" onClick={handleDelete}>
                  Delete
                </Button>,
                <Button className="bg-blue-500" key="update" type="primary" onClick={handleUpdate}>
                  Update
                </Button>,
              ]}
            >
              <Form form={form} name="editUserForm">
                <Form.Item label="Name" name="name">
                  <Input />
                </Form.Item>
                <Form.Item label="Email" name="email">
                  <Input />
                </Form.Item>
                {/* Add other form fields as needed */}
              </Form>
            </Modal>
          </>
        )}
      </div>
    </>
  );
}
