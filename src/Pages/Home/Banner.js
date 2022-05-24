import React from 'react';
import screwdriver1 from '../../img/screwdriver1.jpg'
const Banner = () => {
          return (

                    <>
                              <div style={{
                                        background: `url(${screwdriver1})`,
                                        backgroundSize: 'cover'
                              }} class="hero max-h-screen">
                                        <div class="hero-overlay bg-opacity-60"></div>
                                        <div class="hero-content text-center text-neutral-content">
                                                  <div class="max-w-md">
                                                            <h1 class="mb-5 text-5xl font-bold">Welcome to Scredriver Zone</h1>
                                                            <p class="mb-5">A screwdriver is a very essential tool used to install and remove. Due to the high speed capability, we'll get that you get tasks complete much faster</p>
                                                  </div>
                                        </div>
                              </div>

                    </>
          );
};

export default Banner;