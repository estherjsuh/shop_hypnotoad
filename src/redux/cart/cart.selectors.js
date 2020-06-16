//item counts

import {createSelector} from 'reselect';

//takes state and returns a slice of it
const selectCart = state => state.cart;


//memoized selector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems], 
    cartItems =>
        cartItems.reduce(
            (accumalatedQuantity, cartItem) => 
            accumalatedQuantity + cartItem.quantity,
            0)
);

export const selectCartTotal = createSelector(
    [selectCartItems], 
    cartItems =>
        cartItems.reduce(
            (accumalatedQuantity, cartItem) => 
            accumalatedQuantity + cartItem.quantity * cartItem.price,
            0)
);