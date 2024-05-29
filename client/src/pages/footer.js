import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './css/footer.css';
import logo from './css/images/logo.png'

function Footer() {
    return (
        <footer className="bg-dark-gradient footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-border-bottom pb-6 mb-1">
                    </div>
                    <div className="row">
                        <div className="col-sm-5 col-lg-3 my-0">
                            <h4><div className="text-white-65 mb-4 text-white">Sign up to Get Latest Updates</div></h4>
                            <div className="nav footer-socila-icon">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-7 my-1">
                            <center><h5 className="text-white h6 mb-4">Company</h5></center>
                            <ul className="list-unstyled white-link footer-links">
                                <li><a href="/about">About</a></li>
                                <li><a href="/terms">Terms</a></li>
                                <li><a href="/privacy">Privacy</a></li>
                                <li><a href="/feedback">Feedback</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-2 col-lg-1 my-1">
                            <div className="white-link">
                                <div className="d-flex">
                                    <div className="avatar avatar-lg rounded">
                                        <img src={logo}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom footer-border-top light">
                <div className="container text-center">
                    <p className="m-0">© 2021 copyright <a href="#" className="text-reset text-white">NU PALS</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
