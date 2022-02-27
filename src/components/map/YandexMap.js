import React from 'react';

import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './style.css';

const YandexMap = () => {


  return (
    <YMaps style={{width: '100%'}}>
      <Map width='100%' height='80vh' defaultState={{ center: [43.238949, 76.889709], zoom: 9 }} />
      <Placemark />
    </YMaps>
  )
}
export default YandexMap;