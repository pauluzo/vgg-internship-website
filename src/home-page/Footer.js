import React from 'react';

const Footer = () => {
  return (
    <div className="intro-footer">
      <div className="footer-div1">
        <img className="mb-3" src="https://i.ibb.co/1GWLQdk/logo.png" style={{ width: '186px', maxHeight: '35px' }} alt="logo" />
        <p>
          Venture Garden Group is a holding company for a group of
          financial technology entities dedicated to the innovative and data-driven financial technology solutions.
        </p>
        <p className="font-italic">Transforming Africa Through Technology</p>
      </div>
      <hr style={{borderTop: "1px solid white"}} />
      <div className="row footer-media">
        <div className="col-md-8">
          <img src="https://i.ibb.co/d4QfZTQ/social-mail.png" alt="social-mail" border="0" />
          <small>  vgg@venturegardengroup.com</small>
        </div>
        <div className="col-md-4">
          <div className="footer-socials">
            <img src="https://i.ibb.co/vcs3p7x/social-facebook.png" alt="social-facebook" border="0" />
            <img src="https://i.ibb.co/L13r597/social-instagram.png" alt="social-instagram" border="0" />
            <img src="https://i.ibb.co/28J5WZs/social-linkedin.png" alt="social-linkedin" border="0" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;