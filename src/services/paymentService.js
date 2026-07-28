import {
doc,
setDoc,
collection,
addDoc,
serverTimestamp
} from "firebase/firestore";


import {
db
} from "../firebase";





export const savePayment = async(data)=>{


try{



const {


uid,

name,

email,

plan,

amount,

features


}=data;






// USER PLAN UPDATE


await setDoc(


doc(
db,
"users",
uid
),


{


plan:plan,


features:features,


subscription:{


status:"active",


amount:amount,


startDate:serverTimestamp()


}


},


{

merge:true

}


);









// PAYMENT HISTORY



await addDoc(


collection(
db,
"payments"
),


{


uid:uid,


name:name,


email:email,


plan:plan,


amount:Number(amount),


status:"success",


createdAt:serverTimestamp()



}



);







return {


success:true


};



}

catch(error){


console.log(
"Payment Error:",
error
);



return {


success:false,


error:error.message


};



}



};