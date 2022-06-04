import React from "react";

import { Typography } from "antd";
import UsersTable from "./UsersTable";
import { useGetUsersQuery } from "../../app/api/user";
import { useGetAccountQuery } from "../../app/api/auth";


const { Title } = Typography;

const Users = () => {
    return (
        <div>
            <Title level={2}>Пользователи</Title>
            <UsersTable />
        </div>
    )
}
export default Users;