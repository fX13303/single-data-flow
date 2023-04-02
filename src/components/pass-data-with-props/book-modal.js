// BookModal.js
import { Button, Card, Collapse, Modal } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

const { Panel } = Collapse;

function BookModal({ book, onClose, onDelete, loading }) {
  return (
    <Modal
      title={book.title}
      open={!!book}
      centered
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Close
        </Button>,
        <Button
          key="ok"
          type="primary"
          loading={loading}
          onClick={onDelete}
          danger
        >
          Delete
        </Button>,
      ]}
    >
      <Card hoverable cover={<img alt="example" src={book.imageUrl} />}>
        <Meta
          title={book.author}
          description={
            <Collapse>
              <Panel header="Click here to read more detail" key="1">
                <p>{book.description}</p>
              </Panel>
            </Collapse>
          }
        />
      </Card>
    </Modal>
  );
}

export default BookModal;
