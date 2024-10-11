import React, { useState } from 'react';
import './Register.css'; // Your CSS for the registration page
import Header from '../components/Header'; // Adjust the path based on your project structure
import Footer from '../components/Footer'; // Adjust the path based on your project structure

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      {/* Include Header */}
      <Header />

      <div className="register-container">
        <h1>Create Your Account</h1>
        <p>Join CLTAlert and stay informed!</p>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Address */}
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

          {/* Phone Number */}
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

          {/* Password */}
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

          {/* Confirm Password */}
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

          {/* Location */}
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
              {/* Add more cities */}
            </select>
          </div>

          {/* Notification Preferences */}
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

          {/* Terms & Conditions */}
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

          {/* Submit Button */}
          <button type="submit" className="submit-button">Sign Up</button>
        </form>
      </div>

      {/* Include Footer */}
      <Footer />
    </div>
  );
};

export default Register;
