import React, { useState } from "react";

import { Table, Tag, Space } from 'antd';
import moment from "moment";
import EventEdit from "./EventEdit";
import EventMap from "./EventMap";


const EventsTable = ({ events, refetch }) => {
  const columns = [
    {
      title: 'Название',
      dataIndex: 'label',
      key: 'label',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Дата создания',
      dataIndex: 'startedAt',
      key: 'startedAt',
      render: (text, record) => (
        moment(text).format('DD.MM.YYYY - hh:mm')
      )
    },
    {
      title: 'Время оканчания',
      dataIndex: 'endedAt',
      key: 'endedAt',
      render: (text, record) => (
        moment(text).format('DD.MM.YYYY - hh:mm')
      )
    },
    {
      title: 'Актуальный',
      dataIndex: 'actual',
      key: 'actual',
      render: (actual, record) => (
        actual ? 'Да' : 'Нет'
      )
    },
    {
      title: 'Местоположение',
      key: 'action',
      render: (text, record) => (
        <EventMap longitude={record?.longitude} latitude={record?.latitude} label={record?.label} />
      ),
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
        <Table columns={columns} dataSource={events} onChange={(event) => console.log(event)} />
    </>
  )
}
export default EventsTable;