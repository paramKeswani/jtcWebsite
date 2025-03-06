// import React, {
// 	useState,
// 	useEffect
// } from 'react';

// function SearchFeature() {
// 	const [query, setQuery] = useState('');
// 	const [filteredItems, setFilteredItems] = useState([]);
   
//     const [select , setSelect] = useState("");
    
    

// 	const items = ['apple', 'banana', 'orange',
// 		'grape', 'watermelon'];



//                 useEffect(() => {

//                     if(query == '')
//                     {
                        
//                         setFilteredItems([]);

//                     }
//                     else 
//                     {
//                         const filtered = items.filter(item =>
//                             item.toLowerCase().includes(query.toLowerCase())
//                         );
//                         setFilteredItems(filtered);
//                     }
                    
//                 }, [query ]);

//                 useEffect(() => {
//                     filteredItems.length = 0;
//                     setFilteredItems(filteredItems);    
//                   }, [filteredItems]);


//                 // let isBroke = false;


	

// 	return (
// 		<div className='     '>
// 			<input className='m-2 border rounded'
// 				type="text"
// 				placeholder="🔍Search..."
// 				value={query}
               
// 				onChange={(e) => setQuery(e.target.value)}
// 			/>
// 			<ul className='w-48 m-1'>
// 				{
//                     query !== '' && filteredItems.map((item, index) => (
// 					<li  key={index}>
//                     <div className='text-red-600  bg-gray-200 mx-1 text-left p-1' onClick={(e)=>{
//                         setSelect(item); 
//                         setQuery(item);
//                         setFilteredItems(()=>[]);
                 
//                         // console.log("item :"+item);
//                         // isBroke = true;
//                         // if(isBroke)
//                         // {
//                         //     return ;
//                         // }

//                         // console.log("place :"+place);
//                         // console.log("select :"+select);

//                         // console.log(e.target.innerHTML); 
//                         }   }>{item}</div>
//                     </li>
// 				)) }
// 			</ul>
// 		</div>
// 	);
// }

// export default SearchFeature;

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import React, { useState, useEffect } from 'react';
import { searchItemState } from '../state/atom';
function SearchFeature({items}) {
  const [query, setQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [select, setSelect] = useState('');
  const [q, setQ] = useRecoilState(searchItemState);
  //  items = ['apple', 'banana', 'orange', 'grape', 'watermelon'];

  useEffect(() => {
    if (query === '') {
      setFilteredItems([]);
    } else {
      const filtered = items.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(filtered);
      setQ(query);
    }
  }, [query]);

  return (
    <div className="relative">
      {/* Search Input */}
      <input
        className="m-2 border rounded px-2 py-1 w-48"
        type="text"
        placeholder="🔍 Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Search Dropdown */}
      {query !== '' && filteredItems.length > 0 && (
        <ul className="absolute left-2 top-12 w-48 bg-white border rounded shadow-lg z-10">
          {filteredItems.map((item, index) => (
            <li key={index} className="cursor-pointer hover:bg-gray-300">
              <div
                className="text-red-600 bg-gray-200 text-left p-2"
                onClick={() => {
                  setSelect(item);
                  setQuery(item);
                  setFilteredItems([]);
                }}
              >
                {item}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchFeature;
