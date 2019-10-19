import React from "react";
import {Map, Placemark, YMaps} from "react-yandex-maps";

export default ({center}) => (
  <YMaps>
    <Map state={{center: center, zoom: 10, behaviors: "disable('drag')"}}  width={'100%'} height={'100%'}>
      <Placemark geometry={center} />
    </Map>
  </YMaps>
)