import Carousel from 'react-bootstrap/Carousel';
import bgOne from '../assets/fish/bg-1-edited.jpg';
import bgTwo from '../assets/fish/bg-2-edited.jpg';
import bgThree from '../assets/fish/bg-3-edited.jpg';
import { Link } from 'react-router-dom';

const  Slider = () => {
  return (
    <Carousel>
      <Carousel.Item interval={10000}>
        <img
          className="d-block w-100 carousel-background"
          src={bgOne}
          alt="First carousel slide"
          style={{ height: "800px", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        />
        <Carousel.Caption id="carousel-caption" className='carousel-animation'>
          <p>FRESH EVERYDAY</p>
          <h1 className='display-1'>Fresh fish at your fingertips</h1>
          <Link to = "/search?category=all&query=all&price=all&rating=all&order=newest&page=1" >
            <button className='carousel-btn'>Shop now</button>  
          </Link>
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
          <p>SWIFT DELIVERY</p>
          <h1 className='display-1'>Taste the Ocean's freshness</h1>
          <Link to = "/search?category=all&query=all&price=all&rating=all&order=newest&page=1" >
            <button className='carousel-btn'>Shop now</button>  
          </Link>
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
            <p>ORDER NOW</p>
          <h1 className='display-1'>100% Fresh Collection</h1>
          <Link to = "/search?category=all&query=all&price=all&rating=all&order=newest&page=1" >
            <button className='carousel-btn'>Shop now</button>  
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


export default Slider;