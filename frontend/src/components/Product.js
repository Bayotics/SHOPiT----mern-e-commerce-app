import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../Store';



function Product(props) {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };
  console.log()

  return (
    <Card className='main-product-card shadow-lg mb-5 bg-white rounded'>
      <Link to={`/product/${product._id}`}>
        <img 
        src={product.image} 
        className="card-img-top border" 
        alt={product.title} 
        style={{height: "196.5px", width: "100%"}}
        />
      </Link>
      <Card.Body className = "">
        <Link className='text-decoration-none' to={`/product/${product._id}`}>
          <Card.Title className='text-dark product-title'>{product.title}</Card.Title>
        </Link>

        {/* <div className = "d-flex justify-content-center"> //rating
          <Rating rating={product.rating} />
        </div> */}
        <div className='card-text-main d-flex'>
          <div>
            <Card.Text className='text-xl font-semibold text-center'>₦{product.price} /500g</Card.Text>
          </div>
          <div>
            {product.countInStock === 0 ? (
              <div  className='d-flex justify-content-center'>
                <Button variant="danger" disabled>
                Out of stock
              </Button>
              </div>
            ) : (
              <div className='d-flex justify-content-center'>
                <Button onClick={() => addToCartHandler(product)}>
                  <i className="fas fa-shopping-cart"></i>
                </Button>
              </div>
            )}
          </div>
        </div>
        
      </Card.Body>
    </Card>
  );
}
export default Product;