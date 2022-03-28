import React from "react";
import { Layout } from "antd";

function BaseHeader() {
  const { Header } = Layout;
  return (
    <>
      <Header className="site-layout-background" style={{ padding: 0 }}>
        Header
      </Header>
    </>
  );
}

export default BaseHeader;
