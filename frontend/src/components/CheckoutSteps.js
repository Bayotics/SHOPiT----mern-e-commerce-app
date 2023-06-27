import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CheckoutSteps(props) {
  return (
    <Row className="checkout-steps">
      <Col className={props.step1 ? 'active' : ''}>1 Sign-In</Col>
      <Col className={props.step2 ? 'active' : ''}>2 Shipping Info</Col>
      <Col className={props.step3 ? 'active' : ''}>3 Choose Payment Method</Col>
      <Col className={props.step4 ? 'active' : ''}>4 Place Order</Col>
    </Row>
  );
}