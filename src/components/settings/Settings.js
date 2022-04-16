import React from "react";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import { toast } from "react-toastify";
import { useResetPasswordMutation } from "../../app/api/auth";

const { Title } = Typography;

const Settings = () => {
    const [fetchChangePassword] = useResetPasswordMutation();

    const handleChange = (values) => {
        const { oldPassword, newPassword, repeatPassword } = values;

        if(newPassword !== repeatPassword) {
            toast.error('Новые пароли не сооветствуют');
        }

        if(oldPassword.length < 3) {
            toast.error('Минимальная длина пароля 3');
        }

        fetchChangePassword({
            oldPassword,
            newPassword
        })
    }

    return (
        <div>
            <Title level={2}>Настройка учетной записи</Title>
                <Form onFinish={handleChange}>
                    <Row>
                        <Col xs={6}>
                            <Title level={4}>Изменить пароль</Title>
                            <Form.Item name='oldPassword'>
                                <Input type='password' placeholder="Старый пароль"  />
                            </Form.Item>
                            <Form.Item name='newPassword'>
                                <Input type='password' placeholder="Новый пароль"  />
                            </Form.Item>
                            <Form.Item name='repeatPassword'>
                                <Input type='password' placeholder="Повторите" />
                            </Form.Item>
                            <Form.Item>
                                <Button shape="round" type="primary" htmlType="submit" placeholder="Повторите">Изменить пароль</Button>
                            </Form.Item>
    
                        </Col>
                    </Row>
                </Form>
        </div>
    )
}
export default Settings;