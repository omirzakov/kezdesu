import React from "react";
import { Typography } from "antd";
import EventsTable from "./EventsTable";


const { Title } = Typography;

const Events = () => {


    return (
        <div>
            <Title level={2}>Ивенты</Title>
            <EventsTable />
        </div>
    )
}
export default Events;