import React, { useState } from "react"
import { Layout } from "antd"
import Siderbar from "./components/Sidebar";

const {Sider, Header, Content} = Layout;

const App = () => {
  const [collapsed, collapsible] = useState(false)
  return <Layout>

    <Sider theme="light" className='sider' trigger={null} collapsible collapsed={collapsed}>
      <Siderbar /> 

    </Sider>
    <Layout>
      <Header></Header>
      <Content></Content>
    </Layout>
  </Layout>

}
export default App
