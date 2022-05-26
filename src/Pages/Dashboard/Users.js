import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Laoding';
import UserRow from './UserRow';


const Users = () => {
          const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://fierce-ocean-49278.herokuapp.com/user', {
                    method: 'GET',
                    headers: {
                              authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
          }).then(res => res.json()));

          const [loadinguser, setLoadinguser] = useState();


          const deleteUser = id => {
                    const proceed = window.confirm('Are you sure to detele the item?');
                    if (proceed) {
                              const url = `https://fierce-ocean-49278.herokuapp.com/user/${id}`;
                              fetch(url, {
                                        method: 'DELETE'
                              })
                                        .then(res => res.json())
                                        .then(data => {
                                                  console.log(data);
                                                  const remainingUser = users.filter(user => user._id !== id);
                                                  setLoadinguser(remainingUser);
                                        })
                    }
          }




          if (isLoading) {
                    return <Loading></Loading>
          }
          return (
                    <div>
                              <h2 className="text-2xl">All Users: {users.length}</h2>
                              <div class="overflow-x-auto">
                                        <table class="table w-full">
                                                  <thead>
                                                            <tr>
                                                                      <th>Index</th>
                                                                      <th>Email</th>
                                                                      <th>Rules</th>
                                                                      <th>Action</th>
                                                            </tr>
                                                  </thead>
                                                  <tbody>
                                                            {
                                                                      users.map(user => <UserRow
                                                                                key={user._id}
                                                                                user={user}
                                                                                refetch={refetch}
                                                                                deleteUser={deleteUser}
                                                                      ></UserRow>
                                                                      )
                                                            }
                                                  </tbody>
                                        </table>
                              </div>
                    </div>
          );
};

export default Users;