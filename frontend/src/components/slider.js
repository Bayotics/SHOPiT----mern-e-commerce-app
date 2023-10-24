import Carousel from 'react-bootstrap/Carousel';
import bgOne from '../assets/fish/bg-1-edited.jpg';
import bgTwo from '../assets/fish/bg-2-edited.jpg';
import bgThree from '../assets/fish/bg-3-edited.jpg';
import Button from 'react-bootstrap/Button';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={10000}>
        <img
          className="d-block w-100"
          src={bgOne}
          alt="First slide"
          style={{ height: "800px" }}
        />
        <Carousel.Caption id="carousel-caption">
          <p>FRESH EVERYDAY</p>
          <h1 className='display-1'>100% Fresh Collection</h1>
          <Button variant='primary'>SHOP NOW!</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000}>
        <img
          className="d-block w-100"
          src={bgTwo}
          alt="Second slide"
          style={{ height: "800px" }}
        />
        <Carousel.Caption id="carousel-caption">
          <p>FRESH EVERYDAY</p>
          <h1 className='display-1'>100% Fresh Collection</h1>
          <Button variant='primary'>SHOP NOW</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  interval={10000}>
        <img
          className="d-block w-100"
          src={bgThree}
          alt="Third slide"
          style={{ height: "800px" }}
        />
        <Carousel.Caption id="carousel-caption">
            <p>FRESH EVERYDAY</p>
          <h1 className='display-1'>100% Fresh Collection</h1>
          <Button variant='primary'>SHOP NOW</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;