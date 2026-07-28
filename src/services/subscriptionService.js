import {
  doc,
  getDoc
} from "firebase/firestore";

import {
  db
} from "../firebase";



export const getUserSubscription = async(userId)=>{


try{


const userRef = doc(
  db,
  "users",
  userId
);



const snap = await getDoc(userRef);



if(snap.exists()){


return snap.data().subscription || null;


}



return null;



}

catch(error){


console.log(
"Subscription Error:",
error
);


return null;


}



};