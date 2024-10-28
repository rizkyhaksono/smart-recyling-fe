import { useState } from "react";
import { Table, Spin, Button, Modal, Input, notification } from "antd";
import { useGetReportsQuery, usePostReportsMutation, useUpdateReportMutation, useDeleteReportMutation } from "../../../redux/api/reportApi";
import { useGetUserQuery } from "../../../redux/api/userApi";
import formatDate from "../../../components/utils/formatDate";

const ManageReportsContent = () => {
  const { data: reportData, isLoading: reportLoading } = useGetReportsQuery();
  const [postReport] = usePostReportsMutation();
  const [updateReport] = useUpdateReportMutation();
  const [deleteReport] = useDeleteReportMutation();
  const { data: userData } = useGetUserQuery();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentReport, setCurrentReport] = useState(null);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [location, setLocation] = useState("");

  const showModal = (report = null) => {
    if (report) {
      setIsEditing(true);
      setCurrentReport(report);
      setEmail(report.email);
      setSubject(report.subject);
      setLocation(report.location);
    } else {
      setIsEditing(false);
      setCurrentReport(null);
      setEmail("");
      setSubject("");
      setLocation("");
    }
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEmail("");
    setSubject("");
    setLocation("");
    setCurrentReport(null);
  };

  let uuid = userData?.user?.uuid;

  const onSubmit = async () => {
    try {
      const dataWithUserId = { email, subject, location, user_id: uuid };

      if (isEditing && currentReport) {
        // Update existing report
        await updateReport({ id: currentReport.id, data: dataWithUserId }).unwrap();
        notification.success({ message: "Report updated successfully!", duration: 3 });
      } else {
        // Create new report
        await postReport({ data: dataWithUserId }).unwrap();
        notification.success({ message: "Report submitted successfully!", duration: 3 });
      }

      handleCancel(); // Close modal after submit
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
      <Modal title={isEditing ? "Edit Data" : "Add Data"} open={isModalOpen} onOk={onSubmit} onCancel={handleCancel}>
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="email_report" alt="email_report" />
        <Input placeholder="Subject" className="mt-2" value={subject} onChange={(e) => setSubject(e.target.value)} aria-label="subject_report" alt="subject_report" />
        <Input placeholder="Location" className="mt-2" value={location} onChange={(e) => setLocation(e.target.value)} aria-label="location_report" alt="location_report" />
      </Modal>
    </>
  );
};

export default ManageReportsContent;
