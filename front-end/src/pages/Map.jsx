import React, { useState, useEffect } from 'react';
import './Map.css';
import { GoogleMap, useLoadScript, MarkerF, InfoWindowF } from '@react-google-maps/api';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const mapContainerStyle = {
  width: '100%',
  height: '600px',
};

const center = {
  lat: 35.2271,
  lng: -80.8431,
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyA_o5Ah2wjZbvqvReo17iLHBVXmoCVby-0',
  });

  const [crimeReports, setCrimeReports] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {
    const fetchCrimeReports = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/crime-reports');
        console.log("Fetched crime reports:", response.data);
        setCrimeReports(response.data);
      } catch (error) {
        console.error("Error fetching crime reports:", error);
      }
    };

    fetchCrimeReports();
  }, []);

  const handleMarkerClick = (report) => {
    setSelectedMarker(report);
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
      <div>
        <Header />
        <div className="map-container">
          <h1>Crime Map</h1>
          <p>Click on markers to view crime incident details.</p>

          <div className="google-map-container" style={{ position: 'relative', height: '600px' }}>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={12}
                center={center}
                options={options}
                onClick={() => setSelectedMarker(null)}
            >
              {Array.isArray(crimeReports) && crimeReports.map((report) => (
                  <MarkerF
                      key={report._id}
                      position={{
                        lat: report.location.lat,
                        lng: report.location.lng,
                      }}
                      onClick={() => handleMarkerClick(report)}
                  />
              ))}

              {selectedMarker && (
                  <InfoWindowF
                      position={{
                        lat: selectedMarker.location.lat,
                        lng: selectedMarker.location.lng,
                      }}
                      onCloseClick={() => setSelectedMarker(null)}
                  >
                    <div style={{
                      padding: '15px',
                      minWidth: '250px',
                    }}>
                      <h3 style={{
                        margin: '0 0 10px 0',
                        textAlign: 'center',
                        borderBottom: '1px solid #ccc',
                        paddingBottom: '5px'
                      }}>
                        Crime Report
                      </h3>
                      <div style={{ marginBottom: '10px' }}>
                        <strong>Description:</strong>
                        <p style={{ margin: '5px 0' }}>{selectedMarker.description}</p>
                      </div>
                      <div style={{ marginBottom: '10px' }}>
                        <strong>Location:</strong>
                        <p style={{ margin: '5px 0' }}>{selectedMarker.location.address}</p>
                      </div>
                      <div>
                        <strong>Reported:</strong>
                        <p style={{ margin: '5px 0' }}>
                          {new Date(selectedMarker.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </InfoWindowF>
              )}
            </GoogleMap>
          </div>
        </div>
        <Footer />
      </div>
  );
};

export default Map;