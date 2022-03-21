import React, { useState } from 'react';
import { Modal, Button, Form } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const CitiesEdit = ({ event }) => {
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
            <Button type="primary" onClick={showModal}>
                Редактировать
            </Button>
            <Modal title={`Редактирование города`} okText={'Обновить'} cancelText='Отменить' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    name="basic"
                    layout='vertical'
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Название"
                        name="reason"
                        rules={[{ required: true, message: 'Причина' }]}
                    >
                        <TextArea />
                    </Form.Item>
                    <Button danger type="primary" htmlType="button">
                        Удалить
                    </Button>
                </Form>
            </Modal>
        </>
    );
};

export default CitiesEdit;