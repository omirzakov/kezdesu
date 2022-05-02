import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';
import { useSaveCategoryMutation } from '../../app/api/category';
import { SketchPicker } from 'react-color';

const CategoryCreate = ({ refetch }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [fetchSaveCategory, { isSuccess }] = useSaveCategoryMutation();
    const [color, setColor] = useState('#fff');
    const [form] = Form.useForm();
    const [showImg, setShowImg] = useState();


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
            color: color.hex,
            img: values.img
        }

        fetchSaveCategory(data);
        setIsModalVisible(false);
    }

    const handleChangeColor = (val) => {
        setColor(val);
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

                    <Form.Item
                        label="Фото"
                        name="img"
                        rules={[{ required: true, message: 'Причина' }]}
                    >
                        <Input onChange={(e) => setShowImg(e.target.value)} />
                    </Form.Item>
                    { showImg && <img src={showImg} width='75px' height='75px' alt='category icon' /> }
                    <p>Цвет</p>
                    <SketchPicker width='95%'  color={color} onChangeComplete={handleChangeColor} />
                    <Form.Item style={{ marginTop: 20, textAlign: 'right'}}>
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