import React from 'react';
import happyclient from '../../../img/happyclient.jpg'
const ExtraSection = () => {
          return (
                    <>

                              <div className="flex flex-col w-full lg:flex-row">
                                        <div className="grid flex-grow h-100 card bg-base-100 rounded-box place-items-center">
                                                  <h2 className='text-3xl text-blue-600'>Happy Cleint</h2>
                                                  <div className="card lg:card-side bg-base-100 shadow-xl mt-2">
                                                            <figure><img src={happyclient} alt="Album" /></figure>
                                                            <div className="card-body">
                                                                      <h2 className="card-title text-3xl text-rose-500">Clients Satisfaction is our main priority</h2>
                                                                      <p className='text-1xl'>We strongly belive that it;s really no matter what your product or service is, without customers you don't have a business.</p>
                                                                      <p className='text-3xl flex justify-start text-green-700'>* Look to the data</p>
                                                                      <p className='text-3xl flex justify-start text-green-700'>* Involve the entire production</p>
                                                                      <p className='text-3xl flex justify-start text-green-700'>* Trust Our Client</p>
                                                                      <p className='text-3xl flex justify-start text-green-700'>* Strong Refund Policy</p>

                                                                      <ul class="steps steps-vertical lg:steps-horizontal">
                                                                                <li class="step step-primary">Choose Product</li>
                                                                                <li class="step step-primary">Place Order</li>
                                                                                <li class="step">Purchase</li>
                                                                                <li class="step">Receive Product</li>
                                                                      </ul>
                                                            </div>

                                                  </div>
                                        </div>


                              </div>

                    </>
          );
};

export default ExtraSection;