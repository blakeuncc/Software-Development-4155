import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Report.css';
import axios from "axios";

const Report = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(new Date());

  const submitReport = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post('http://localhost:5000/api/crime-reports', {

        name,
        email,
        description,
        location: {
          address: location,
          lat: 0,
          lng: 0
        },
        date: date || new Date()
      });
      if (response.status === 201) {
        console.log('Report submitted:', response.data);
      }
      // Clear form
      setName('');
      setEmail('');
      setDescription('');
      setLocation('');
      alert('Report submitted successfully!');
    } catch (error) {
      console.error('Error submitting report:', error.response || error.message);
      alert('Error submitting report. Please try again.');
    }
  };

  return (
      <>
        <Header />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '75vh', backgroundColor: '#ffffff' }}>
          <div style={{ width: '400px', padding: '20px 40px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#f0f0f0', boxSizing: 'border-box' }}>
            <h2 style={{ textAlign: 'center', color: '#333' }}>Report Incident</h2>

            <form onSubmit={submitReport}>
              <div style={{ marginBottom: '15px' }}>
                <label>Your Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                    required
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label>Your Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                    required
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label>Crime Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', resize: 'none' }}
                    rows="4"
                    required
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label>Location of Crime:</label>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                    required
                />
              </div>
              <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '10px',
                    backgroundColor: '#000',
                    color: '#fff',
                    fontWeight: 'bold',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    border: 'none',
                  }}
              >
                Submit Report
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </>
  );
};

export default Report;