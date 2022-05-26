import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
          const [user] = useAuthState(auth);
          const [admin] = useAdmin(user);
          const { id } = useParams;

          return (
                    <div class="drawer drawer-mobile">
                              <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                              <div class="drawer-content">
                                        <h2 className='text-3xl font-bold text-green-700'>Welcome To  Dashboard</h2>
                                        <Outlet></Outlet>
                              </div>
                              <div class="drawer-side">
                                        <label for="dashboard-sidebar" class="drawer-overlay"></label>
                                        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                                                  {!admin && < li > <Link to="/dashboard">Purchase Items</Link></li>}

                                                  <li><Link to="/dashboard/addreviews">Add A Reviews</Link></li>
                                                  <li><Link to="/dashboard/myprofile/">My Profile</Link></li>
                                                  {admin && <li><Link to="/dashboard/user">All Users</Link></li>}
                                                  {admin && <li><Link to="/dashboard/addproduct">Add A Product</Link></li>}
                                                  {admin && <li><Link to="/dashboard/manageproduct">Manage Products</Link></li>}
                                                  {admin && <li><Link to="/dashboard/manageorders">Manage All Orders</Link></li>}
                                        </ul>

                              </div>
                    </div >
          );
};

export default Dashboard;