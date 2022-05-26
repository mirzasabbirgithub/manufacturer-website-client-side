import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
          const { id } = useParams();
          const [item, setItem] = useState({});
          const [user] = useAuthState(auth);
          const [error, setError] = useState(false);

          // const [quantity, setQuantity] = useState({ quantity: "" })

          useEffect(() => {
                    const url = `http://localhost:5000/item/${id}`;
                    fetch(url)
                              .then(res => res.json())
                              .then(data => setItem(data));
          }, []);


          // const handleOnchange = (e) => {
          //           setQuantity(e.target.value);
          //           console.log(quantity)
          //           if (quantity < item.minOrder && quantity > item.Quantity) {
          //                     setError(true);
          //           }

          // }

          const handlePurchased = event => {
                    event.preventDefault();
                    const address = event.target.address.value;
                    const phone = event.target.phone.value;
                    const enteredQuantity = event.target.quantity.value;

                    if (enteredQuantity < item.minOrder) {
                              toast.error('Quantity is lower than Minimum Quantity')
                              return;
                    }
                    else if (enteredQuantity > item.quantity) {
                              toast.error('Quantity limit has been crossed, Please reduce quantity')
                              return;
                    }
                    else {
                              const purchase = {
                                        productID: id,
                                        productName: item.name,
                                        email: user.email,
                                        userName: user.displayName,
                                        price: item.price,
                                        address: address,
                                        quantity: enteredQuantity,
                                        phone: phone,
                              }

                              fetch('http://localhost:5000/purchased', {
                                        method: 'POST',
                                        headers: {
                                                  'content-type': 'application/json'
                                        },
                                        body: JSON.stringify(purchase)
                              })
                                        .then(res => res.json())
                                        .then(data => {
                                                  toast.success(`Purchased is complete for ${item.name}`)
                                                  window.location.reload();
                                        });

                    }



          }

          return (
                    <>

                              <div className="flex flex-col w-full border-opacity-50">
                                        <div className="grid h-100 card bg-base-100 rounded-box place-items-center">
                                                  <div className="card lg:max-w-lg bg-base-100 shadow-xl ">
                                                            <h2 className='text-3xl my-5'>Selected Product Detials</h2>
                                                            <figure><img src={item.img} alt="Shoes" /></figure>
                                                            <div className="card-body ">
                                                                      <h2 class="card-title justify-center">{item.name}</h2>
                                                                      <p>{item.description}</p>
                                                                      <p>Minimum Order: {item.minOrder}</p>
                                                                      <p>Quantity: {item.quantity}</p>
                                                            </div>
                                                  </div>
                                        </div>
                                        <div className="divider">Next</div>
                                        <div className="grid h-100 card bg-base-100 rounded-box place-items-center mb-5">
                                                  <h1 className='text-2xl'>Information Box</h1>
                                                  <form onSubmit={handlePurchased} className='grid grid-cols-1 gap-1 '>
                                                            <label>Name</label>
                                                            <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                                                            <label>Email</label>
                                                            <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                                                            <label>Price</label>
                                                            <input type="text" name="name" disabled value={item.price || ''} className="input input-bordered w-full max-w-xs" />
                                                            <label>Email</label>
                                                            <label>Product Name</label>
                                                            <label>Quantity</label>
                                                            <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full max-w-xs" />
                                                            <label>Address</label>
                                                            <input type="text" name="address" placeholder="Address" className="input input-bordered w-full max-w-xs" />
                                                            <label>Phone No</label>
                                                            <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                                                            <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                                                  </form>

                                        </div>
                              </div>








                    </>


          );
};

export default Purchase;