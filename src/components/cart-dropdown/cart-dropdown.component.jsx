import React, { useRef,useEffect } from 'react';

import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import {selectCartItems} from '../../redux/cart/cart.selectors';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.components';

import './cart-dropdown.styles.scss';

import { useDispatch } from 'react-redux'



function CartDropdown({cartItems, history,dispatch }) {
    const dropDownRef = useRef(null)

    useEffect(() => {
        dropDownRef.current.focus()
      }, [])
    
      return (
        <div
          className= 'cart-dropdown'
          ref={dropDownRef}
          tabIndex='0'
          onBlur={() => {
            dispatch(toggleCartHidden())
          }}
        >
        <div className='cart-items'>
        {
            cartItems.length ? (
                cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item= {cartItem}/>
        ))
            ) : (
                <span className='empty-message'>Your cart is empty</span>
            ) 
        }
        </div>
          <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>Go to checkout</CustomButton>        
        </div>
      )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));