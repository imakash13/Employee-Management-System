import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>Employee Management System</h2>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="footer-right">
          <h3>Contact Us</h3>
          <p>Email: ems.support@example.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: 123 Office Street, Bengaluru, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
