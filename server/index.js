import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Razorpay from "razorpay";
import crypto from "crypto";


dotenv.config();


import { db } from "./firebaseAdmin.js";



const app = express();



app.use(cors());

app.use(express.json());



// TEST ENV

console.log(
  "Firebase Project:",
  process.env.FIREBASE_PROJECT_ID
);

console.log(
  "Firebase Key:",
  process.env.FIREBASE_PRIVATE_KEY 
  ? "FOUND"
  : "MISSING"
);





// ==========================
// RAZORPAY
// ==========================


const razorpay = new Razorpay({

  key_id:
  process.env.RAZORPAY_KEY_ID,


  key_secret:
  process.env.RAZORPAY_KEY_SECRET

});





// ==========================
// CREATE ORDER
// ==========================


app.post(
"/create-order",
async(req,res)=>{


try{


const {

amount,

planName

}=req.body;



const order =
await razorpay.orders.create({

amount: amount * 100,

currency:"INR",

receipt:
`receipt_${Date.now()}`,

notes:{

plan:planName

}

});



res.json({

success:true,

orderId:order.id,

amount:order.amount,

currency:order.currency,

key:
process.env.RAZORPAY_KEY_ID

});



}

catch(error){

console.log(
"CREATE ORDER ERROR",
error
);


res.status(500).json({

success:false,

message:"Order failed"

});


}


});







// ==========================
// VERIFY PAYMENT
// ==========================


app.post(
"/verify-payment",
async(req,res)=>{


try{


const {

razorpay_order_id,

razorpay_payment_id,

razorpay_signature,

name,

email,

planName,

amount


}=req.body;



const body =

razorpay_order_id
+
"|"
+
razorpay_payment_id;



const expectedSignature =

crypto

.createHmac(

"sha256",

process.env.RAZORPAY_KEY_SECRET

)

.update(body)

.digest("hex");





if(expectedSignature === razorpay_signature){



await db.collection("payments").add({

name:name || "Customer",

email:email || "",

plan:planName || "Starter",

amount:amount || 0,

paymentId:
razorpay_payment_id,

orderId:
razorpay_order_id,

status:"success",

createdAt:new Date()

});




return res.json({

success:true,

message:"Payment successful"

});


}



res.status(400).json({

success:false,

message:"Invalid payment"

});




}

catch(error){


console.log(
"VERIFY ERROR",
error
);


res.status(500).json({

success:false,

message:"Server error"

});


}


});







// ==========================
// SERVER TEST
// ==========================


app.get("/",(req,res)=>{


res.send(
"DigitalLaunch AI Server Running 🚀"
);


});





const PORT =
process.env.PORT || 5000;



app.listen(PORT,()=>{


console.log(
`Server running on ${PORT}`
);


});
