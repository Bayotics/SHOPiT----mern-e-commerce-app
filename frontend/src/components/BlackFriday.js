import Carousel from 'react-bootstrap/Carousel';
import bfFish from '../assets/fish/pngs/pngfish-one.png';
import holidayfish from '../assets/fish/pngs/png-fish-eight.png'

function BlackFriday() {
  return (
    <Carousel fade className='bf-carousel'>
      <Carousel.Item className='carousel-slid-one' interval={5000}>
        <div className='bf-main'>
          <div className=' bf-inner-left'>
            <div><h1>Yuletide <br /> Sales!</h1></div>
            <div className='bf-left-mid'>
              <div className='discount-sect'>
                <h2>UP TO 50% OFF</h2>
              </div>
            </div>
            <div className='bf-btn'>
              <button>Shop Now  →</button>
            </div>
          </div>
          <div className='bf-inner-right'>
            <div className='bf-fish-main'>
              <img src= {bfFish} alt='black friday img' className='bf-img'/>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='carousel-slid-two' interval={5000}>
        <div className='slid-two-items'>
          <div className='slid-two-contents'>
            <div className='slid-two-texts'>
              <h1>Early <br /> Holiday Deals</h1>
              <div className='bf-btn'>
                <button>Shop Now  →</button>
              </div>
            </div>
            <div className=''>
              <div className='sixty-percent-off'>
                <div className='sixty-percent-off-style'>
                  <h6>UP <br /> TO</h6>
                  <h5 className='sixty-percent'>60%</h5>
                </div>
                <h1 className='sixty-percent-off-off'>OFF</h1>
              </div>
            </div>
            <div className=''>
              <img src= {holidayfish} alt='holiday img' className='holiday-img'/>
            </div>
          </div>
        </div>
      </Carousel.Item>
      {/* <Carousel.Item className='carousel-slid-three'>
        <h1>Hello this is slide n3</h1>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default BlackFriday;