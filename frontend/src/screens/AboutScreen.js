import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Helmet } from 'react-helmet-async';
import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'
import about3 from '../assets/about3.png'
import cart5 from '../assets/hero-7.jpg';
import cart2 from '../assets/hero-8.jpg';
import cart4 from '../assets/cart4.jpg'

const AboutScreen = () => {
    return(
        <div>
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <Card style={{height: '200px', marginTop: '10px'}}
                className="text-center"
                id='main-banner'>
                <Card.Body style={{marginTop: '60px'}}>
                    <span><h1 className='text-white fs-1'>About Us</h1></span>
                </Card.Body>
            </Card>
            <Row style={{height: '200px', marginTop: '90px'}} id = "about-row">
                <Col>
                    <h4>Our Vision</h4>
                    <p className='text-muted'>Our vision is to be the most customer-centric company, 
                    where customers can find and
                    discover anything they might want to buy online.</p>
                </Col>
                <Col>
                    <h4>Our Mission</h4>
                    <p className='text-muted'>Our aim at SHOPiT is to listen to our customers and deliver a top tier service 
                    that allows users to feel the pride, respect and trust of everyone at our studio. 
                    We focus on guiding employees to create high-standard services and deliver excellent results..</p>
                </Col>
            </Row>
                <hr className="featurette-divider" />

                <div className="row featurette ">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">Fast and Easy Payments.</h2>
                        <p className="lead">Make Payments for your favorite products with ease. Any time, wherever you are in the world</p>
                    </div>
                    <div className="col-md-5">
                        <div className='border'>
                            <img src = {cart2} alt = "cart1" style={{height: '500px', width: '100%'}} />
                        </div>
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading fw-normal lh-1">Best Prices<span className="text-body-secondary"></span></h2>
                        <p className="lead">Every Product in our store is at a discounted price. You won't find them that Cheap anywhere</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <div className='border'>
                            <img src = {cart5} alt = "cart1" style={{height: '500px', width: '100%'}} />
                        </div>
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">Swift Delivery</h2>
                        <p className="lead">We deliver swiftly to over 100 countries around the world.
                        We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt</p>
                    </div>
                    <div className="col-md-5">
                        <div className='border'>
                            <img src = {cart4} alt = "cart1" style={{height: '500px', width: '100%'}} />
                        </div>
                    </div>
                </div>
                <hr className="featurette-divider" />

                <h3 className='text-center'>Meet Our Team</h3>
                <div className='d-flex justify-content-around team-main'>
                    <div className='text-center'>
                        <div className="team-circle">
                            <img src={about3} 
                             style={{height: '250px', width: '250px', borderRadius: '50%', marginTop: '15px'}}
                             alt = "about-one" />
                        </div>
                        <h2 className="fw-normal">Unclebayotics</h2>
                        <p>Team Lead</p>
                    </div>
                    <div className='text-center'>
                        <div className="team-circle">
                            <img src={about1}
                             style={{height: '250px', width: '250px', borderRadius: '50%', marginTop: '15px'}} 
                             alt = "about-one" />
                        </div>
                        <h2 className="fw-normal">Bayospending</h2>
                        <p>Product manager</p>
                    </div>
                    <div className='text-center'>
                        <div className="team-circle">
                            <img src={about2} 
                            style={{height: '250px', width: '250px', borderRadius: '50%', marginTop: '15px'}} 
                            alt = "about-one" />
                        </div>
                        <h2 className="fw-normal">John Doe</h2>
                        <p>Head designer</p>
                    </div>
                </div>
</div>

    )
}
export default AboutScreen