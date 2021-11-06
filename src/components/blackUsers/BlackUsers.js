import React from "react";
import BlackListTable from "./BlackListTable";
import { Typography } from "antd";


const { Title } = Typography;

const BlackUsers = () => {


    return (
        <div>
            <Title level={2}>Заблокированные пользователи</Title>
            <BlackListTable />
        </div>
    )
}
export default BlackUsers;