import React from 'react';
import logo from '../styles/imgs/STEA_1500px@2x.png';
import '../styles/Header.css';

export default function Header() {

    return (
        <header>
            <img className='logo' src={logo} alt='Logo for ST Elite Acquisitions' />

            <nav className='nav-bar'>
                <ul className='nav-options'>
                    <li id='contact'>
                        <a href='#contact-section'>
                            CONTACT
                        </a>
                    </li>
                    <li id='about-us'>
                        <a href='#about-us-section'>
                            ABOUT US
                        </a>
                    </li>
                    <li id='how-it-works'>
                        <a href='#how-it-works-section'>
                            HOW IT WORKS
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};