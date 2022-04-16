import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';
import { useSaveCityMutation } from '../../app/api/city';

const CitiesCreate = ({ refetch }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [fetchSaveCity, { isSuccess }] = useSaveCityMutation();

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

        fetchSaveCity(values);
        setIsModalVisible(false);
    }

    useEffect(() => {
        if (isSuccess) {
            refetch();
        }
    }, [isSuccess])

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Создать
            </Button>
            <Modal title={`Добавление города`} okText={'Создать'} footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    name="basic"
                    layout='vertical'
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Заголовок"
                        name="cityLabel"
                        rules={[{ required: true, message: 'Причина' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Широта"
                        name="latitude"
                        rules={[{ required: true, message: 'Причина' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Долгота"
                        name="longitude"
                        rules={[{ required: true, message: 'Причина' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Создать
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default CitiesCreate;