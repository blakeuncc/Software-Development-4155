// BasicPage.js
import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
const Profile = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
        <h1>Welcome to My Page</h1>
        <p>This is a simple page with a header, main content, and footer.</p>
        <p>You can add more content here as needed.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
