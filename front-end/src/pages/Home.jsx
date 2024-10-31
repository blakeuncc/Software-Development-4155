import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '30vh', padding: '10px' }}>
                <p style={{ textAlign: 'center' }}>
                    Welcome to CLTAlert! This application allows you to report crimes in your area quickly and easily.
                    Your reports help make the community safer and more aware of criminal activities.
                    Please click the button below to submit a crime report.
                </p>
                <a href="/report" style={{ textDecoration: 'none' }}>
                    <button style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
                        Report an Incident
                    </button>
                </a>

                <section style={{ textAlign: 'center', marginTop: '20px' }}>
                    <h2>Features</h2>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li>Quick reporting of incidents</li>
                        <li>Access to local crime map</li>
                        <li>Emergency contact information</li>
                    </ul>
                </section>

                <section style={{ textAlign: 'center', marginTop: '20px' }}>
                    <h2>Stay Informed</h2>
                    <p>Sign up for notifications about local incidents and safety tips!</p>
                    <a href="/Register" style={{ textDecoration: 'none' }}>
                        <button style={{ marginTop: '10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
                            Sign Up
                        </button>
                    </a>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
