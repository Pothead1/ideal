import React from 'react'
import './footer.css'
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/eco-logo.jpg'

const Footer = () => {
  return <footer className='footer'>
    <Container>
      <Row>
        <Col lg='4'>
        <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Ideal - <i>Comfort in style</i></h1>
              </div>
              <p className='footer_text' mt-4>
                animi! Inventore, assumenda eveniet culpa sed est quae magnam mollitia repellat unde nihil, perspiciatis quibusdam aut. Quod, voluptate minima!
              </p>
        </div>        
        </Col>
        <Col lg='3'>
          <div className="footer_quick_links">
            <h2 className = "quick_links_title">Top Categories</h2>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='./shop'>Mobile Phone</Link>
              </ListGroupItem >
              <ListGroupItem className='ps-0 border-0'>
                <Link to='./shop'>Modern Sofa</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='./shop'>Arm Chair</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='./shop'>Watches</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg='2'>
        <div className="footer_quick_links">
            <h2 className = "quick_links_title">Links</h2>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='./shop'>Shop</Link>
              </ListGroupItem >
              <ListGroupItem className='ps-0 border-0'>
                <Link to='./cart'>Cart</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='./login'>Login</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Privacy Policy</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg='3'>
        <div className="footer_quick_links">
            <h2 className = "quick_links_title">Contact</h2>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <span><i class="ri-map-pin-2-line"> <p>Ruaka Border, Next to Two Rivers Mall</p></i></span>
              </ListGroupItem >
              <ListGroupItem className='ps-0 border-0'>
                <span><i class="ri-phone-line"><p>+254706446211</p></i></span>               
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <span><i class="ri-mail-line"><p>emmanuelokello294@gmail.com</p></i></span>               
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer