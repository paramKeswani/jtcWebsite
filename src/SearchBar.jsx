// import React from 'react'
// import SearchFeature from './SearchFeature'
// import Button from './Button'

// export default function SearchBar() {
//   return (
//     <div>

//     <div className='container border h-15 bg-green-100 flex '> 
    
//     <SearchFeature></SearchFeature>

    
//     <button class="justify-end rounded-lg px-2 py-1 m-1 border-2 focus:ring-1 border-yellow-500 text-yellow-500 bg-yellow-100 hover:text-yellow-100 h-10  ">My List</button>
    
//     <button class="justify-end rounded-lg px-4 py-1  m-1 border-2 focus:ring-1 border-yellow-500 text-yellow-500 bg-yellow-100 hover:text-yellow-100 h-10  ">Cart</button>

    

    
//      </div>

      
//     </div>
//   )
// }

import React from 'react';
import SearchFeature from './SearchFeature';
import Button from './Button';

export default function SearchBar() {
  const items = ['apple', 'banana', 'orange', 'grape', 'watermelon']; 
  return (
    <div>
      <div className="container border h-15 bg-green-100 flex items-center justify-between px-2">
        <SearchFeature  items={items} />

        <div className="flex space-x-2">
          <button className="rounded-lg px-2 py-1 m-1 border-2 focus:ring-1 border-yellow-500 text-yellow-500 bg-yellow-100 hover:text-yellow-100 h-10">
            My List
          </button>
          <button className="rounded-lg px-4 py-1 m-1 border-2 focus:ring-1 border-yellow-500 text-yellow-500 bg-yellow-100 hover:text-yellow-100 h-10">
            Cart
          </button>
        </div>
      </div>
    </div>
  );
}

