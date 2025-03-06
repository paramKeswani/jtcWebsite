// import React from 'react'

// function Callus() {
//   return (
//     <div>

//     <div className='container h-15 bg-green-100 border '>

//     <div className='container m-1 py-1 px-1  '>

//     <div className='float-left'> 
    
//     <div className='container h-10 border w-15 py-2'> user p </div>
    
//      </div>

//     <div className='float-right '> <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Callus</button>

// <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Log in</button>
// </div>
    
//     </div>

    
    

//     </div>
      
//     </div>
//   )
// }

// export default Callus
import React from 'react';
import { SignInButton } from '@clerk/clerk-react';  

function Callus() {
  return (
    <div>
      <div className="container h-15 bg-green-100 border">
        <div className="container m-1 py-1 px-1 flex justify-between items-center">
          <div className="container h-12  border w-12 py-2 rounded-full ">User P</div>

          <div className="flex space-x-2">
            <button
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 
                         focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm 
                         px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 
                         dark:focus:ring-green-800"
            >
              Call Us
            </button>

            {/* <button
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 
                         focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm 
                         px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 
                         dark:focus:ring-green-800"
            >
              Log In
            </button> */}
            <SignInButton className ={`focus:outline-none text-white bg-green-700 hover:bg-green-800 
                         focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm 
                         px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 
                         dark:focus:ring-green-800`}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Callus;
