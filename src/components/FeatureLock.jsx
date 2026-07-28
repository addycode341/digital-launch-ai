import React from "react";

import {
Lock
} from "lucide-react";

import {
useNavigate
} from "react-router-dom";



function FeatureLock({

allowed,

children,

feature

}){


const navigate = useNavigate();



if(allowed){


return children;


}



return(


<div

className="
relative
bg-white/5
border
border-white/10
rounded-2xl
p-6
overflow-hidden
"


>


<div

className="
absolute
inset-0
bg-black/60
backdrop-blur-sm
flex
items-center
justify-center
"

>


<div className="
text-center
">


<Lock

size={35}

className="
mx-auto
text-yellow-400
"

/>


<h3 className="
mt-3
font-bold
text-lg
">

{feature}

</h3>



<p className="
text-gray-400
text-sm
mt-2
">

Upgrade your plan to unlock

</p>




<button


onClick={()=>navigate("/#pricing")}


className="
mt-4
px-5
py-2
rounded-xl
bg-purple-600
"


>

Upgrade 🚀

</button>



</div>



</div>



{children}



</div>


)


}


export default FeatureLock;