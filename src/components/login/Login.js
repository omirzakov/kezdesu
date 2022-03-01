import React, { useContext } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Typography,
  message,
} from "antd";
import "./login.less";
import { MainContext } from "../context/MainContext";
import { fetchAuthorize } from '@/api';

const { Title } = Typography;

const Login = () => {
    const { setIsLogin } = useContext(MainContext);


    const onFinish = (values) => {
        
       const res = fetchAuthorize(values);
       var myHeaders = new Headers();
       myHeaders.append("Content-Type", "application/json");
       
       var raw = JSON.stringify({
         "email": "gg@mail.com",
         "password": "111"
       });
       
       var requestOptions = {
         method: 'POST',
         headers: myHeaders,
         body: raw,
         redirect: 'follow'
       };
       
       fetch("http://172.20.10.3:8082/admin/auth/login", requestOptions)
         .then(response => response.text())
         .then(result => console.log(result))
         .catch(error => console.log('error', error));
    };

    const onFinishFailed = (errorInfo) => {
        const errorMesage = errorInfo?.errorFields
        ?.map((item) => item.errors)
        .join(" ");

        message.error(errorMesage);
    };

    return (
        <Row
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
        >
        <Col span={24} style={{ textAlign: "center" }}>
            <Title level={2}>Kezdesu</Title>
        </Col>
        <Col span={6}>
            <Form
            className="login-form"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
            <Form.Item
                name="email"
                rules={[{ required: true, message: "Пожалуйста, введите свою почту" }]}
            >
                <Input placeholder="Почта" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                {
                    required: true,
                    message: "Пожалуйста, введите свой пароль"
                },
                ]}
            >
                <Input.Password placeholder="Пароль" />
            </Form.Item>
            <Form.Item style={{ textAlign: "center" }}>
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
