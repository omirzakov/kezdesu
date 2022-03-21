import React from "react";
import { Button, Col, Form, Input, Row, Typography } from "antd";

const { Title } = Typography;

const Settings = () => {

    const handleChange = (values) => {
        console.log(values)
    }

    return (
        <div>
            <Title level={2}>Настройка учетной записи</Title>
                <Form onFinish={handleChange}>
                    <Row>
                        <Col xs={6}>
                            <Title level={4}>Изменить пароль</Title>
                            <Form.Item name='old_password'>
                                <Input placeholder="Старый пароль"  />
                            </Form.Item>
                            <Form.Item name='new_password'>
                                <Input placeholder="Новый пароль"  />
                            </Form.Item>
                            <Form.Item name='repeat_password'>
                                <Input placeholder="Повторите"  />
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