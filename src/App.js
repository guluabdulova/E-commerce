import React from 'react';
import './App.css';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import CompareProducts from './pages/CompareProducts';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndContions from './pages/TermAndContions';
import SingleProduct from './pages/SingleProduct';
import BasketPage from './pages/BasketPage';
import { lazy,Suspense } from 'react';
import Loading from './components/Loading';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Suspense fallback={<Loading/>}><Home /></Suspense>} />
        <Route path="contact" element={<Suspense fallback={<Loading/>}><Contact /></Suspense>}/>
        <Route path="product" element={<Suspense fallback={<Loading/>}><OurStore /></Suspense>}/>
        <Route path="product/:id" element={<Suspense fallback={<SingleProduct/>}><Home /></Suspense>}/>
        <Route path="compare" element={<Suspense fallback={<Loading/>}><CompareProducts /></Suspense>}/>
        <Route path="wishlist" element={<Suspense fallback={<Loading/>}><Wishlist /></Suspense>}/>
        <Route path="login" element={<Suspense fallback={<Loading/>}><Login /></Suspense>}/>
        <Route path="signup" element={<Suspense fallback={<Loading/>}><SignUp /></Suspense>}/>
        <Route path="forgot-password" element={<Suspense fallback={<Loading/>}><ForgotPassword /></Suspense>}/>
        <Route path="privacy-policy" element={<Suspense fallback={<Loading/>}><PrivacyPolicy /></Suspense>}/>
        <Route path="refund-policy" element={<Suspense fallback={<Loading/>}><RefundPolicy /></Suspense>}/>
        <Route path="shipping-policy" element={<Suspense fallback={<Loading/>}><ShippingPolicy /></Suspense>}/>
        <Route path="term-conditions" element={<Suspense fallback={<Loading/>}><TermAndContions /></Suspense>}/>
        <Route path="basket-page" element={<Suspense fallback={<Loading/>}><BasketPage /></Suspense>}/>
        
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
