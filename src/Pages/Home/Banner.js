import React from 'react';
import screwdriver1 from '../../img/screwdriver1.jpg'
const Banner = () => {
          return (
                    <div className="hero min-h-screen">
                              <div className="hero-content flex-col lg:flex-row-reverse">
                                        <img src={screwdriver1} className="max-w-sm rounded-lg shadow-2xl" />
                                        <div>
                                                  <h3 className="text-5xl font-bold">Welcome to Scredriver Zone</h3>
                                                  <p className="py-6">A screwdriver is a very essential tool used to install and remove </p>

                                        </div>
                              </div>
                    </div>
          );
};

export default Banner;