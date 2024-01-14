import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Helmet } from 'react-helmet-async';
import location from "../assets/fish/pngs/location.png"
import email from "../assets/fish/pngs/email.png"
import telephone from "../assets/fish/pngs/telephone.png"
const FORM_ENDPOINT = "https://public.herotofu.com/v1/f1ee8b90-b2d3-11ee-ae0b-a7e011fe96d3";

const ContactScreen = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

    return (
        <div className="contact-screen-main">
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <Card style={{}}
                className="text-center"
                id='main-banner-contact'>
                <Card.Body style={{marginTop: '60px'}}>
                    <span><h1 className='text-white fs-1'>Contact Us</h1></span>
                </Card.Body>
            </Card>
            <div className='contact-form-main'>
                <p className='contact-form-header'>Get in Touch</p>
                <h1>For Query/Order</h1>
                <div className='contact-form'>
                    <div className='contact-info'>
                        <div className='contact-address contact-info-card'>
                            <img className='contact-location-img' src = {location} alt='location' />
                            <p>Chief Market, Epe Lagos</p>
                        </div>
                        <div className='contact-tel contact-info-card'>
                            <img src = {telephone} alt='location' />
                            <p>+234 (903) 136-0523</p>
                        </div>
                        <div className='contact-email contact-info-card'>
                            <img src = {email} alt='location' />
                            <p>contactshopit@gmail.com</p>
                        </div>
                    </div>
                    <div className='contact-input'>
                        <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
                            <div>
                                <input id='name' type="text" placeholder="Your name" name="name" required />
                            </div>
                            <div>
                                <input id='email' type="email" placeholder="Email" name="email" required />
                            </div>
                            <div>
                                <textarea id='message' placeholder="Your message" name="message" required />
                            </div>
                            <div className='submit-btn'>
                                <button id='submit' type="submit"> Send message </button>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ContactScreen