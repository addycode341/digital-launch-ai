import React,{
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
IndianRupee,
XCircle
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


const q=query(

collection(
db,
"payments"
),

orderBy(
"createdAt",
"desc"
)

);



const snap=await getDocs(q);



let data=[];



snap.forEach(item=>{


const payment=item.data();


data.push({

id:item.id,

...payment

});


});



setPayments(data);



}

catch(error){

console.log(
"Payment Error",
error
);


}

finally{

setLoading(false);

}


};










const revenue = payments.reduce(

(total,item)=>{


return total + Number(
item.amount || 0
);


},

0

);








if(loading){


return(

<div className="
min-h-screen
flex
items-center
justify-center
text-white
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

Manage customer payments

</p>


</div>









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


<p className="
text-gray-400
mt-4
">

Total Payments

</p>


<h2 className="
text-3xl
font-bold
mt-2
">

{payments.length}

</h2>


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


<p className="
text-gray-400
mt-4
">

Revenue

</p>


<h2 className="
text-3xl
font-bold
mt-2
">

₹{revenue}

</h2>


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


<p className="
text-gray-400
mt-4
">

Successful

</p>


<h2 className="
text-3xl
font-bold
mt-2
">

{
payments.filter(
p=>p.status==="success"
).length
}

</h2>


</div>





</div>









<div className="
bg-white/5
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
border-b
border-white/10
text-gray-400
">


<th className="p-4">
Customer
</th>


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
opacity:0
}}


animate={{
opacity:1
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


<h3 className="
font-semibold
">

{
payment.name || "Customer"
}

</h3>


<p className="
text-gray-400
text-sm
">

{
payment.email || "-"
}

</p>


</td>







<td className="p-4">


{
payment.planName || "Starter"
}


</td>







<td className="
p-4
font-bold
text-green-400
">


₹{payment.amount}


</td>







<td className="p-4">


{

payment.status==="success"


?


<span className="
flex
gap-2
items-center
text-green-400
">

<CheckCircle size={18}/>

Success

</span>



:


payment.status==="failed"


?


<span className="
flex
gap-2
items-center
text-red-400
">

<XCircle size={18}/>

Failed

</span>



:


<span className="
flex
gap-2
items-center
text-yellow-400
">

<Clock size={18}/>

Pending

</span>


}



</td>







<td className="
p-4
text-gray-400
">


{

payment.createdAt?.toDate

?

payment.createdAt.toDate()
.toLocaleDateString()

:

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
text-center
text-gray-400
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