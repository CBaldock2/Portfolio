import React, {useState} from "react";
import Header from "./Header";
import About from "../pages/aboutMe";
import Contact from "../pages/contact";
import Portfolio from "../pages/portfolio";
import Resume from "../pages/resume";

export default function Navigation() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About/>
        }
        if (currentPage === 'Contact') {
            return <Contact/>
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio/>
        }
        if (currentPage === 'Resume') {
            return <Resume/>
        }
    }

    const pageSwitch = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} pageSwitch={pageSwitch} />
            {renderPage()}
        </div>
    );
}