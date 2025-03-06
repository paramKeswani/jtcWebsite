import React, { useEffect, useState } from "react";
import axios from "axios";

function DisplayCard({ans}) {
  const [req, setReq] = useState(null); // Initially null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/admin/data");
        setReq(response.data.data); // Store only `data` instead of `response.data`
        console.log(response.data.data); // Log after setting state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {req ? (
        Object.keys(req).map((key) => (
          <div key={key} className="border my-1  " >

          <div className="" >
          <div>
          <div   >{key}</div>
            <div>{req[key].length > 0 ? req[key].map((item) => <div div className="border my-1 mx-1" >
            <div  key={item._id} className="p-1 font-bold "> Item name :  {item.itemName}</div>
            <div  key={item._id} className="p-1 font-bold"> category :  {item.category}</div>
            <div  key={item._id} className="p-1 font-bold"> rate :  {item.rate}</div>
            <div  key={item._id} className="p-1 font-bold" > Quantity :  {item.quantity}</div>
            <div className="flex justify-evenly"> 
            <button className="bg-blue-500 p-2 border-black rounded  text-white m-1">update</button>
            <button className="bg-red-500 p-2 border rounded text-white m-1 ">delete</button>
            </div>
            
            </div>) : "No items available"}</div>
          </div>
        
          </div>

          
            
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DisplayCard;
