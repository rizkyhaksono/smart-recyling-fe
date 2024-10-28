import { useState } from "react";
import { Table, Spin, Button, Modal, notification } from "antd";
import { useGetReportsQuery, usePostReportsMutation, useUpdateReportMutation, useDeleteReportMutation } from "../../../redux/api/reportApi";
import { useGetUserQuery } from "../../../redux/api/userApi";
import formatDate from "../../../components/utils/formatDate";
import RHFProvider from "../../../components/hook-form/RHFProvider";
import RHFTextField from "../../../components/hook-form/RHFTextField";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const ManageReportsContent = () => {
  const { data: reportData, isLoading: reportLoading } = useGetReportsQuery();
  const [postReport] = usePostReportsMutation();
  const [updateReport] = useUpdateReportMutation();
  const [deleteReport] = useDeleteReportMutation();
  const { data: userData } = useGetUserQuery();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentReport, setCurrentReport] = useState(null);

  const defaultValues = {
    email: "",
    subject: "",
    location: "",
  };

  const reportSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    location: Yup.string().required("Location is required"),
  });

  const methods = useForm({
    resolver: yupResolver(reportSchema),
    defaultValues,
  });

  const { handleSubmit, reset } = methods;

  const showModal = (report = null) => {
    if (report) {
      setIsEditing(true);
      setCurrentReport(report);
      reset({
        email: report.email,
        subject: report.subject,
        location: report.location,
      });
    } else {
      setIsEditing(false);
      setCurrentReport(null);
      reset(defaultValues);
    }
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    reset(defaultValues);
  };

  let uuid = userData?.user?.uuid;

  const onSubmit = async (formData) => {
    try {
      const dataWithUserId = { ...formData, user_id: uuid };

      if (isEditing && currentReport) {
        await updateReport({ id: currentReport.id, data: dataWithUserId }).unwrap();
        notification.success({ message: "Report updated successfully!", duration: 3 });
      } else {
        await postReport({ data: dataWithUserId }).unwrap();
        notification.success({ message: "Report submitted successfully!", duration: 3 });
      }

      handleCancel();
    } catch (error) {
      console.error(error);
      notification.error({ message: "Failed to submit report. Please try again later.", duration: 3 });
    }
  };

  const onDelete = async (id) => {
    try {
      await deleteReport(id).unwrap();
      notification.success({ message: "Report deleted successfully!", duration: 3 });
    } catch (error) {
      console.error(error);
      notification.error({ message: "Failed to delete report. Please try again later.", duration: 3 });
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      responsive: ["lg"],
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      responsive: ["xs", "sm"],
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
      responsive: ["xs", "sm", "lg"],
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      responsive: ["lg"],
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
      responsive: ["lg"],
      render: (created_at) => formatDate(created_at),
    },
    {
      title: "User ID",
      dataIndex: "user_id",
      key: "user_id",
      responsive: ["lg"],
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button onClick={() => showModal(record)}>Edit</Button>
          <Button danger onClick={() => onDelete(record.id)}>Delete</Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <p className="font-bold text-3xl text-textColor mt-3 mb-10">Manage Reports</p>
      <div className="flex gap-2 mb-4">
        <Button onClick={() => showModal()}>Add Data</Button>
      </div>
      <Spin spinning={reportLoading}>
        <Table columns={columns} dataSource={reportData ? reportData.data.flat() : []} />
      </Spin>
      <Modal title={isEditing ? "Edit Data" : "Add Data"} open={isModalOpen} onCancel={handleCancel} footer={null}>
        <RHFProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <RHFTextField name="email" label="Email" type="email" helperText="name@gmail.com" />
          <RHFTextField name="subject" label="Subject" type="text" helperText="Describe the issue or request" />
          <RHFTextField name="location" label="Location" type="text" helperText="https://www.google.com/maps/place/example" />
          <Button type="primary" htmlType="submit" className="w-full mt-4">
            {isEditing ? "Update Report" : "Submit Report"}
          </Button>
        </RHFProvider>
      </Modal>
    </>
  );
};

export default ManageReportsContent;
