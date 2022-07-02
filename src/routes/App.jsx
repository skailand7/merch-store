import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home.jsx';
import Checkout from '../containers/Checkout.jsx';
import Information from '../containers/Information.jsx';
import Payment from '../containers/Payment.jsx';
import Success from '../containers/Success.jsx';
import NotFound from '../containers/NotFound.jsx';
import Layout from '../components/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/checkout/information" element={<Information />} />
          <Route exact path="/checkout/payment" element={<Payment />} />
          <Route exact path="/checkout/success" element={<Success />} />
          <Route element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
