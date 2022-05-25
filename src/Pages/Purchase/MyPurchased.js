import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyPurchased = () => {
          const [purchase, setPurchase] = useState([]);
          const [user] = useAuthState(auth);

          useEffect(() => {
                    if (user) {
                              fetch(`http://localhost:5000/purchased?userEmail=${user.email}`, {
                                        method: 'GET',
                                        headers: {
                                                  'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                                        }
                              })
                                        .then(res => res.json())
                                        .then(data => setPurchase(data));
                    }
          }, [user])

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
                                                                      <th>Payment</th>
                                                                      <th>Action</th>
                                                            </tr>
                                                  </thead>
                                                  <tbody>
                                                            {
                                                                      purchase.map((p, index) => <tr>
                                                                                <th>{index + 1}</th>
                                                                                <td>{p.productName}</td>
                                                                                <td>{p.quantity}</td>
                                                                                <td><button className="btn btn-primary text-white">Please Pay</button></td>
                                                                                <td><button className="btn btn-danger text-white">Delete</button></td>
                                                                      </tr>)
                                                            }


                                                  </tbody>
                                        </table>
                              </div>
                    </div>
          );
};

export default MyPurchased;