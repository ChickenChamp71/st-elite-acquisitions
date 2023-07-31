import React from "react";
import logo from '../styles/imgs/STEA_1500px.png';
import { ReactComponent as LinkedInLogo } from '../styles/imgs/linkedin-svgrepo-com.svg';
import { ReactComponent as FacebookLogo } from '../styles/imgs/facebook-svgrepo-com.svg';
import '../styles/Footer.css';

export default function Footer({ currentPage, handlePageChange }) {

    return (
        <footer>
            
            <ul className="left-footer">
                <li id="logo">
                    <img src={logo} alt="Logo for ST Elite Acquisitions" />
                </li>

                <li id="link-imgs">
                    <a href="https://http.cat/status/404">
                        <LinkedInLogo />
                    </a>

                    <a href="https://http.cat/status/404">
                        <FacebookLogo />
                    </a>
                </li>

                <li className="phone-number">
                    <h5>
                        (669) 696-6969
                    </h5>
                </li>

                <li className="email-main">
                    <h5>
                        EMAIL@STELITEACQUISITIONS.GOV
                    </h5>
                </li>
            </ul>
            
            <h5 className="center-footer">
                © 2023 ST ELITE ACQUISITIONS
            </h5>

            <nav className="nav-footer">
                <ul className="right-footer">
                    <li id="home-link">
                        <a 
                        href="#home" 
                        onClick={() =>
                        handlePageChange('Main')} 
                        className={currentPage === 'Home' ? 'nav-link-active' : 'nav-link'}>
                            HOME
                        </a>
                    </li>

                    <li id="footer-contact">
                        <a href="#contact-2">
                            CONTACT
                        </a>
                    </li>
                    
                    <li id="footer-about-us">
                        <a href="#about-us">
                            ABOUT US
                        </a>
                    </li>

                    <li id="footer-how-it-works">
                        <a href="#how-it-works">
                            HOW IT WORKS
                        </a>
                    </li>

                    <li id="footer-privacy-policy">
                        <a 
                        href="#privacy-policy" 
                        onClick={() => handlePageChange('PrivacyPolicy')} 
                        className={currentPage === 'PrivacyPolicy' ? 'nav-link-active' : 'nav-link'}>
                            PRIVACY POLICY
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};