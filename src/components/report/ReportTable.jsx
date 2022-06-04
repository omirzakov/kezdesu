import React from "react";

import { Table } from 'antd';
import { useReportsQuery } from "../../app/api/user";


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
    },
  ];
}

const ReportTable = () => {
 useReportsQuery();
 let refetch = null;

  return (
    <>
      <Table columns={renderColumns(refetch)} dataSource={[]} />
    </>
  )
}
export default ReportTable;