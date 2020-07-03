import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


function SigninScreen(props) {

  const dispatch = useDispatch();

  useEffect(() => {

    return () => {
      //
    };

  }, []);



  return <div className='form'>
    <form onSubmit={submitHandler}>
      <ul className='form-container'>
        <li>
          <label for='email'>
            Email
          </label>
          <input type='email' name='email' 
          id='email' onChange={(e) => setEmail(e.target.value)}>
          </input>
        </li>
        <li>
          <label for='password'>
            Password
          </label>
            <input type='password' name='password'
            id='password' onChange={(e) => setPassword(e.target.value)}>
            </input>
        </li>
        <li>
          <button type='submit' className='button primary'>Sign In</button>
        </li>
        <li>
          
        </li>
      </ul>
    </form>

  </div>
}

export default SigninScreen;
