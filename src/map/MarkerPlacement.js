import React, { useState } from "react";
import { Marker, Popup, useMapEvent } from "react-leaflet";
import { papiezIcon } from "./Icon";

function MarkerPlacement() {

const [position, setPosition] = useState(null) 

const map = useMapEvent({
    click: (e) => {
        console.log (e.latlng)
        setPosition (e.latlng)
    }
})
    
    return position === null ? null: (
        <div>

            <Marker icon= {papiezIcon} position={position}>
                <Popup>
                <h1>Ciiii. Tylko nie mów nikomu</h1> długość: {position.lng}, <br /> szerokość: {position.lat}
                </Popup>
            </Marker>
        </div>

    )
}

export default MarkerPlacement