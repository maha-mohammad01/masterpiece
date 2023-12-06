import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Component/Home';
import Login from './Users/Login';
import Footer from './Component/Footer';
import Header from './Component/Header';
import SignUp from './Users/Signup';
import Store from './Component/Store';
import Playgrounds from './Component/Playgrounds';
import ProductDetails from './HomeStore/ProductDetails';
import Academies from './Component/Academies';
import ForgotPassword from './Users/ForgotPassword';
import StadiumDetails from './Plygroud/StadiumDetails';
import BookingForm from './Plygroud/BookingForm';
import PaymentForm from './Plygroud/PaymentForm';
import Profile from './Profile/UserProfile';
import ShoppingCart from './HomeStore/ShoppingCart';
import HomeD from './dashboard/HomeD';
import Addformplay from './Home/Addformplay';
import Price from './Home/Price';
import SearchResultsPage from './HomeStore/SearchResultsPage ';
import Category from '../src/HomeStore/Category';
import CategoryPage from '../src/HomeStore/CategoryPage';
import ContactUs from './Component/ContactUs';
import AboutUs1 from './Component/AboutUs1';
import Done from './Home/Done';

function App({ catalogs }) {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/playgrounds" element={<Playgrounds />} />
          <Route path="/academies" element={<Academies />} />
          <Route path="/bookingform/:id" element={<BookingForm />} />
          <Route path="/paymentform" element={<PaymentForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/price" element={<Price />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/addformplay" element={<Addformplay />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/details/:id" element={<StadiumDetails />} />
          <Route path="/store" element={<Store />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/:categorySlug" element={<CategoryPage catalogs={catalogs} />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/Aboutus" element={<AboutUs1 />} />
          <Route path="/done" element={<Done />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
      <Router>
      <Routes>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
