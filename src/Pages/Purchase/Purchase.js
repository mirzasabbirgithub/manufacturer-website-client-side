import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
          const { id } = useParams();
          const [item, setItem] = useState({});

          useEffect(() => {
                    const url = `http://localhost:5000/item/${id}`;
                    fetch(url)
                              .then(res => res.json())
                              .then(data => setItem(data));
          }, []);

          return (
                    <>

                              <div className='grid grid-cols-6 gap-4 my-10 mx-10'>

                                        <div class="card lg:max-w-lg bg-base-100 shadow-xl ">
                                                  <h2 className='text-3xl my-5'>Selected Product Detials</h2>
                                                  <figure><img src={item.img} alt="Shoes" /></figure>
                                                  <div class="card-body ">
                                                            <h2 class="card-title justify-center">{item.name}</h2>
                                                            <p>{item.description}</p>
                                                            <p>Minimum Quantity: {item.quantityMin}</p>
                                                            <p>Quantity: {item.quantity}</p>
                                                  </div>
                                        </div>

                                        <div>
                                                  <h1>Hello</h1>
                                        </div>
                              </div>


                    </>


          );
};

export default Purchase;