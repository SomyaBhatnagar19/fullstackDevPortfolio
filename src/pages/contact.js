import React, { useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import './css/contact.css';
import { Button, Card } from 'react-bootstrap';
import { FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const contactSection = contactRef.current;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__fadeInDown');
        }
      });
    }, options);

    observer.observe(contactSection);

    return () => {
      observer.unobserve(contactSection);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, e.target, process.env.REACT_APP_EMAILJS_USER_ID)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <div className='contact-div' id='contact' ref={contactRef}>
      <h1 className="name text-center mt-5 mb-4" id="contact-title">Connect with Me</h1>
      <Card className="contact-card">
        <Card.Body>
          <form onSubmit={sendEmail}>
            <label>Name:</label>
            <input type='text' name="name" />
            <label>Email:</label>
            <input type='email' name="email" />
            <label>Message:</label>
            <textarea rows="4" name="message" />
            <Button type="submit">Hire Me</Button>
            <div className="contact-icons">
              <a href="https://www.linkedin.com/in/somya-bhatnagar" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="mailto:somya.bhatnagar@yahoo.com"><FaEnvelope /></a>
              <a href="https://wa.me/your_whatsapp_number?text=Hello%20there" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Contact;
