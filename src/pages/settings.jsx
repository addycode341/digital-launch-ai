import React, {
useEffect,
useState
} from "react";


import {
useNavigate
} from "react-router-dom";


import {
User,
Bell,
Shield,
CreditCard,
Save,
Rocket,
Lock,
Building,
Loader2
} from "lucide-react";


import {
auth,
db
} from "../firebase";


import {
doc,
getDoc
} from "firebase/firestore";






const Settings=()=>{


const navigate = useNavigate();



const [loading,setLoading]=useState(true);


const [subscription,setSubscription]=useState(null);




const [form,setForm]=useState({

name:"Aditya",

email:"aditya@email.com",

businessName:"",

category:"",

location:"",

phone:""

});





const [notifications,setNotifications]=useState({

leads:true,

updates:true,

seo:false,

payments:true

});









useEffect(()=>{


loadSubscription();


},[]);









const loadSubscription=async()=>{


try{


const user = auth.currentUser;


if(!user)
return;




const snap =
await getDoc(

doc(

db,

"subscriptions",

user.uid

)

);




if(snap.exists()){


setSubscription(
snap.data()
);


}



}

catch(error){

console.log(error);

}

finally{

setLoading(false);

}


};









const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};








const saveChanges=()=>{


alert(
"Settings Saved Successfully 🚀"
);


};









return(


<div className="
min-h-screen
text-white
space-y-10
">







<h1 className="
text-4xl
font-bold
">

Settings ⚙️

</h1>


<p className="
text-gray-400
">

Manage your DigitalLaunch AI account

</p>









{/* PROFILE */}


<section className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
">


<h2 className="
text-2xl
font-bold
mb-6
">

Profile Information

</h2>



<div className="
grid
md:grid-cols-2
gap-5
">


<input
name="name"
value={form.name}
onChange={handleChange}
className="input-style"
placeholder="Name"
/>



<input
name="email"
value={form.email}
onChange={handleChange}
className="input-style"
placeholder="Email"
/>



<input
name="phone"
value={form.phone}
onChange={handleChange}
className="input-style"
placeholder="Phone"
/>



</div>



</section>









{/* BUSINESS */}



<section className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
">


<h2 className="
text-2xl
font-bold
mb-6
">

Business Information

</h2>



<div className="
grid
md:grid-cols-2
gap-5
">


<input
name="businessName"
placeholder="Business Name"
value={form.businessName}
onChange={handleChange}
className="input-style"
/>




<input
name="category"
placeholder="Business Category"
value={form.category}
onChange={handleChange}
className="input-style"
/>





<input
name="location"
placeholder="Location"
value={form.location}
onChange={handleChange}
className="input-style"
/>



</div>



</section>









{/* NOTIFICATION */}



<section className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
">


<h2 className="
text-2xl
font-bold
mb-6
">

Notifications

</h2>



{

Object.keys(notifications).map(item=>(


<div

key={item}

className="
flex
justify-between
bg-black/20
p-5
rounded-xl
mb-3
"

>


<p>

{item}

</p>



<input

type="checkbox"

checked={
notifications[item]
}

onChange={()=>


setNotifications({

...notifications,

[item]:
!notifications[item]

})


}

/>


</div>


))


}




</section>









{/* SECURITY */}



<section className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
">


<h2 className="
text-2xl
font-bold
mb-5
">

Security

</h2>



<button className="
flex
gap-3
items-center
bg-black/30
px-6
py-3
rounded-xl
">


<Lock size={18}/>

Change Password


</button>



</section>









{/* SUBSCRIPTION */}



<section className="
bg-gradient-to-br
from-purple-600/20
to-blue-600/20

border
border-purple-500/30

rounded-3xl
p-8
">





<h2 className="
text-3xl
font-bold
flex
items-center
gap-3
">

<CreditCard/>

Subscription

</h2>






{

loading

?


<div className="
mt-6
flex
gap-3
">

<Loader2 className="
animate-spin
"/>

Loading Plan...

</div>



:


subscription ?


<>



<h3 className="
text-3xl
font-bold
mt-6
">

{subscription.planName} Plan

</h3>




<p className="
text-4xl
font-bold
mt-3
">

{subscription.price}

<span className="
text-lg
text-gray-400
">

{subscription.period}

</span>

</p>






<div className="
mt-6
space-y-3
text-gray-300
">


{

subscription.features?.map(

(feature,index)=>(


<p key={index}>

✓ {feature}

</p>


)


)


}



</div>



</>



:


<p className="
mt-6
text-gray-400
">

No Active Subscription

</p>



}









<button

onClick={()=>navigate("/#pricing")}

className="
mt-8
flex
gap-3
items-center
px-7
py-3
rounded-xl

bg-gradient-to-r
from-purple-600
to-blue-600

font-semibold
"

>


<Rocket size={18}/>

Upgrade Plan 🚀


</button>





</section>









<button

onClick={saveChanges}

className="
flex
items-center
gap-3
px-8
py-4
rounded-2xl
bg-green-600
font-semibold
"

>


<Save/>

Save Changes


</button>








<style>

{`

.input-style{

width:100%;

padding:14px;

border-radius:14px;

background:rgba(0,0,0,.3);

border:1px solid rgba(255,255,255,.1);

color:white;

outline:none;

}

`}

</style>






</div>


)

}



export default Settings;