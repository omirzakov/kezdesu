import React from "react";

import { Table } from 'antd';
import { useReportsQuery } from "../../app/api/user";
import FullLoader from "../../views/FullLoader";
import EventEdit from "../events/EventEdit";

const ReportTable = () => {
 const { data, isLoading, refetch } = useReportsQuery();

  if(isLoading) {
    return <FullLoader />;
  }

  const columns = [
    {
      title: 'ID жалобы',
      dataIndex: 'complainId',
      key: 'complainId',
    },
    {
      title: 'Номер телефона',
      dataIndex: 'clientPhone',
      key: 'clientPhone',
    },
    {
      title: 'Причина',
      dataIndex: 'complainText',
      key: 'complainText',
    },
    {
      title: 'Название ивента',
      dataIndex: 'eventName',
      key: 'eventName',
    },
    {
      title: 'Действие',
      key: 'action',
      render: (text, record) => (
        <EventEdit event={record} refetch={refetch} />
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data?.detailResponses || []} />
    </>
  )
}
export default ReportTable;