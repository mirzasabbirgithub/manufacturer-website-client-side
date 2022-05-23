import React from 'react';
import Reviews from '../Reviews/Reviews';
import Banner from './Banner';
import Items from './Items';

const Home = () => {
          return (
                    <div>
                              <Banner></Banner>
                              <Items></Items>
                              <Reviews></Reviews>
                    </div>
          );
};

export default Home;