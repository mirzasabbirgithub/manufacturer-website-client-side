import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
          const [user] = useAuthState(auth);
          return (
                    <div>
                              <h1 className='text-5xl'>Welcome to My Profile </h1>

                              <div className='my-5 justify-start'>
                                        <h2 className='text-2xl'>Name: {user.displayName}</h2>
                                        <h2 className='text-2xl'>Email: {user.email}</h2>
                              </div>
                    </div>
          );
};

export default MyProfile;