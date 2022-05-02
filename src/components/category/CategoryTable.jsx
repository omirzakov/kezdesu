import React from "react";

import { Table, Tag, Space } from 'antd';
import { useGetCategoryQuery } from "../../app/api/category";
import FullLoader from "../../views/FullLoader";
import CategoryCreate from "./CategoryCreate";
import CategoryEdit from "./CategoryEdit";


const renderColumns = (refetch) => {

  return [
    {
      title: 'Идентификатор категорий',
      dataIndex: 'categoryId',
      key: 'categoryId',
    },
    {
      title: 'Название',
      dataIndex: 'label',
      key: 'label',
    },
    {
      title: 'Актуальный',
      dataIndex: 'actual',
      key: 'actual',
      render: actual => <span>{actual ? "Да" : "Нет"}</span>,
    },
    {
      title: 'Цвет',
      dataIndex: 'color',
      key: 'color',
      render: (text) =>             <div
      style={{
        width: "45px",
        height: "45px",
        marginTop: 20,
        borderRadius: "100%",
        border: "1px solid black",
        backgroundColor: text,
      }}
    >
      {" "}
    </div>
    },
    {
      title: 'Фото',
      dataIndex: 'img',
      key: 'img',
      render: (img) => <img src={img} alt='img' height={75} width={75} />
    },
    {
      title: 'Актуальный',
      key: 'actual',
      render: (text, record) => <CategoryEdit refetch={refetch} record={record} />,
    },
  ];
}

const CategoryTable = () => {
  const { data, isLoading, refetch } = useGetCategoryQuery();


  if (isLoading) {
    return <FullLoader />
  }


  return (
    <>
      <CategoryCreate refetch={refetch} />
      <Table columns={renderColumns(refetch)} dataSource={data?.detailResponses} />
    </>
  )
}
export default CategoryTable;