import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer bg-black text-white py-4">
      <div className="container text-center">
        <h2 className="footer-title mb-3">DeshDarpan</h2>
        <p className="footer-description" style={{fontSize: '1.1rem',
    marginBottom: '20px'}}>
          Your trusted source for the latest news and analysis.
        </p>
        <div className="footer-links" style={{margin: '20px 0'}}>
          <a href="#" className="footer-link">About Us</a>
          <a href="#" className="footer-link">Contact</a>
          <a href="#" className="footer-link">Privacy Policy</a>
        </div>
        <p className="mt-4 mb-0">&copy; 2024 DashDarpan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
