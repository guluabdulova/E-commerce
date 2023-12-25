import React from 'react';
import { BsFacebook, BsInstagram, BsYoutube, BsWhatsapp, BsTelegram, BsTiktok, BsLinkedin, BsTwitter } from 'react-icons/bs';
import '../css/Footer.css';
import '../Responsive.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-xxl">
        <div className="row">
          <div className="col-md-6">
            <h5 className="footer-heading">Şirkət</h5>
            <ul className="footer-column">
              <li><Link to='/privacy-policy'>Gizlilik Siyasəti</Link></li>
              <li><Link to='/refund-policy'>Geri qaytarma siyasəti</Link></li>
              <li><Link to='/shipping-policy'>Göndərmə Siyasəti</Link></li>
              <li><Link to='/term-conditions'>Xidmət Şərtləri</Link></li>
            </ul>
          </div>

          <div className="col-md-6">
            <h5 className="footer-heading">Əlaqə</h5>
            <ul className="footer-column">
              <li><button type="button" className="contact-button" onClick={() => window.location.href = "mailto:contact@elektrogalaksi.com"}>Şikayət və təkliflər</button></li>
              <li><button type="button" className="contact-button" onClick={() => window.location.href = "tel:*0101"}>*0101</button></li>
            </ul>
          </div>

          <div className="col-md-12">
            <p className="footer-text">ElektroGalaksi. Site by Gulu Abdulova</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><BsYoutube /></a>
              <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"><BsWhatsapp /></a>
              <a href="https://web.telegram.org/a/" target="_blank" rel="noopener noreferrer"><BsTelegram /></a>
              <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer"><BsTiktok /></a>
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
              <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
