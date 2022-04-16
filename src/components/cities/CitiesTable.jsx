import React from "react";

import { Table, Tag, Space } from 'antd';
import { useGetCategoryQuery } from "../../app/api/category";
import FullLoader from "../../views/FullLoader";
import { useGetCityQuery } from "../../app/api/city";
import CitiesEdit from "./СitiesEdit";
import CitiesCreate from "./CitiesCreate";


const renderColumns = (refetch) => {

  return [
    {
      title: 'Идентификатор города',
      dataIndex: 'cityId',
      key: 'cityId',
    },
    {
      title: 'Название',
      dataIndex: 'label',
      key: 'label',
    },
    {
      title: 'Широта',
      dataIndex: 'latitude',
      key: 'latitude',
    },
    {
      title: 'Долгота',
      dataIndex: 'longitude',
      key: 'longitude',
    },
    {
      title: 'Актуальный',
      dataIndex: 'actual',
      key: 'actual',
      render: actual => <span>{actual ? "Да" : "Нет"}</span>,
    },
    {
      title: 'Актуальный',
      dataIndex: 'actual',
      key: 'actual',
      render: (actual, record) => <CitiesEdit refetch={refetch} record={record} />,
    },
  ];
}

const CitiesTable = () => {
  const { data, isLoading, refetch } = useGetCityQuery();


  if (isLoading) {
    return <FullLoader />
  }


  return (
    <>
      <CitiesCreate refetch={refetch} />
      <Table columns={renderColumns(refetch)} dataSource={data?.detailResponses} />
    </>
  )
}
export default CitiesTable;