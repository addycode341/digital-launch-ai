import {
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";

import { db } from "../firebase";



export const saveLead = async(
ownerId,
websiteId,
leadData
)=>{


const leadsRef = collection(

db,

"users",

ownerId,

"websites",

websiteId,

"leads"

);




await addDoc(

leadsRef,

{


name:
leadData.name,


phone:
leadData.phone,


email:
leadData.email,


message:
leadData.message,



// CRM FIELDS

status:
leadData.status || "new",


notes:
leadData.notes || "",



createdAt:
serverTimestamp()



}

);



};