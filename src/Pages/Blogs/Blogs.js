import React from 'react';

const Blogs = () => {
          return (
                    <>
                              <div class="grid grid-cols-2 gap-4">
                                        <div>
                                                  <h1 className='text-3xl text-green-600'>How will you improve the performance of a React Application?</h1>
                                                  <p>To improve the performance of a React Application we need to do optimizing performance. For example, Lazy oading images, Windowing etc.React uses some clever techniques to minimize the number of costly DOM operations required to update the UI. Optimizing react will fixed the issues.</p>
                                        </div>

                                        <div>
                                                  <h1 className='text-3xl text-green-600'>What are the different ways to manage a state in a React application?</h1>
                                                  <p>React components are  built-in state object. The state is sum up data where we store assets that are resolute between component renderings. There are four types of state to manage a state in a react, These are, Local State, Global State, Server State and URL State. By following these the problem will be resolved.</p>
                                        </div>

                                        <div>
                                                  <h1 className='text-3xl text-green-600'>How does prototypical inheritance work?</h1>
                                                  <p>Prototypal inheritance is a javascript feature  used to add methods and properties to objects. It is a method by which an object can inherit  properties and methods from another object.</p>
                                        </div>


                                        <div>
                                                  <h1 className='text-3xl text-green-600'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                                                  <p>array of products means object will be once, then
                                                            products = [
                                                            “name: “abc”,
                                                            type: “abc”
                                                            name: “abc”,
                                                            type: “abc”
                                                            name: “abc”,
                                                            type: “abc”
                                                            ]

                                                            input field get value from onChange, Then filter from the array</p>
                                        </div>

                                        <div>
                                                  <h1 className='text-3xl text-green-600'>What is a unit test? Why should write unit tests?</h1>
                                                  <p>The main goal of unit testing is tp isolate code to test and determine if it works or not. Unit testing ensures that all code meets quality standards before published. Unit testing measure the projects quality. We should write unit tests because it's a very vital issue or any project to ensure quality. </p>
                                        </div>
                              </div>
                    </>
          );
};

export default Blogs;