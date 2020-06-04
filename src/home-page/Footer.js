import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer>
    <div className="subscribe">
        <div className="row align-items-center">
            <div className="col-md-4">
                <div>
                <h3>Want to stay <br/>up-to-date with internship opening and what's new?</h3>
                <p>Subscribe. We don't spam</p>
                </div>
            </div>
            <div className="mb-3 offset-md-1 col-5"><input type="text" id="subcribe-input" placeholder="Please enter your Email"/></div>
            <div className="col-md-2"><button type="button" id="btn">Subscribe</button></div>
        </div>
    </div>
    <div className="bottom-half">
        <div className="row">
            <div className="col-md-6">
                <img className="mb-3" src="https://i.ibb.co/1GWLQdk/logo.png" style={{width:'186px', maxHeight:'35px'}} alt="logo"/>
                <p className="mb-4 vgg-info">Venture Garden Group is a holding company for a group of
                financial technology entities dedicated to the innovative and data-driven financial technology solutions.</p>
                <p className="font-italic">Transforming Africa Through Technology</p>
            </div>
        </div>
        <hr/>
        <div className="row footer-text">
            <span>
            <div className="mt-4 col-md-6 social-mail">
                <img src="https://i.ibb.co/d4QfZTQ/social-mail.png" alt="social-mail" border="0"/>
                <small>vgg@venturegardengroup.com</small>
            </div>
            </span>
           <span>
           <div className="mt-4 col-md-6 social">
                <img src="https://i.ibb.co/vcs3p7x/social-facebook.png" alt="social-facebook" border="0"/>
                <img src="https://i.ibb.co/L13r597/social-instagram.png" alt="social-instagram" border="0"/>
                <img src="https://i.ibb.co/28J5WZs/social-linkedin.png" alt="social-linkedin" border="0"/>   
            </div>
           </span>
           
        </div>
    </div>
</footer>
        </div>
    )
}

export default Footer
