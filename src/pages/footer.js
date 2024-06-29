/* /views/components/Footer.js */

import React from 'react';
import { FaChevronUp, FaGithub, FaLinkedin } from 'react-icons/fa';
import './css/footer.css';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-rights">© {new Date().getFullYear()} Rights Reserved to Somya Bhatnagar</div>
      <div className="footer-social">
      <a href="https://github.com/SomyaBhatnagar19" target="_blank" rel="noopener noreferrer"><FaGithub style={{ color: '#020617' }} /></a>
        <a href="https://linkedin.com/in/somya-bhatnagar" target="_blank" rel="noopener noreferrer"><FaLinkedin style={{ color: '#1d4ed8' }} /></a>
      </div>
      <button className="btn btn-primary btn-scroll-top" onClick={scrollToTop}><FaChevronUp /></button>
    </footer>
  );
}

export default Footer;
