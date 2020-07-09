import React, { useState, useEffect } from 'react'
import logo from './logo.png'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css'
import './index.css'
import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'
import ProductsScreen from './Screens/ProductsScreen'
import ShippingScreen from './Screens/ShippingScreen'
import CartScreen from './Screens/CartScreen'
import SigninScreen from './Screens/SigninScreen'
import { useSelector } from 'react-redux'
import RegisterScreen from './Screens/RegisterScreen'
import PaymentScreen from './Screens/PaymentScreen'
import PlaceOrderScreen from './Screens/PlaceOrderScreen'
import OrderScreen from './Screens/OrderScreen'

import Sidebar from './Sidebar'
import ProfileScreen from './Screens/ProfileScreen'

function App() {
  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin

  useEffect(() => {
    // document.querySelector('.sidebar').classList.add('open')
  })

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <Link to="/">
              <img src={logo} alt="store" className="navbar-brand"></img>
            </Link>

            <Link to="/cart" ><button class="fa fa-shopping-cart"></button>
</Link>
          </div>
          <div className="header-links">
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">SignIn</Link>
            )}
            
          </div>
        </header>
      
<div class="sidenav">

          <Link to="/" >
            All Categories
          </Link>

          <Link to="/category/BreadList" >
            Bread
          </Link>

          <Link to="/category/DairyList">
            Dairy
          </Link>

          <Link to="/category/Fruits" >
            Fruits
          </Link>

          <Link to="/category/SeasonalSpice" >
            SeasonalSpice
          </Link>
          <Link to="/category/Vegetables">
            Vegetables
          </Link>
</div>
        

        <main className="main">
          <div className="content">
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
  
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">All right reserved.</footer>
      </div>
    </BrowserRouter>
  )
}

export default App
