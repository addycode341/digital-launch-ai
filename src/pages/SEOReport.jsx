import React from "react";

import {
Search,
TrendingUp,
Globe,
Zap,
CheckCircle,
AlertTriangle,
Target,
Gauge
} from "lucide-react";




function SEOReport(){


const data=[

{
title:"SEO Score",
value:"85%",
icon:<Search/>
},

{
title:"Google Ranking",
value:"Good",
icon:<TrendingUp/>
},

{
title:"Page Speed",
value:"92%",
icon:<Zap/>
},

{
title:"Keywords",
value:"124",
icon:<Target/>
}

];



return(


<div

className="
min-h-screen
bg-gradient-to-br
from-slate-950
via-[#111827]
to-slate-950
text-white
p-8
"

>


{/* HEADER */}


<div

className="
flex
justify-between
items-center
"

>


<div>


<p className="
text-purple-400
font-semibold
"

>

AI SEO Analyzer

</p>



<h1

className="
text-5xl
font-bold
mt-2

bg-gradient-to-r
from-purple-400
to-blue-400

bg-clip-text
text-transparent

"

>

SEO Report 🚀

</h1>



<p

className="
text-gray-400
mt-3
text-lg
"

>

AI powered website visibility analysis

</p>


</div>



<button

className="
px-6
py-3
rounded-xl

bg-gradient-to-r
from-purple-600
to-blue-600

font-semibold

"

>

Run New Audit

</button>



</div>









{/* SCORE */}



<div

className="
mt-10

grid
lg:grid-cols-3

gap-6

"

>





<div

className="
lg:col-span-1

bg-white/[0.05]

border
border-white/10

rounded-3xl

p-8

backdrop-blur-xl

"

>


<div

className="
flex
justify-center
"

>


<div

className="
w-48
h-48

rounded-full

border-8
border-purple-500/30

flex
items-center
justify-center

"

>


<div className="text-center">


<h2 className="
text-5xl
font-bold
"

>

85

</h2>


<p className="
text-gray-400
"

>

SEO Score

</p>



</div>



</div>



</div>





<p className="
text-center
mt-6
text-green-400
font-semibold
"

>

Excellent Website Health

</p>



</div>







<div

className="
lg:col-span-2

grid
md:grid-cols-2

gap-5

"

>


{

data.map((item,index)=>(


<div

key={index}

className="
bg-white/[0.05]

border
border-white/10

rounded-3xl

p-6

hover:border-purple-500/50

transition

"

>


<div

className="
w-12
h-12

rounded-xl

bg-purple-500/20

flex
items-center
justify-center

text-purple-400

"

>

{item.icon}

</div>




<p className="
text-gray-400
mt-5
"

>

{item.title}

</p>



<h2 className="
text-3xl
font-bold
mt-2
"

>

{item.value}

</h2>



</div>


))


}



</div>





</div>









{/* AI INSIGHTS */}



<div

className="
mt-12

bg-gradient-to-br

from-purple-600/20

to-blue-600/20

border
border-white/10

rounded-3xl

p-8

"

>


<div className="
flex
items-center
gap-3
"

>


<Gauge

className="
text-yellow-400
"

/>


<h2 className="
text-3xl
font-bold
"

>

AI SEO Recommendations

</h2>



</div>







<div

className="
grid
md:grid-cols-2

gap-5

mt-8

"

>


<Recommendation

icon={<CheckCircle/>}

text="Add more local keywords"

/>



<Recommendation

icon={<CheckCircle/>}

text="Optimize Google Business Profile"

/>



<Recommendation

icon={<AlertTriangle/>}

text="Improve image optimization"

/>



<Recommendation

icon={<CheckCircle/>}

text="Create weekly SEO content"

/>



</div>


</div>









{/* TECHNICAL SEO */}



<div

className="
mt-12

bg-white/[0.05]

border
border-white/10

rounded-3xl

p-8

"

>


<h2 className="
text-3xl
font-bold
"

>

Technical SEO Health

</h2>




<div

className="
grid
md:grid-cols-3
gap-6
mt-8

"

>


<SmallCard

title="Mobile Friendly"

value="100%"

/>



<SmallCard

title="Security"

value="SSL Active"

/>



<SmallCard

title="Indexing"

value="Perfect"

/>



</div>



</div>







</div>


)

}







function Recommendation({

icon,
text

}){


return(

<div

className="
bg-black/20

rounded-2xl

p-5

flex
gap-3

items-center

"

>

<span className="
text-green-400
"

>

{icon}

</span>


<p>

{text}

</p>


</div>


)

}







function SmallCard({

title,
value

}){


return(

<div

className="
bg-black/20

rounded-2xl

p-6

"

>


<p className="
text-gray-400
"

>

{title}

</p>


<h3 className="
text-2xl
font-bold
mt-3
"

>

{value}

</h3>


</div>


)

}




export default SEOReport;