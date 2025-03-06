
// import { currentUser } from 'clerk'; 
// // Assuming you have Clerk integrated in your project



// async function getUserData(req, res) {

//     const user = await currentUser(); 
//     // Fetches the current user data
//     // Access user properties like user.email, user.id, etc.
//     // res.json(user);
//     console.log(user);


// }


// const { Router } = require("express");
// const router = Router();
// // const userMiddleware = require("../middleware/middleware");



// router.get('/courses', async (req, res) => {
//     // Implement course purchase logic

//     const user = await currentUser();
//     console.log(user);
    

// });

const express = require('express');
// const upload = require(".multer.js");
// import  Admin  from './Db.js';
// const { requireAuth } = require('@clerk/express');
// const multer = require('multer');
// const cloudinary = require('cloudinary').v2;
const {Admin ,Item}  = require("../Db/Db.js");
// cloudinary.config({
//   cloud_name: 'dzjojedbvc',
//   api_key: '727482483588623',
//   api_secret: process.env.CLOUDINARY_SECRET_KEY
// });

const router = express.Router();
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

//get requests have no body
router.get('/check', async (req, res) => {
    try {
        const userName = req.query.userName;
        // console.log(userName);
        const phoneNumber = req.query.phoneNumber; 
        // console.log(phoneNumber);
        // res.json({message: "hello"});
        // const checkAdminExists = async (username) => {  
            const admin = await Admin.find( {name: userName  , phoneNumber: phoneNumber});  

            // console.log("Admin found:", admin);
            if(admin.length > 0)
                {
                    res.status(200).json({ message: true });

                }
                else 
                {
                    res.status(404).json({ message: false });
                }
                 // Returns true if user exists, false otherwise  
        


        

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// http://localhost:3000/admin/data

// router.post('/data', async (req, res) => {
//     try {
//         const itemName = req.body.productName;
//         console.log(itemName);
//         const category = req.body.category; 
//         console.log(category);
//         const rate = req.body.rate; 
//         console.log(rate);
//         const quantity = req.body.quantity; 
//         console.log(quantity);
//         // res.json({message: "hello"});
//         // const checkAdminExists = async (username) => {  

//             const present = await Item.findOne({itemName :itemName});

//             if(present != null)
//             {
//             //  await Item.updateOne(
//             //     {itemName : itemName},
//             //     {$set : {category : category , rate : rate , quantity : quantity}}
//             //   );
              
//             //   res.status(200).json({message : "updated Successfully"});

//             const result = await Item.updateOne(
//               { itemName: itemName },
//               { $set: { category: category, rate: rate, quantity: quantity } }
//             );
      
//             if (result.modifiedCount > 0) {
//               res.status(200).json({ message: "updated Successfully" });
//             } else {
//               res.status(404).json({ message: "Item not found or no changes made" });
//             }



//             }
//             else 
//             {
//                 const dataInserted = new Item( {itemName: itemName  , category: category , rate : rate , quantity : quantity});  

//             try{
//                 await dataInserted.save();
//                 console.log("Data inserted:");
//                 res.status(200).json({ message: "Item successfully added!" });

//             }
//             catch(error)
//             {   
//                 console.log(error);
//                 res.status(500).json({ message: "Internal Server Error" });

//             }

//             }
            
           
     
                 // Returns true if user exists, false otherwise  
        


        

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

// const uploadToCloudinary = async (path, folder = "my-profile") => {
//   try {
//     const data = await cloudinary.uploader.upload(path, { folder: folder });
//     return { url: data.secure_url, publicId: data.public_id };
//   } catch (err) {
//     console.log(err);
//     throw err;
//   }
// };
router.post('/data', async (req, res) => {
  try {
    const itemName = req.body.productName;
    const category = req.body.category;
    const rate = req.body.rate;
    const quantity = req.body.quantity;
    
    console.log(1 + "/data");

    console.log(itemName);
    console.log(category);

    console.log(rate);

    console.log(quantity);




    // const result = await cloudinary.uploader.upload(req.file.path);
    // let cloudinaryResult = null;
    // if (req.file) {
    //   cloudinaryResult = await uploadToCloudinary(req.file.path);
    // }
    

    const present = await Item.findOne({ itemName: itemName });

    if (present != null) {
      console.log("Item found, updating...");
      const result = await Item.updateOne(
        { itemName: itemName },
        { $set: { category: category, rate: rate, quantity: quantity  } }
      );

      if (result.modifiedCount > 0) {
        console.log("Item updated successfully");
        res.status(200).json({ message: "updated Successfully" });
      } else {
        console.log("Item not found or no changes made");
        res.status(404).json({ message: "Item not found or no changes made" });
      }
    } else {
      console.log("Item not found, inserting new item...");
      const dataInserted = new Item({ itemName: itemName, category: category, rate: rate, quantity: quantity });

      try {
        await dataInserted.save();
        console.log("Data inserted successfully");
        res.status(200).json({ message: "Item successfully added!" });
      } catch (error) {
        console.error("Error inserting data:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.get('/data', async (req, res) => {
    const arr = [
        "atta", "bajri", "besan", "bhagar", "chawal", "copra", "dal", "gahu",
        "ghee", "gur", "jwari", "k2", "maida", "namak", "oil", "poha", "rice",
        "sabudana", "sakhar", "sooji", "soyawadi"
    ];

    const obj = {}; // Object to store results

    try {
        for (let i = 0; i < arr.length; i++) {
            const data = await Item.find({ category: arr[i] });
            obj[arr[i]] = data; // Assign the fetched data to the object
        }

        res.status(200).json({ data: obj });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message || "Internal Server Error" });
    }
});



router.get('/dataparameter', async (req, res) => {
    const arr = [
        "atta", "bajri", "besan", "bhagar", "chawal", "copra", "dal", "gahu",
        "ghee", "gur", "jwari", "k2", "maida", "namak", "oil", "poha", "rice",
        "sabudana", "sakhar", "sooji", "soyawadi"
    ];

    const itemName = req.query.productName;

    const obj = {}; 
    if (!itemName) {
        return res.status(400).json({ message: "Missing productName parameter" });
    }

    try {
        // for (let i = 0; i < arr.length; i++) {
            const data = await Item.find({ category: itemName });
            obj[itemName] = data; // Assign the fetched data to the object
        // }

        res.status(200).json({ data: obj });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message || "Internal Server Error" });
    }
});




router.get('/datareq', async (req, res) => {
    

    const itemName = req.query.productName;
    // const category = req.query.category;
    // const rate = req.query.rate;
    // const quantity = req.query.quantity;


    console.log("itemname"+itemName);
    // console.log("itemname"+category);
    // console.log("itemname"+rate);
    // console.log("itemname"+quantity);
    console.log("datareq");


    if (!itemName) {
        return res.status(400).json({ message: "Missing productName parameter" });
    }

    try {
        // for (let i = 0; i < arr.length; i++) {
        console.log(1 + "datareq")
            const data = await Item.find({ itemName: itemName });
            // obj[itemName] = data; // Assign the fetched data to the object
        // }
        console.log(2+ "datareq")
        console.log(data);
        res.status(200).json({ data: data });
    } catch (error) {
      console.log(3+ "datareq")
        console.error(error);
        res.status(500).json({ message: error.message || "Internal Server Error" });
    }
});



// router.put("/update", async(res,req)=>
//     {
//         const itemName = req.query.productName;
//         console.log(itemName);
//         const category = req.query.category; 
//         console.log(category);
//         const rate = req.query.rate; 
//         console.log(rate);
//         const quantity = req.query.quantity;


//         const result = await Item.find({itemName : itemName});
//         console.log(result);

//         if(result.length > 0)
//         {
            // Item.updateOne(
            //     {itemName : itemName},
            //     {$set : {category : category , rate : rate , quantity : quantity}}
            // );


//             res.status(200).json({message : "Item updated successfully"});
//         }
//         else 
//         {
//             res.status(404).json({message : "Item not found"});
//         }



// })



router.put("/update", async (req, res) => {
  try {
    const { productName, category, rate, quantity } = req.body; // Use req.body instead of req.query

    if (!productName || !category || !rate || !quantity) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const result = await Item.updateOne(
      { itemName: productName },
      { $set: { category, rate, quantity } }
    );

    if (result.modifiedCount > 0) {
      res.status(200).json({ message: "Item updated successfully" });
    } else {
      res.status(404).json({ message: "Item not found or no changes made" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
});
  






// router.get('/delete', async (req, res) => {
    

//     const itemName = req.query.productName;
//     console.log(itemName

//     );

//     const obj = {}; // Object to store results
//     if (!itemName) {
//         return res.status(400).json({ message: "Missing productName parameter" });
//     }

//     try {
//         // for (let i = 0; i < arr.length; i++) {
//             const data = await Item.deleteOne({ itemName: itemName });
//              // Assign the fetched data to the object
//         // }

//         if (data.deletedCount === 0) {
//             return res.status(404).json({ message: "Item not found" });
//           }

//         res.status(200).json({"message" :`${itemName} deleted Successfully`});
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: error.message || "Internal Server Error" });
//     }
// });
router.delete('/delete', async (req, res) => {
    console.log("hi");
    const id = req.query.productName;
    console.log("Deleting item with ID:", id);

    
    if (!id) {
      return res.status(400).json({ message: "Missing id parameter" });
    }
    
    try {
      // Use findByIdAndDelete correctly - it only needs the ID
      const result = await Item.deleteOne({itemName : id});

      console.log(result);
      
      if (!result) {
        return res.status(404).json({ message: "Item not found" });
      }
      
      res.status(200).json({ message: `Item deleted successfully` });
    } catch (error) {
      console.error("Error deleting item:", error);
      res.status(500).json({ message: error.message || "Internal Server Error" });
    }
  });


  router.delete('/patch', async (req, res) => {
    console.log("hi");
    const id = req.query.productName;
    console.log("Deleting item with ID:", id);
    
    if (!id) {
      return res.status(400).json({ message: "Missing id parameter" });
    }
    
    try {
      // Use findByIdAndDelete correctly - it only needs the ID
      const result = await Item.deleteOne({itemName : id});

      console.log(result);
      
      if (!result) {
        return res.status(404).json({ message: "Item not found" });
      }
      
      res.status(200).json({ message: `Item deleted successfully` });
    } catch (error) {
      console.error("Error deleting item:", error);
      res.status(500).json({ message: error.message || "Internal Server Error" });
    }
  });


  



module.exports = router;





// without image thing 

// const express = require('express');
// // const multer = require('multer');
// // const cloudinary = require('cloudinary').v2;
// const { Admin, Item } = require("../Db/Db.js");

// // cloudinary.config({
// //   cloud_name: 'dzjojedbvc',
// //   api_key: '727482483588623',
// //   api_secret: process.env.CLOUDINARY_SECRET_KEY
// // });

// const router = express.Router();
// // const storage = multer.memoryStorage();
// // const upload = multer({ storage: storage });

// // Get requests have no body
// router.get('/check', async (req, res) => {
//   try {
//     const userName = req.query.userName;
//     const phoneNumber = req.query.phoneNumber;
//     const admin = await Admin.find({ name: userName, phoneNumber: phoneNumber });

//     if (admin.length > 0) {
//       res.status(200).json({ message: true });
//     } else {
//       res.status(404).json({ message: false });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // const uploadToCloudinary = async (path, folder = "my-profile") => {
// //   try {
// //     const data = await cloudinary.uploader.upload(path, { folder: folder });
// //     return { url: data.secure_url, publicId: data.public_id };
// //   } catch (err) {
// //     console.log(err);
// //     throw err;
// //   }
// // };

// // router.post('/data', upload.single('image'), async (req, res) => {
// //   try {
// //     const itemName = req.body.productName;
// //     const category = req.body.category;
// //     const rate = req.body.rate;
// //     const quantity = req.body.quantity;

// //     let cloudinaryResult = null;
// //     if (req.file) {
// //       cloudinaryResult = await uploadToCloudinary(req.file.path);
// //     }

// //     const present = await Item.findOne({ itemName: itemName });

// //     if (present != null) {
// //       console.log("Item found, updating...");
// //       const updateData = { category, rate, quantity };
// //       if (cloudinaryResult) {
// //         updateData.cloudinary_id = cloudinaryResult.publicId;
// //         updateData.image_url = cloudinaryResult.url;
// //       }
// //       const result = await Item.updateOne(
// //         { itemName: itemName },
// //         { $set: updateData }
// //       );

// //       if (result.modifiedCount > 0) {
// //         console.log("Item updated successfully");
// //         res.status(200).json({ message: "updated Successfully" });
// //       } else {
// //         console.log("Item not found or no changes made");
// //         res.status(404).json({ message: "Item not found or no changes made" });
// //       }
// //     } else {
// //       console.log("Item not found, inserting new item...");
// //       const dataInserted = new Item({
// //         itemName,
// //         category,
// //         rate,
// //         quantity,
// //         cloudinary_id: cloudinaryResult ? cloudinaryResult.publicId : null,
// //         image_url: cloudinaryResult ? cloudinaryResult.url : null
// //       });

// //       try {
// //         await dataInserted.save();
// //         console.log("Data inserted successfully");
// //         res.status(200).json({ message: "Item successfully added!" });
// //       } catch (error) {
// //         console.error("Error inserting data:", error);
// //         res.status(500).json({ message: "Internal Server Error" });
// //       }
// //     }
// //   } catch (error) {
// //     console.error("Error processing request:", error);
// //     res.status(500).json({ error: "Internal Server Error" });
// //   }
// // });

// router.post('/data', async (req, res) => {
//   try {
//     const itemName = req.body.productName;
//     const category = req.body.category;
//     const rate = req.body.rate;
//     const quantity = req.body.quantity;
//       console.log(1);
//       console.log(itemName);
//       console.log(category);
//       console.log(rate);
//       console.log(quantity);
      
    

    
//     const present = await Item.findOne({ itemName: itemName });

//     if (present != null) {
//       console.log("Item found, updating...");
//       const updateData = { category, rate, quantity };
    
//       const result = await Item.updateOne(
//         { itemName: itemName },
//         { $set: updateData }
//       );

//       if (result.modifiedCount > 0) {
//         console.log("Item updated successfully");
//         res.status(200).json({ message: "updated Successfully" });
//       } else {
//         console.log("Item not found or no changes made");
//         res.status(404).json({ message: "Item not found or no changes made" });
//       }
//     } else {
//       console.log("Item not found, inserting new item...");
//       console.log(2);
//       console.log(itemName);
//       console.log(category);
//       console.log(rate);
//       console.log(quantity);
//       const dataInserted = new Item({
//         itemName,
//         category,
//         rate,
//         quantity,
//         // cloudinary_id: cloudinaryResult ? cloudinaryResult.publicId : null,
//         // image_url: cloudinaryResult ? cloudinaryResult.url : null
//       });

//       try {
//         await dataInserted.save();
//         console.log("Data inserted successfully");
//         res.status(200).json({ message: "Item successfully added!" });
//       } catch (error) {
//         console.error("Error inserting data:", error);
//         res.status(500).json({ message: "Internal Server Error" });
//       }
//     }
//   } catch (error) {
//     console.error("Error processing request:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });




// router.get('/data', async (req, res) => {
//   const arr = [
//     "atta", "bajri", "besan", "bhagar", "chawal", "copra", "dal", "gahu",
//     "ghee", "gur", "jwari", "k2", "maida", "namak", "oil", "poha", "rice",
//     "sabudana", "sakhar", "sooji", "soyawadi"
//   ];

//   const obj = {}; // Object to store results

//   try {
//     for (let i = 0; i < arr.length; i++) {
//       const data = await Item.find({ category: arr[i] });
//       obj[arr[i]] = data; // Assign the fetched data to the object
//     }

//     res.status(200).json({ data: obj });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: error.message || "Internal Server Error" });
//   }
// });

// router.get('/dataparameter', async (req, res) => {
//   const arr = [
//     "atta", "bajri", "besan", "bhagar", "chawal", "copra", "dal", "gahu",
//     "ghee", "gur", "jwari", "k2", "maida", "namak", "oil", "poha", "rice",
//     "sabudana", "sakhar", "sooji", "soyawadi"
//   ];

//   const itemName = req.query.productName;

//   const obj = {}; // Object to store results
//   if (!itemName) {
//     return res.status(400).json({ message: "Missing productName parameter" });
//   }

//   try {
//     const data = await Item.find({ category: itemName });
//     obj[itemName] = data; // Assign the fetched data to the object

//     res.status(200).json({ data: obj });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: error.message || "Internal Server Error" });
//   }
// });

// router.get('/datareq', async (req, res) => {
//   const itemName = req.query.productName;
//   const category = req.query.category;
//   const rate = req.query.rate;
//   const quantity = req.query.quantity;

//   console.log("itemname" + itemName);
//   console.log("itemname" + category);
//   console.log("itemname" + rate);
//   console.log("itemname" + quantity);
//   console.log("datareq");

//   if (!itemName) {
//     return res.status(400).json({ message: "Missing productName parameter" });
//   }

//   try {
//     const data = await Item.find({ itemName: itemName });
//     console.log(data);
//     res.status(200).json({ data: data });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: error.message || "Internal Server Error" });
//   }
// });

// router.put("/update", async (req, res) => {
//   try {
//     const { productName, category, rate, quantity } = req.body; // Use req.body instead of req.query

//     if (!productName || !category || !rate || !quantity) {
//       return res.status(400).json({ message: "Missing required fields" });
//     }

//     const result = await Item.updateOne(
//       { itemName: productName },
//       { $set: { category, rate, quantity } }
//     );

//     if (result.modifiedCount > 0) {
//       res.status(200).json({ message: "Item updated successfully" });
//     } else {
//       res.status(404).json({ message: "Item not found or no changes made" });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: error.message || "Internal Server Error" });
//   }
// });

// router.delete('/delete', async (req, res) => {
//   console.log("hi");
//   const id = req.query.productName;
//   console.log("Deleting item with ID:", id);

//   if (!id) {
//     return res.status(400).json({ message: "Missing id parameter" });
//   }

//   try {
//     const result = await Item.deleteOne({ itemName: id });

//     console.log(result);

//     if (!result) {
//       return res.status(404).json({ message: "Item not found" });
//     }

//     res.status(200).json({ message: `Item deleted successfully` });
//   } catch (error) {
//     console.error("Error deleting item:", error);
//     res.status(500).json({ message: error.message || "Internal Server Error" });
//   }
// });

// router.delete('/patch', async (req, res) => {
//   console.log("hi");
//   const id = req.query.productName;
//   console.log("Deleting item with ID:", id);

//   if (!id) {
//     return res.status(400).json({ message: "Missing id parameter" });
//   }

//   try {
//     const result = await Item.deleteOne({ itemName: id });

//     console.log(result);

//     if (!result) {
//       return res.status(404).json({ message: "Item not found" });
//     }

//     res.status(200).json({ message: `Item deleted successfully` });
//   } catch (error) {
//     console.error("Error deleting item:", error);
//     res.status(500).json({ message: error.message || "Internal Server Error" });
//   }
// });

// module.exports = router;






