import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp
} from "firebase/firestore";

import { db } from "../firebase";


export const saveDailyAnalytics = async(
  websiteId,
  type
)=>{

  const today = new Date()
  .toISOString()
  .split("T")[0];


  const ref = doc(
    db,
    "analytics",
    websiteId,
    "daily",
    today
  );


  const snap = await getDoc(ref);


  let data = {

    visitors:0,
    leads:0,
    conversions:0,
    updatedAt:serverTimestamp()

  };


  if(snap.exists()){

    data = snap.data();

  }


  if(type==="visitor"){

    data.visitors++;

  }


  if(type==="lead"){

    data.leads++;

  }


  await setDoc(
    ref,
    data
  );


};