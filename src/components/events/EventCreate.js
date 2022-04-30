import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useCreateEventMutation } from '../../app/api/event';
import { DatePicker, Space } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;


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
        console.log(moment(values.started_at).toISOString());

        const data = {
            ...values,
            "startedAt": moment(values.started_at).toISOString(),
            "endedAt": moment(values.ended_at).toISOString(),
            "creatorId": "456asfadsf3f4s"
        }
        fetchCreateEvent(data);
        refetch();
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
                    <Space>
                        <Form.Item
                            label="Дата начало"
                            name="started_at"
                            rules={[{ required: true, message: 'Причина' }]}
                        >
                            <DatePicker placeholder='Дата начало' format="YYYY-MM-DD HH:mm" showTime />
                        </Form.Item>
                        <Form.Item
                            label="Дата конца"
                            name="ended_at"

                            rules={[{ required: true, message: 'Причина' }]}
                        >
                            <DatePicker placeholder='Дата конца' format="YYYY-MM-DD HH:mm" showTime />
                        </Form.Item>
                    </Space>
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