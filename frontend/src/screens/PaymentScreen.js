import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Store } from '../Store';
import { getError } from '../utils';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, payment: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

const PaymentScreen = () => 
{
    
  const { state } = useContext(Store);
  const { userInfo } = state;

  const params = useParams();
  const { id: paymentId } = params;
  const navigate = useNavigate();

  const [{ loading, error, payment }, dispatch] = useReducer(reducer, {
    loading: true,
    payment: {},
    error: '',
  });

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/payments/${paymentId}`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
        console.log(data)
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };

    if (!userInfo) {
      return navigate('/login');
    }
    if (!payment._id || (payment._id && payment._id !== paymentId)) {
      fetchPayment();
    }else{

    }
  }, [payment, userInfo, paymentId, navigate]);
    return(
        <div>This is the payment Screen</div>
    )
}


export default PaymentScreen;