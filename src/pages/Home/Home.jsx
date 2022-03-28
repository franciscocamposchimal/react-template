import React from "react";
import BaseHeader from "../../components/base/BaseHeader";
import BaseFooter from "../../components/base/BaseFooter";
import BaseMenu from "../../components/base/Menu/BaseMenu";
import { Layout } from "antd";
import "./Home.sass";

const Home = () => {
  const { Content } = Layout;
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <BaseMenu />
        <Layout className="site-layout">
          <BaseHeader />
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
          <BaseFooter />
        </Layout>
      </Layout>
    </>
  );
};

export default Home;
