import React from "react";

import { Typography } from "antd";
import YandexMap from "./YandexMap";
import { useGetEventQuery } from "../../app/api/event";
import { useSelector } from "react-redux";

const { Title } = Typography;

const Map = () => {
    const { data: events } = useSelector(state => state.event);

    useGetEventQuery();


    return (
        <div>
            <Title level={2}>Карта</Title>
            <YandexMap events={events} />
        </div>
    )
}
export default Map;