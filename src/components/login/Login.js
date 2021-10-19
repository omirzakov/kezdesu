import React from "react";
import { Form, Input, Button, Checkbox, Row, Col, Typography, message } from "antd";
import "./login.less";

const { Title } = Typography;

const Login = () => {

    const onFinish = (values) => {
        console.log(values)
    }

    const onFinishFailed = (errorInfo) => {
        const errorMesage = errorInfo?.errorFields?.map(item => item.errors).join(" ");

        message.error(errorMesage)
    }
     




  return (
    <Row style={{display:"flex", justifyContent:"center", marginTop:"30px"}}>
      <Col span={24} style={{textAlign:"center"}}>
        <Title level={2}>Kezdesu</Title>
      </Col>
      <Col span={6}>
        <Form className="login-form" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!", min: 8 }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item style={{textAlign:"center"}}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
export default Login;
