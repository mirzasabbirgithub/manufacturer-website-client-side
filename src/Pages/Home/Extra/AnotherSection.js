import React from 'react';
import woocommerce from '../../../img/woocommerce.png'
import daraz from '../../../img/daraz.png'
import amazon from '../../../img/amazon.png'
import square from '../../../img/square.png'
const AnotherSection = () => {
          return (
                    <div>
                              <h1 className="text-5xl text-rose-400 mt-5 mb-5">Our Partners</h1>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
                                        <div className="card w-96 bg-base-100 shadow-xl">
                                                  <figure><img src={woocommerce} alt="facebook icon" /></figure>
                                                  <div className="card-body">
                                                            <h2 className="card-title text-5xl">WooCommerce</h2>
                                                  </div>
                                        </div>

                                        <div className="card w-96 bg-base-100 shadow-xl">
                                                  <figure><img src={daraz} alt="facebook icon" /></figure>
                                                  <div className="card-body">
                                                            <h2 className="card-title text-5xl">Daraz</h2>
                                                  </div>
                                        </div>

                                        <div className="card w-96 bg-base-100 shadow-xl">
                                                  <figure><img src={amazon} alt="facebook icon" /></figure>
                                                  <div className="card-body">
                                                            <h2 className="card-title text-5xl">Amazon</h2>
                                                  </div>
                                        </div>


                                        <div className="card w-96 bg-base-100 shadow-xl">
                                                  <figure><img src={square} alt="facebook icon" /></figure>
                                                  <div className="card-body">
                                                            <h2 className="card-title text-5xl">Square</h2>
                                                  </div>
                                        </div>

                              </div>

                    </div>
          );
};

export default AnotherSection;