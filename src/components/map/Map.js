import React from "react";

import { Typography } from "antd";
import SimpleMap from "./GoogleMap";

const { Title } = Typography;

const Map = () => {


    return (
        <div>
            <Title level={2}>Карта</Title>

            <SimpleMap />
        </div>
    )
}
export default Map;