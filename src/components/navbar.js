import React from 'react';

export default function Navbar() {
    const linkStlye = { border: '10px black', padding: '5px' };

    return (
        <nav classname='navbar'>
            <section
                style={{
                    display: 'flex',
                    fontFamily: '',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-end'
                }}
            >
                <div style={linkStlye}>
                    <a href='#'>Portolfio</a>
                </div>
                <div style={linkStlye}>
                    <a href='#'>About Me</a>
                </div>
                <div style={linkStlye}>
                    <a href='#'>Resume</a>
                </div>
                <div style={linkStlye}>
                    <a href='#'>Contact Me</a>
                </div>
            </section>
        </nav>
    )
}
