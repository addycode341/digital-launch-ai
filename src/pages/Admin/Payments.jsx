import React, {
useEffect,
useState
} from "react";


import {
collection,
getDocs,
orderBy,
query
} from "firebase/firestore";


import {
db
} from "../../firebase";


import {
CreditCard,
CheckCircle,
Clock,
IndianRupee
} from "lucide-react";


import {
motion
} from "framer-motion";





function Payments(){



const [payments,setPayments]=useState([]);

const [loading,setLoading]=useState(true);





useEffect(()=>{


loadPayments();


},[]);







const loadPayments=async()=>{


try{


const q = query(

collection(
db,
"payments"
),

orderBy(
"createdAt",
"desc"
)

);





const snap = await getDocs(q);



let data=[];



snap.forEach(doc=>{


data.push({

id:doc.id,

...doc.data()

});


});



setPayments(data);



}

catch(error){


console.log(error);


}

finally{


setLoading(false);


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

Loading Payments...


</div>

)

}










return(


<div className="
text-white
space-y-10
">





<div>


<h1 className="
text-4xl
font-bold
">

Payments 💳

</h1>


<p className="
text-gray-400
mt-2
">

Manage customer subscriptions and revenue

</p>


</div>









{/* SUMMARY */}



<div className="
grid
md:grid-cols-3
gap-6
">





<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-6
">


<CreditCard
className="text-purple-400"
/>


<h3 className="
text-gray-400
mt-4
">

Total Payments

</h3>



<p className="
text-3xl
font-bold
mt-2
">

{payments.length}

</p>


</div>









<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-6
">


<IndianRupee
className="text-green-400"
/>


<h3 className="
text-gray-400
mt-4
">

Revenue

</h3>



<p className="
text-3xl
font-bold
mt-2
">

₹
{

payments.reduce(

(total,item)=>{


let amount = 
Number(
item.amount?.replace("₹","")
);


return total + (amount || 0);


},

0

)

}

</p>


</div>









<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-6
">


<CheckCircle
className="text-blue-400"
/>


<h3 className="
text-gray-400
mt-4
">

Successful

</h3>



<p className="
text-3xl
font-bold
mt-2
">

{

payments.filter(

p=>p.status==="success"

).length

}

</p>


</div>







</div>









{/* PAYMENT TABLE */}



<div className="
bg-white/[0.05]
border
border-white/10
rounded-3xl
p-8
overflow-x-auto
">



<h2 className="
text-2xl
font-bold
mb-6
">

Payment History

</h2>






<table className="
w-full
text-left
">



<thead>

<tr className="
text-gray-400
border-b
border-white/10
">


<th className="p-4">
Plan
</th>


<th className="p-4">
Amount
</th>


<th className="p-4">
Status
</th>


<th className="p-4">
Date
</th>


</tr>

</thead>






<tbody>


{

payments.map((payment,index)=>(


<motion.tr


key={payment.id}


initial={{
opacity:0,
y:20
}}


animate={{
opacity:1,
y:0
}}



transition={{
delay:index*0.05
}}



className="
border-b
border-white/10
"

>


<td className="p-4">


<div className="
font-semibold
">

{payment.planName}

</div>



</td>






<td className="p-4 font-bold">


{payment.amount}


</td>







<td className="p-4">


{

payment.status==="success"


?


<span className="
flex
items-center
gap-2
text-green-400
">

<CheckCircle size={18}/>

Success

</span>


:


<span className="
flex
items-center
gap-2
text-yellow-400
">

<Clock size={18}/>

Pending

</span>


}



</td>








<td className="p-4 text-gray-400">


{

payment.createdAt?.toDate()

.toLocaleDateString()

||

"-"


}



</td>





</motion.tr>


))


}



</tbody>



</table>







{

payments.length===0 &&

<div className="
text-gray-400
text-center
py-10
">

No Payments Found

</div>


}





</div>








</div>



)



}



export default Payments;