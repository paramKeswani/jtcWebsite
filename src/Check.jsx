
import React from 'react'
import { useUser } from '@clerk/clerk-react'
import axios from 'axios';

import { useEffect, useState } from 'react';
import AdminDisplay from './AdminDisplay';

function Check() {

    const {user} = useUser();

    const [message, setMessage] = useState();
    console.log(user.username);
    console.log(user.primaryPhoneNumber.phoneNumber.substring(3));
    useEffect(() => {

      // const sendData= async() =>{
      //   const response =  await axios.get(`http://localhost:3000/admin/check` , {
      //     userName : user.username ,
      //     phoneNumber : user.primaryPhoneNumber
      //   }).then(response =>
      //     {
      //       console.log(response);

      //   }).catch((error)=>
      //   {
      //     console.log(error);
      //   })
      // }
      

      const fetchData = async () => {
        try {
          // sendData();
          const response = await axios.get(`http://localhost:3000/admin/check`,{params:{
            userName : user.username ,
            phoneNumber : user.primaryPhoneNumber.phoneNumber.substring(3)
          } },    {    headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
      });
          console.log("Response Data:", response.data);
          setMessage(response.data.message);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    
          
    }, [user]);


  return (
    <div>

    <div>
     user Details
     <div>
      {message ? <AdminDisplay></AdminDisplay> : <h1> page doesnt exists </h1> }     
     </div> 
     </div>
      
    </div>
  )
}

export default Check
