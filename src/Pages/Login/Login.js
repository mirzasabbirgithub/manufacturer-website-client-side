import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Pages/Shared/Loading/Laoding'
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
          const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
          const { register, formState: { errors }, handleSubmit } = useForm();
          const [
                    signInWithEmailAndPassword,
                    user,
                    loading,
                    error,
          ] = useSignInWithEmailAndPassword(auth);

          let signInError;
          const navigate = useNavigate();
          const location = useLocation();
          let from = location.state?.from?.pathname || "/";
          if (loading || gLoading) {
                    return <Loading></Loading>
          }

          if (error || gError) {
                    signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
          }

          if (user || gUser) {
                    navigate(from, { replace: true });
          }

          const onSubmit = data => {
                    signInWithEmailAndPassword(data.email, data.password);
          }

          return (
                    <div className='flex h-screen justify-center items-center'>
                              <div className='card w-96 bg-base-100 shadow-xl'>

                                        <div className="card-body">
                                                  <h2 className="text-center text-2xl font-bold">Login</h2>

                                                  <form onSubmit={handleSubmit(onSubmit)}>

                                                            <div class="form-control w-full max-w-xs">
                                                                      <label class="label">
                                                                                <span class="label-text">Email</span>
                                                                      </label>
                                                                      <input type="email" placeholder="Enter Your Email" class="input input-bordered w-full max-w-xs"
                                                                                {...register("email", {
                                                                                          required: {
                                                                                                    value: true,
                                                                                                    message: 'Email is Required'
                                                                                          },
                                                                                          pattern: {
                                                                                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                                                                    message: 'Provide a valid Email'
                                                                                          }
                                                                                })}
                                                                      />
                                                                      <label class="label">
                                                                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                                                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                                                      </label>
                                                            </div>

                                                            {/* Password Validation */}
                                                            <div className="form-control w-full max-w-xs">
                                                                      <label className="label">
                                                                                <span className="label-text">Password</span>
                                                                      </label>
                                                                      <input
                                                                                type="password"
                                                                                placeholder="Password"
                                                                                className="input input-bordered w-full max-w-xs"
                                                                                {...register("password", {
                                                                                          required: {
                                                                                                    value: true,
                                                                                                    message: 'Password is Required'
                                                                                          },
                                                                                          minLength: {
                                                                                                    value: 6,
                                                                                                    message: 'Password must be minimum 6 characters'
                                                                                          }
                                                                                })}
                                                                      />
                                                                      <label className="label">
                                                                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                                                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                                                      </label>
                                                            </div>

                                                            {/* display error message */}
                                                            {signInError}
                                                            <input className='btn btn-secondary  w-full max-w-xs ' type="submit" value="Login" />
                                                  </form>

                                                  <p><small>Are you new? <Link className='text-primary' to="/register">Create An Account</Link></small></p>
                                                  <div className="divider">OR</div>
                                                  <button onClick={() => signInWithGoogle()} className="btn btn-outline"
                                                  >Continue with Google</button>
                                        </div>
                              </div>
                    </div>
          );
};
export default Login;