import React, {
useEffect,
useState
} from "react";


import {
collection,
getDocs,
deleteDoc,
doc,
updateDoc
} from "firebase/firestore";


import {
db
} from "../../firebase";


import {
Eye,
Trash2,
CheckCircle,
Globe,
Edit,
Search
} from "lucide-react";


import {
useNavigate
} from "react-router-dom";


import {
motion
} from "framer-motion";





const Websites =()=>{


const navigate = useNavigate();



const [websites,setWebsites]=useState([]);

const [loading,setLoading]=useState(true);

const [search,setSearch]=useState("");





useEffect(()=>{

loadWebsites();

},[]);









const loadWebsites=async()=>{


try{


const usersSnap = await getDocs(

collection(
db,
"users"
)

);



let list=[];



for(const user of usersSnap.docs){


const userData=user.data();



const websiteSnap = await getDocs(

collection(
db,
"users",
user.id,
"websites"
)

);




websiteSnap.forEach(site=>{


const data=site.data();



list.push({

id:site.id,

userId:user.id,


owner:
userData.name ||
userData.email ||
"Unknown",


title:
data.title ||
"Untitled Website",


template:
data.template ||
data.businessType ||
"Business",


status:
data.status ||
"draft",


created:
data.createdAt || null


});


});



}



setWebsites(list);



}

catch(error){

console.log(
"Website Error",
error
);

}

finally{

setLoading(false);

}


};











const publishWebsite=async(site)=>{


try{


await updateDoc(

doc(
db,
"users",
site.userId,
"websites",
site.id
),

{

status:"published"

}

);


loadWebsites();



}

catch(error){

console.log(error);

}


};











const deleteWebsite=async(site)=>{


const confirmDelete =
window.confirm(
"Delete this website?"
);



if(!confirmDelete)
return;



try{


await deleteDoc(

doc(
db,
"users",
site.userId,
"websites",
site.id
)

);



loadWebsites();



}

catch(error){

console.log(error);

}



};









const filteredWebsites = websites.filter(site=>

site.title
.toLowerCase()
.includes(
search.toLowerCase()
)

);









const published =
websites.filter(
site=>site.status==="published"
).length;



const drafts =
websites.filter(
site=>site.status!=="published"
).length;









return(


<div

className="
text-white
space-y-8
"

>


{/* HEADER */}


<div>


<h1

className="
text-4xl
font-bold
"

>

Websites 🌐

</h1>


<p

className="
text-gray-400
mt-2
"

>

Manage all customer websites

</p>


</div>









{/* STATS */}


<div

className="
grid
md:grid-cols-3
gap-6
"

>


<div

className="
bg-white/[0.05]
border
border-white/10
rounded-3xl
p-6
"

>

<p className="
text-gray-400
">

Total Websites

</p>


<h2 className="
text-4xl
font-bold
mt-2
">

{websites.length}

</h2>


</div>







<div

className="
bg-white/[0.05]
border
border-white/10
rounded-3xl
p-6
"

>

<p className="
text-gray-400
">

Published

</p>


<h2 className="
text-4xl
font-bold
text-green-400
mt-2
">

{published}

</h2>


</div>







<div

className="
bg-white/[0.05]
border
border-white/10
rounded-3xl
p-6
"

>

<p className="
text-gray-400
">

Draft

</p>


<h2 className="
text-4xl
font-bold
text-yellow-400
mt-2
">

{drafts}

</h2>


</div>



</div>









{/* SEARCH */}



<div

className="
relative
"

>


<Search

className="
absolute
left-4
top-3.5
text-gray-400
"

/>



<input


placeholder="
Search website...
"


value={search}


onChange={
e=>setSearch(e.target.value)
}


className="

w-full

bg-black/30

border

border-white/10

rounded-2xl

py-3

pl-12

pr-5

outline-none

"




/>


</div>









{
loading ?


<div className="
text-gray-400
">

Loading Websites...

</div>



:



filteredWebsites.length===0 ?


<div className="
bg-white/5
rounded-3xl
p-10
text-center
text-gray-400
">

No Websites Found

</div>



:


<div

className="
space-y-5
"

>


{

filteredWebsites.map(site=>(


<motion.div


key={site.id}


initial={{
opacity:0,
y:20
}}


animate={{
opacity:1,
y:0
}}


className="

bg-white/[0.06]

border

border-white/10

rounded-3xl

p-6

flex

justify-between

items-center

hover:border-purple-500/40

transition

"


>




<div>


<div className="
flex
items-center
gap-3
">

<div className="
w-12
h-12
rounded-xl
bg-purple-600/20
flex
items-center
justify-center
">

<Globe/>

</div>



<h2 className="
text-2xl
font-bold
">

{site.title}

</h2>


</div>






<p className="
text-gray-400
mt-4
">

Owner:
<span className="text-white">

{" "}
{site.owner}

</span>

</p>




<p className="
text-gray-400
">

Template:

<span className="text-white">

{" "}
{site.template}

</span>


</p>







<span

className={`

inline-block

mt-4

px-4

py-1

rounded-full

text-sm


${
site.status==="published"

?

"bg-green-500/20 text-green-400"

:

"bg-yellow-500/20 text-yellow-400"

}

`}

>


{site.status}


</span>





</div>











<div

className="
flex
gap-3
"

>




<button

onClick={()=>navigate(
`/admin/preview/${site.id}`
)}

className="
bg-blue-600
p-3
rounded-xl
hover:scale-105
transition
"

>

<Eye/>

</button>







<button

onClick={()=>navigate(
`/admin/edit/${site.id}`
)}

className="
bg-purple-600
p-3
rounded-xl
hover:scale-105
transition
"

>

<Edit/>

</button>









{

site.status!=="published" &&


<button

onClick={()=>publishWebsite(site)}

className="
bg-green-600
p-3
rounded-xl
hover:scale-105
transition
"

>


<CheckCircle/>

</button>


}









<button

onClick={()=>deleteWebsite(site)}

className="
bg-red-600
p-3
rounded-xl
hover:scale-105
transition
"

>


<Trash2/>

</button>







</div>





</motion.div>



))


}


</div>



}



</div>


)


}



export default Websites;