import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const Footer = () => {
          const today = new Date();
          const year = today.getFullYear();
          return (

                    <footer className=' mt-5 text-center text-white'>
                              <Container className='bg-dark'>
                                        <Row>
                                                  <Col>
                                                            <h1 className='text-info'> </h1>
                                                            <h6>Hasan Tower, Uttora</h6>
                                                            <h6>Dhaka-1218</h6>
                                                            <h6>mail@screwdriversite.com</h6>
                                                  </Col>


                                                  <Col className='ownColor'>
                                                            <h2 className='mb-3'>Support</h2>
                                                            <h6>Orders and Return</h6>
                                                            <h6>Shipping Infomation</h6>
                                                            <h6>Store Location</h6>
                                                            <h6>Partner Program</h6>
                                                  </Col>

                                                  <Col className='ownColor'>
                                                            <h2 className='mb-3'>Information</h2>
                                                            <h6>About</h6>
                                                            <h6>Contact Us</h6>
                                                            <h6>Refund Policy</h6>
                                                            <h6>Location</h6>
                                                  </Col>
                                        </Row>
                                        <div className='bg-primary mx-auto'>
                                                  <h5>Copyright &copy; {year} Reserved by Screwdriver Site</h5>
                                        </div>

                              </Container>

                    </footer>
          );
};

export default Footer;