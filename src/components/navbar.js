import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
    const linkStyle = { border: '1px', padding: '5px' };

    return (
        <nav className='navbar'>
            <section
                style={{
                    display: 'flex',
                    fontFamily: 'roboto',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                    marginLeft: 'auto'
                }}
            >
                <div style={linkStyle}>
                    <a href='/'>About Me</a>
                </div>
                <div style={linkStyle}>
                    <a href='/'>Portolfio</a>
                </div>
                <div style={linkStyle}>
                    <a href='/'>Resume</a>
                </div>
                <div style={linkStyle}>
                    <a href='/'>Contact Me</a>
                </div>
            </section>
        </nav >
    );
}

export default Navbar;