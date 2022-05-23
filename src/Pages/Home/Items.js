import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
          const [items, setItems] = useState([]);
          useEffect(() => {
                    fetch('')
                              .then(res => res.json())
                              .then(data => setItems(data));
          }, [])

          return (
                    <>
                              <div>
                                        <h1 className='text-5xl'>Find Your Items</h1>
                              </div>

                              {
                                        items.map(item => <Item
                                                  key={item.id}
                                                  item={item}
                                        >
                                        </Item>)
                              }

                    </>

          );
};

export default Items;