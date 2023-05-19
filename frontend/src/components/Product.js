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

  return (
    <Card className='shadow-lg p-3 mb-5 bg-white rounded'>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body className = "">
        <Link className='text-decoration-none' to={`/product/${product.slug}`}>
          <Card.Title className='text-center'>{product.name}</Card.Title>
        </Link>
        <div className = "flex justify-center">
          <Rating rating={product.rating} numReviews={product.numReviews} />
        </div>
        <Card.Text className='text-xl font-semibold text-center'>₦{product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <div  className='flex justify-center'>
            <Button variant="danger" disabled>
            Out of stock
          </Button>
          </div>
          
        ) : (
          <div className='flex justify-center'>
            <Button onClick={() => addToCartHandler(product)}>Add to cart</Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
export default Product;