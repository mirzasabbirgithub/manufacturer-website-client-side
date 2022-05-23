import React from 'react';
import screwdriver1 from '../../img/screwdriver1.jpg'
const Banner = () => {
          return (
                    <div class="card lg:card-side bg-base-100 shadow-xl">
                              <figure><img src={screwdriver1} alt="screwdiver"></img></figure>
                              <div class="card-body">
                                        <h2 class="card-title text-5xl justify-center text-blue-500">Welcome to Scredriver Zone</h2>
                                        <p className="text-2xl justify-center ">A screwdriver is a very essential tool used to install and remove. Due to the high speed capability, we'll get that you get tasks complete much faster.</p>

                              </div>
                    </div>
          );
};

export default Banner;