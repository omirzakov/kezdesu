import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useCreateEventMutation } from '../../app/api/event';

const EventCreate = ({ refetch }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [fetchCreateEvent, { isSuccess }] = useCreateEventMutation();

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
        const data = {
            ...values,
            "startedAt":"2012-04-23T20:25:43.511Z",
            "endedAt":"2012-04-23T21:25:43.511Z",
            "creatorId":"456asfadsf3f4s"
        }
        fetchCreateEvent(data);
        refetch();
        setIsModalVisible(false);
    }

    useEffect(() => {
        if(isSuccess) {
            refetch();
        }
    }, [isSuccess])

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Создать
            </Button>
            <Modal title={`Создание ивента`} okText={'Создать'} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    name="basic"
                    layout='vertical'
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Заголовок"
                        name="label"
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

export default EventCreate;