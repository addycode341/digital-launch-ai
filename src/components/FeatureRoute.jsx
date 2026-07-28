import React, {
useEffect,
useState
} from "react";


import {
useNavigate
} from "react-router-dom";


import {
doc,
getDoc
} from "firebase/firestore";


import {
db,
auth
} from "../firebase";


import {
Lock,
Rocket
} from "lucide-react";


import {
checkFeature
} from "../utils/planFeatures";






const FeatureRoute = ({
children,
feature
})=>{



const navigate = useNavigate();



const [loading,setLoading]=useState(true);

const [allowed,setAllowed]=useState(false);







useEffect(()=>{


checkAccess();


},[]);









const checkAccess = async()=>{


try{



const user = auth.currentUser;





if(!user){


setAllowed(false);

setLoading(false);

return;


}







const userRef = doc(

db,

"users",

user.uid

);





const userSnap = await getDoc(userRef);






if(userSnap.exists()){



const data = userSnap.data();



const plan = data.plan || "Starter";





const result = checkFeature(

plan,

feature

);



setAllowed(result);



}

else{


setAllowed(false);


}



}



catch(error){


console.log(
"Feature Check Error:",
error
);


setAllowed(false);


}



finally{


setLoading(false);


}



};












if(loading){


return(


<div className="
min-h-screen
flex
items-center
justify-center
text-white
bg-[#050816]
">


Loading Access...


</div>


)


}









if(!allowed){



return(


<div className="
min-h-screen

flex

items-center

justify-center

text-white

bg-[#050816]

p-6
">





<div className="
max-w-md

text-center

bg-white/5

border

border-white/10

rounded-3xl

p-10

backdrop-blur-xl
">





<div className="
w-16

h-16

mx-auto

rounded-2xl

bg-purple-600/20

flex

items-center

justify-center

text-purple-400
">


<Lock size={32}/>


</div>








<h1 className="
text-3xl

font-bold

mt-6
">


Feature Locked 🔒


</h1>







<p className="
text-gray-400

mt-4
">


Your current plan does not include this feature.

Upgrade your plan to unlock premium tools.


</p>








<button


onClick={()=>navigate("/#pricing")}



className="
mt-8

flex

items-center

gap-2

mx-auto

px-7

py-3

rounded-xl


bg-gradient-to-r

from-purple-600

to-blue-600


font-semibold

hover:scale-105

transition
"

>


<Rocket size={18}/>


Upgrade Plan 🚀


</button>







</div>




</div>



)


}







return children;



};





export default FeatureRoute;