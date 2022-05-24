import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyPurchased = () => {
          const [purchase, setPurchase] = useState([]);
          const [user] = useAuthState(auth);
          useEffect(() => {
                    if (user) {
                              fetch(`http://localhost:5000/purchased?userEmail=${user.email}`)
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
                                                                      <th>User Name</th>
                                                                      <th>User Email</th>
                                                                      <th>Quantity</th>
                                                            </tr>
                                                  </thead>
                                                  <tbody>
                                                            {
                                                                      purchase.map((p, index) => <tr>
                                                                                <th>{index + 1}</th>
                                                                                <td>{p.productName}</td>
                                                                                <td>{p.userName}</td>
                                                                                <td>{p.email}</td>
                                                                                <td>{p.quantity}</td>
                                                                      </tr>)
                                                            }


                                                  </tbody>
                                        </table>
                              </div>
                    </div>
          );
};

export default MyPurchased;