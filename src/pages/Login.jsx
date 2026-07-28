import { useState } from "react";
import { motion } from "framer-motion";

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Rocket,
  ShieldCheck,
  Sparkles,
  CheckCircle
} from "lucide-react";


import {
  signInWithEmailAndPassword
} from "firebase/auth";


import { auth } from "../firebase";

import {
  useNavigate,
  Link
} from "react-router-dom";





function Login(){


const navigate = useNavigate();



const [email,setEmail] = useState("");

const [password,setPassword] = useState("");

const [showPassword,setShowPassword] = useState(false);

const [error,setError] = useState("");

const [loading,setLoading] = useState(false);






const handleLogin = async(e)=>{


e.preventDefault();

setError("");

setLoading(true);



try{


await signInWithEmailAndPassword(

auth,

email,

password

);



navigate("/dashboard");


}



catch(err){



if(err.code==="auth/user-not-found"){

setError("Account not found");

}

else if(err.code==="auth/wrong-password"){

setError("Incorrect password");

}

else if(err.code==="auth/invalid-credential"){

setError("Invalid email or password");

}

else{

setError("Something went wrong");

}



}



setLoading(false);


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
relative
overflow-hidden
px-6
"


>



{/* Animated Background */}


<motion.div

animate={{

x:[0,120,0],

y:[0,80,0]

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
top-0
left-0
"

/>




<motion.div

animate={{

x:[0,-100,0],

y:[0,-80,0]

}}

transition={{

duration:14,

repeat:Infinity

}}


className="
absolute
w-[500px]
h-[500px]
bg-purple-600/30
blur-[150px]
rounded-full
bottom-0
right-0
"

/>








<div

className="
max-w-7xl
w-full
grid
lg:grid-cols-2
gap-16
items-center
relative
z-10
"

>






{/* LEFT SIDE */}



<motion.div


initial={{

opacity:0,

x:-50

}}


animate={{

opacity:1,

x:0

}}


transition={{

duration:.7

}}


className="
hidden
lg:block
"

>



<div

className="
inline-flex
items-center
gap-2
px-5
py-2
rounded-full
bg-blue-500/10
border
border-blue-400/20
text-blue-400
"

>


<Sparkles size={18}/>

Digital Growth Platform


</div>







<h1

className="
text-6xl
font-black
leading-tight
mt-8
"

>


Build Your


<span className="
text-blue-400
">

Digital

</span>


Future


</h1>





<p

className="
text-gray-400
text-xl
mt-6
max-w-xl
"

>


Create websites, manage customers and grow your business online with DigitalLaunch AI.


</p>







<div className="
mt-10
space-y-5
">






<div

className="
flex
gap-5
items-center
bg-white/5
border
border-white/10
rounded-2xl
p-5
"

>


<div

className="
w-12
h-12
rounded-xl
bg-yellow-500/20
flex
items-center
justify-center
"

>


<Rocket className="text-yellow-400"/>


</div>



<div>

<h3 className="font-bold">

Website Builder

</h3>


<p className="text-gray-400 text-sm">

Create professional websites faster

</p>


</div>


</div>









<div

className="
flex
gap-5
items-center
bg-white/5
border
border-white/10
rounded-2xl
p-5
"

>


<div

className="
w-12
h-12
rounded-xl
bg-green-500/20
flex
items-center
justify-center
"

>


<ShieldCheck className="text-green-400"/>


</div>



<div>

<h3 className="font-bold">

Secure Platform

</h3>


<p className="text-gray-400 text-sm">

Your business data is protected

</p>


</div>


</div>








<div className="
flex
gap-3
mt-8
text-gray-300
">


<CheckCircle className="text-green-400"/>

AI Ready Business System


</div>




</div>




</motion.div>









{/* LOGIN CARD */}





<motion.div


initial={{

opacity:0,

scale:.9

}}


animate={{

opacity:1,

scale:1

}}



className="
w-full
max-w-md
mx-auto
"

>




<div

className="
bg-white/[0.08]
backdrop-blur-2xl
border
border-white/10
rounded-[35px]
p-8
shadow-[0_30px_80px_rgba(37,99,235,0.25)]
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
from-blue-500
to-purple-500
flex
items-center
justify-center
"

>

🚀

</div>





<h2 className="
text-3xl
font-bold
mt-6
">

Welcome Back

</h2>


<p className="
text-gray-400
mt-2
">

Login to your account

</p>


</div>








<form

onSubmit={handleLogin}

className="
mt-8
space-y-5
"

>





<div>


<label className="text-sm text-gray-300">

Email Address

</label>



<div className="relative mt-2">


<Mail

className="
absolute
left-4
top-3.5
text-gray-400
"

/>



<input

type="email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

placeholder="you@example.com"


className="
w-full
pl-12
py-3
rounded-xl
bg-black/20
border
border-white/10
outline-none
focus:border-blue-500
"


required

/>


</div>


</div>








<div>


<label className="text-sm text-gray-300">

Password

</label>



<div className="relative mt-2">


<Lock

className="
absolute
left-4
top-3.5
text-gray-400
"

/>




<input


type={
showPassword
?
"text"
:
"password"
}


value={password}


onChange={(e)=>setPassword(e.target.value)}


placeholder="••••••••"


className="
w-full
pl-12
pr-12
py-3
rounded-xl
bg-black/20
border
border-white/10
outline-none
focus:border-purple-500
"


required


/>





<button

type="button"

onClick={()=>setShowPassword(!showPassword)}

className="
absolute
right-4
top-3.5
text-gray-400
"

>


{

showPassword

?

<EyeOff size={20}/>

:

<Eye size={20}/>

}


</button>



</div>


</div>









<div className="
flex
justify-between
text-sm
text-gray-400
">


<label className="
flex
gap-2
items-center
">

<input type="checkbox"/>

Remember me

</label>



<Link

to="/forgot-password"

className="text-blue-400"

>

Forgot Password?

</Link>


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





<button

disabled={loading}

className="
w-full
py-4
rounded-xl
bg-gradient-to-r
from-blue-600
to-purple-600
font-bold
hover:scale-105
transition
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








<p className="
text-center
text-gray-400
mt-7
">


Don't have account?


<Link

to="/signup"

className="
text-blue-400
font-semibold
ml-2
"

>

Create Account

</Link>



</p>






</div>




</motion.div>







</div>





</div>


)


}



export default Login;