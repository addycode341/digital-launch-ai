import React, {
  useState
} from "react";


import {
  createUserWithEmailAndPassword
} from "firebase/auth";


import {
  doc,
  setDoc,
  serverTimestamp
} from "firebase/firestore";


import {
  auth,
  db
} from "../../firebase";


import {
  useNavigate
} from "react-router-dom";



const AddClient =()=>{


const navigate = useNavigate();



const [form,setForm]=useState({

name:"",
email:"",
password:"",
plan:"Starter"

});


const [loading,setLoading]=useState(false);

const [error,setError]=useState("");







const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};








const createClient=async(e)=>{


e.preventDefault();



try{


setLoading(true);

setError("");




// CREATE FIREBASE USER


const userCredential =
await createUserWithEmailAndPassword(

auth,

form.email,

form.password

);



const user =
userCredential.user;







// SAVE USER DATA


await setDoc(

doc(
db,
"users",
user.uid
),

{


name:form.name,


email:form.email,


plan:form.plan,


createdAt:serverTimestamp(),


status:"Active",


visitors:0,


leads:0


}

);





alert(
"Client Added Successfully 🚀"
);



navigate("/admin/clients");



}



catch(error){


console.log(error);


setError(
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
min-h-screen
text-white
"

>


<h1

className="
text-4xl
font-bold
mb-3
"

>

Add New Client 🚀

</h1>



<p

className="
text-gray-400
mb-8
"

>

Create customer account for DigitalLaunch AI

</p>









<form


onSubmit={createClient}


className="
max-w-xl
bg-white/[0.05]
border
border-white/10
rounded-3xl
p-8
space-y-5
"

>






<input


name="name"


placeholder="Client Name"


value={form.name}


onChange={handleChange}


className="
w-full
bg-black/40
border
border-white/10
rounded-xl
px-4
py-3
outline-none
"


/>









<input


name="email"


type="email"


placeholder="Email Address"


value={form.email}


onChange={handleChange}


className="
w-full
bg-black/40
border
border-white/10
rounded-xl
px-4
py-3
outline-none
"


/>









<input


name="password"


type="password"


placeholder="Temporary Password"


value={form.password}


onChange={handleChange}


className="
w-full
bg-black/40
border
border-white/10
rounded-xl
px-4
py-3
outline-none
"


/>









<select


name="plan"


value={form.plan}


onChange={handleChange}


className="
w-full
bg-black/40
border
border-white/10
rounded-xl
px-4
py-3
"

>


<option>
Starter
</option>


<option>
Business
</option>


<option>
Growth
</option>


</select>








{

error &&

<p

className="
text-red-400
text-sm
"

>

{error}

</p>

}










<button


disabled={loading}


className="
w-full
py-3
rounded-xl
bg-gradient-to-r
from-purple-600
to-blue-600
font-semibold
"

>


{

loading

?

"Creating..."

:

"Create Client 🚀"

}


</button>







</form>







</div>


)

}


export default AddClient;