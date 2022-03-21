import React from "react";

import { Table, Tag, Space } from 'antd';
import CitiesEdit from "./СitiesEdit";

const columns = [
    {
      title: 'Название',
      dataIndex: 'label',
      key: 'label',
      render: text => <a>{text}</a>,
    },
    {
      title: 'ID',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Актуальный',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Действие',
      key: 'action',
      render: (text, record) => (
          <CitiesEdit />
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

const CitiesTable = () => {


    return (
        <Table columns={columns} dataSource={data} />
    )
}
export default CitiesTable;