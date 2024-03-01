import React, { useState } from "react"
import { Button, Layout, Menu } from "antd"
import Siderbar from "./components/Sidebar";
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons'

import './App.css'

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
      <Header className="header"></Header>
      <Content className="content"></Content>
    </Layout>
  </Layout>

}
export default App
