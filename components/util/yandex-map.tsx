import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps'

const YandexMap: React.FC<{
    addressLatLng: [number, number]
    className: string
}> = ({ addressLatLng, className }) => {
    return (
        <YMaps>
            <Map
                className={className}
                defaultState={{ center: addressLatLng, zoom: 15 }}
            >
                <Placemark defaultGeometry={addressLatLng} />
            </Map>
        </YMaps>
    )
}

export default React.memo(YandexMap)
