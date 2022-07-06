import React, {useContext} from 'react';
import {PayPalButton} from "react-paypal-button-v2"
import AppContext from "../context/AppContext"
import '../styles/components/Payment.css';
import { useNavigate } from 'react-router-dom';

const paypalOptions = {
  clientId: process.env.REACT_APP_CLIENT_ID,
  intent: 'capture',
  currency: 'USD',
};

const Payment = () => {
  const {state, addNewOrder} = useContext(AppContext);
  const {cart, buyer} = state;
  const navigate = useNavigate();

  const paypalOptions = {
    clientId: process.env.REACT_APP_CLIENT_ID,
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  }

  const handlePaymentSuccess = (data)=>{
    if(data.status === 'COMPLETED'){
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder,
        navigate('/checkout/success'));
    }
  }

  let sumProducto = 0;
  cart.forEach((element) => {
    sumProducto += element.price;
  });

  const handleSumTotal = ()=> {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer,0)
    return sum;
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        
        {cart.map(item=>(
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}

        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={sumProducto}
            onPaymentStart={()=> console.log("Start Payment")}
            onSuccess={data=>handlePaymentSuccess(data)}
            onError = {error=> console.log(error)}
            onCancel={data=>console.log(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
