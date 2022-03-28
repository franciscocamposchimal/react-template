import React from "react";
import { Layout, Menu } from "antd";
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from "@ant-design/icons";
import "./BaseMenu.sass";

const listMenu = [
  {
    id: 1,
    name: "user",
    icon: <UserOutlined/>
  },
  {
    id: 2,
    name: "video",
    icon: <VideoCameraOutlined/>
  },
  {
    id: 3,
    name: "upload",
    icon: <UploadOutlined/>
  },
];

function BaseMenu() {
  const { Sider } = Layout;

  return (
    <>
      <Sider trigger={null} collapsible collapsed={false}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          {listMenu.map((item) => (
            <Menu.Item key={item.id} icon={item.icon}>{item.name}</Menu.Item>
          ))}
        </Menu>
      </Sider>
    </>
  );
}

export default BaseMenu;
