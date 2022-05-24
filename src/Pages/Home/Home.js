import React from 'react';
import BusinnesSummary from '../BusinessSummary/BusinnesSummary';
import Reviews from '../Reviews/Reviews';
import Banner from './Banner';
import AnotherSection from './Extra/AnotherSection';
import ExtraSection from './Extra/ExtraSection';
import Items from './Items';

const Home = () => {
          return (
                    <div>
                              <Banner></Banner>
                              <BusinnesSummary></BusinnesSummary>
                              <Items></Items>
                              <Reviews></Reviews>
                              <ExtraSection></ExtraSection>
                              <AnotherSection></AnotherSection>
                    </div>
          );
};

export default Home;