import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { useNavigate } from 'react-router-dom';

export default function SearchBox() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    if(query !== ''){
        navigate(query ? `/search/?query=${query}` : '/search');
        e.target.reset();
    }
  };

  return (
    <Form className="d-flex me-auto rounded-0" id = "search-bar" onSubmit={submitHandler}>
      <InputGroup>
        <FormControl
          className='rounded-0'
          type="text"
          name="q"
          id="q"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search product"
          aria-label="Search Products"
          aria-describedby="button-search"
        ></FormControl>

        <button className = "rounded-right" type="submit" id="button-search">
          <i className="fas fa-search"></i>
        </button>
      </InputGroup>
    </Form>
  );
}