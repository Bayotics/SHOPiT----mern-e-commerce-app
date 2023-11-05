import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function BlackFriday() {
  return (
    <Carousel fade className=''>
      <Carousel.Item interval={1000}>
        <h1>Hello, this is slide n1</h1>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <h2>Hello, this is slide n2</h2>
      </Carousel.Item>
      <Carousel.Item>
        <h1>Hello this is slide n3</h1>
      </Carousel.Item>
    </Carousel>
  );
}

export default BlackFriday;