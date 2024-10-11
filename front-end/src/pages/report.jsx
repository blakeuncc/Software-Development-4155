import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Report.css';

const Report = () => {
  // Form state management using React hooks
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here, e.g., send the form data to the backend
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <Header />
      <form id="crime-report-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Crime Description:</label>
        <textarea
          id="description"
          name="description"
          rows={5}
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label htmlFor="location">Location of Crime:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit Report</button>
      </form>
      <Footer />
    </div>
  );
};

export default Report;
