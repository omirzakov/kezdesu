import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useBlockUserMutation } from '../../app/api/user';

const UsersEdit = ({ user, refetch }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const [fetchBlockUser, { isSuccess }] = useBlockUserMutation();

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
        console.log(values);
        fetchBlockUser({ id: user?.clientId, blockReason: values?.reason });
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
                Заблокировать пользователя
            </Button>
            <Modal title={`Редактирование пользователя ${user?.clientId}`} onOk={form.submit} okText={'Заблокировать'} visible={isModalVisible} onCancel={handleCancel} >
                <Form
                    name="basic"
                    layout='vertical'
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    form={form}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Причина"
                        name="reason"
                        rules={[{ required: true, message: 'Обязательное поле' }]}
                    >
                        <TextArea />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default UsersEdit;