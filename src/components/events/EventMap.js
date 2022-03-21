import React from "react";

import { YMaps, Map, Placemark } from 'react-yandex-maps';

const EventMap = ({ longitude, latitude, label }) => {


    return (
        <YMaps style={{ width: '100%' }}>
            <Map width='150px' height='150px' defaultState={{ center: [latitude, longitude], zoom: 15 }} >
                <Placemark modules={['geoObject.addon.balloon']} properties={{
                    balloonContentBody:
                        `<div style="color:red;"> ${label}</div>`,
                }} geometry={[latitude, longitude]} children={<div>{label}</div>} />
            </Map>
        </YMaps>
    )
}
export default EventMap;