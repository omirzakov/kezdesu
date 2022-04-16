import React, { useContext, useEffect } from "react";
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
import "./login.css";
import { MainContext } from "../context/MainContext";
import { fetchAuthorize } from '@/api';
import video from '@/assets/present.mp4';
import { useSelector } from 'react-redux';
import { useAuthMutation } from "../../app/api/auth";
import { toast, ToastContainer } from "react-toastify";

const { Content } = Layout;

const { Title } = Typography;

const Login = () => {
    const { setIsLogin } = useContext(MainContext);
    const store = useSelector(state => state);
    const [fetchAuth, { isError }] = useAuthMutation();

    const onFinish = (values) => {

        fetchAuth(values);
        // setIsLogin(true)
    };

    useEffect(() => {
        if (isError) {
            toast.error('Произошла ошибка при авторизации');
        }
    }, [isError])

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
            <video autoPlay muted loop id='video-bg' style={{ position: 'fixed', right: 0, bottom: 0, minWidth: '100%', minHeight: '100%' }}>
                <source src={video} type='video/mp4' />
            </video>
            <Col span={24} style={{ textAlign: "center" }}>
                <Content className="header-content">
                    <Title level={1} style={{ color: 'white' }}>KEZDESU</Title>
                    <Title level={2} style={{ color: 'white' }}>Добро пожаловать в <br /> учётную запись администратора</Title>
                </Content>
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
                            style={{ width: '100%' }}
                        >
                            <Input placeholder="Почта" style={{ width: '100%' }} />
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
                            <Button type="primary" htmlType="submit" style={{ minWidth: '300px' }}>
                                Войти
                            </Button>
                        </Form.Item>
                    </Form>
                </Content>
            </Col>
            <ToastContainer />
        </Row>
    );
};
export default Login;
