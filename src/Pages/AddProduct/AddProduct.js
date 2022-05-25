import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
          const { register, handleSubmit } = useForm();
          const onSubmit = data => {
                    const url = `http://localhost:5000/item`;
                    fetch(url, {
                              method: 'POST',
                              headers: {
                                        'content-type': 'application/json'
                              },
                              body: JSON.stringify(data)
                    })
                              .then(res => res.json())
                              .then(result => {
                                        toast('New Product Added');
                              })
          };


          return (
                    <div>
                              <h2 className='text-2xl text-blue-500 mb-5 mt-5'>Please Add New Product</h2>
                              <div className="grid h-100 card bg-base-100 rounded-box place-items-center mb-5">
                                        <form className='flex-column grid grid-cols-1 gap-1 ' onSubmit={handleSubmit(onSubmit)}>
                                                  <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 30 })} />
                                                  <textarea className='mb-2' placeholder='Description' {...register("description")} />
                                                  <input className='mb-2' placeholder='Minimum Order' {...register("minOrder")} />
                                                  <input className='mb-2' placeholder='Quantity' {...register("quantity")} />
                                                  <input className='mb-2' placeholder='Price' {...register("price")} />
                                                  <input className='mb-2' placeholder='Image Link' {...register("img")} />
                                                  <input className='bg-primary text-white' type="submit" value="Add Product" />
                                        </form>
                              </div>
                    </div>
          );
};

export default AddProduct;