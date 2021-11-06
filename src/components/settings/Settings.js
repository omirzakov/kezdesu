import React from "react";
import { Button, Col, Form, Input, Row, Typography } from "antd";

const { Title } = Typography;

const Settings = () => {


    return (
        <div>
            <Title level={2}>Настройка учетной записи</Title>
                <Form>
                    <Row>
                        <Col xs={6}>
                            <Title level={4}>Изменить пароль</Title>
                            <Form.Item>
                                <Input placeholder="Старый пароль"  />
                            </Form.Item>
                            <Form.Item>
                                <Input placeholder="Новый пароль"  />
                            </Form.Item>
                            <Form.Item>
                                <Input placeholder="Повторите"  />
                            </Form.Item>
                        
                            <Form.Item>
                                <Button shape="round" type="primary" placeholder="Повторите">Изменить пароль</Button>
                            </Form.Item>
    
                        </Col>
                    </Row>
                </Form>
        </div>
    )
}
export default Settings;