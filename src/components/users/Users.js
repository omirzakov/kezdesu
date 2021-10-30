import React from "react";

import { Typography } from "antd";
import UsersTable from "./UsersTable";


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