import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/home');  // Navigate to the Shopping Cart or wherever you want
  };

  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Welcome to the Flower Paradise</h1>
        <p>Discover the beauty and elegance of nature's finest blooms.</p>
      </header>

      <section className="info-section">
        <h2>About Flowers</h2>
        <p>
          Flowers have been symbols of beauty, love, and nature for centuries. From the delicate petals of roses to 
          the vibrant hues of tulips, each bloom tells a unique story. Flowers not only add color to our lives but 
          also hold cultural and symbolic meanings. Whether gifted on special occasions or used to express emotions, 
          they hold a special place in our hearts.
        </p>
      </section>

      <div className="btn-container">
        <button className="get-started-btn" onClick={handleGetStarted}>Get Started</button>
      </div>
    </div>
  );
};

export default LandingPage;
