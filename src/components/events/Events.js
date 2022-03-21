import React from "react";
import { Typography } from "antd";
import EventsTable from "./EventsTable";
import { useGetEventQuery } from "../../app/api/event";
import { useSelector } from "react-redux";


const { Title } = Typography;

const Events = () => {
    const { data: events } = useSelector(state => state.event);

    useGetEventQuery();


    return (
        <div>
            <Title level={2}>Ивенты</Title>
            <EventsTable events={events}  />
        </div>
    )
}
export default Events;