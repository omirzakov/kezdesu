import React from "react";
import { Alert, Button, Col, Form, Input, Row, Space, Typography } from "antd";
import { toast } from "react-toastify";
import { useGetAccountQuery, useResetPasswordMutation } from "../../app/api/auth";

const { Title } = Typography;

const Settings = () => {
    const [fetchChangePassword] = useResetPasswordMutation();
    const { data: userData } = useGetAccountQuery();

    const handleChange = (values) => {
        const { oldPassword, newPassword, repeatPassword } = values;

        if (newPassword !== repeatPassword) {
            toast.error('Новые пароли не сооветствуют');
        }

        if (oldPassword.length < 3) {
            toast.error('Минимальная длина пароля 3');
        }

        fetchChangePassword({
            oldPassword,
            newPassword
        })
    }

    console.log(userData)

    return (
        <div>
            <Title level={2}>Настройка учетной записи</Title>
            <Space direction="vertical">
                <Alert type="success" message={`Идентификатор администратора: №${userData?.adminId}`} />
                <Alert type="success" message={`Имя: ${userData?.displayName}`} />
                <Alert type="success" message={`Номер телефона: ${userData?.phone}`} />
            </Space>
            <Form onFinish={handleChange}>
                <Row>
                    <Col xs={6}>
                        <Title level={4}>Изменить пароль</Title>
                        <Form.Item name='oldPassword'>
                            <Input type='password' placeholder="Старый пароль" />
                        </Form.Item>
                        <Form.Item name='newPassword'>
                            <Input type='password' placeholder="Новый пароль" />
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