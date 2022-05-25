import React, { useEffect, useState } from 'react';


const ManageProduct = () => {
          const [loaditem, setLoaditem] = useState([]);
          useEffect(() => {
                    fetch(`http://localhost:5000/item`, {
                              method: 'GET',
                              headers: {
                                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                              }
                    })
                              .then(res => res.json())
                              .then(data => setLoaditem(data));

          }, [])


          const handleDelete = id => {
                    const proceed = window.confirm('Are you sure to detele the item?');
                    if (proceed) {
                              console.log(id);
                              const url = `http://localhost:5000/item/${id}`;
                              fetch(url, {
                                        method: 'DELETE'
                              })
                                        .then(res => res.json())
                                        .then(data => {
                                                  console.log(data);
                                                  const remaining = loaditem.filter(item => item._id !== id);
                                                  setLoaditem(remaining);
                                        })
                    }
          }


          return (
                    <div>
                              <h2>My Orders: {loaditem.length}</h2>
                              <div class="overflow-x-auto">
                                        <table class="table w-full">
                                                  <thead>
                                                            <tr>
                                                                      <th></th>
                                                                      <th>Product Name</th>
                                                                      <th>Price</th>
                                                                      <th>Action</th>
                                                            </tr>
                                                  </thead>
                                                  <tbody>
                                                            {
                                                                      loaditem.map((i, index) => <tr>
                                                                                <th>{index + 1}</th>
                                                                                <td>{i.name}</td>
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

export default ManageProduct;