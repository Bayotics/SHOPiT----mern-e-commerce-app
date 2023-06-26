import Carousel from 'react-bootstrap/Carousel';
import bgOne from '../assets/hero-1.jpg';
import bgTwo from '../assets/hero-2.jpg';
import bgThree from '../assets/hero-3.jpg';
import Button from 'react-bootstrap/Button';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={bgOne}
          alt="First slide"
          style={{height: "800px"}}
        />
        <Carousel.Caption id = "carousel-caption">
          <h1 className='display-1'>REASONABLE PRICE</h1>
          <p>10% OFF YOUR FIRST ORDER</p>
          <Button variant='primary'>SHOP NOW</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={bgTwo}
          alt="Second slide"
          style={{height: "800px"}}
        />
        <Carousel.Caption id = "carousel-caption">
          <h1 className='display-1'>REASONABLE PRICE</h1>
          <p>10% OFF YOUR FIRST ORDER</p>
          <Button variant='primary'>SHOP NOW</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bgThree}
          alt="Third slide"
          style={{height: "800px"}}
        />
        <Carousel.Caption id = "carousel-caption">
          <h1 className='display-1'>REASONABLE PRICE</h1>
          <p>10% OFF YOUR FIRST ORDER</p>
          <Button variant='primary'>SHOP NOW</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;