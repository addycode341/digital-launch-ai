import {
  collection,
  addDoc,
  updateDoc,
  setDoc,
  doc,
  serverTimestamp
} from "firebase/firestore";


import {
  db,
  auth
} from "../firebase";




// =====================================
// CREATE NEW WEBSITE
// =====================================


export const saveWebsite = async (website) => {


  const user = auth.currentUser;



  if(!user){

    throw new Error(
      "User not logged in"
    );

  }



  const websiteRef = await addDoc(


    collection(

      db,

      "users",

      user.uid,

      "websites"

    ),



    {


      title:
      website.businessName ||
      website.title ||
      "Untitled Website",



      businessType:
      website.category ||
      website.businessType ||
      "Business",



      template:
      website.template || "",



      status:
      "draft",



      createdAt:
      serverTimestamp(),



      updatedAt:
      serverTimestamp(),



      websiteData:
      website


    }


  );





  return {

    id:websiteRef.id

  };


};









// =====================================
// UPDATE EXISTING WEBSITE
// =====================================



export const updateWebsite = async (

id,

website

)=>{


const user = auth.currentUser;



if(!user){


throw new Error(
"User not logged in"
);


}





const websiteRef = doc(


db,


"users",


user.uid,


"websites",


id


);







await updateDoc(


websiteRef,


{


title:

website.businessName ||

website.title ||

"Untitled Website",





businessType:

website.category ||

website.businessType ||

"Business",





template:

website.template || "",





updatedAt:

serverTimestamp(),





websiteData:

website



}



);





return {

id:id

};



};











// =====================================
// PUBLISH WEBSITE
// =====================================



export const publishWebsite = async(site)=>{


const user = auth.currentUser;



if(!user){


throw new Error(
"User not logged in"
);


}




if(!site.title && !site.businessName){


throw new Error(
"Website title missing"
);


}





const title =

site.title ||

site.businessName;







const slug = title

.toLowerCase()

.trim()

.replace(/[^a-z0-9]+/g,"-")

.replace(/^-+|-+$/g,"");









await setDoc(



doc(


db,


"publicWebsites",


slug



),



{


title:title,



status:"published",



ownerId:user.uid,



websiteId:site.id,



slug:slug,



websiteData:

site.websiteData ||

site,



createdAt:

serverTimestamp(),



updatedAt:

serverTimestamp()



}



);






return slug;



};