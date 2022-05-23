import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
          const { _id, name, description, quantityMin, quantity, img } = item;
          const navigate = useNavigate();
          const navigateToPurchased = (_id) => {
                    navigate(`/purchase/${_id}`);
          }
          return (
                    <div>
                              <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                                        <figure><img src={img} alt="Shoes" /></figure>
                                        <div class="card-body ">
                                                  <h2 class="card-title justify-center">{name}</h2>
                                                  <p>{description}</p>
                                                  <p>Minimum Quantity: {quantityMin}</p>
                                                  <p>Quantity: {quantity}</p>
                                                  <div class="card-actions justify-center">
                                                            <button onClick={() => navigateToPurchased(_id)} className='btn btn-success'>Purchase</button>
                                                  </div>
                                        </div>
                              </div>
                    </div >
          );
};

export default Item;