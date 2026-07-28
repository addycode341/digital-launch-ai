import React, {
useEffect,
useState
} from "react";


import {
auth,
db
} from "../../firebase";


import {
doc,
getDoc,
updateDoc
} from "firebase/firestore";



import {
Settings as SettingsIcon,
User,
Mail,
Save
} from "lucide-react";





const Settings =()=>{


const [form,setForm]=useState({

name:"",
email:"",
company:"DigitalLaunch AI"

});


const [loading,setLoading]=useState(false);







useEffect(()=>{


loadSettings();


},[]);









const loadSettings=async()=>{


try{


const user=auth.currentUser;


if(!user)
return;



const snap=
await getDoc(

doc(
db,
"users",
user.uid
)

);



if(snap.exists()){


const data=snap.data();


setForm({

name:data.name || "",

email:data.email || user.email,

company:data.company || "DigitalLaunch AI"

});


}



}

catch(error){

console.log(error);

}


};









const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};









const saveSettings=async()=>{


try{


setLoading(true);



const user=auth.currentUser;



if(!user)
return;



await updateDoc(

doc(
db,
"users",
user.uid
),

{


name:form.name,


company:form.company


}

);




alert(
"Settings Updated Successfully 🚀"
);



}


catch(error){


console.log(error);


alert(
error.message
);


}


finally{


setLoading(false);


}



};









return(


<div

className="
text-white
space-y-8
"

>


<div>


<h1

className="
text-4xl
font-bold
flex
items-center
gap-3
"

>


<SettingsIcon/>

Admin Settings

</h1>



<p

className="
text-gray-400
mt-2
"

>

Manage your admin account

</p>


</div>









<div

className="
max-w-2xl
bg-white/[0.05]
border
border-white/10
rounded-3xl
p-8
space-y-6
"

>





<div>


<label className="
text-gray-400
">

Admin Name

</label>



<div className="
flex
items-center
gap-3
mt-2
bg-black/40
border
border-white/10
rounded-xl
px-4
">


<User size={18}/>


<input

name="name"

value={form.name}

onChange={handleChange}

className="
bg-transparent
outline-none
w-full
py-3
"

placeholder="Admin Name"

/>


</div>


</div>








<div>


<label className="
text-gray-400
">

Admin Email

</label>



<div className="
flex
items-center
gap-3
mt-2
bg-black/40
border
border-white/10
rounded-xl
px-4
">


<Mail size={18}/>


<input

value={form.email}

disabled

className="
bg-transparent
outline-none
w-full
py-3
text-gray-400
"

/>


</div>


</div>









<div>


<label className="
text-gray-400
">

Company Name

</label>



<input

name="company"

value={form.company}

onChange={handleChange}

className="
w-full
mt-2
bg-black/40
border
border-white/10
rounded-xl
px-4
py-3
outline-none
"

/>


</div>









<button


onClick={saveSettings}


disabled={loading}


className="
flex
items-center
gap-2
bg-gradient-to-r
from-purple-600
to-blue-600
px-6
py-3
rounded-xl
font-semibold
"


>


<Save size={18}/>


{

loading

?

"Saving..."

:

"Save Changes"

}


</button>






</div>







</div>


)

}


export default Settings;