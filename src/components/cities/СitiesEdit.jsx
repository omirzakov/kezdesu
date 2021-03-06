import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';
import { useDeleteCategoryMutation, useEditCategoryMutation } from '../../app/api/category';
import { useDeleteCityMutation, useEditCityMutation } from '../../app/api/city';

const CitiesEdit = ({ record, refetch }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [fetchEditCity, { isSuccess: successEdit }] = useEditCityMutation();
    const [fetchDeleteCity, { isSuccess }] = useDeleteCityMutation();


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
        const data = {
            cityLabel: values?.label,
            cityId: record?.cityId,
            latitude: values?.latitude,
            longitude: values?.longitude
        }
        fetchEditCity(data);
        setIsModalVisible(false);
    }

    const onDelete = () => {
        fetchDeleteCity({ id: record?.cityId });
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
            <Modal title={`Редактирование города`} okText={'Создать'} footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
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
                        label="Широта города"
                        name="latitude"
                        rules={[{ required: true, message: 'Причина' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Долгота города"
                        name="longitude"
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

export default CitiesEdit;