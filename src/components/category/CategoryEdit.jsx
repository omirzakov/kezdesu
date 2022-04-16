import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';
import { useDeleteCategoryMutation, useEditCategoryMutation } from '../../app/api/category';

const CategoryEdit = ({ record, refetch }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [fetchEditCategory, { isSuccess: successEdit }] = useEditCategoryMutation();
    const [fetchDeleteCategory, { isSuccess }] = useDeleteCategoryMutation();


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
            categoryLabel: values?.label,
            categoryId: values?.categoryId
        }
        fetchEditCategory(data);
        setIsModalVisible(false);
    }

    const onDelete = () => {
        fetchDeleteCategory({ id: record?.categoryId });
        setIsModalVisible(false);
    }

    useEffect(() => {
        if(isSuccess || successEdit) {
            refetch();
        }
    }, [isSuccess, successEdit])

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Редактировать
            </Button>
            <Modal title={`Создание ивента`} okText={'Создать'} footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    name="basic"
                    layout='vertical'
                    initialValues={record}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Заголовок"
                        name="label"
                        rules={[{ required: true, message: 'Причина' }]}
                    >
                        <Input value={record?.categoryLabel} />
                    </Form.Item>
                    <Form.Item
                        label="Идентификатор категорий"
                        name="categoryId"
                        rules={[{ required: true, message: 'Причина' }]}
                    >
                        <Input />
                    </Form.Item>
                    <div className='flex'>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Редактировать
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <Button type="danger" htmlType="submit" onClick={onDelete}>
                                Удалить
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </Modal>
        </>
    );
};

export default CategoryEdit;