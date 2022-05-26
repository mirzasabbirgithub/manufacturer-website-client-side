import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Laoding';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3ZONFenjGsQIjlKWLciEnJkq9lccbbrl7VI9Y7ncANKnqkivLDSZZBmqBv3rkaG9OEZJICnqiIgc91JqlYU9di00FTJzslRD');

const Payment = () => {
          const { id } = useParams();
          const url = `https://fierce-ocean-49278.herokuapp.com/purchased/${id}`;

          const { data: purchased, isLoading } = useQuery(['purchase', id], () => fetch(url, {
                    method: 'GET',
                    headers: {
                              'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    }
          }).then(res => res.json()));

          if (isLoading) {
                    return <Loading></Loading>
          }

          return (

                    <div>
                              <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                                        <div class="card-body">
                                                  <p className="text-success font-bold">Hello, {purchased.userName}</p>
                                                  <h2 class="card-title">Please Pay for,  {purchased.productName}</h2>
                                                  <p>Please pay: ${purchased.price}</p>
                                        </div>
                              </div>
                              <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                                        <div class="card-body">
                                                  <Elements stripe={stripePromise}>
                                                            <CheckoutForm purchased={purchased} />
                                                  </Elements>
                                        </div>
                              </div>
                    </div>
          );
};

export default Payment;