import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Helmet } from 'react-helmet-async';


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
            <Row style={{height: '200px', marginTop: '90px'}}>
                <Col>
                    <h4>Our Vision</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque 
                       aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, 
                       ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.</p>
                </Col>
                <Col>
                    <h4>Our Vision</h4>
                    <p className='text-grey-100'>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.
                       Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
                       jPraesent elementum hendrerit tortor. Sed semper lorem at felis.</p>
                </Col>
            </Row>
        </div>
    )
}
export default AboutScreen