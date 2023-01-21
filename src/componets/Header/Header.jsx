import React from 'react'
import {NavLink} from "react-router-dom"
import './Header.css'
import { motion } from "framer-motion"
import { Container, Row } from "reactstrap"
import user_icon from '../../assets/images/user-icon.png'

import logo from '../../assets/images/eco-logo.jpg'
const nav_links = [
  {
    path: 'home',
    dispay: 'Home'
  },
  {
    path: 'shop',
    dispay: 'Shop'
  },
  {
    path: 'cart',
    dispay: 'Cart'
  },
]
const Header = () => {
  return (
    <header className='header'>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Ideal Furniture & Decor</h1>
                <p><i>Comfort in Style</i></p>
              </div>
            </div>
              <div className="navigation">
                <ul className="menu">
                  {
                    nav_links.map((item, index)=>(
                      <li className='"nav_item' key={index}>
                        <NavLink to={item.path} className={(navClass)=>navClass.isActive ? 'nav_active' : ''}>{item.dispay}</NavLink>
                      </li>
                    ))
                  }
                  
                </ul>
              </div>
              <div className="nav_icons">
                <span className='fav_icon'>
                <i class="ri-heart-line"></i>
                <span className='badge'>1</span>
                </span>
                <span className='cart_icon'>
                <i class="ri-shopping-bag-line"></i>
                <span className='badge'>1</span>
                </span>
                <span>
                  <motion.img whileTap={{scale:1.2}}src={user_icon} alt="" />
                </span>
              </div>
              <div className="mobile_menu">
                <span>
                <i class="ri-menu-line"></i>
                </span>
              </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header