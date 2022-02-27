import React from "react";

import { Typography } from "antd";
import YandexMap from "./YandexMap";

const { Title } = Typography;

const Map = () => {


    return (
        <div>
            <Title level={2}>Карта</Title>
            <YandexMap />
        </div>
    )
}
export default Map;