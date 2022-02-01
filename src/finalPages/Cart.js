import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';

const Cart = () => {
  const items_in_cart = useSelector(store => store.cart.cart_items)
  return (
    <>
      <Navbar />

      {/* {items_in_cart.map()} */}

<div className='container'>
      <table className="table">
        <thead>
          <tr>
            <th>S.NO.</th>
            <th>Item Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items_in_cart.map((item, i) => (
            <tr key={i}>
              <td>{i+1}</td>
              <td><img src={item.item_image} style={{height:'100px'}}/></td>
              <td style={{maxWidth:'150px',overflow:'hidden'}}>{item.item_name}</td>
              <td>{item.item_price}</td>
              <td><button>Remove</button></td>
            </tr>


          ))}
         

        </tbody>
      </table>
      </div>







    </>);
};

export default Cart;
