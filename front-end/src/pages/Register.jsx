import React, { useState } from 'react';
import Axios from 'axios';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    location: '',
    notificationPreferences: {
      weather: false,
      traffic: false,
      publicSafety: false,
    },
    termsAccepted: false,
  });


  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackType, setFeedbackType] = useState('');


  // Update the handleChange function to handle nested fields in notificationPreferences
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;


    if (['weather', 'traffic', 'publicSafety'].includes(name)) {
      // Update specific notification preference
      setFormData({
        ...formData,
        notificationPreferences: {
          ...formData.notificationPreferences,
          [name]: checked,
        },
      });
    } else {
      // Update other fields
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();


    if (formData.password !== formData.confirmPassword) {
      setFeedbackMessage("Passwords do not match.");
      setFeedbackType('error');
      return;
    }


    try {
      const response = await Axios.post('/users/register', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        location: formData.location,
        notificationPreferences: formData.notificationPreferences,
        termsAccepted: formData.termsAccepted,
      });


      // Show success message
      setFeedbackMessage(response.data.message || 'Registration successful!');
      setFeedbackType('success');

      // Redirect to login page after 2 seconds
      setTimeout(() => {
        navigate('/Login'); 
      }, 2000);

    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Registration failed. Please try again.';
      setFeedbackMessage(errorMessage);
      setFeedbackType('error');
    }
  };

  return (
    <div>
      <Header />
      <div className="register-container">
        <h1>Create Your Account</h1>
        <p>Join CLTAlert and stay informed!</p>


        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>


          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>


          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>


          <div className="form-group">
            <label htmlFor="phone">Phone Number (Optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>


          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>


          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>


          <div className="form-group">
            <label htmlFor="location">Location</label>
            <select
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            >
              <option value="">Select your city</option>
              <option value="Charlotte">Charlotte</option>
              <option value="Raleigh">Raleigh</option>
            </select>
          </div>


          <div className="form-group">
            <label>Notification Preferences</label>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="weather"
                  checked={formData.notificationPreferences.weather}
                  onChange={handleChange}
                />
                Weather Alerts
              </label>
              <label>
                <input
                  type="checkbox"
                  name="traffic"
                  checked={formData.notificationPreferences.traffic}
                  onChange={handleChange}
                />
                Traffic Alerts
              </label>
              <label>
                <input
                  type="checkbox"
                  name="publicSafety"
                  checked={formData.notificationPreferences.publicSafety}
                  onChange={handleChange}
                />
                Public Safety Alerts
              </label>
            </div>
          </div>


          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
              />
              I agree to the terms and conditions
            </label>
          </div>


          <button type="submit" className="submit-button">Sign Up</button>


          {feedbackMessage && (
            <p style={{ color: feedbackType === 'success' ? 'green' : 'red' }}>
              {feedbackMessage}
            </p>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Register;


