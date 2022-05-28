import React, { useEffect } from "react";

import { Table, Tag, Space, Button } from 'antd';
import { useGetBlockUsersQuery, useUnblockClientMutation } from "../../app/api/user";


const BlackListTable = () => {
  const { data, refetch } = useGetBlockUsersQuery();
  const [fetchUnlbockClient, { isLoading, isSuccess }] = useUnblockClientMutation();

  const unBlock = (value) => {
    fetchUnlbockClient({ id: value?.clientId });
  }

  useEffect(() => {
    if(isSuccess) {
      refetch();
    }
  }, [isSuccess])

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
        return <Button loading={isLoading} type="primary" onClick={() => unBlock(blocked)}>Разблокировать</Button>
      },
    },
  ];


    return (
        <Table columns={columns} dataSource={data?.clients} />
    )
}
export default BlackListTable;