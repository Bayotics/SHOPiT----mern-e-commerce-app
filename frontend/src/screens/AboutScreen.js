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
            <Row style={{height: '200px', marginTop: '90px'}} id = "about-row">
                <Col>
                    <h4>Our Vision</h4>
                    <p className='text-muted'>Our vision is to be the most customer-centric company, 
                    where customers can find and
                    discover anything they might want to buy online.</p>
                </Col>
                <Col>
                    <h4>Our Vision</h4>
                    <p className='text-muted'>Our aim at SHOPiT is to listen to our customers and deliver a top tier service 
                    that allows users to feel the pride, respect and trust of everyone at our studio. 
                    We focus on guiding employees to create high-standard services and deliver excellent results..</p>
                </Col>
            </Row>
            <h3 className='text-center'>Meet Our Team</h3>
                <Row>
                    <Col className='justify-content-center'>
                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
                        <h2 className="fw-normal">Heading</h2>
                        <p>Team Lead</p>
                        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
                    </Col>
                    <Col>
                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
                        <h2 className="fw-normal">Heading</h2>
                        <p>Product Manager</p>
                        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
                    </Col>
                    <Col>
                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
                        <h2 className="fw-normal">Heading</h2>
                        <p>Head Designer</p>
                        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
                    </Col>
                </Row>
                <hr className="featurette-divider" />
                <div className="row featurette ">
                <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-body-secondary">It’ll blow your mind.</span></h2>
                    <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                </div>
                <div className="col-md-5">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
                </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span className="text-body-secondary">See for yourself.</span></h2>
                    <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
                </div>
                <div className="col-md-5 order-md-1">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
                </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1">And lastly, this one. <span className="text-body-secondary">Checkmate.</span></h2>
                    <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                </div>
                <div className="col-md-5">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
                </div>
                </div>

                <hr className="featurette-divider" />
</div>

    )
}
export default AboutScreen