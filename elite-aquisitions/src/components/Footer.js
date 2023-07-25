import React from "react";
import '../styles/Footer.css';
import logo from '../styles/imgs/STEA_1500px@2x.png';
import facebookLogo from '../styles/imgs/facebook-svgrepo-com.svg';
import linkedInLogo from '../styles/imgs/linkedin-svgrepo.svg';

export default function({ currentPage, handlePageChange }) {

    return (
        <footer>
            
            <ul className="left-footer">
                <li id="logo">
                    <img src={logo} alt="Logo for ST Elite Acquisitions" />
                </li>

                <li id="link-imgs">
                    <a href="https://http.cat/status/404">
                        <img src={linkedInLogo} alt="Logo for Linkedin" />
                    </a>

                    <a href="https://http.cat/status/404">
                        <img src={facebookLogo} alt="Logo for Facebook" />
                    </a>
                </li>

                <li className="phone-number">
                    <h5>
                        (669) 696-6969
                    </h5>
                </li>

                <li className="email-main">
                    EMAIL@STELITEACQUISITIONS.GOV
                </li>
            </ul>
            
            <h5 className="center-footer">
                © 2023 ST ELITE ACQUISITIONS
            </h5>

            <nav className="nav-footer">
                <ul className="right-footer">
                    
                </ul>
            </nav>
        </footer>
    )
}