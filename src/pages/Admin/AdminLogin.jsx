import React, {useState} from "react";

import {
  signInWithEmailAndPassword
} from "firebase/auth";

import {
  auth
} from "../../firebase";

import {
  useNavigate
} from "react-router-dom";



const AdminLogin =()=>{


const navigate = useNavigate();


const [email,setEmail] = useState("");

const [password,setPassword] = useState("");

const [error,setError] = useState("");

const [loading,setLoading] = useState(false);






const handleLogin = async(e)=>{


e.preventDefault();


try{


setLoading(true);

setError("");



const userCredential = await signInWithEmailAndPassword(
auth,
email,
password
);



const user = userCredential.user;





// ADMIN EMAIL CHECK

const adminEmails = [

"admin@gmail.com",

"admin2@gmail.com"

];





if(adminEmails.includes(user.email)){



localStorage.setItem(
"adminLoggedIn",
"true"
);



localStorage.setItem(
"adminEmail",
user.email
);




navigate("/admin");



}

else{


setError(
"You are not an Admin"
);


}



}



catch(error){


console.log(error);


setError(
"Invalid Email or Password"
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
bg-gradient-to-br
from-black
via-[#111827]
to-purple-950
flex
items-center
justify-center
p-6
text-white
"

>


<div

className="
w-full
max-w-md
bg-white/[0.05]
border
border-white/10
backdrop-blur-xl
rounded-3xl
p-8
"

>


<h1

className="
text-4xl
font-bold
text-center
"

>

DigitalLaunch

<span className="
text-purple-500
">

.AI

</span>


</h1>




<p

className="
text-center
text-gray-400
mt-3
"

>

Admin Control Panel

</p>





<form

onSubmit={handleLogin}

className="
mt-8
space-y-5
"

>





<input


type="email"


placeholder="Admin Email"


value={email}


onChange={(e)=>setEmail(e.target.value)}


className="
w-full
bg-black/40
border
border-white/10
rounded-xl
px-4
py-3
outline-none
focus:border-purple-500
"





/>







<input


type="password"


placeholder="Password"


value={password}


onChange={(e)=>setPassword(e.target.value)}


className="
w-full
bg-black/40
border
border-white/10
rounded-xl
px-4
py-3
outline-none
focus:border-purple-500
"



/>







{

error &&


<p className="
text-red-400
text-sm
">

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

"Logging in..."

:

"Login 🚀"

}



</button>






</form>






</div>


</div>



)


}


export default AdminLogin;