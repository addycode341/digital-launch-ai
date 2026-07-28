import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Razorpay from "razorpay";
import crypto from "crypto";
import { db } from "./firebaseAdmin.js";

dotenv.config();


const app = express();


app.use(cors());

app.use(express.json());





// ==========================
// RAZORPAY CONFIG
// ==========================


const razorpay = new Razorpay({

key_id: process.env.RAZORPAY_KEY_ID,

key_secret: process.env.RAZORPAY_KEY_SECRET

});








// ==========================
// CREATE PAYMENT ORDER
// ==========================


app.post(
"/create-order",
async(req,res)=>{


try{


const {

amount,

planName


}=req.body;



const options={


amount: amount * 100, // rupees to paise


currency:"INR",


receipt:
`receipt_${Date.now()}`,


notes:{


plan:planName


}


};





const order =
await razorpay.orders.create(options);





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
"ORDER ERROR",
error
);



res.status(500).json({

success:false,

message:"Order creation failed"

});


}


}

);











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

.update(body.toString())

.digest("hex");







if(expectedSignature === razorpay_signature){



// SAVE PAYMENT IN FIREBASE

await db.collection("payments").add({

name:name || "Customer",

email:email || "",

plan:planName || "Starter",

amount:amount || 0,

razorpayPaymentId:razorpay_payment_id,

razorpayOrderId:razorpay_order_id,

status:"success",

createdAt:new Date()

});





res.json({

success:true,

message:"Payment verified and saved"

});




}

else{



res.status(400).json({

success:false,

message:"Invalid signature"

});


}



}

catch(error){


console.log(

"VERIFY PAYMENT ERROR",

error

);



res.status(500).json({

success:false,

message:"Server error"

});


}


}

);






// ==========================
// TEST API
// ==========================


app.get("/",(req,res)=>{


res.send(

"DigitalLaunch AI Server Running 🚀"

);


});






const PORT =
process.env.PORT || 5000;



app.listen(

PORT,

()=>{


console.log(

`Server running on ${PORT}`

);


}

);