import { Space, Table, Modal, Button, Form, Input, Spin } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useGetAllUsersQuery, useChangeRoleUserMutation, useInputPointsMutation } from "../../../redux/api/userApi";

export default function ManageUsersContent() {
  const { data: usersData, isLoading: usersLoading } = useGetAllUsersQuery();
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const { mutate: changeRole } = useChangeRoleUserMutation();
  const { mutate: inputPoints } = useInputPointsMutation();

  const showModal = (user) => {
    setSelectedUser(user);
    setIsModalVisible(true);
    form.setFieldsValue(user);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleUpdate = async () => {
    try {
      const values = await form.validateFields();
      await changeRole({ uuid: selectedUser.uuid, newRole: values.role });
      setIsModalVisible(false);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await inputPoints({ uuid: selectedUser.uuid, points: 0 });
      setIsModalVisible(false);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
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
          <UnorderedListOutlined onClick={() => showModal(record)} style={{ color: "#1890ff" }} />
        </Space>
      ),
      responsive: ["xs", "sm"],
    },
  ];

  return (
    <>
      {usersLoading ? (
        <Spin size="large" className="flex justify-center" />
      ) : (
        <>
          <p className="font-bold text-3xl text-textColor mt-3 mb-10">Manage Users</p>
          {/* <Table columns={columns} dataSource={usersData ? usersData.data : []} /> */}
          <Table
            columns={columns.map((column) => ({
              ...column,
              key: column.dataIndex,
            }))}
            dataSource={usersData ? usersData.data : []}
          />

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
                <Input disabled />
              </Form.Item>
              <Form.Item label="Email" name="email">
                <Input disabled />
              </Form.Item>
              <Form.Item label="Role" name="role">
                <Input />
              </Form.Item>
            </Form>
          </Modal>
        </>
      )}
    </>
  );
}
