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


const Home = () => {
 const [data, setData] = useState(products)
 const year = new Date().getFullYear()
 
 useEffect(()=>{
  const filteredProducts = products.filter(
    item=>item.category === 'chair')
    setData(filteredProducts)
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
          <ProductList data={data}/>
        </Row>
      </Container>
    </section>
    
  </Helmet>
}

export default Home