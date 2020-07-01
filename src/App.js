import React from 'react';


function App() {

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  }
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open')
  }
  return (
    <div className='grid-container'>
    <header className='header'>
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <a href='index.html'> mRocker Designer Toys</a>
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
        <ul className='products'>
          <li>
            <div className="product">
              <img className='product-image' src='/images/tupac.jpg' alt='product'/>
              <div className="product-name">
                <a href="product.html">Tupac Mighty Migs</a>
              </div>
              <div className="product-brand">mRocker Customs</div>
              <div className="product-price">$60</div>
              <div className="product-rating">4.5 starts(10 reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className='product-image' src='/images/venompool.jpg' alt='product'/>
              <div className="product-name">
                <a href="product.html">VenomPool</a>
              </div>
              <div className="product-brand">mRocker Customs</div>
              <div className="product-price">$60</div>
              <div className="product-rating">4.5 starts(10 reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className='product-image' src='/images/deadpool.jpg' alt='product'/>
              <div className="product-name">
                <a href="product.html">Deadpool Mighty Migs</a>
              </div>
              <div className="product-brand">mRocker Customs</div>
              <div className="product-price">$60</div>
              <div className="product-rating">4.5 starts(10 reviews)</div>
            </div>
          </li>
        </ul>
      </div>
    </main>
    <footer className='footer'>
      All right reserved
    </footer>
  </div>
  );
}

export default App;
