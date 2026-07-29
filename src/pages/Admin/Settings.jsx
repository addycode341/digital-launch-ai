import React,{
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
setDoc,
updateDoc
} from "firebase/firestore";


import {
onAuthStateChanged
} from "firebase/auth";


import {
Settings as SettingsIcon,
User,
Mail,
Building,
Save
} from "lucide-react";




const Settings=()=>{


const [form,setForm]=useState({

name:"",
email:"",
company:"DigitalLaunch AI"

});


const [user,setUser]=useState(null);

const [loading,setLoading]=useState(true);

const [saving,setSaving]=useState(false);






useEffect(()=>{


const unsubscribe = onAuthStateChanged(
auth,
(currentUser)=>{


if(currentUser){

setUser(currentUser);

loadSettings(currentUser);

}
else{

setLoading(false);

}


});


return ()=>unsubscribe();


},[]);









const loadSettings=async(currentUser)=>{


try{


const ref = doc(

db,

"users",

currentUser.uid

);



const snap = await getDoc(ref);




if(snap.exists()){


const data=snap.data();


setForm({

name:data.name || "Admin",

email:currentUser.email,

company:data.company || "DigitalLaunch AI"

});


}

else{


await setDoc(

ref,

{

name:"Admin",

email:currentUser.email,

company:"DigitalLaunch AI",

role:"admin",

createdAt:new Date()

}

);


setForm({

name:"Admin",

email:currentUser.email,

company:"DigitalLaunch AI"

});


}



}

catch(error){

console.log(
"Load Settings Error",
error
);


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









const saveSettings=async()=>{


if(!user){

alert(
"Admin login required"
);

return;

}



try{


setSaving(true);



await updateDoc(


doc(

db,

"users",

user.uid

),


{


name:form.name,

company:form.company,

updatedAt:new Date()

}


);



alert(
"Settings Updated 🚀"
);



}

catch(error){


console.log(error);


alert(
error.message
);


}

finally{


setSaving(false);


}



};









if(loading){


return(

<div className="
min-h-screen
text-white
flex
items-center
justify-center
">

Loading Settings...

</div>

)

}








return(


<div className="
text-white
space-y-8
">


<div>


<h1 className="
text-4xl
font-bold
flex
items-center
gap-3
">

<SettingsIcon size={35}/>

Admin Settings

</h1>



<p className="
text-gray-400
mt-2
">

Manage DigitalLaunch AI admin profile

</p>


</div>









<div className="
max-w-2xl
bg-white/[0.05]
border
border-white/10
rounded-3xl
p-8
space-y-6
">





<div>

<label className="
text-gray-400
">

Admin Name

</label>


<div className="
mt-2
flex
items-center
gap-3
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
w-full
bg-transparent
outline-none
py-3
"

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
mt-2
flex
items-center
gap-3
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
w-full
bg-transparent
outline-none
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



<div className="
mt-2
flex
items-center
gap-3
bg-black/40
border
border-white/10
rounded-xl
px-4
">


<Building size={18}/>



<input

name="company"

value={form.company}

onChange={handleChange}

className="
w-full
bg-transparent
outline-none
py-3
"

/>


</div>


</div>









<button

onClick={saveSettings}

disabled={saving}

className="
flex
items-center
gap-2
px-6
py-3
rounded-xl
bg-gradient-to-r
from-purple-600
to-blue-600
font-semibold
"

>


<Save size={18}/>


{

saving

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