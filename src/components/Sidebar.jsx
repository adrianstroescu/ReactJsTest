import { Flex, Menu } from "antd";
import React from "react";
import { FaLeaf } from "react-icons/fa6";
import {
  UserOutlined,
  ProfileOutlined,
  LogoutOutlined,
  OrderedListOutlined,
  CarryOutOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const Sidebar = () => {
  return (
    <>
      <Flex align="center" justify="center">
        <div className="logo">
          <FaLeaf />
          <span className="logo-text">leaf</span>
        </div>
      </Flex>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="menu-bar"
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "Dashboard",
          },
          {
            key: "2",
            icon: <CarryOutOutlined />,
            label: "My Order",
          },
          {
            key: "3",
            icon: <OrderedListOutlined />,
            label: "ToDo",
          },
          {
            key: "4",
            icon: <ProfileOutlined />,
            label: "Profile",
          },
          {
            key: "5",
            icon: <SettingOutlined />,
            label: "Setting",
          },
          {
            key: "6",
            icon: <LogoutOutlined />,
            label: "Logout",
          },
        ]}
      />
    </>
  );
};

export default Sidebar;
