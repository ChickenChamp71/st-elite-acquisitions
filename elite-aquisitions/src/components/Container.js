import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./pages/Main";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import "../styles/Container.css";

export default function Container() {
    
    const [currentPage, setCurrentPage] = useState('Main');

    const renderPage = () => {

        if (currentPage === 'PrivacyPolicy') {
            return <PrivacyPolicy />
        }
        return <Main />

    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="body">
            <Header />
            <div className="main-page">
                {renderPage()}
            </div>
            <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    );
};