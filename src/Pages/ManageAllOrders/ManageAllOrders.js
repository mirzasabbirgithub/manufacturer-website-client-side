import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {

          const [loadorders, setLoadorders] = useState([]);
          useEffect(() => {
                    fetch(`https://fierce-ocean-49278.herokuapp.com/purchaseall`, {
                              method: 'GET',
                              headers: {
                                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                              }
                    })
                              .then(res => res.json())
                              .then(data => setLoadorders(data));

          }, [])


          const handleDelete = id => {
                    const proceed = window.confirm('Are you sure to detele the product?');
                    if (proceed) {
                              console.log(id);
                              const url = `https://fierce-ocean-49278.herokuapp.com/purchaseall/${id}`;
                              fetch(url, {
                                        method: 'DELETE'
                              })
                                        .then(res => res.json())
                                        .then(data => {
                                                  console.log(data);
                                                  const remaining = loadorders.filter(order => order._id !== id);
                                                  setLoadorders(remaining);
                                        })
                    }
          }

          return (
                    <div>
                              <h2>All Orders: {loadorders.length}</h2>
                              <div class="overflow-x-auto">
                                        <table class="table w-full">
                                                  <thead>
                                                            <tr>
                                                                      <th></th>
                                                                      <th>Product Name</th>
                                                                      <th>Order By</th>
                                                                      <th>Price</th>
                                                                      <th>Action</th>
                                                            </tr>
                                                  </thead>
                                                  <tbody>
                                                            {
                                                                      loadorders.map((i, index) => <tr>
                                                                                <th>{index + 1}</th>
                                                                                <td>{i.productName}</td>
                                                                                <td>{i.userName}</td>
                                                                                <td>${i.price}</td>
                                                                                <td><button onClick={() => handleDelete(i._id)} className="btn btn-danger text-white">Delete</button></td>
                                                                      </tr>)
                                                            }


                                                  </tbody>
                                        </table>
                              </div>
                    </div>
          );
};

export default ManageAllOrders;