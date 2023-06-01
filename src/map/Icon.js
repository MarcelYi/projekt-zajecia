import L from 'leaflet';

import papiez from './zdjecie-removebg-preview.png'

const  leafIcon = L.Icon.extend({
    options:{
        iconSize: [100,100],
        inconAnchor: [50,100],
        tooltipAnchor: [0,0]
    }
})

export const papiezIcon = new leafIcon({ iconUrl: papiez})