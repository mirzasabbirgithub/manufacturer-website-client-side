import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyPurchased = () => {
          const [purchase, setPurchase] = useState([]);
          const [user] = useAuthState(auth);

          useEffect(() => {
                    if (user) {
                              fetch(`https://fierce-ocean-49278.herokuapp.com/purchased?userEmail=${user.email}`, {
                                        method: 'GET',

                              })
                                        .then(res => res.json())
                                        .then(data => setPurchase(data));
                    }
          }, [user])


          const deletePurchased = id => {
                    const proceed = window.confirm('Are you sure to cencel the item?');
                    if (proceed) {
                              console.log(id);
                              const url = `https://fierce-ocean-49278.herokuapp.com/purchased/${id}`;
                              fetch(url, {
                                        method: 'DELETE'
                              })
                                        .then(res => res.json())
                                        .then(data => {
                                                  console.log(data);
                                                  const remainingUser = purchase.filter(item => item._id !== id);
                                                  setPurchase(remainingUser);
                                        })
                    }
          }


          return (

                    <div>
                              <h2>My Orders: {purchase.length}</h2>
                              <div class="overflow-x-auto">
                                        <table class="table w-full">
                                                  <thead>
                                                            <tr>
                                                                      <th></th>
                                                                      <th>Product Name</th>
                                                                      <th>Quantity</th>
                                                                      <th>Price</th>
                                                                      <th>Payment</th>

                                                            </tr>
                                                  </thead>
                                                  <tbody>
                                                            {
                                                                      purchase.map((p, index) => <tr>
                                                                                <th>{index + 1}</th>
                                                                                <td>{p.productName}</td>
                                                                                <td>{p.quantity}</td>
                                                                                <td>${p.price}</td>
                                                                                <td>
                                                                                          {(p.price && !p.paid) && <div> <Link to={`/dashboard/payment/${p._id}`}><button className='btn btn-xs btn-success'>Please Pay</button></Link>
                                                                                                    <p><button onClick={() => deletePurchased(p._id)} className="btn btn-xs btn-success">Cancel</button></p>
                                                                                          </div>}
                                                                                          {(p.price && p.paid) && <div>
                                                                                                    <p><span className='btn btn-xs btn-success'>Paid</span></p>
                                                                                                    <p>Transaction ID: <span className='text-orange-600'>{p.transactionId}</span></p>
                                                                                          </div>}

                                                                                </td>

                                                                      </tr>)
                                                            }


                                                  </tbody>
                                        </table>
                              </div>
                    </div>
          );
};

export default MyPurchased;