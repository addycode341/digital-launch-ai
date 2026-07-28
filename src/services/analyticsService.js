import {
doc,
getDoc,
setDoc,
updateDoc,
increment
} from "firebase/firestore";


import {
db
} from "../firebase";




// Visitor Tracking

export const trackVisitor = async(
ownerId,
websiteId
)=>{


try{


const ref = doc(
db,
"analytics",
websiteId
);



const snap = await getDoc(ref);




if(!snap.exists()){


await setDoc(ref,{

ownerId:ownerId,

websiteId:websiteId,

visitors:1,

leads:0,

conversions:0,

bounceRate:0


});


}

else{


await updateDoc(ref,{

visitors:increment(1)

});


}



}

catch(error){

console.log(
"Visitor Error:",
error
);


}


};









// Lead Tracking

export const trackLead = async(
websiteId
)=>{


try{


const ref = doc(

db,

"analytics",

websiteId

);



await updateDoc(ref,{

leads:increment(1)

});



}

catch(error){


console.log(

"Lead Tracking Error:",

error

);


}



};