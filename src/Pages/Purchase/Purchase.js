import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
          const { id } = useParams();
          const [item, setItem] = useState({});
          const [user] = useAuthState(auth);

          useEffect(() => {
                    const url = `http://localhost:5000/item/${id}`;
                    fetch(url)
                              .then(res => res.json())
                              .then(data => setItem(data));
          }, []);

          const handlePurchased = event => {
                    event.preventDefault();
                    const address = event.target.address.value;
                    const phone = event.target.phone.value;
                    const enteredQuantity = event.target.quantity.value;
                    console.log(enteredQuantity);
                    const purchase = {
                              productID: id,
                              productName: item.name,
                              email: user.email,
                              userName: user.displayName,
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
                              });
          }

          return (
                    <>
                              <h2 className='text-2xl'>Customer Name: {user.displayName}</h2>
                              <h2>Customer Email: {user.email}</h2>
                              <div className='grid grid-cols-6 gap-4 my-10 mx-10'>

                                        <div class="card lg:max-w-lg bg-base-100 shadow-xl ">
                                                  <h2 className='text-3xl my-5'>Selected Product Detials</h2>
                                                  <figure><img src={item.img} alt="Shoes" /></figure>
                                                  <div class="card-body ">
                                                            <h2 class="card-title justify-center">{item.name}</h2>
                                                            <p>{item.description}</p>
                                                            <p>Minimum Order: {item.minOrder}</p>
                                                            <p>Quantity: {item.quantity}</p>
                                                  </div>
                                        </div>

                                        <div className='mx-10'>
                                                  <h1 className='text-2xl'>Information Box</h1>
                                                  <form onSubmit={handlePurchased} className='grid grid-cols-1 gap-1 justify-items-center mt-2'>
                                                            <label>Name</label>
                                                            <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                                                            <label>Email</label>
                                                            <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
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