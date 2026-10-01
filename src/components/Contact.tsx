import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      const templateParams = {
        name: name,
        email: email,
        message: message
      };

      console.log(templateParams);
      emailjs.send('service_4ol3hoh', 'template_6n8si3r', templateParams, 'ftl3zWhQrHxVRsBqE').then(
        (response: EmailJSResponseStatus) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error: any) => {
          console.log('FAILED...', error);
        },
      );
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="body-container" id="contact">
      <h1>Contact Me</h1>
      <p>Interested in collaborating? Connect with me on <a href="https://www.linkedin.com/in/yonahcitron/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, or drop me a message below!</p>
      <Box
        ref={form}
        component="form"
        noValidate
        autoComplete="off"
        className='contact-form'
        onSubmit={sendEmail}
      >
        <div className='form-flex'>
          <TextField
            required
            id="outlined-required"
            label="Your Name"
            placeholder="What's your name?"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            error={nameError}
            helperText={nameError ? "Please enter your name" : ""}
            
          />
          <TextField
            required
            id="outlined-required"
            label="Email / Phone"
            placeholder="How can I reach you?"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            error={emailError}
            helperText={emailError ? "Please enter your email or phone number" : ""}
          />
        </div>
        <TextField
          required
          id="outlined-multiline-static"
          label="Message"
          placeholder="Send me any inquiries or questions"
          multiline
          rows={10}
          className="body-form"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          error={messageError}
          helperText={messageError ? "Please enter the message" : ""}
        />
        <Button variant="contained" endIcon={<SendIcon />} type="submit">
          Send
        </Button>
      </Box>
    </div>
  );
}

export default Contact;
