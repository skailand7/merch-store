import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.css';

const Checkout = () => {
  const { state, removeFromCart } = React.useContext(AppContext);
  const { cart } = state;
  let sumProducto = 0;

  cart.forEach((element) => {
    sumProducto += element.price;
  });

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>{cart.length > 0 ? 'Lista de pedidos' : 'Sin pedidos'}</h3>

        {cart.map((item) => {
          return (
            <div className="Checkout-item" key={item.title}>
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <div>
                  <span>${item.price}</span>
                  <button onClick={() => handleRemove(item)} type="button">
                    <i className="fas fa-trash-alt" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total: $ {sumProducto}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar Pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
