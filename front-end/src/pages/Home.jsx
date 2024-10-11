import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <p>
                    Welcome to CLTAlert! This application allows you to report crimes in your area quickly and easily.
                    Your reports help make the community safer and more aware of criminal activities.
                    Please click the button below to submit a crime report.
                </p>
                <a href="/report">
                    <button>Report an Incident</button>
                </a>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
