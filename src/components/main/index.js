import { Layout, Menu } from "antd";
import React, { useState } from "react";
import "./main.css"

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';


  
const { Header, Content, Footer, Sider } = Layout;

const Main = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(!collapsed)
      };


    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div style={{color:"white", padding:10}}>KEZDESU</div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{minHeight:"100vh"}}>
                    <Menu.Item key="1" icon={<UserOutlined />} >
                        nav 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    nav 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                    nav 3
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {
                        collapsed ? <MenuUnfoldOutlined className="trigger" onClick={toggle} /> : <MenuFoldOutlined className="trigger" onClick={toggle} />
                    }
                </Header>
                <Content
                        className="site-layout-background"
                        style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        }}
                    >
                    Content
                </Content>
            </Layout>

        </Layout>
    )
}
export default Main;