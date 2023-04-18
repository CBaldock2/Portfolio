import { React, useState } from "react";
import '../styles/style.css';
import { Container, TextField, Button } from "@mui/material";

function ContactMe() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameErr, setNameErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [messageErr, setMessageErr] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
        setNameErr(e.target.value === '');
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailErr(e.target.value === '');
    };
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        setMessageErr(e.target.value === '');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='contactbg'>
            <h1>Contact Me</h1>
            <Container>
                <TextField
                    id='name'
                    label="Name"
                    fullWidth margin="normal"
                    value={name}
                    onChange={handleNameChange}
                    error={nameErr}
                    helperText={ nameErr ? 'Name is required' : '' }
                />
                <TextField
                    id='email'
                    label="Email"
                    fullWidth margin="normal"
                    value={email}
                    onChange={handleEmailChange}
                    error={emailErr}
                    helperText={ emailErr ? 'Email is required' : '' }
                />
                <TextField
                    id='message'
                    label="Message"
                    fullWidth margin="normal" 
                    multiline rows={4}
                    value={message}   
                    onChange={handleMessageChange}
                    error={messageErr}
                    helperText={ messageErr ? 'A message is required' : '' }
                />
                <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
            </Container>
        </div>
    )
}

export default ContactMe;