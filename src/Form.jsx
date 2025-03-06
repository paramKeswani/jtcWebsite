// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import SearchFeature from "./SearchFeature";
// import { useRecoilState } from "recoil";
// import { searchItemState } from "../state/atom";

// function Form() {
//   const [req, setReq] = useState(null); // Initially null
//   const [productName, setProductName] = useState("");
//   const [count, setCount] = useState(0);
//   const [category, setCategory] = useState("");
//   const [rate, setRate] = useState(0);
//   const [quantity, setQuantity] = useState(0);

//   const [q, setQ] = useRecoilState(searchItemState);
//   const arr = [
//     "atta", "bajri", "besan", "bhagar", "chawal", "copra", "dal", "gahu",
//     "ghee", "gur", "jwari", "k2", "maida", "namak", "oil", "poha", "rice",
//     "sabudana", "sakhar", "sooji", "soyawadi"
//   ];

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/admin/data");
//       setReq(response.data.data); // Store only `data` instead of `response.data`
//       console.log(response.data.data); // Log after setting state
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [count]);

//   let ans = false;
//   const fetchDataParameter = async () => {
//     try {
//       ans = true;
//       console.log("q " + q);
//       const response = await axios.get(`http://localhost:3000/admin/dataparameter`, {
//         params: {
//           productName: q
//         },
//       });
//       setReq(response.data.data); // Store only `data` instead of `response.data`
//       console.log("response.q" + response.data.data); // Log after setting state
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const deletedItem = async (itemName) => {
//     try {
//       const response = await axios.delete(`http://localhost:3000/admin/delete?productName=${itemName}`);
//       console.log("response " + response.data.message); // Log after setting state
//       alert(itemName + " deleted successfully");
//       await fetchData();
//     } catch (error) {
//       console.error("Error deleting data:", error);
//       if (error.response && error.response.status === 404) {
//         alert("Item not found");
//       } else {
//         alert("Error deleting item. Please try again.");
//       }
//     }
//   };

//   const updateItem = async (itemName) => {
//     try {
//       console.log(1);
//       console.log(itemName)
//       // console.log(productName);
//       const response = await axios.get(`http://localhost:3000/admin/datareq`, {
//         params: {productName : itemName },
//       });
//       if (response.data.data.length > 0) {
//         alert("Update started");
//         console.log("response "+response.data.data[0].itemName);
        

        
//         setProductName(itemName);
//         setCategory(response.data.data[0].category);
//         setQuantity(response.data.data[0].quantity);
//         setRate(response.data.data[0].rate);

//         console.log(productName);
//         console.log(category);
//         console.log(quantity);
//         console.log(rate);
       
//       } else {
//         alert("Item not found");
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const part2 = async (productName, category, rate, quantity) => {
//     console.log(1);
//     try {
//       const response1 = await axios.put(
//         `http://localhost:3000/admin/update`,
//         { productName, category, rate, quantity } // Send as request body
//       );
//       console.log('Success:', response1.data);
//       alert("Data updated successfully");
//     } catch (error) {
//       console.error('Error:', error);
//       alert("Error updating data. Please try again.");
//     }
//   };
  
  
//   // const part2 = async (productName, category, rate, quantity) => {
//   //   try {
//   //     console.log(1);
//   //     const response1 = await axios.put(
//   //       `http://localhost:3000/admin/update`,
//   //       { params : {
//   //         productName,
//   //         category,
//   //         rate,
//   //         quantity
//   //       }
//   //       } // Config should be the third argument
//   //     );
      
//   //     console.log(2);
//   //     console.log("Response Data:", response1.data.message);
//   //     alert("Data updated successfully");
//   //   } catch (error) {
//   //     console.error("Error updating data:", error);
//   //   }
//   // };
  


//   const sendData = async () => {
//     try {

//       console.log(productName);
//       console.log(category);
//       console.log(quantity);
//       console.log(rate);
//       const response = await axios.post(
//         "http://localhost:3000/admin/data",
//         {
//           productName,
//           category,
//           rate,
//           quantity,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       console.log("Response Data:", response.data.message);
//       alert(response.data.message);

//       setCount(count + 1); // Correct state update
//       await  fetchData();

//       // Reset input fields
//       setProductName("");
//       setCategory("");
//       setRate(0);
//       setQuantity(0);
//     } catch (error) {
//       if (error.response) {
//         if (error.response.status === 400) {
//           alert("Item already exists"); // Handle existing item error
//         } else if (error.response.status === 500) {
//           alert("Server error. Please try again later."); // Handle server error
//         } else {
//           alert("An unexpected error occurred.");
//         }
//       } else {
//         console.error("Request failed:", error);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>Enter Data</h1>
//       <div className="flex justify-around">
//         <SearchFeature items={arr}></SearchFeature>
//         <button className="bg-green-500 text-white rounded m-1 p-2" onClick={fetchDataParameter}> Search </button>
//       </div>

//       {ans ? (
//         <>
//           {/* Display Data */}
//           <div>
//             {req ? (
//               Object.keys(req).map((key) => (
//                 <div key={key} className="border my-1">
//                   <div className="font-bold p-1">{key}</div>
//                   <div>
//                     {req[key].length > 0 ? (
//                       req[key].map((item) => (
//                         <div key={item._id} className="border my-1 mx-1 p-1">
//                           <div className="font-bold">Item Name: {item.itemName}</div>
//                           <div className="font-bold">Category: {item.category}</div>
//                           <div className="font-bold">Rate: {item.rate}</div>
//                           <div className="font-bold">Quantity: {item.quantity}</div>
//                           <div className="flex justify-evenly">
//                             <button className="bg-blue-500 p-2 border-black rounded text-white m-1" onClick={() => {console.log(item.itemName);console.log(1) ; updateItem(item.itemName)}}>
//                               Update
//                             </button>
//                             <button 
//                               className="bg-red-500 p-2 border rounded text-white m-1" 
//                               onClick={() => { 
//                                 console.log(item.itemName); 
//                                 deletedItem(item.itemName);
//                               }}
//                             >
//                               Delete
//                             </button>
//                           </div>
//                         </div>
//                       ))
//                     ) : (
//                       "No items available"
//                     )}
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p>Loading...</p>
//             )}
//           </div>
//         </>
//       ) : (
//         <>
//           <div className="container border">
//             {/* Product Name */}
//             <div className="name-of-product flex">
//               <h2 className="font-bold p-1">Name Of Product</h2>
//               <input
//                 className="border mx-1 m-1 rounded"
//                 onChange={(e) => setProductName(e.target.value)}
//                 value={productName}
//               />
//             </div>

//             {/* Category Selection */}
//             <label htmlFor="category" className="font-bold">
//               Choose a category
//             </label>
//             <select
//               id="category"
//               name="category"
//               className="border rounded"
//               onChange={(e) => setCategory(e.target.value)}
//               value={category} // Added value
//             >
//               <option value="">Select a category</option>
//               <option value="atta">atta</option>
//               <option value="bajri">bajri</option>
//               <option value="besan">besan</option>
//               <option value="bhagar">Bhagar</option>
//               <option value="chawal">chawal</option>
//               <option value="copra">copra</option>
//               <option value="dal">dal</option>
//               <option value="gahu">gahu</option>
//               <option value="ghee">ghee</option>
//               <option value="gur">gur</option>
//               <option value="jwari">jwari</option>
//               <option value="k2">k2</option>
//               <option value="maida">maida</option>
//               <option value="namak">namak</option>
//               <option value="oil">oil</option>
//               <option value="poha">poha</option>
//               <option value="rice">rice</option>
//               <option value="sabudana">sabudana</option>
//               <option value="sakhar">sakhar</option>
//               <option value="sooji">sooji</option>
//               <option value="soyawadi">soyawadi</option>
//             </select>

//             {/* Rate */}
//             <div className="name-of-product flex">
//               <h2 className="font-bold p-1">Rate</h2>
//               <input
//                 className="border mx-1 m-1 rounded"
//                 type="number"
//                 onChange={(e) => setRate(Number(e.target.value))}
//                 value={rate}
//               />
//             </div>

//             {/* Quantity */}
//             <div className="name-of-product flex">
//               <h2 className="font-bold p-1">Quantity</h2>
//               <input
//                 className="border mx-1 m-1 rounded"
//                 type="number"
//                 onChange={(e) => setQuantity(Number(e.target.value))}
//                 value={quantity}
//               />
//             </div>
//             <div>
//                 <label
//                     // htmlFor="profile_image"
//                     className="block font-medium text-deepgray"
//                 >
//                     Upload image
//                 </label>

//                 <input
//                     name="image"
//                     className="w-full rounded-lg border-gray-200 p-3 text-sm"
//                     placeholder="Image"
//                     type="file"
//                     accept="image/*"
//                     id="image"
//                     // onChange={handleImage}
//                 > </input>
//                 </div>

//             {/* Submit Button */}
//             <div className="container flex justify-center">
//             {/* <button
//                 className="rounded border bg-gray-200 font-bold m-1"
//                 onClick={part2}
//               >
//                 update
//               </button> */}
//               <button
//                 className="rounded border bg-gray-200 font-bold m-1"
//                 onClick={sendData}
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//           {/* Display Data */}
//           <div>
//             {req ? (
//               Object.keys(req).map((key) => (
//                 <div key={key} className="border my-1">
//                   <div className="font-bold p-1">{key}</div>
//                   <div>
//                     {req[key].length > 0 ? (
//                       req[key].map((item) => (
//                         <div key={item._id} className="border my-1 mx-1 p-1">
//                           <div className="font-bold">Item Name: {item.itemName}</div>
//                           <div className="font-bold">Category: {item.category}</div>
//                           <div className="font-bold">Rate: {item.rate}</div>
//                           <div className="font-bold">Quantity: {item.quantity}</div>
//                           <div className="flex justify-evenly">
//                             <button className="bg-blue-500 p-2 border-black rounded text-white m-1"  onClick={()=>updateItem(item.itemName
//                             )} >
//                               Update
//                             </button>
//                             <button 
//                               className="bg-red-500 p-2 border rounded text-white m-1"
//                               onClick={() => { 
//                                 console.log(item.itemName); 
//                                 deletedItem(item.itemName);
//                               }}
//                             >
//                               Delete
//                             </button>
//                           </div>
//                         </div>
//                       ))
//                     ) : (
//                       "No items available"
//                     )}
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p>Loading...</p>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Form;


import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchFeature from "./SearchFeature";
import { useRecoilState } from "recoil";
import { searchItemState } from "../state/atom";

function Form() {
  const [req, setReq] = useState(null); // Initially null
  const [productName, setProductName] = useState("");
  const [count, setCount] = useState(0);
  const [category, setCategory] = useState("");
  const [rate, setRate] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState(null); // State for image file

  const [q, setQ] = useRecoilState(searchItemState);
  const arr = [
    "atta", "bajri", "besan", "bhagar", "chawal", "copra", "dal", "gahu",
    "ghee", "gur", "jwari", "k2", "maida", "namak", "oil", "poha", "rice",
    "sabudana", "sakhar", "sooji", "soyawadi"
  ];

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/admin/data");
      setReq(response.data.data); // Store only `data` instead of `response.data`
      console.log(response.data.data); // Log after setting state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [count]);

  let ans = false;
  const fetchDataParameter = async () => {
    try {
      ans = true;
      console.log("q " + q);
      const response = await axios.get(`http://localhost:3000/admin/dataparameter`, {
        params: {
          productName: q
        },
      });
      setReq(response.data.data); // Store only `data` instead of `response.data`
      console.log("response.q" + response.data.data); // Log after setting state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deletedItem = async (itemName) => {
    try {
      const response = await axios.delete(`http://localhost:3000/admin/delete?productName=${itemName}`);
      console.log("response " + response.data.message); // Log after setting state
      alert(itemName + " deleted successfully");
      await fetchData();
    } catch (error) {
      console.error("Error deleting data:", error);
      if (error.response && error.response.status === 404) {
        alert("Item not found");
      } else {
        alert("Error deleting item. Please try again.");
      }
    }
  };

  const updateItem = async (itemName) => {
    try {
      console.log(1);
      setProductName(itemName);
      console.log(productName);
      const response = await axios.get(`http://localhost:3000/admin/datareq`, {
        params: { productName: itemName },
      });

      console.log(response.data.data[0].itemName);
      setCategory(response.data.data[0].category);
      setQuantity(response.data.data[0].quantity);
      setRate(response.data.data[0].rate);


      if (response.data.data.length > 0) {
        alert("Update started");
        console.log("part2" + "hi" );
        
        // part2(response.data.data[0].itemName, response.data.data[0].category, response.data.data[0].quantity, response.data.data[0].rate);
      } else {
        alert("Item not found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const part2 = async (productName, category, rate, quantity) => {
    console.log(1);
    try {
      const response1 = await axios.put(
        `http://localhost:3000/admin/update`,
        { productName, category, rate, quantity } // Send as request body
      );
      console.log('Success:', response1.data);
      alert("Data updated successfully");
    } catch (error) {
      console.error('Error:', error);
      alert("Error updating data. Please try again.");
    }
  };

  const sendData = async () => {
    try {
      // const formData = new FormData();
      // formData.append("productName", productName);
      // formData.append("category", category);
      // formData.append("rate", rate);
      // formData.append("quantity", quantity);
      // if (image) {
      //   formData.append("image", image);
      // }
      console.log(productName);
      console.log(category);
  
      console.log(rate);
  
      console.log(quantity);
      

      const response = await axios.post(
        "http://localhost:3000/admin/data",
       { productName,category,rate,quantity},

      );

      console.log("Response Data:", response.data.message);
      alert(response.data.message);

      setCount(count + 1); // Correct state update

      // Reset input fields
      setProductName("");
      setCategory("");
      setRate(0);
      setQuantity(0);
      setImage(null); // Reset image state
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          alert("Item already exists"); // Handle existing item error
        } else if (error.response.status === 500) {
          alert("Server error. Please try again later."); // Handle server error
        } else {
          alert("An unexpected error occurred.");
        }
      } else {
        console.error("Request failed:", error);
      }
    }
  };

  return (
    <div>
      <h1>Enter Data</h1>
      <div className="flex justify-around">
        <SearchFeature items={arr}></SearchFeature>
        <button className="bg-green-500 text-white rounded m-1 p-2" onClick={fetchDataParameter}> Search </button>
      </div>

      {ans ? (
        <>
          {/* Display Data */}
          <div>
            {req ? (
              Object.keys(req).map((key) => (
                <div key={key} className="border my-1">
                  <div className="font-bold p-1">{key}</div>
                  <div>
                    {req[key].length > 0 ? (
                      req[key].map((item) => (
                        <div key={item._id} className="border my-1 mx-1 p-1">
                          <div className="font-bold">Item Name: {item.itemName}</div>
                          <div className="font-bold">Category: {item.category}</div>
                          <div className="font-bold">Rate: {item.rate}</div>
                          <div className="font-bold">Quantity: {item.quantity}</div>
                          <div className="flex justify-evenly">
                            <button className="bg-blue-500 p-2 border-black rounded text-white m-1" onClick={() => {console.log(item.itemName);console.log(1) ; updateItem(item.itemName)}}>
                              Update
                            </button>
                            <button 
                              className="bg-red-500 p-2 border rounded text-white m-1" 
                              onClick={() => { 
                                console.log(item.itemName); 
                                deletedItem(item.itemName);
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      "No items available"
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="container border">
            {/* Product Name */}
            <div className="name-of-product flex">
              <h2 className="font-bold p-1">Name Of Product</h2>
              <input
                className="border mx-1 m-1 rounded"
                onChange={(e) => setProductName(e.target.value)}
                value={productName}
              />
            </div>

            {/* Category Selection */}
            <label htmlFor="category" className="font-bold">
              Choose a category
            </label>
            <select
              id="category"
              name="category"
              className="border rounded"
              onChange={(e) => setCategory(e.target.value)}
              value={category} // Added value
            >
              <option value="">Select a category</option>
              <option value="atta">atta</option>
              <option value="bajri">bajri</option>
              <option value="besan">besan</option>
              <option value="bhagar">Bhagar</option>
              <option value="chawal">chawal</option>
              <option value="copra">copra</option>
              <option value="dal">dal</option>
              <option value="gahu">gahu</option>
              <option value="ghee">ghee</option>
              <option value="gur">gur</option>
              <option value="jwari">jwari</option>
              <option value="k2">k2</option>
              <option value="maida">maida</option>
              <option value="namak">namak</option>
              <option value="oil">oil</option>
              <option value="poha">poha</option>
              <option value="rice">rice</option>
              <option value="sabudana">sabudana</option>
              <option value="sakhar">sakhar</option>
              <option value="sooji">sooji</option>
              <option value="soyawadi">soyawadi</option>
            </select>

            {/* Rate */}
            <div className="name-of-product flex">
              <h2 className="font-bold p-1">Rate</h2>
              <input
                className="border mx-1 m-1 rounded"
                type="number"
                onChange={(e) => setRate((e.target.value))}
                value={rate}
              />
            </div>

            {/* Quantity */}
            <div className="name-of-product flex">
              <h2 className="font-bold p-1">Quantity</h2>
              <input
                className="border mx-1 m-1 rounded"
                type="number"
                onChange={(e) => setQuantity((e.target.value))}
                value={quantity}
              />
            </div>

            {/* Image Upload */}
            <div>
              {/* <label className="block font-medium text-deepgray">
                Upload image
              </label>
              <input
                name="image"
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Image"
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])} // Handle image file selection
              /> */}
            </div>

            {/* Submit Button */}
            <div className="container flex justify-center">
              <button
                className="rounded border bg-gray-200 font-bold m-1"
                onClick={sendData}
              >
                Submit
              </button>
            </div>
          </div>
          {/* Display Data */}
          <div>
            {req ? (
              Object.keys(req).map((key) => (
                <div key={key} className="border my-1">
                  <div className="font-bold p-1">{key}</div>
                  <div>
                    {req[key].length > 0 ? (
                      req[key].map((item) => (
                        <div key={item._id} className="border my-1 mx-1 p-1">
                          <div className="font-bold">Item Name: {item.itemName}</div>
                          <div className="font-bold">Category: {item.category}</div>
                          <div className="font-bold">Rate: {item.rate}</div>
                          <div className="font-bold">Quantity: {item.quantity}</div>
                          <div className="flex justify-evenly">
                            <button className="bg-blue-500 p-2 border-black rounded text-white m-1" onClick={() => {console.log(item.itemName);console.log(1) ; updateItem(item.itemName)}}>
                              Update
                            </button>
                            <button 
                              className="bg-red-500 p-2 border rounded text-white m-1" 
                              onClick={() => { 
                                console.log(item.itemName); 
                                deletedItem(item.itemName);
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      "No items available"
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Form;