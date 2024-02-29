import React, {useEffect, useState, useRef} from 'react';
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import { environment } from '../../Environments/EnvDev';
import '../../App.css';

mapboxgl.accessToken = environment.mapbox.accessToken;

const MapboxComponent = () => {
  const mapContainerRef = useRef(null);
  const map = useRef(null);

  const [lng] = useState(-117.709626);
  const [lat] = useState(34.10231);
  const [zoom] = useState(16);


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

    })

    // Clean up on unmount
    return () => map.current.remove();
  }, [lat, lng, zoom]); 

  return (
    <div className='map-container' ref={mapContainerRef} />
  );
};

export default MapboxComponent;