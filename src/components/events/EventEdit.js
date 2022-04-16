import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useBlockEventMutation } from '../../app/api/event';

const EventEdit = ({ event, refetch }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [fetchBlockEvent, { isSuccess }] = useBlockEventMutation();

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

    const blockEvent = () => {
        const data = {
            id: event?.eventId
        }

        fetchBlockEvent(data);
        setIsModalVisible(false);

    }

    useEffect(() => {
        if(isSuccess) {
            refetch();
        }
    }, [isSuccess])

    return (
        <>
            <Button danger type="primary" onClick={showModal}>
                Заблокировать
            </Button>
            <Modal title={`Редактирование ивента №${event?.eventId}`} okText={''} footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
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
                        <Button danger type="primary" htmlType="submit" style={{ marginRight: '10px'}} onClick={blockEvent}>
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