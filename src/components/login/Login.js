import React, { useContext } from "react";
import {
    Form,
    Input,
    Button,
    Checkbox,
    Row,
    Col,
    Typography,
    Layout,
    message,
} from "antd";
import "./login.less";
import { MainContext } from "../context/MainContext";
import { fetchAuthorize } from '@/api';
import video from '@/assets/present.mp4';

const { Content } = Layout;

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

    console.log(video)

    return (
        <Row
            style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
        >
            <video autoPlay muted loop id='video-bg' style={{ position: 'fixed', right: 0, bottom: 0, minWidth: '100%', minHeight: '100%' }}>
                <source src={video} type='video/mp4' />
            </video>
            <Col span={24} style={{ textAlign: "center" }}>
                <Title level={1} style={{color: 'white'}}>Kezdesu</Title>
                <Title level={2} style={{color: 'white'}}>Добро пожаловать в <br /> учётную запись администратора</Title>
            </Col>
            <Col span={6}>
                <Content>
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
                            <Button type="primary" htmlType="submit" style={{ minWidth: '300px'}}>
                                Войти
                            </Button>
                        </Form.Item>
                    </Form>
                </Content>
            </Col>
        </Row>
    );
};
export default Login;
