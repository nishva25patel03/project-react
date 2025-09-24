import React from "react";


function Contact() {
  return (
    <div className="contact-page">
      <h1 className="page-title">Contact Us</h1>
      <p className="page-subtitle">
        Have questions or need help? Our team is here for you. Fill out the form
        or reach us directly through the details below.
      </p>

      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form">
          <h2>Send Us a Message</h2>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            We’d love to hear from you! Reach out to us via email, phone, or
            visit our office.
          </p>

          <div className="info-block">
            <h3>📍 Address</h3>
            <p>123 Job Street, Ahmedabad City, India</p>
          </div>

          <div className="info-block">
            <h3>📞 Phone</h3>
            <p>+91 9425895101</p>
          </div>

          <div className="info-block">
            <h3>📧 Email</h3>
            <p>nishvapatel255@gmail.com</p>
          </div>

          
        
        </div>
      </div>
    </div>
  );
}

export default Contact;
