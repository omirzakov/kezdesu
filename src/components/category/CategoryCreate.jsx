import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useCreateEventMutation } from '../../app/api/event';
import { useSaveCategoryMutation } from '../../app/api/category';

const CategoryCreate = ({ refetch }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [fetchSaveCategory, { isSuccess }] = useSaveCategoryMutation();

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
            categoryLabel: values?.label
        }

        fetchSaveCategory(data);
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
            <Modal title={`Создание ивента`} okText={'Создать'} footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
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

export default CategoryCreate;