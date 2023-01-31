import React, {useState, useEffect} from 'react'
import Helmet from '../componets/Helmet/Helmet'
import {Container, Row, Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'
import '../styles/home.css'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import Services from '../services/Services'
import ProductList from '../componets/UI/ProductList'
import products from '../assets/data/products'
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../componets/UI/Clock'


const Home = () => {
 const [trendingProducts, setTrendingProducts] = useState([])
 const [bestSalesProducts, setBestSalesProducts] = useState([])


 const year = new Date().getFullYear()
 
 useEffect(()=>{
  const filteredTrendingProducts = products.filter(
    item=>item.category === 'chair')
  
  const filteredBestSalesProducts = products.filter(
      item=>item.category === 'sofa')  

    setTrendingProducts(filteredTrendingProducts)
    setBestSalesProducts(filteredBestSalesProducts)
 }, []) 


  return <Helmet title ={'Home'}>
    <section className='hero_section'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero_content">
              <p className="hero_subtitle">Trending products in {year}</p>
              <h2>Make Your Interior Modern & Classy</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptatem.</p>
              <motion.button whileTap={{scale:1.2}} className='buy_btn'><Link to='/shop'>SHOP NOW</Link></motion.button>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="hero_img">
              <img src={heroImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Services/>
    <section className="trending_products">
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section_title'>Trending Products</h2>
          </Col>
          <ProductList data={trendingProducts}/>
        </Row>
      </Container>
    </section>
    <section className="best_sales">
      <Container>
        <Row>
          <Col lg="12" className='text-center'>
            <h2 className="section_title">Best sales</h2>
          </Col>
          <ProductList data={bestSalesProducts}/>
        </Row>
      </Container>
    </section>

    <section className='timer_count'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="clock_top-content">
              <h4 className='text-white fs-9 mb-3'>Limited Time Offer</h4>
              <h3 className='text-white fs-6 mb-2'>Quality Armchair</h3>
            </div>
            <Clock />
            <motion.button whileTap={{scale: 1.2}} className='buy_btn store_btn'><Link to='/shop'>Visit Shop</Link></motion.button>
          </Col>
          <Col lg='6' md='6' className='text-end'>
            <img src={counterImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
    
  </Helmet>
}

export default Home