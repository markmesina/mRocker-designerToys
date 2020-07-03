import React from 'react';
// import data from './data';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import SigninScreen from './Screens/SigninScreen';
function App() {

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  }
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open')
  }
  return (
    <BrowserRouter>
    <div className='grid-container'>
    <header className='header'>
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <Link to='/'> mRocker Designer Toys</Link>
      </div>
      <div className="header-links">
        <a href='cart.html'>Cart</a>
        <a href="signin.html"> Sign In</a>
      </div>
    </header>
    <aside className='sidebar'>
      <h3>Shopping Categories</h3>
      <button className='sidebar-close-button' onClick={closeMenu}>x</button>
      <ul>
        <li><a href='index.html'>mRocker Originals</a></li>
        <li><a href='index.html'>mRocker Customs</a></li>
      </ul>
    </aside>
    <main className='main'>
      <div className="content">
        <Route path='/signin' component={SigninScreen}/>
        <Route path='/' exact={true} component={HomeScreen}/>
        <Route path='/products/:id' component={ProductScreen}/>
        <Route path="/cart/:id" component = {CartScreen}/>
      </div>
    </main>
    <footer className='footer'>
      All rights reserved
    </footer>
  </div>
    </BrowserRouter>
  );
}

export default App;
