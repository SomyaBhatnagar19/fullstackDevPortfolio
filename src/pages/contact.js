/* /views/pages/contact.js */

import React from 'react';
import './css/contact.css';
import {Button, Card} from  "react-bootstrap";

function Contact() {
  return (
    <div className='contact-div' id='contact'>
    <h1 className="name animate__animated animate__fadeInDown text-center mt-5 mb-4" id="contact-title">Connect with Me</h1>
    <Card className="contact-card">
      <Card.Body>
        <form>
          <label>Name:</label>
          <input type='text' />
          <label>Email:</label>
          <input type='email' />
          <label>Message:</label>
          <textarea rows="4" />
          <Button>Hire Me</Button>
        </form>
      </Card.Body>
    </Card>
  </div>
)
}

export default Contact;