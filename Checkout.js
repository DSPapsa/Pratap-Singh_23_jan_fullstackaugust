import React from 'react'
import './Checkout.css';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { useStateValue } from './StateProvider';
import ShopIcon from '@material-ui/icons/Shop';


function Checkout() {
    const [{cart},dispatch]= useStateValue();
        return (
        <div className='checkout'>
          <div className='checkout_left'>
              <h2 className='checkout_title'>Your Cart</h2>
              {cart.map(item => (
                  <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  />
              ))
              }
              </div>
              
        </div>
        
    )
}

export default Checkout
