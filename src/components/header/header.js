import React from "react";
import { Layout, Row, Col, Avatar, Dropdown } from "antd";

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined
} from '@ant-design/icons';
import profileMenu from "./profilemenu";

const { Header } = Layout;

const MainHeader = ({toggle, collapsed}) => {


    return (
        <Header className="site-layout-background" style={{ padding: 0 }}>
            <Row>
                <Col span={12}>
                { collapsed ? <MenuUnfoldOutlined className="trigger" onClick={toggle} /> 
                            : <MenuFoldOutlined className="trigger" onClick={toggle} /> }
                </Col>
                <Col span={12} style={{textAlign:"right"}}>
                    <Dropdown overlay={profileMenu} placement="bottomCenter" arrow>  
                        <Avatar shape="square" size={32} style={{marginRight:20}} icon={<UserOutlined />} />
                    </Dropdown>
                </Col>
            </Row>
        </Header>
    )
}
export default MainHeader;