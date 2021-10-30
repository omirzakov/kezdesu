import { Layout, Menu, Row, Col } from "antd";
import React, { useState } from "react";
import "./main.css"
import { navigatons } from "../data/navigations";

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import { routers } from "../routes";
import { Route } from "react-router";
import { Link, Switch } from "react-router-dom";


  
const { Header, Content, Footer, Sider } = Layout;

const Main = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(!collapsed)
      };


    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} width={300}>
                <div style={{color:"white", padding:10}}>KEZDESU</div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{minHeight:"100vh"}}>
                    {
                        navigatons?.map((nav, i) => (
                            <Menu.Item key={i} icon={<nav.Icon />} >
                                <Link to={nav.link}>
                                { nav.name }
                                </Link>
                            </Menu.Item>
                        ))
                    }
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    <Row>
                        <Col span={12}>
                        { collapsed ? <MenuUnfoldOutlined className="trigger" onClick={toggle} /> 
                                    : <MenuFoldOutlined className="trigger" onClick={toggle} /> }
                        </Col>
                        <Col span={12} style={{textAlign:"right"}}>
                            <LogoutOutlined style={{marginRight:"20px", cursor:"pointer"}} width="30px"/>
                        </Col>
                    </Row>

                </Header>
                <Content
                        className="site-layout-background"
                        style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        }}
                    >
                        <Switch>
                            {
                                routers.map((route, i) => (
                                    <Route path={route.path} exact={route.exact} strict={route.strict} key={i}>
                                        {
                                            <route.Component />
                                        }
                                    </Route>
                                ))
                            }
                        </Switch>
                </Content>
            </Layout>

        </Layout>
    )
}
export default Main;