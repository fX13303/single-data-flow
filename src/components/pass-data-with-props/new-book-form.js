import { Button, Form, Input, Modal } from "antd";

const NewBookModal = ({ visible, onCreate, onCancel, loading }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields().then((values) => {
      form.resetFields();
      onCreate(values);
    });
  };

  return (
    <Modal
      open={visible}
      title="New Book"
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="ok" type="primary" loading={loading} onClick={handleOk}>
          OK
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please enter the book title" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="author"
          label="Author"
          rules={[{ required: true, message: "Please enter the book author" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="imageUrl"
          label="Image URL"
          rules={[
            { required: true, message: "Please enter the book image URL" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            { required: true, message: "Please enter the book description" },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default NewBookModal;
