import React from "react";


function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="intro">
        JobPortal is a leading platform that connects job seekers with top
        companies. Our mission is to make job search simple, transparent, and
        effective for everyone.
      </p>

      {/* Mission / Vision / Team */}
      <div className="cards">
        <div className="card">
          <h3>🚀 Our Mission</h3>
          <p>
            Empower job seekers by giving them access to the best opportunities
            worldwide.
          </p>
        </div>
        <div className="card">
          <h3>📊 Our Vision</h3>
          <p>
            To become the most trusted job platform where companies and talent
            connect seamlessly.
          </p>
        </div>
        <div className="card">
          <h3>💡 Our Team</h3>
          <p>
            A passionate group of developers, recruiters, and designers working
            to make job search easier for you.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="why-choose">
        <h2>Why Choose JobPortal?</h2>
        <ul>
          <li>✅ Thousands of verified job postings</li>
          <li>✅ Trusted by 500+ companies</li>
          <li>✅ Easy application process</li>
          <li>✅ 24/7 customer support</li>
        </ul>
      </div>

      {/* Stats Section */}
      <div className="stats">
        <div>
          <h2>10K+</h2>
          <p>Jobs Posted</p>
        </div>
        <div>
          <h2>500+</h2>
          <p>Companies</p>
        </div>
        <div>
          <h2>50K+</h2>
          <p>Registered Users</p>
        </div>
      </div>
    </div>
  );
}

export default About;
