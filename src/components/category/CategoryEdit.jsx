import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Input, Space } from "antd";
import {
  useDeleteCategoryMutation,
  useEditCategoryMutation,
} from "../../app/api/category";
import { SketchPicker } from "react-color";

const CategoryEdit = ({ record, refetch }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [fetchEditCategory, { isSuccess: successEdit }] =
    useEditCategoryMutation();
  const [fetchDeleteCategory, { isSuccess }] = useDeleteCategoryMutation();
  const [color, setColor] = useState(record?.color || "#fff");
  const [showImg, setShowImg] = useState();

  console.log(color);

  const handleChangeColor = (val) => {
    setColor(val);
  };

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
      categoryId: values?.categoryId,
      color: color.hex,
      img: values?.img
    };
    fetchEditCategory(data);
    setIsModalVisible(false);
  };

  const onDelete = () => {
    fetchDeleteCategory({ id: record?.categoryId });
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (isSuccess || successEdit) {
      refetch();
      window.location.reload();
    }
  }, [isSuccess, successEdit]);

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Редактировать
      </Button>
      <Modal
        title={`Создание ивента`}
        okText={"Создать"}
        footer={null}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          layout="vertical"
          initialValues={record}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Заголовок"
            name="label"
            rules={[{ required: true, message: "Причина" }]}
          >
            <Input value={record?.categoryLabel} />
          </Form.Item>
          <Form.Item
            label="Идентификатор категорий"
            name="categoryId"
            rules={[{ required: true, message: "Причина" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Фото"
            name="img"
            rules={[{ required: true, message: "Причина" }]}
          >
            <Input onChange={(e) => setShowImg(e.target.value)} />
          </Form.Item>
          <img src={record?.img || showImg} width="75px" height="75px" />
          <p>Цвет</p>
          <SketchPicker
            width="95%"
            color={color}
            onChangeComplete={handleChangeColor}
          />
          {color && (
            <div
              style={{
                width: "45px",
                height: "45px",
                marginTop: 20,
                borderRadius: "100%",
                border: "1px solid black",
                backgroundColor: color?.hex ? color?.hex : color,
              }}
            >
              {" "}
            </div>
          )}
          <div className="flex" style={{ marginTop: "20px" }}>
            <Space>
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
            </Space>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default CategoryEdit;
