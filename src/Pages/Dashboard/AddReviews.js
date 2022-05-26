import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReviews = () => {
          const { register, handleSubmit } = useForm();
          const onSubmit = data => {
                    const url = `https://fierce-ocean-49278.herokuapp.com/review`;
                    fetch(url, {
                              method: 'POST',
                              headers: {
                                        'content-type': 'application/json'
                              },
                              body: JSON.stringify(data)
                    })
                              .then(res => res.json())
                              .then(result => {
                                        toast('Comment added succsesfully');
                              })

          };

          return (
                    <div>
                              <h2 className='text-2xl text-blue-500 mb-5 mt-5'>Please Add A Comment</h2>
                              <div className="grid h-100 card bg-base-100 rounded-box place-items-center mb-5">
                                        <form className='flex-column grid grid-cols-1 gap-1 ' onSubmit={handleSubmit(onSubmit)}>
                                                  <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 30 })} />
                                                  <input className='mb-2' placeholder='Give Ratings' type="number" {...register("ratings")} />
                                                  <textarea className='mb-2' placeholder='Description' {...register("description")} />
                                                  <input className='bg-primary text-white' type="submit" value="Submit Review" />
                                        </form>
                              </div>
                    </div>
          );
};

export default AddReviews;