import React from 'react';
import '../styles/style.css'

function Header({ currentPage, pageSwitch }) {
    return (
        <header className='header'>
            <h1>CB</h1>
            <nav className='navbar'>
                <section
                     style={{
                         marginLeft: 'auto'
                     }}
                >
                    <ul className='nav navTabs'>
                        <li className='aboutTab'>
                            <a
                                href='#About'
                                onClick={() => pageSwitch('About')}
                                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                            >
                                About Me
                            </a>
                        </li>
                        <li className='portfolioTab'>
                            <a
                                href='#portfolio'
                                onClick={() => pageSwitch('Portfolio')}
                                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                            >
                                Portfolio
                            </a>
                        </li>
                        <li className='contactTab'>
                            <a
                                href='#Contact'
                                onClick={() => pageSwitch('Contact')}
                                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                            >
                                Contact Me
                            </a>
                        </li>
                        <li className='resumeTab'>
                            <a
                                href='#Resume'
                                onClick={() => pageSwitch('Resume')}
                                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                </section>
            </nav>
        </header>


    )
}

export default Header;