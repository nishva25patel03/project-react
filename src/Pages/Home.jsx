import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to JobPortal 🚀</h1>
        <p>Find your dream job with the best companies around the world.</p>
        <Link to="/jobs">Explore Jobs</Link>
      </div>

      {/* Features Section */}
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Why Choose Us?</h2>
      <div className="features">
        <div className="feature-card">
          <h3>🌍 Global Jobs</h3>
          <p>Search from thousands of jobs across IT, AI, Design, Marketing and more.</p>
        </div>
        <div className="feature-card">
          <h3>⚡ Easy Apply</h3>
          <p>One-click apply to your favorite job and track application status easily.</p>
        </div>
        <div className="feature-card">
          <h3>🤝 Trusted Companies</h3>
          <p>Top companies around the world post their latest openings here.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

