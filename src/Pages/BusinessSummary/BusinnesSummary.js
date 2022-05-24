import React from 'react';
import { faTruck, faFlag, faCoins } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BusinnesSummary = () => {
          return (
                    <div>
                              <div className='my-5'>
                                        <h1 className='text-5xl text-blue-400'>Our Businnes Trust and Achievement</h1>
                                        <h1 className='text-2xl text-green-600'>Users satiscation is our main priority</h1>
                              </div>


                              <div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10">
                                                  <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                                                            <div class="card-body">
                                                                      <FontAwesomeIcon icon={faFlag} size="lg"></FontAwesomeIcon>
                                                                      <h1 className='text-4xl'>100+</h1>
                                                                      <h1 className='text-2xl text-green-700'>Countries All Over The World</h1>
                                                            </div>
                                                  </div>

                                                  <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                                                            <div class="card-body">
                                                                      <FontAwesomeIcon icon={faTruck} size="lg"></FontAwesomeIcon>
                                                                      <h1 className='text-4xl'>700+</h1>
                                                                      <h1 className='text-2xl text-green-700'>Successful Delivery</h1>
                                                            </div>
                                                  </div>

                                                  <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                                                            <div class="card-body">
                                                                      <FontAwesomeIcon icon={faCoins} size="lg"></FontAwesomeIcon>
                                                                      <h1 className='text-4xl'>2000K+</h1>
                                                                      <h1 className='text-2xl text-green-700'>Monthly Revenue</h1>
                                                            </div>
                                                  </div>
                                        </div>
                              </div>
                    </div>
          );
};

export default BusinnesSummary;