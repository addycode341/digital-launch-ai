import { useState } from "react";

import { 
saveLead 
} from "../../services/leadService";


import {
trackLead
} from "../../services/analyticsService";

import {
 saveDailyAnalytics
} from "../../services/dailyAnalyticsService";

function LeadForm({

ownerId,

websiteId

}){



const [form,setForm]=useState({

name:"",

phone:"",

email:"",

message:""

});



const [loading,setLoading]=useState(false);

const [success,setSuccess]=useState(false);







const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};









const handleSubmit=async(e)=>{


e.preventDefault();



try{


setLoading(true);





// Save Lead

await saveLead(

ownerId,

websiteId,

{


...form,


status:"new",

notes:"",

createdAt:new Date()


}

);

await saveDailyAnalytics(
websiteId,
"lead"
);





// Update Analytics Lead Count

await trackLead(

websiteId

);







setSuccess(true);




setForm({

name:"",

phone:"",

email:"",

message:""

});




}

catch(error){


console.log(
"Lead Error:",
error
);



alert(
"Something went wrong"
);



}


finally{


setLoading(false);


}



};









return(


<section

id="lead-form"

className="
py-24
px-6
bg-gradient-to-br
from-slate-950
via-slate-900
to-black
"

>



<div className="
max-w-3xl
mx-auto
">





<div className="
text-center
mb-10
">



<h2 className="
text-4xl
md:text-5xl
font-bold
text-white
">

Start Your Journey 🚀

</h2>



<p className="
text-gray-400
mt-4
text-lg
">

Fill the form and our team will contact you shortly.

</p>



</div>








<div className="
bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-3xl
p-8
shadow-2xl
">





{

success &&

<div className="
mb-6
p-4
rounded-xl
bg-green-500/20
text-green-300
text-center
">

✅ Inquiry Submitted Successfully

</div>


}







<form

onSubmit={handleSubmit}

className="
space-y-5
"

>




<input

name="name"

value={form.name}

onChange={handleChange}

placeholder="Your Name"

className="
w-full
p-4
rounded-xl
bg-black/40
text-white
border
border-white/20
outline-none
"

required

/>








<input

name="phone"

value={form.phone}

onChange={handleChange}

placeholder="Phone Number"

className="
w-full
p-4
rounded-xl
bg-black/40
text-white
border
border-white/20
outline-none
"

required

/>








<input

name="email"

value={form.email}

onChange={handleChange}

placeholder="Email Address"

className="
w-full
p-4
rounded-xl
bg-black/40
text-white
border
border-white/20
outline-none
"

/>








<textarea

name="message"

value={form.message}

onChange={handleChange}

placeholder="Tell us about your requirement"

rows="5"

className="
w-full
p-4
rounded-xl
bg-black/40
text-white
border
border-white/20
outline-none
"

/>







<button

disabled={loading}

className="
w-full
py-4
rounded-xl
font-bold
text-white
bg-gradient-to-r
from-blue-600
to-cyan-500
hover:scale-105
transition
"

>


{

loading

?

"Sending..."

:

"Send Inquiry 🚀"

}



</button>





</form>





</div>





</div>





</section>


)



}



export default LeadForm;