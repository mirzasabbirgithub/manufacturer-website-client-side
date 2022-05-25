import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ _id, user, deleteUser, refetch }) => {
          const { email, role } = user;
          const makeAdmin = () => {
                    fetch(`http://localhost:5000/user/admin/${email}`, {
                              method: 'PUT',

                    })
                              .then(res => res.json())
                              .then(data => {
                                        refetch();
                                        toast('Admin added succselfully')
                              })
          }
          return (
                    <tr>
                              <th>1</th>
                              <th>{email}</th>
                              <th>{role !== 'admin' && <button onClick={makeAdmin} button className='btn btn-xs'>Make Admin</button>}</th>
                              <th><button onClick={() => deleteUser(user._id)} className='btn btn-xs'>Remove</button></th>
                    </tr>
          );
};

export default UserRow;