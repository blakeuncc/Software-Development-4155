import React from 'react';
import './Map.css'; // Assuming you have a CSS file for map-specific styles
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

// Importing Header and Footer components
import Header from '../components/Header'; // Adjust the path as needed
import Footer from '../components/Footer'; // Adjust the path as needed

const mapContainerStyle = {
  width: '100%',
  height: '100%', // Height controlled by CSS
};

const center = {
  lat: 35.2271, // Latitude for Charlotte, NC
  lng: -80.8431, // Longitude for Charlotte, NC
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyA_o5Ah2wjZbvqvReo17iLHBVXmoCVby-0', // Replace with your actual API key
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div>
      {/* Render the Header */}
      <Header />

      {/* Main content */}
      <div className="map-container">
        <h1>Crime Map</h1>
        <p>This page will display a map with crime incidents in the area.</p>

        <div className="google-map-container">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={12}
            center={center}
            options={options}
          >
            <Marker position={center} />
          </GoogleMap>
        </div>
      </div>

      {/* Render the Footer */}
      <Footer />
    </div>
  );
};

export default Map;
