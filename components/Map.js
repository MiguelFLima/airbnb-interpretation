import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

function Map( { searchResults } ) {

    // Transforming the searchResults in what we need

    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latidute: result.lat,
    }));

    const center = getCenter(coordinates);
    console.log(center, coordinates)

    // One day maybe this work

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: -0.0022275,
        longitude: 51.5421655,
        zoom: 11,
    });

  return (
    <ReactMapGL
        mapStyle='mapbox://styles/miguelflima/cl9hkxjdz001j14qyy4z7vpbn'
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >

    </ReactMapGL>
  );
}

export default Map