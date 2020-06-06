import React from 'react';

import { LeafletMouseEvent } from 'leaflet';
import { Map as MapElement, TileLayer, Marker } from 'react-leaflet';
// import { Container } from './styles';

interface Props {
    position: {
        initialPosition: [number, number];
        selectPosition: [number, number];
        setSelectPosition: Function;
    }
}

const Map: React.FC<Props> = (props) => {
    const { initialPosition, selectPosition, setSelectPosition } = props.position;

    function handleMapClick(event: LeafletMouseEvent){
        setSelectPosition([
            event.latlng.lat,
            event.latlng.lng,
        ]);
    }

    return (
        <MapElement 
            center={initialPosition}
            zoom={15}
            onClick={handleMapClick}
            style={{zIndex: 5}}
        >
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={selectPosition} />
        </MapElement>
    );
}

export default Map;