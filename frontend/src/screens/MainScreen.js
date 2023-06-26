import { useEffect, useReducer, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import Categories from '../components/Categories';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Slider from '../components/Slider';
// import data from '../data';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state,
               products: action.payload.products,
               page: action.payload.page,
               pages: action.payload.pages, 
               loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products, pages }, dispatch] = useReducer((reducer), {
    products: [],
    loading: true,
    error: '',
  });
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const page = sp.get('page') || 1;

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const {data} = await axios.get(`/api/products?page=${page}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, [page]);
  return (
    <div>
      <div id="hero-background" className='w-100 border mb-4'>
        <Slider />
      </div>
      <div className='border' id = "main-products">

        <Helmet>
          <title>SHOPiT</title>
        </Helmet>
        <div >
          <Categories />
        </div>
        <h1 className='text-center fw-normal'><span className='theme-color'>FEATURED </span> PRODUCTS</h1>
        <div className="products" id = "featured-products">
          {loading ? (
            <LoadingBox />
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              <Row>
                {products.map((product) => (
                  <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                    <Product product={product}></Product>
                  </Col>
                ))}
              </Row>
              <div>
                {[...Array(pages).keys()].map((x) => (
                  <Link
                    className={x + 1 === Number(page) ? 'btn text-bold' : 'btn'}
                    key={x + 1}
                    to={`/products?page=${x + 1}`}
                  >
                    {x + 1}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>

  );
}
export default HomeScreen;