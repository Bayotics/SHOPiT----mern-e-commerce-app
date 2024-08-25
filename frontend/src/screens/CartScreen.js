import { useContext } from 'react';
import { Store } from '../Store';
import { Helmet } from 'react-helmet-async';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MessageBox from '../components/MessageBox';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

export default function CartScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (item, quantity) => {
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
  const removeItemHandler = (item) => {
    ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  const checkoutHandler = () => {
    navigate('/signin?redirect=/shipping');
  };

  return (
    <div className='shopping-cart-screen-main'>
      <Helmet >
        <title>Shopping Cart</title>
      </Helmet>
      <div className=" page-header">
        		<div className="container">
        			<h1 className="page-title  text-center">Shopping Cart</h1>
        		</div>
      </div>
      <Row className='shopping-cart-row'>
        <Col md = {8} className='shopping-cart-table'>
          {cartItems.length === 0 ? (
            <MessageBox>
              Cart is currently empty. <Link to="/">Go Shopping</Link>
            </MessageBox>
          ) : (
          <Table bordered hover>
             <thead>
              <tr>
                <th>Image</th>
                <th>Product name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            {cartItems.map((e) => (
              <tbody key = {e._id}>
              <tr>
                <td>
                  <img style ={{height: '60px', width: '120px'}}
                        src={e.image}
                        alt={e.title}
                        className="img-fluid rounded img-responsive"
                      ></img>
                </td>
                <td><Link to={`/product/${e._id}`}>{e.title}</Link></td>
                <td>
                  <Button
                        onClick={() =>
                          updateCartHandler(e, e.quantity - 1)
                        }
                        variant="light"
                        disabled={e.quantity === 1}
                      >
                        <i className="fas fa-minus-circle"></i>
                      </Button>{' '}
                      <span>{e.quantity}</span>{' '}
                      <Button
                        variant="light"
                        onClick={() =>
                          updateCartHandler(e, e.quantity + 1)
                        }
                        disabled={e.quantity === e.countInStock}
                      >
                        <i className="fas fa-plus-circle"></i>
                      </Button>
                </td>
                <td>₦{e.price}</td>
                <td><Button
                        onClick={() => removeItemHandler(e)}
                        variant="light"
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                </td>
              </tr>
              </tbody>
            ))}
          </Table>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>
                    Total ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                    items) : ₦
                    {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <button
                      type="button"
                      className="checkout-button"
                      onClick={checkoutHandler}
                      disabled={cartItems.length === 0}
                    >
                      Checkout
                    </button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}