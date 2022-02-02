import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';

const Cart = () => {
  const dispatch = useDispatch()
  const items_in_cart = useSelector(store => store.cart.cart_items)
  return (
    <>
      <Navbar />

      {/* {items_in_cart.map()} */}

      <div className='container'>
        {/* ternary operator
        condition? value if true: value if false
        */}

        {items_in_cart.length > 0 ?

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
                  <td>{i + 1}</td>
                  <td><img src={item.item_image} style={{ height: '100px' }} /></td>
                  <td style={{ maxWidth: '150px', overflow: 'hidden' }}>{item.item_name}</td>
                  <td>{item.item_price}</td>
                  <td><button className='btn btn-danger' onClick={()=>dispatch({type:'REMOVE_FROM_CART',payload:item})}>Remove</button></td>
                </tr>
              ))}

              <tr className='border-0'>
                <td>
                  <button className='btn btn-danger' onClick={() => dispatch({ type: "EMPTY_THE_CART" })}>Empty the Cart</button>
                </td>
              </tr>


            </tbody>
          </table>
          :
          <h2>You have no items in the cart. </h2>
        }
      </div>







    </>);
};

export default Cart;
