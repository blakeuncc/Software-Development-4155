import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Emergency Contact Information</h1>
        <p>If you are in an emergency, please contact the appropriate authorities immediately. Below are some important contacts:</p>

        <h1>Emergency Services</h1>
        <ul>
          <li><strong>Police:</strong> 911</li>
          <li><strong>Fire Department:</strong> 911</li>
          <li><strong>Ambulance Services:</strong> 911</li>
        </ul>

        <h1>National Hotlines</h1>
        <ul>
          <li><a href='https://www.thehotline.org/'><strong>Domestic Violence Hotline:</strong></a> 1-800-799-7233</li>
          <li><a href='https://988lifeline.org/'><strong>National Suicide Prevention Lifeline:</strong></a> 1-800-273-8255</li>
          <li><a href='https://www.usa.gov/substance-abuse'><strong>Substance Abuse Helpline:</strong></a> 1-800-662-HELP (4357)</li>
        </ul>

        <p>Always remember to stay safe and reach out for help when needed.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
