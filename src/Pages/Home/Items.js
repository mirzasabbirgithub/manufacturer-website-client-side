import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
          const [items, setItems] = useState([]);
          const [purchased, setPurchased] = useState();

          useEffect(() => {
                    fetch('http://localhost:5000/item')
                              .then(res => res.json())
                              .then(data => setItems(data));
          }, [])

          return (
                    <>
                              <div>
                                        <h1 className='text-5xl my-5 text-cyan-600'>Available Items : {items.length}</h1>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                        {
                                                  items.map(item => <Item
                                                            key={item._id}
                                                            item={item}
                                                            setPurchased={setPurchased}
                                                  >
                                                  </Item>)
                                        }
                              </div>

                    </>

          );
};

export default Items;