import React, {useEffect, useState, useRef} from 'react';
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import { environment } from '../../Environments/EnvDev';
import '../../App.css';

mapboxgl.accessToken = environment.mapbox.accessToken;

const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-117.71255782526502, 34.09819185557174]
      },
      properties: {
        title: 'Mapbox',
        description: 'Pomona'
      }
    },
  ]
};

const coordinates = {
  "Pomona": { lng: -117.71255782526502, lat: 34.09819185557174, zoom: 16 },
  "Scripps": { lng: -117.7035, lat: 34.1031, zoom: 16 },
  "CMC": { lng: -117.7072, lat: 34.1027, zoom: 16 },
  "Mudd": { lng: -117.7107, lat: 34.1069, zoom: 16 },
  "Pitzer": { lng: -117.7064, lat: 34.1034, zoom: 16 },
  "default": {lng: -117.709626, lat: 34.10231, zoom: 16}
};

const MapboxComponent = ({currSchool}) => {
  const mapContainerRef = useRef(null);
  const map = useRef(null);

  const [lng, setLng] = useState(-117.709626);
  const [lat, setLat] = useState(34.10231);
  const [zoom, setZoom] = useState(16);

  // Initialize map when component mounts
  useEffect(() => {

    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/sara202020/clt6hpiqj00ey01raakss8c9y',
      center: [lng, lat],
      zoom: zoom,
      maxBounds: [ 
        [-117.713132, 34.096131], // southwest coordinates
        [-117.705419, 34.106079] // northeast coordinates]
    ]
    });

    // Add our navigation control (the +/- zoom buttons)
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Map onload event 
    map.current.on("load", ()=> {
        // Nifty code to force map to fit inside container when it loads
        map.current.resize();

        // for (const feature of geojson.features) {
        //   // create a HTML element for each feature
        //   const el = document.createElement('div');
        //   el.className = 'marker';
        
        //   // make a marker for each feature and add to the map
        //   new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
        // }  

    })  

    // Clean up on unmount
    return () => map.current.remove();
  }, [lng, lat, zoom]); 

  // if school is changed, move the map
  useEffect(() => {
    const { lng: currLng, lat: currLat, zoom: currZoom } = coordinates[currSchool] || coordinates.default; // Default to Pomona if currSchool not found
    if (currLng) setLng(currLng);
    if (currLat) setLat(currLat);
    if (currZoom) setZoom(currZoom);
  }, [currSchool]); 

  return (
    <div className='map-container' ref={mapContainerRef} />
  );
};

export default MapboxComponent;