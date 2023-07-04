import React, { useEffect, useReducer, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import { Helmet } from 'react-helmet-async';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Rating from '../components/Rating';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Button from 'react-bootstrap/Button';
import Product from '../components/Product';
import LinkContainer from 'react-router-bootstrap/LinkContainer';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        products: action.payload.products,
        page: action.payload.page,
        pages: action.payload.pages,
        countProducts: action.payload.countProducts,
        loading: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

const prices = [
  {
    name: '₦1 to ₦1,000',
    value: '1-1000',
  },
  {
    name: '₦1k to ₦10k',
    value: '1000-10000',
  },
  {
    name: '₦10k to ₦100k',
    value: '10000-100000',
  },
  {
    name: '₦100k to ₦500k',
    value: '100000-500000'
  },
  {
    name: '₦500k to ₦1M',
    value: '500000-1000000'
  },
  {
    name: '₦1M to ₦5M',
    value: '1000000-5000000'
  },
  {
    name: '₦5M to ₦20M',
    value: '5000000-20000000'
  }
];

export const ratings = [
  {
    name: '4stars & up',
    rating: 4,
  },

  {
    name: '3stars & up',
    rating: 3,
  },

  {
    name: '2stars & up',
    rating: 2,
  },

  {
    name: '1stars & up',
    rating: 1,
  },
];

export default function SearchScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search); // /search?category=Shirts
  const category = sp.get('category') || 'all';
  const query = sp.get('query') || 'all';
  const price = sp.get('price') || 'all';
  const rating = sp.get('rating') || 'all';
  const order = sp.get('order') || 'newest';
  const page = sp.get('page') || 1;

  const [{ loading, error, products, pages, countProducts }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: '',
    });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `/api/products/search?page=${page}&query=${query}&category=${category}&price=${price}&rating=${rating}&order=${order}`
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(error),
        });
      }
    };
    fetchData();
  }, [category, error, order, page, price, query, rating]);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, [dispatch]);

  const getFilterUrl = (filter, skipPathname) => {
    const filterPage = filter.page || page;
    const filterCategory = filter.category || category;
    const filterQuery = filter.query || query;
    const filterRating = filter.rating || rating;
    const filterPrice = filter.price || price;
    const sortOrder = filter.order || order;
    return `${
      skipPathname ? '' : '/search?'
    }category=${filterCategory}&query=${filterQuery}&price=${filterPrice}&rating=${filterRating}&order=${sortOrder}&page=${filterPage}`;
  };
    return (
    <div>
      <Helmet>
        <title>Search Products</title>
      </Helmet>
       <Card style={{height: '200px', marginTop: '10px'}}
        className="text-center"
        id='main-banner'>
          <Card.Body style={{marginTop: '60px'}}>
              <span><h1 className='text-white fs-1'>Our Shop</h1></span>
          </Card.Body>
        </Card>
      <Row id = "search-row" style={{marginTop: '90px'}}>
        <Col md={3}>
          <div>
            <Card style = {{width: '18rem'}} >
              <Card.Header>
                <h3>Category</h3>
              </Card.Header>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Link
                  className={'all' === category ? 'text-bold' : ''}
                  to={getFilterUrl({ category: 'all' })}
                >
                  Any
                </Link>
                </ListGroup.Item>
                {categories.map((e) => (
                  <ListGroup.Item>
                    <Link
                    className={e === category ? 'text-bold' : ''}
                    to={getFilterUrl({ category: e })}
                  >
                    {e}
                  </Link>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </div>
          <div className='mt-2'>
            <Card style={{ width: '18rem' }}>
                <Card.Header><h3>Price</h3></Card.Header>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Link
                  className={'all' === price ? 'text-bold' : ''}
                  to={getFilterUrl({ price: 'all' })}
                  >
                    Any
                  </Link>
                  </ListGroup.Item>
                  {prices.map((e) => (
                    <ListGroup.Item key = {e.value}>
                      <Link
                        to={getFilterUrl({ price: e.value })}
                        className={e.value === price ? 'text-bold' : ''}
                      >
                        {e.name}
                      </Link>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
            </Card>
          </div>
          <div className='mt-2'>
            <Card style={{ width: '18rem' }}>
              <Card.Header><h3>Avgerage Rating</h3></Card.Header>
              <ListGroup variant='flush'>
                {ratings.map((e) => (
                  <ListGroup.Item key = {e.rating}>
                    <Link
                      to={getFilterUrl({ rating: e.rating })}
                      className={`${e.rating}` === `${rating}` ? 'text-bold' : ''}
                    >
                      <Rating caption={' & up'} rating={e.rating}></Rating>
                    </Link>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <Link
                    to={getFilterUrl({ rating: 'all' })}
                    className={rating === 'all' ? 'text-bold' : ''}
                  >
                    <Rating caption={' & up'} rating={0}></Rating>
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        </Col>
        <Col md={9}>
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              <Row className="justify-content-between mb-3">
                <Col md={6}>
                  <div>
                    {countProducts === 0 ? 'No' : countProducts} Results
                    {query !== 'all' && ' : ' + query}
                    {category !== 'all' && ' : ' + category}
                    {price !== 'all' && ' : Price ' + price}
                    {rating !== 'all' && ' : Rating ' + rating + ' & up'}
                    {query !== 'all' ||
                    category !== 'all' ||
                    rating !== 'all' ||
                    price !== 'all' ? (
                      <Button
                        variant="light"
                        onClick={() => navigate('/search')}
                      >
                        <i className="fas fa-times-circle"></i>
                      </Button>
                    ) : null}
                  </div>
                </Col>
                <Col className="text-end">
                  Sort by{' '}
                  <select
                    value={order}
                    onChange={(e) => {
                      navigate(getFilterUrl({ order: e.target.value }));
                    }}
                  >
                    <option value="newest">Latest Arrivals</option>
                    <option value="lowest">Price: Low to High</option>
                    <option value="highest">Price: High to Low</option>
                    <option value="toprated">Avgerage Reviews</option>
                  </select>
                </Col>
              </Row>
              {products.length === 0 && (
                <MessageBox>No Product Found</MessageBox>
              )}

              <Row>
                {products.map((product) => (
                  <Col sm={6} lg={4} className="mb-3" key={product._id}>
                    <Product product={product}></Product>
                  </Col>
                ))}
              </Row>

              <div>
                {[...Array(pages).keys()].map((x) => (
                  <LinkContainer
                    key={x + 1}
                    className="mx-1"
                    to={{
                      pathname: "/search",
                      search: getFilterUrl({ page: x + 1 }).substring(7),
                    }}
                  >
                    <Button
                      className={Number(page) === x + 1 ? "text-bold" : ""}
                      variant="light"
                    >
                      {x + 1}
                    </Button>
                  </LinkContainer>
                ))}
              </div>
            </>
          )}
        </Col>
      </Row>
    </div>
  );
}