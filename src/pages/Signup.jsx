import { useState } from "react";
import { motion } from "framer-motion";

import {
  Eye,
  EyeOff,
  Sparkles,
  Rocket,
  ShieldCheck,
  CheckCircle
} from "lucide-react";


import {
  createUserWithEmailAndPassword,
  updateProfile,
  signOut
} from "firebase/auth";


import {
  auth
} from "../firebase";


import {
  useNavigate,
  Link
} from "react-router-dom";





function Signup(){


const navigate = useNavigate();


const [name,setName] = useState("");

const [email,setEmail] = useState("");

const [password,setPassword] = useState("");

const [showPassword,setShowPassword] = useState(false);

const [error,setError] = useState("");

const [loading,setLoading] = useState(false);





const handleSignup = async(e)=>{


e.preventDefault();


setError("");



if(!name || !email || !password){

setError("Please fill all fields");

return;

}




try{


setLoading(true);



const userCredential = await createUserWithEmailAndPassword(

auth,

email,

password

);





await updateProfile(

userCredential.user,

{

displayName:name

}

);




// logout after signup
// user ko dobara login karna hoga

await signOut(auth);




// send to login page

navigate("/login");




}

catch(err){


console.log(err);



if(err.code==="auth/email-already-in-use"){

setError("Email already registered");

}


else if(err.code==="auth/weak-password"){

setError("Password must contain minimum 6 characters");

}


else{

setError("Something went wrong");

}


}


finally{


setLoading(false);


}



};








return(



<div

className="
min-h-screen
bg-slate-950
text-white
flex
items-center
justify-center
px-6
relative
overflow-hidden
"

>


{/* BACKGROUND */}


<motion.div

animate={{
x:[0,100,0],
y:[0,60,0]
}}

transition={{
duration:10,
repeat:Infinity
}}

className="
absolute
w-[500px]
h-[500px]
bg-purple-600/30
blur-[150px]
rounded-full
top-0
left-0
"

/>



<motion.div

animate={{
x:[0,-100,0],
y:[0,-60,0]
}}

transition={{
duration:12,
repeat:Infinity
}}

className="
absolute
w-[500px]
h-[500px]
bg-blue-600/30
blur-[150px]
rounded-full
bottom-0
right-0
"

/>







<div

className="
relative
z-10
max-w-md
w-full
"

>



<div

className="
bg-white/[0.08]
backdrop-blur-xl
border
border-white/10
rounded-[35px]
p-8
shadow-2xl
"

>



<div className="text-center">


<div

className="
w-16
h-16
mx-auto
rounded-2xl
bg-gradient-to-r
from-purple-500
to-blue-500
flex
items-center
justify-center
"

>

<Sparkles size={30}/>

</div>




<h1 className="
text-3xl
font-bold
mt-6
">

Create Account 🚀

</h1>


<p className="
text-gray-400
mt-2
">

Join DigitalLaunch AI

</p>



</div>








<form

onSubmit={handleSignup}

className="
mt-8
space-y-5
"

>




<input

type="text"

placeholder="Full Name"

value={name}

onChange={(e)=>setName(e.target.value)}

className="
w-full
py-3
px-5
rounded-xl
bg-black/20
border
border-white/10
outline-none
"

 />





<input

type="email"

placeholder="Email Address"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="
w-full
py-3
px-5
rounded-xl
bg-black/20
border
border-white/10
outline-none
"

/>







<div className="relative">


<input

type={showPassword ? "text":"password"}

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="
w-full
py-3
px-5
pr-12
rounded-xl
bg-black/20
border
border-white/10
outline-none
"

/>




<button

type="button"

onClick={()=>setShowPassword(!showPassword)}

className="
absolute
right-4
top-3
text-gray-400
"

>


{
showPassword

?

<EyeOff/>

:

<Eye/>

}


</button>


</div>







{
error &&

<p className="
text-red-400
text-sm
">

{error}

</p>

}






<motion.button

whileHover={{
scale:1.03
}}

whileTap={{
scale:.97
}}

disabled={loading}

className="
w-full
py-4
rounded-xl
bg-gradient-to-r
from-purple-600
to-blue-600
font-bold
"

>


{

loading

?

"Creating Account..."

:

"Create Account 🚀"

}


</motion.button>





</form>







<p className="
text-center
text-gray-400
mt-7
">


Already have account?


<Link

to="/login"

className="
text-purple-400
ml-2
font-semibold
"

>

Login

</Link>



</p>




</div>


</div>


</div>


)


}


export default Signup;