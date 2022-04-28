import React from "react";

import { Typography } from "antd";
import UsersTable from "./UsersTable";
import { useGetUsersQuery } from "../../app/api/user";
import { useGetAccountQuery } from "../../app/api/auth";


const { Title } = Typography;

const Users = () => {
    const { data } = useGetUsersQuery();


    return (
        <div>
            <Title level={2}>Пользователи</Title>
            <UsersTable data={data} />
        </div>
    )
}
export default Users;