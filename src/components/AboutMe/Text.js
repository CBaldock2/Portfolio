import React from "react";
import '../../styles/style.css';
import TypeWriter from 'typewriter-effect';

function Text() {
    return (
        <TypeWriter
        options={{
            strings: [
                'Hello, I\'m Chris Baldock',
                'This is a little about me'
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 60
        }}
        />
    )
}

export default Text