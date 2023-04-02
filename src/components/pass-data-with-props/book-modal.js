// BookModal.js
import { Card, Collapse, Modal } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

const { Panel } = Collapse;

function BookModal({ book, onClose }) {
  return (
    <Modal
      title={book.title}
      open={!!book}
      onOk={onClose}
      onCancel={onClose}
      centered
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
