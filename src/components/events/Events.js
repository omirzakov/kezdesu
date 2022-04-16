import React from "react";
import { Typography } from "antd";
import EventsTable from "./EventsTable";
import { useGetEventQuery } from "../../app/api/event";
import { useSelector } from "react-redux";
import FullLoader from "../../views/FullLoader";
import EventCreate from "./EventCreate";


const { Title } = Typography;

const Events = () => {
    const { data: events } = useSelector(state => state.event);

    const { isLoading, refetch } = useGetEventQuery();

    console.log(isLoading)


    if (isLoading) {
        return <FullLoader />
    }

    return (
        <div>
            <div style={{ display: 'flex'}}>
                <Title level={2} style={{marginRight: 10}}>Ивенты</Title>
                <EventCreate refetch={refetch} />
            </div>
            <EventsTable refetch={refetch} events={events} />
        </div>
    )
}
export default Events;