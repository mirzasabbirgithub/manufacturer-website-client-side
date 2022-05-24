import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
          const [reviews, setReviews] = useState([]);

          useEffect(() => {
                    fetch('http://localhost:5000/review')
                              .then(res => res.json())
                              .then(data => setReviews(data));
          }, [])

          return (
                    <>
                              <div>
                                        <h1 className='text-3xl my-2 text text-fuchsia-600'>Review Section</h1>
                                        <h1 className='text-2xl my-2'>Total Reviews : {reviews.length}</h1>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
                                        {
                                                  reviews.map(review => <Review
                                                            key={review._id}
                                                            review={review}
                                                  >
                                                  </Review>)
                                        }
                              </div>

                    </>

          );
};

export default Reviews;