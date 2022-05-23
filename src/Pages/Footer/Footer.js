import React from 'react';

const Footer = () => {
          return (
                    <footer style={{
                              background: '#d1c8c8',
                              backgroundSize: 'cover'
                    }} className="p-10">
                              <div className='footer'>
                                        <div>
                                                  <span className="footer-title">Our Services</span>
                                                  <a className="link link-hover">Items</a>
                                                  <a className="link link-hover">Design</a>
                                                  <a className="link link-hover">Price</a>
                                        </div>
                                        <div>
                                                  <span className="footer-title">About Company</span>
                                                  <a className="link link-hover">About</a>
                                                  <a className="link link-hover">Contact</a>
                                                  <a className="link link-hover">Feedback</a>
                                        </div>
                                        <div>
                                                  <span className="footer-title">Legal Information</span>
                                                  <a className="link link-hover">Terms and Conditions</a>
                                                  <a className="link link-hover">Privacy policy</a>
                                                  <a className="link link-hover">Business policy</a>
                                        </div>
                              </div>
                              <div className=' text-2xl my-10 text-center'>
                                        <p>Copyright © 2022 - All Right Reserved By <span className='text-teal-800'>Screwdriver Site</span></p>
                              </div>
                    </footer>
          );
};

export default Footer;