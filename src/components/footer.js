import React from 'react';
import { IconButton } from '@mui/material';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
    return (
        <footer className='footer'>
            <IconButton href='https://github.com/CBaldock2'>
                <GitHubIcon/>
            </IconButton>
            <IconButton href='https://www.linkedin.com/in/christopher-baldock/'>
                <LinkedInIcon/>
            </IconButton>
            <IconButton href='twitter.com'>
                <TwitterIcon/>
            </IconButton>
        </footer>
    )
}

export default Footer;