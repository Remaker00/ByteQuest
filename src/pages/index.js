"use client"
import React, { useState, useEffect } from 'react'
import axios from 'axios';

function index() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const data = response.data;
        const count = data.length;
        setProducts(data);
        setCount(count);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <nav>
        <div className='nav-top'>
          <div className='logo'>
            <h2>TANN<span>TRIM</span></h2>
          </div>
          <ul>
            <li><img src='search.svg' className='nav-icons' /></li>
            <li><img src='profile.svg' className='nav-icons' /></li>
            <li><img src='nav-bookmark.svg' className='nav-icons' /></li>
            <li><img src='cart.svg' className='nav-icons' /></li>
          </ul>
        </div>
        <div className='nav-bottom'>
          <ul>
            <li>Bags</li>
            <li>Travel</li>
            <li>Accessories</li>
            <li>Gifting</li>
            <li>Jewelery</li>
          </ul>
        </div>
      </nav>
      <div className='body-header'>
        <div className='sub-header1'>
          <div className='item'>
            <img src='/bag1.svg' alt='Bag-1' />
          </div>
          <div className='item'>
            <img src='/bag2.svg' alt='Bag-2' />
          </div>
          <div className='item'>
            <img src='/bag3.svg' alt='Bag-3' />
          </div>
          <div className='item'>
            <img src='/bag4.svg' alt='Bag-4' />
          </div>
          <div className='item'>
            <img src='/bag5.svg' alt='Bag-5' />
          </div>
          <div className='item'>
            <img src='/bag6.svg' alt='Bag-6' />
          </div>
          <div className='item'>
            <img src='/bag7.svg' alt='Bag-7' />
          </div>
          <div className='item'>
            <img src='/bag8.svg' alt='Bag-8' />
          </div>
          <div className='item'>
            <img src='/bag9.svg' alt='Bag-9' />
          </div>
        </div>
      </div>
      <div className='body'>
        <div className='item-nav'>
          <div className='item-nav-left'><p>Bags<svg width="5" height="5" viewBox="0 0 5 5" className="dot">
            <circle cx="2.5" cy="2.5" r="2.5" fill="white" />
          </svg>Backpacks</p></div>
          <div className='items-number'>{count} products <img src=' share.svg' /></div>
        </div>
        <div className='body-items'>
          <div className='products'>
            {products.length > 0 ? (
              products.map(product => (
                <div key={product.id} className='product-item'>
                  <div className='product-image'>
                    <img src={product.image} alt={product.title} className='image' />
                    <img src='bookmark.svg' className='book-mark' />
                  </div>
                  <div className='product-detail'>
                    <h2 className='product-title'>{product.category}</h2>
                    <div className='product-add'>
                      <div className='price'>
                        <p className='product-price'>₹{product.price}</p>
                        <p className='product-act-price'>{product.price * 2}</p>
                        <p className='discount'>(50% Off)</p>
                      </div>
                      <img src='add-bag.svg' style={{ backgroundColor: '#1a1a1a' }} />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading products...</p>
            )}
          </div>
        </div>
      </div>
      <footer>
        <div className='footer-3'>
          <p>Copyright &copy; 2024 Tanntrim. All right reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default index
