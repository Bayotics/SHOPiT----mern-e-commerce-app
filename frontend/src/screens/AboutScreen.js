import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Helmet } from 'react-helmet-async';
import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'
import about3 from '../assets/about3.png'
import fisherman from '../assets/fish/about-wp-4.jpg'
import discount from '../assets/fish/pngs/discount.png'
import experience from '../assets/fish/pngs/experience.png'
import subscribe from '../assets/fish/pngs/subscribe.png'
import snipped from '../assets/fish/about-wrapper.jpg'
import telephone from '../assets/fish/pngs/telephone.png'
import email from '../assets/fish/pngs/email.png'
import { Link } from 'react-router-dom';

const AboutScreen = () => {
    return (
        <div id='about-screen-main'>
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <Card style={{}}
                className="text-center"
                id='main-banner-about'>
                <Card.Body style={{marginTop: '60px'}}>
                    <span><h1 className='text-white fs-1'>About Us</h1></span>
                </Card.Body>
            </Card>
            <div className='about-intro'>
                <div className='about-intro-top'>
                    <div className='intro-wp'>
                        <img src = {snipped} alt='about-img' />
                    </div>
                    <div className='intro-caption'>
                        <h1 className='about-main-heading'>Welcome to <span>SHOPiT</span></h1>
                        <p className='about-intro-paragraph'>
                            We at SHOPiT have made it our goal to introduce you to the best that the ocean has to offer since we recognise how important it is to eat premium, sustainably sourced seafood. Our voyage starts in the middle of pure waters, where our skilled fisherman painstakingly choose only the best catches, guaranteeing our patrons a wide and delicious variety of seafood alternatives.
                        </p>
                        <Link className = '' to={'/contactus'}>
                            <div className='about-intro-btn'>
                                <button className='about-intro-btn-main'>Contact Us Now</button>
                            </div>
                        </Link>
                        
                    </div>
                </div>
                <p className='about-intro-paragraph-sub'>
                    Founded in 2024, we are dedicated to delivering the finest quality and convenience of the ocean's produce straight to your table. It is more than just a fish delivery business. Our commitment to ethical and sustainable fishing methods is what makes us unique. This helps maintain the long-term health of our seas by guaranteeing that every product you receive is not only delicious but also responsibly sourced.
                    We promise that the seafood you receive from SHOPiT is as fresh as if you had caught it yourself. We take pleasure in our streamlined and efficient supply chain. We deliver to anywhere in Lagos, Ogun and Ibadan. Monday to Saturday. Payments validates order.
                    All order and payment must come in before 10 am for same day delivery or delivery is postponed till next day. Also, there is a free delivery within Lagos for orders of N30,000 and above.
                </p>
            </div>
            <div className='about-screen-why-us'>
                <div className='why-us-icons'>
                    <h1>Why <span>SHOPiT</span></h1>
                    <div className='why-us-icons-top'>
                        <div className='why-us-top-left'>
                            <div className='why-us-top-icon'>
                                <div className='why-us-top-icon-img'>
                                    <img src= {discount} alt = 'discount' />
                                </div>
                            </div>
                            <div className='why-us-top-caption'>
                                <h1>Sea to Doorstep Freshness</h1>
                                <p>We guarantee that every piece of fish we sell is as fresh as it gets by sourcing it directly from reliable and sustainable fisheries.</p>
                            </div>
                        </div>
                        <div className='why-us-top-right'>
                            <div className='why-us-top-icon'>
                                <div className='why-us-top-icon-img'>
                                    <img src= {experience} alt = 'discount' />
                                </div>
                            </div>
                            <div className='why-us-top-caption'>
                                <h1>Wide Variety, Impeccable Quality</h1>
                                <p>Shopit boasts an extensive selection of the finest fish species, from succulent salmon to flavorful halibut and beyond.</p>
                            </div>
                        </div>
                    </div>
                    <div className='why-us-icons-top icons-bottom'>
                        <div className='why-us-top-left'>
                            <div className='why-us-top-icon'>
                                <div className='why-us-top-icon-img'>
                                    <img src= {subscribe} alt = 'discount' />
                                </div>
                            </div>
                            <div className='why-us-top-caption'>
                                <h1>Fast and Reliable Delivery</h1>
                                <p> Our team ensures that your order is carefully and swiftly dispatched, so you can enjoy your seafood at the peak of its freshness</p>
                            </div>
                        </div>
                        <div className='why-us-top-right'>
                            <div className='why-us-top-icon'>
                                <div className='why-us-top-icon-img'>
                                    <img src= {discount} alt = 'discount' />
                                </div>
                            </div>
                            <div className='why-us-top-caption'>
                                <h1>Customer-Centric Approach</h1>
                                <p>Our customer support team is ready to assist you with any inquiries, ensuring that your shopping experience with Shopit is exceptional.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='why-us-bg'>
                    <div className='why-us-img-main'>
                        <img src = {fisherman} className='why-us-bg-img' alt = "why us"/>
                    </div>
                </div>
            </div>
            <h3 className='text-center'>Meet Our Team</h3>
            <div className='d-flex justify-content-around team-main'>
                <div className='text-center'>
                    <div className="team-circle">
                        <img src={about3}
                            style={{ height: '250px', width: '250px', borderRadius: '50%', marginTop: '15px' }}
                            alt="about-one" />
                    </div>
                    <h2 className="fw-normal">Bayotics</h2>
                    <p>Team Lead</p>
                </div>
                <div className='text-center'>
                    <div className="team-circle">
                        <img src={about1}
                            style={{ height: '250px', width: '250px', borderRadius: '50%', marginTop: '15px' }}
                            alt="about-one" />
                    </div>
                    <h2 className="fw-normal">Spendingg</h2>
                    <p>Product manager</p>
                </div>
                <div className='text-center'>
                    <div className="team-circle">
                        <img src={about2}
                            style={{ height: '250px', width: '250px', borderRadius: '50%', marginTop: '15px' }}
                            alt="about-one" />
                    </div>
                    <h2 className="fw-normal">John Doe</h2>
                    <p>Head designer</p>
                </div>
            </div>
            <div className='about-contact-section'>
                <div className='about-contact-section-content'>
                    <div className='about-contact-section-caption'>
                        <h1>Get in Touch</h1>
                        <p>We love hearing from our valued customers at SHOPiT! If you have any questions, inquiries, or just want to share your seafood experiences with us, getting in touch is easy. Here's how you can reach us;</p>
                    </div>
                    <div className='about-contact-section-icons'>
                        <div className='about-contact-section-phone'>
                            <img src = {telephone} alt='telephone' />
                            <div className='phone-captions'>
                                <h4>Call Us</h4>
                                <p>+234 90 3136 0523</p>
                            </div>
                        </div>
                        <div className='about-contact-section-email'>
                            <img src = {email} alt='email' />
                            <div className='email-captions'>
                                <h4>Email Us</h4>
                                <p>contactshopit@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default AboutScreen