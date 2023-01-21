import { Routes, Route, Navigate } from "react-router-dom"
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Shop from '../pages/Shop'
import ProductDetails from '../pages/ProductDetails'
import Checkout from '../pages/Checkout'
import Signup from '../pages/Signup'
import Login from '../pages/Login'

const routers = () => {
  return <Routes>
    <Route path="/" element={<Navigate to='home'/>} />
    <Route path="home" element={<Home/>}/>
    <Route path="cart" element={<Cart/>}/>
    <Route path="checkout" element={<Checkout/>}/>
    <Route path="shop" element={<Shop/>}/>
    <Route path="signup" element={<Signup/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="shop/:id" element={<ProductDetails/>}/>
  </Routes>
  
}

export default routers