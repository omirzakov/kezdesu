import React from "react";

import { Table, Tag, Space, Button } from 'antd';

const columns = [
    {
      title: 'Телефон',
      dataIndex: 'phone',
      key: 'phone',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Имя',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Почта',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Заблокирован',
      dataIndex: 'blocked',
      key: 'blocked',
      render: blocked => {
        console.log(blocked)
        return <span>{blocked ? 'Да' : 'Нет'}</span>
      },
    },
    {
      title: 'Действие',
      key: 'action',
      render: blocked => {
        console.log(blocked)
        return <Button type="primary">Разблокировать</Button>
      },
    },
  ];


const BlackListTable = ({ data }) => {

  console.log(data)


    return (
        <Table columns={columns} dataSource={data?.clients} />
    )
}
export default BlackListTable;