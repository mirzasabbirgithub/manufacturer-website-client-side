import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
          const [user] = useAuthState(auth);

          const handleUpdate = () => {


          }
          return (
                    <div>
                              <h1 className='text-5xl'>Welcome to My Profile </h1>

                              <div className='my-5 justify-start'>
                                        <h2 className='text-2xl'>Name: {user.displayName}</h2>
                                        <h2 className='text-2xl'>Email: {user.email}</h2>
                                        <h2 className='text-2xl'>Address: </h2>
                                        <h2 className='text-2xl'>LinkedIn: </h2>
                                        <h2 className='text-2xl'>Phone: </h2>

                                        <form className='w-50 grid grid-cols-1 gap-1'>
                                                  <input type="text" name="address" placeholder='Address' required />
                                                  <input type="text" name="linkedin" placeholder='LinkedIn Profile' required />
                                                  <input type="number" name="phone" placeholder='Phone' required />
                                                  <br />
                                                  <input onClick={handleUpdate} className='btn btn-info text-white mt-2' type="submit" value="Update Profile" />
                                        </form>
                              </div>
                    </div>
          );
};

export default MyProfile;