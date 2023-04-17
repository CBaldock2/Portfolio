import React, {useState} from "react";
import Header from "./Header";
import About from "../pages/AboutMe";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";

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