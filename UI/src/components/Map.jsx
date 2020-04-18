import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';


export default function Map(props) {
    props = {
        latitude: 44.977,
        longitude: -93.331
    };
    const [viewport, setViewport] = useState ({
        latitude: props.latitude,
        longitude: props.longitude,
        width: "400px",
        height: "100%",
        zoom: 10
    });

    return (
        <div>
            <ReactMapGL 
                {...viewport} 
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                // mapStyle="mapbox://styles/mapbox/streets-v9"
                onViewportChange={viewport => {
                    setViewport(viewport)
                }}
            > 

            {/* We can render different icons on the map to indicate the category of service/request */}
                <Marker
                    latitude={props.latitude}
                    longitude={props.longitude}
                >
                    <FontAwesomeIcon icon={faMapMarker} className="marker" />
                </Marker>

            </ReactMapGL>
        </div>
    );
}