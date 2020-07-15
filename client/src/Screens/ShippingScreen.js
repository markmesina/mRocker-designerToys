import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveShipping } from '../actions/cartAction';


function ShippingScreen(props) {

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping(address, city, postalCode, country));
  }


  return <div className='form'>
    <form onSubmit={submitHandler}>
      <ul className='form-container'>
        <li>
          <h2>Shipping</h2>
        </li>
        <li>
          <label htmlFor='address'>
            Address: 
          </label>
          <input type='address' name='address' 
          id='address' onChange={(e) => setAddress(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor='city'>
            City: 
          </label>
          <input type='city' name='city' 
          id='city' onChange={(e) => setCity(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor='postalCode'>
            Postal Code: 
          </label>
          <input type='postalCode' name='postalCode' 
          id='postalCode' onChange={(e) => setPostalCode(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor='Country'>
            Country: 
          </label>
          <input type='Country' name='Country' 
          id='Country' onChange={(e) => setCountry(e.target.value)}>
          </input>
        </li>
        <li>
          <button type='submit' className='button primary'>Continue</button>
        </li>
      </ul>
    </form>

  </div>
}

export default ShippingScreen;
