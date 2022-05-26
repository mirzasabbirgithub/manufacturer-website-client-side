import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
          const [user] = useAuthState(auth);
          // const [updateProfile, setUpdateprofile] = useState({})
          // const { id } = useParams();
          // useEffect(() => {
          //           fetch(`http://localhost:5000/myprofile/${id}`, {
          //                     method: 'GET',
          //           })
          //                     .then(res => res.json())
          //                     .then(data => setUpdateprofile(data));

          // }, [])



          const handleUpdate = (event) => {
                    event.preventDefault();
                    const email = event.target.email.value;
                    const name = event.target.name.value;
                    const address = event.target.address.value;
                    const linkedin = event.target.linkedin.value;
                    const phone = event.target.phone.value;

                    //update profile
                    const forUpdate = {
                              email: email,
                              userName: name,
                              address: address,
                              phone: phone,
                              linkedin: linkedin,
                    }

                    // fetch(`http://localhost:5000/myprofile/${id}`, {
                    //           method: 'PUT',
                    //           headers: {
                    //                     'content-type': 'application/json'
                    //           },
                    //           body: JSON.stringify(forUpdate)
                    // })
                    //           .then(res => res.json())
                    //           .then(data => {
                    //                     console.log(data);
                    //                     toast.success(`Profile Updated`)

                    //           });

          }
          return (
                    <div>
                              <h1 className='text-5xl'>Welcome to My Profile </h1>

                              <div className='my-5 justify-start'>
                                        <h2 className='text-2xl'>Name: {user.displayName}</h2>
                                        <h2 className='text-2xl'>Email: {user.email}</h2>


                                        <form onSubmit={handleUpdate} className='w-50 grid grid-cols-1 gap-1'>
                                                  <input onChnage type="text" name="name" value={user?.displayName || ''} required />
                                                  <input type="email" name="email" value={user?.email || ''} />
                                                  <input type="text" name="address" placeholder='Address' required />
                                                  <input type="text" name="linkedin" placeholder='LinkedIn Profile' required />
                                                  <input type="number" name="phone" placeholder='Phone' required />
                                                  <br />
                                                  <input className='btn btn-info text-white mt-2' type="submit" value="Update Profile" />
                                        </form>



                              </div>
                    </div>
          );
};

export default MyProfile;