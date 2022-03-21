import { Layout, Menu } from "antd";
import React, { useState } from "react";
import "./main.css"
import { navigatons } from "../../data/navigations";

import { routers } from "../routes";
import { Route } from "react-router";
import { Link, Switch, Routes } from "react-router-dom";
import MainHeader from "../header/header";



const { Header, Content, Footer, Sider } = Layout;

const Main = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(!collapsed)
    };


    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} width={300}>
                <div style={{ color: "white", padding: 10 }}>KEZDESU</div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{ minHeight: "100vh" }}>
                    {
                        navigatons?.map((nav, i) => (
                            <Menu.Item key={i} icon={<nav.Icon />} >
                                <Link to={nav.link}>
                                    {nav.name}
                                </Link>
                            </Menu.Item>
                        ))
                    }
                </Menu>
            </Sider>
            <Layout className="site-layout" style={{ width: '100%' }}>
                <MainHeader toggle={toggle} collapsed={collapsed} />
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Routes>
                        {
                            routers.map((route, i) => (
                                <Route path={route.path} exact={route.exact} strict={route.strict} key={i} element={<route.Component />}>
                                </Route>
                            ))
                        }
                    </Routes>
                </Content>
            </Layout>

        </Layout>
    )
}
export default Main;