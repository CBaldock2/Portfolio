import { React, useRef, useState } from "react";
import '../styles/style.css';
import { Container, TextField } from "@mui/material";
import emailjs from 'emailjs-com'

function ContactMe() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameErr, setNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [messageErr, setMessageErr] = useState(false);
    const form = useRef();

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

    const sendEmail = (e) => {
        e.preventDefault();

        console.log(sendEmail)

        emailjs
            .sendForm(
                'service_uxohnik',
                'template_5cv5f24',
                form.current,
                'c77soGEhYFY6vRD4D')
            .then(
                (result) => {
                    console.log(result.text);
                    setName('');
                    setEmail('');
                    setMessage('');
                    setNameErr(false);
                    setEmailErr(false);
                    setMessageErr(false);
                },
                (error) => {
                    console.log(error.text);
                });
    }


    return (
        <div className='contactBG'>
            <h2>If you have any questions or just want to say hi, I'll try my best to get back to you!</h2>
            <Container>
                <form ref={form} onSubmit={sendEmail}>
                    <TextField
                        id='name'
                        label="Name"
                        fullWidth margin="normal"
                        value={name}
                        onChange={handleNameChange}
                        error={nameErr}
                        helperText={nameErr ? 'Name is required' : ''}
                        name='user_name'
                    />
                    <TextField
                        id='email'
                        label="Email"
                        fullWidth margin="normal"
                        value={email}
                        onChange={handleEmailChange}
                        error={emailErr}
                        helperText={emailErr ? 'Email is required' : ''}
                        name='user_email'
                    />
                    <TextField
                        id='message'
                        label="Message"
                        fullWidth margin="normal"
                        multiline rows={4}
                        value={message}
                        onChange={handleMessageChange}
                        error={messageErr}
                        helperText={messageErr ? 'A message is required' : ''}
                        name='message'
                    />
                    <button className='sendBtn' onClick={sendEmail}>Send!</button>
                </form>
            </Container>

        </div>
    )
}

export default ContactMe;