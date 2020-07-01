import React, { Fragment } from 'react';
import {connect} from 'react-redux'

const Footer = (props) => {
  const footerSocials = props.footer.icons.map((icon, index) => (<Fragment key={`uniqueFooter${index}`}>
    <a href={icon.mediaSrc} ><img src={icon.iconLink} alt={icon.iconLink} border="0" /></a>
  </Fragment>))
  return (
    <div className="intro-footer">
      <div className="footer-div1">
        <img className="mb-3" src={props.footer.footerImage} style={{ width: '186px', maxHeight: '35px' }} alt="logo" />
        <p>
          {props.footer.footerText}
        </p>
        <p className="font-italic">{props.footer.footerText2}</p>
      </div>
      <hr style={{borderTop: "1px solid white"}} />
      <div className="row footer-media">
        <div className="col-md-8">
          <img src={props.footer.emailIcon} alt="social-mail" border="0" />
          <small>  {props.footer.emailText}</small>
        </div>
        <div className="col-md-4">
          <div className="footer-socials">
            {footerSocials}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    footer: state.footer
  }
}
export default connect(mapStateToProps)(Footer)
