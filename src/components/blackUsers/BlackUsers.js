import React from "react";

import { Typography } from "antd";
import BlackListTable from "./BlackListTable";
import { useGetBlockUsersQuery } from "../../app/api/user";


const { Title } = Typography;

const BlackUsers = () => {
    const { data } = useGetBlockUsersQuery();


    return (
        <div>
            <Title level={2}>Заблокированные пользователи</Title>
            <BlackListTable data={data} />
        </div>
    )
}
export default BlackUsers;