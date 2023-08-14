import React from "react";
import logo from '../styles/imgs/STEA_1500px.png';
import { ReactComponent as LinkedInLogo } from '../styles/imgs/linkedin-svgrepo-com.svg';
import { ReactComponent as FacebookLogo } from '../styles/imgs/facebook-svgrepo-com.svg';
import '../styles/Footer.css';

export default function Footer({ currentPage, handlePageChange, notifState }) {

    return (
        <footer>
            
            <section className="left-footer footer-section">
                <ul>
                    <li id="logo">
                        <img src={logo} alt="Logo for ST Elite Acquisitions" />
                    </li>

                    <li id="link-imgs">
                        <a href="https://http.cat/status/404" className={`linkedin-disable ${notifState? 'disabled' : ''}`}>
                            <LinkedInLogo />
                        </a>

                        <a href="https://http.cat/status/404" className={`facebook-disable ${notifState? 'disabled' : ''}`}>
                            <FacebookLogo />
                        </a>
                    </li>

                    <li className="phone-number footer-phone">
                        <h5>
                            (669) 696-6969
                        </h5>
                    </li>

                    <li className="email-main footer-email">
                        <h5>
                            EMAIL@STELITEACQUISITIONS.GOV
                        </h5>
                    </li>
                </ul>
            </section>
           
            <div className="copyright footer-section">
                <h5 className="center-footer">
                    © 2023 ST ELITE ACQUISITIONS
                </h5>
            </div>
            
            <nav className="nav-footer footer-section">
                <ul className="right-footer">
                    <li id="home-link">
                        <a 
                        href="#home" 
                        onClick={() =>
                        handlePageChange('Main')} 
                        className={`home-href ${currentPage === 'Home' ? 'nav-link-active' : 'nav-link'} ${notifState? 'disabled' : ''}`} >
                            HOME
                        </a>
                    </li>

                    <li id="footer-contact">
                        <a href="#contact-2" className={`contact-2-disable ${notifState? 'disabled' : ''}`}>
                            CONTACT
                        </a>
                    </li>
                    
                    <li id="footer-about-us">
                        <a href="#about-us" className={`about-2-disable ${notifState? 'disabled' : ''}`}>
                            ABOUT US
                        </a>
                    </li>

                    <li id="footer-how-it-works">
                        <a href="#how-it-works" className={`how-2-disable ${notifState? 'disabled' : ''}`}>
                            HOW IT WORKS
                        </a>
                    </li>

                    <li id="footer-privacy-policy">
                        <a 
                        href="#privacy-policy" 
                        onClick={() => handlePageChange('PrivacyPolicy')} 
                        className={`privacy-href ${currentPage === 'PrivacyPolicy' ? 'nav-link-active' : 'nav-link'} ${notifState? 'disabled' : ''}`}>
                            PRIVACY POLICY
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};