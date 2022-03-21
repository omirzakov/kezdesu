import React from 'react';

import { YMaps, Map, Placemark, Clusterer, SearchControl, GeolocationControl } from 'react-yandex-maps';
import './style.css';
import moment from 'moment';

const YandexMap = ({ events }) => {

  console.log(events)


  return (
    <YMaps query={{ apikey: "a26a5e8a-0638-40f9-a465-905a03ede1c2" }} style={{ width: '100%' }}>
      <Map width='100%' height='80vh' defaultState={{ center: [43.238949, 76.889709], zoom: 15 }} >
        <Clusterer options={{
          preset: 'islands#invertedVioletClusterIcons',
          groupByCoordinates: false,
        }}>
          {
            events?.map((event, i) => (
              <Placemark key={i} modules={['geoObject.addon.balloon']} properties={{
                balloonContentBody:
                  `<div style="font-weight:bold;"> ${event?.label}</div> 
                  <div>Начало: ${moment(event?.startedAt).format('DD.MM.YYYY - hh:mm')} </div>
                  <div>Конец: ${moment(event?.endedAt).format('DD.MM.YYYY - hh:mm')}</div>
                  `,
              }} geometry={[event?.latitude, event?.longitude]} children={<div>{event?.label}</div>} />
            ))
          }
        </Clusterer>
        <SearchControl />
        <GeolocationControl />
      </Map>
    </YMaps>
  )
}
export default YandexMap;