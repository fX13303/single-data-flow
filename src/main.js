import { Layout, theme } from "antd";
import React from "react";
import BookList from "./components/pass-data-with-props/book-list";

const { Content } = Layout;
const MainContainer = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Layout style={{ padding: "24px 24px" }}>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <BookList />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainContainer;
