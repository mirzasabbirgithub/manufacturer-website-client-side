import React from 'react';
import BusinnesSummary from '../BusinessSummary/BusinnesSummary';
import Reviews from '../Reviews/Reviews';
import Banner from './Banner';
import Items from './Items';

const Home = () => {
          return (
                    <div>
                              <Banner></Banner>
                              <BusinnesSummary></BusinnesSummary>
                              <Items></Items>
                              <Reviews></Reviews>
                    </div>
          );
};

export default Home;