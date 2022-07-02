import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  const addToBuyer = (PAYLOAD) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  return {
    addToCart,
    removeFromCart,
    state,
    addToBuyer,
  };
};

export default useInitialState;
