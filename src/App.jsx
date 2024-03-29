import React, { useState } from "react"
import { Button, Layout, Menu, Flex } from "antd"
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';

import Siderbar from "./components/Sidebar";
import CustomHeader from "./components/Header";



import './App.css'
import MainContent from "./components/MainContent";
import SideContent from "./components/SideContent";


const {Sider, Header, Content} = Layout;

const App = () => {
  const [collapsed, collapsible] = useState(false)
  return <Layout>

    <Sider 

    theme="light"
    className='sider' 
    trigger={null} 
    collapsible 
    collapsed={collapsed}
    
    >
      <Siderbar /> 

      <Button 
      type="text" 
      icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }
      onClick={ () => collapsible(!collapsed)}
      className="triger-btn"
      />
    </Sider>
    <Layout>
      <Header className="header">
        <CustomHeader />
      </Header>
      <Content className="content">
        <Flex gap='large'>
        <MainContent />
        <SideContent />

        </Flex>

      </Content>
    </Layout>
  </Layout>

}
export default App
