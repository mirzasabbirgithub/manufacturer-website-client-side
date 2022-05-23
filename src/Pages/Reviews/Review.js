import React from 'react';

const Review = ({ review }) => {
          const { _id, name, ratings, description } = review;
          return (
                    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                              <div class="card-body bg-accent-focus text-white">
                                        <h2 class="card-title justify-center">{name}</h2>
                                        <p>Ratings:{ratings}</p>
                                        <p>{description}</p>
                              </div>
                    </div>
          );
};

export default Review;