import React from "react";

import { Table, Tag, Space } from 'antd';
import UsersEdit from "./UsersEdit";

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
      dataIndex: 'address',
      key: 'address',
      render: blocked => <span>{blocked ? 'Да' : 'Нет'}</span>,
    },
    {
      title: 'Действие',
      key: 'action',
      render: (text, record) => (
        <UsersEdit user={record} />
      ),
    },
  ];


const UsersTable = ({ data }) => {

  console.log(data)


    return (
        <Table columns={columns} dataSource={data?.clients} />
    )
}
export default UsersTable;