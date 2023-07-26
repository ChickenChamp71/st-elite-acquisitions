import React, { useEffect, useState, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Header.css";
import Main from "./pages/Main";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import toggle from '../styles/imgs/toggle.png';
import "../styles/Container.css";

export default function Container() {
    
    const [currentPage, setCurrentPage] = useState('Main');

    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {

            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
            }
            
        }

        document.addEventListener('mousedown', handler);

    });

    const renderPage = () => {

        if (currentPage === 'PrivacyPolicy') {
            return <PrivacyPolicy />
        }
        return <Main />

    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="body">
            <div className="total-header">
                <Header />
                <div className='nav-drop-down' ref={menuRef}>
                    <div className='drop-trigger'>
                        <img src={toggle} alt='Toggle menu button.' onClick={() => {
                            setOpen(!open)
                        }} />
                    </div>

                    <div className={`drop-menu ${open? 'active' : 'inactive'}` }>
                        <li id='contact'>
                            <a href='#contact' onClick={() => {
                            setOpen(false)
                            }}>
                                CONTACT
                            </a>
                        </li>
                        <li id='about-us'>
                            <a href='#about-us' onClick={() => {
                            setOpen(false)
                            }}>
                                ABOUT US
                            </a>
                        </li>
                        <li id='how-it-works'>
                            <a href='#how-it-works' onClick={() => {
                            setOpen(false)
                            }}>
                                HOW IT WORKS
                            </a>
                        </li>
                    </div>
                </div>
            </div>
            
            <div className="main-page">
                {renderPage()}
            </div>
            <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    );
};