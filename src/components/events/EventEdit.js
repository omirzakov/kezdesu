import React, { useState } from 'react';
import { Modal, Button, Form } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const EventEdit = ({ event }) => {
    console.log(event)
    const [isModalVisible, setIsModalVisible] = useState(open);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = (values) => {
        console.log(values)
    }

    return (
        <>
            <Button danger type="primary" onClick={showModal}>
                Заблокировать
            </Button>
            <Modal title={`Редактирование ивента №${event?.eventId}`} okText={''} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    name="basic"
                    layout='vertical'
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Причина"
                        name="reason"
                        rules={[{ required: true, message: 'Причина' }]}
                    >
                        <TextArea />
                    </Form.Item>

                    <Form.Item>
                        <Button danger type="primary" htmlType="submit" style={{ marginRight: '10px'}}>
                            Заблокировать
                        </Button>
                        <Button danger type="primary" htmlType="submit">
                            Удалить
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default EventEdit;