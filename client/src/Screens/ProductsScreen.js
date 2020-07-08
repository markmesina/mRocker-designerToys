import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';


function ProductsScreen(props) {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [numReviews, setNumReviews] = useState('');
  
  const productSave = useSelector(state=> state.productSave);
  const { loading: loadingSave, success: successSave, error: errorSave } = productSave;

  const dispatch = useDispatch();

  useEffect(() => {

    return () => {
      //
    };

  }, [userInfo]);


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveProduct({name, price}));

  }


  return <div className='form'>
    <form onSubmit={submitHandler}>
      <ul className='form-container'>
        <li>
          <h2>Post Product</h2>
        </li>
        <li>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </li>
        <li>
          <label htmlFor='name'>
            Name: 
          </label>
          <input type='text' name='name' 
          id='name' onChange={(e) => setName(e.target.value)}>
          </input>
        </li>
        <li>
          <button type='submit' className='button primary'>Post</button>
        </li>

      </ul>
    </form>

  </div>
}

export default SigninScreen;